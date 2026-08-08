# Andarena Cafe — Landing Page

Arabic-first (RTL) landing page for Andarena Cafe. Vite + React, plain CSS (no Tailwind).

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Swapping in real photography

Every image on the site is sourced from **`src/data/images.js`**. Replace the
placeholder URLs with real file paths (e.g. `/assets/images/hero-exterior.jpg`,
matching the files under `public/assets/images/`) — no component needs editing.

## Structure

```
src/
  components/   one .jsx + matching .css per section
  data/images.js   single source of truth for every image
  hooks/useScrollReveal.js   IntersectionObserver-driven fade+rise reveal
  global.css    design tokens (colors, type scale, spacing), resets, shared utility classes
```

## Design notes

- Palette, both typefaces (Aref Ruqaa for display, Cairo for body/UI), and every
  brand motif (mustard split panel, dash accent, circular logo seal, dashed arrow,
  brick texture) are pulled straight from the brief and reused consistently.
- The circular logo badge in the hero corner slowly rotates — the one recurring
  mark across every Instagram post, brought to life as the page's single
  animated signature.
- Split-panel sections alternate sides going down the page and stack on mobile
  (panel above, photo below) rather than collapsing to a generic centered layout.
- Brick texture is generated with layered CSS gradients, so no photo asset is
  required for it to render correctly before real photography is supplied.
