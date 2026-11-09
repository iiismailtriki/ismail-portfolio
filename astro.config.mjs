import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://iiismailtriki.github.io',
  base: '/ismail-portfolio',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    // Inline small stylesheets to save a render-blocking request on first paint.
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
