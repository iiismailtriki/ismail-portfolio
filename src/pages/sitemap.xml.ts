import type { APIRoute } from 'astro';
import { withBase } from '../utils/paths';

// Generated at build time so new pages can't be forgotten. Excludes 404.
const pages = import.meta.glob('./**/*.astro', { eager: false });

export const GET: APIRoute = ({ site }) => {
  const urls = Object.keys(pages)
    .filter((p) => !p.includes('404'))
    .map((p) => p.replace(/^\.\//, '/').replace(/index\.astro$/, '').replace(/\.astro$/, '/'))
    .sort()
    .map((path) => `  <url><loc>${new URL(withBase(path), site).href}</loc></url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
