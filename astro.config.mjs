// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://amphora-site.vercel.app', // trocar pelo domínio final
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
