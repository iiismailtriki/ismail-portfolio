import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://iiismailtriki.github.io',
  base: '/ismail-portfolio',
  output: 'static',
});
