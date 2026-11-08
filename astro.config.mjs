import { defineConfig } from 'astro/config';

// The public address of the site. Set SITE_URL once you have a custom domain;
// on Vercel it falls back to the project's production URL automatically.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file' },
});
