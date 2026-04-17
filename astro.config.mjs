import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ca', 'fr', 'nl'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
