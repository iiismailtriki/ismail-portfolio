import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ismailtriki.github.io',
  base: '/',
  output: 'static',
});
