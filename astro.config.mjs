// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'ms', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  adapter: cloudflare(),
});