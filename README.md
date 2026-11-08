# ventea

Portfolio of H Vanlalvenhima (Ventea), full-stack and mobile developer in Aizawl.

Built with [Astro](https://astro.build) and plain CSS. One page, no UI framework.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Needs Node 22.12 or newer.

## Editing content

Every fact on the site lives in `src/data/profile.ts`. Change it there and the page updates.
A field set to `null` is left off the page.

## Deploying

Deployed on Vercel. The site URL used for the sitemap, canonical link and social previews comes from
`SITE_URL` if set, otherwise from Vercel's production URL. Set `SITE_URL` in Vercel when you add a custom domain.

The social preview image is `public/og.png` (1200×630).
