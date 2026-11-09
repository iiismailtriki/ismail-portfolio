#!/usr/bin/env node
// Post-build checks for the static site in dist/ (no dependencies).
//
//   node scripts/check-dist.mjs             internal links, assets, anchors, base path, page invariants
//   node scripts/check-dist.mjs --external  also request every external link (needs network)
//
// Exits non-zero on any failure so CI can gate on it.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const BASE = '/ismail-portfolio';
const DIST = new URL('../dist/', import.meta.url).pathname;
const checkExternal = process.argv.includes('--external');

const errors = [];
const external = new Set();
const fail = (page, msg) => errors.push(`${page}: ${msg}`);

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
const html = new Map(htmlFiles.map((f) => [f, readFileSync(f, 'utf8')]));
const idsOf = (src) => new Set([...src.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

// Map a site URL path to the file GitHub Pages would serve.
function resolve(pathname) {
  const rel = decodeURIComponent(pathname.slice(BASE.length)) || '/';
  const candidates = rel.endsWith('/') ? [join(rel, 'index.html')] : [rel, `${rel}.html`, join(rel, 'index.html')];
  return candidates.map((c) => join(DIST, c)).find((c) => existsSync(c) && statSync(c).isFile());
}

for (const [file, src] of html) {
  const page = '/' + relative(DIST, file);
  const isNotFound = page.endsWith('404.html');

  // Page invariants
  if (!/<html lang="en"/.test(src)) fail(page, 'missing <html lang>');
  if (!/<title>[^<]{10,}<\/title>/.test(src)) fail(page, 'missing or very short <title>');
  if (!/<meta name="description" content="[^"]{50,}"/.test(src) && !isNotFound) fail(page, 'missing/short meta description');
  const h1s = (src.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(page, `expected exactly one <h1>, found ${h1s}`);
  if (!src.includes('id="main-content"')) fail(page, 'skip-link target #main-content missing');
  for (const m of src.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt(=|[\s>/])/.test(m[0])) fail(page, `<img> without alt: ${m[0].slice(0, 80)}`);
  }
  if (!isNotFound && !/<link rel="canonical" href="https:\/\/iiismailtriki\.github\.io\/ismail-portfolio\//.test(src)) {
    fail(page, 'canonical URL missing or outside base path');
  }

  // Links and assets
  const refs = [
    ...[...src.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]),
    ...[...src.matchAll(/\ssrcset="([^"]+)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(/\s+/)[0])),
  ];
  for (const ref of refs) {
    if (/^(mailto:|tel:|data:)/.test(ref)) continue;
    if (/^https?:\/\//.test(ref)) {
      if (ref.startsWith('https://iiismailtriki.github.io/ismail-portfolio/')) continue; // canonical/og
      external.add(ref);
      continue;
    }
    if (ref.startsWith('#')) {
      if (ref.length > 1 && !idsOf(src).has(ref.slice(1))) fail(page, `broken in-page anchor ${ref}`);
      continue;
    }
    if (!ref.startsWith(`${BASE}/`) && ref !== BASE) {
      fail(page, `internal link not under base path: ${ref}`);
      continue;
    }
    const [path, hash] = ref.split('#');
    const target = resolve(path.split('?')[0]);
    if (!target) {
      fail(page, `broken internal link/asset: ${ref}`);
      continue;
    }
    if (hash && target.endsWith('.html') && !idsOf(html.get(target) ?? '').has(hash)) {
      fail(page, `anchor #${hash} not found in ${relative(DIST, target)}`);
    }
  }
}

for (const required of ['sitemap.xml', 'robots.txt', 'cv.pdf', 'og.png', 'favicon.svg', '404.html']) {
  if (!existsSync(join(DIST, required))) fail('dist', `missing ${required}`);
}
const sitemap = existsSync(join(DIST, 'sitemap.xml')) ? readFileSync(join(DIST, 'sitemap.xml'), 'utf8') : '';
for (const loc of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  if (!resolve(new URL(loc[1]).pathname)) fail('sitemap.xml', `URL has no page: ${loc[1]}`);
}

if (checkExternal) {
  for (const url of external) {
    try {
      const res = await fetch(url, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(15000) });
      // LinkedIn answers bots with 999; treat it as reachable.
      if (!res.ok && res.status !== 999) fail('external', `${res.status} ${url}`);
    } catch (e) {
      fail('external', `${e.name} ${url}`);
    }
  }
}

console.log(`Checked ${html.size} pages, ${external.size} external links ${checkExternal ? 'requested' : 'skipped'}.`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log('All checks passed.');
