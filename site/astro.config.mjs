import { defineConfig } from 'astro/config';

// NOTE for GitHub Pages deploy (later):
// - Set `site` to `https://<username>.github.io` and `base` to `/<repo-name>/`.
// - Every internal link/image in this project already uses `import.meta.env.BASE_URL`,
//   so setting `base` here is the only change needed before deploying.
export default defineConfig({
  site: 'https://example.github.io',
  base: '/',
  trailingSlash: 'ignore',
});
