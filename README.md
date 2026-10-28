# delgaudio.dev
My personal site, built with Preact, Vite and Tailwind and prerendered to static HTML.

## Develop
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
The static site is written to `dist/`.

## Deploy
Hosted on Cloudflare Workers static assets (see `wrangler.jsonc`). Workers Builds deploys `main` to production at https://delgaudio.dev on every push; other branches get preview URLs.
