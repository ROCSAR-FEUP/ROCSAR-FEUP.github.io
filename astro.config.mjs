import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ROCSAR-FEUP.github.io',
  base: '/site',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
