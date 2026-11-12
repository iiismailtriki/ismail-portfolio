#!/usr/bin/env node
// Content-accuracy guard for the built site (no dependencies).
//
//   node scripts/check-claims.mjs
//
// Mirrors the rules from the career workspace's profile/forbidden-claims.tsv that apply to this
// portfolio, run against the visible text of every page in dist/. Exits non-zero on a match.
// N5/N14 (ars vivendi, S3 migration) are intentionally not enforced here: the portfolio shows that
// role on Ismail's explicit instruction (2026-11-12) — see docs/content-source-of-truth.md.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

// [rule, pattern, unless] — case-insensitive, evaluated per sentence.
const RULES = [
  ['N3 outdated AWS SAA status', /(solutions architect[ –-]*associate|\bAWS SAA\b)[^.]{0,40}(in progress|planned|preparing|pursuing|exam (in )?(oct|october))/i],
  ['N6 lab result without lab framing', /(four|4)\s*(seconds|s\b|sec)|<\s*4\s*s\b|sub-4/i, /lab|controlled|test/i],
  ['N6 production SOC claim', /\b(SOC|SIEM|detection|containment)\b[^.]{0,60}\bin production\b|\bproduction[- ](scale|grade)\b[^.]{0,40}\b(SOC|SIEM|detection)\b|production-grade/i, /not|only|never/i],
  ['N6 design-to-production claim', /design to production|into production|production-ready SOC|production SOC/i],
  ['N7 honours claim', /highest hono(u)?rs|summa cum laude|valedictorian|top of (the|my) (class|cohort)|ranked first/i],
  ['N10 Jenkins deploys via Helm', /\bjenkins\b[^.]{0,60}\b(deploys|deployed|deploying|rolls out)\b[^.]{0,60}\bhelm\b/i],
  ['N11 led/owned migration', /\b(drive|drove|led|lead|own|owned)\b[^.]{0,15}\bmigration\b/i],
  ['N13 outdated German exam', /\btelc\s*B2\b|\bB2 exam\b|preparing for B2/i],
  ['German A2', /\bA2\b/],
  ['N15 thesis grade as overall grade', /16[.,]88/, /thesis|abschlussarbeit|\bPFE\b/i],
  ['Argo CD as implemented', /argo ?cd/i, /learning|planned|next|in progress|not implemented/i],
];

const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const f = join(dir, n);
    return statSync(f).isDirectory() ? walk(f) : [f];
  });

const visibleText = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ');

const problems = [];
for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const page = '/' + relative(DIST, file);
  // Split into sentences so "unless" qualifiers only excuse a match in the same sentence.
  const sentences = visibleText(readFileSync(file, 'utf8')).split(/(?<=[.!?])\s+|\s·\s|\s—\s(?=[A-Z])/);
  for (const sentence of sentences) {
    for (const [rule, pattern, unless] of RULES) {
      if (pattern.test(sentence) && !(unless && unless.test(sentence))) {
        problems.push(`${page}: [${rule}] "${sentence.trim().slice(0, 140)}"`);
      }
    }
  }
}

if (problems.length) {
  console.error(`${problems.length} claim problem(s):\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log('Claims check passed.');
