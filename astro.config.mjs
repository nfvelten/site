// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nicholas-velten.xyz',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/agora') && !page.includes('/sobre'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
