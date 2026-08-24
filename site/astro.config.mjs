import { defineConfig } from 'astro/config';

// Deploys to https://arilee09.github.io/ (a user-page repo, so base stays '/').
export default defineConfig({
  site: 'https://arilee09.github.io',
  base: '/',
  trailingSlash: 'ignore',
});
