# website

Personal site / portfolio template. Vite + React + TypeScript + Tailwind CSS v4 + shadcn-style Radix components + Lucide icons.

## Use it as a template

Everything personal lives in [`src/config/site.ts`](src/config/site.ts) — name, role, company, about text, nav items, social links, repo URL. Edit that file and the whole site follows.

## Develop

```sh
npm install
npm run dev   # http://localhost:3000
```

`npm run build` type-checks and builds to `dist/`.

## Writing a post

Drop a markdown file in `src/content/blog/`. The filename is the slug, and the frontmatter is three keys:

```md
---
title: "Hello World!"
date: "2025-12-25"
excerpt: "One line shown in the list."
---
```

`src/lib/blog.ts` picks it up at build time via `import.meta.glob` — no index to update.

## Conventions

- **Spacing** — four tokens in `src/index.css` (`stack`, `block`, `section`, `gutter`) back every gap: `gap-stack`, `gap-block`, `py-section`, `px-gutter`. Don't hand-pick spacing values in components.
- **Fonts** — `font-display` (Geist Pixel, Circle shape), `font-sans` (Geist), `font-mono` (JetBrains Mono). Geist Pixel and JetBrains Mono come from Google Fonts (`index.html`); Geist is self-hosted from the official release in `src/assets/fonts/geist/`, because the Google Fonts build strips every `ssXX` feature. Geist Pixel puts every shape on one `ELSH` axis; `--font-display--font-variation-settings` in `src/index.css` pins it to 25 (Circle).
- **OpenType features** — one place each in `src/index.css`: `--sans-features` (Geist stylistic sets) and `--mono-features` (JetBrains Mono ligatures). Toggle either with `sansAlternates` / `monoLigatures` in `src/config/site.ts`. Google's JetBrains Mono only ships `calt`, which is where its coding ligatures live — the stylistic sets need a self-hosted build.
- **Theme** — `.dark` class on `<html>`, set before first paint by an inline script in `index.html`, toggled by `src/hooks/use-theme.ts`.
- **Favicon** — two hand-written SVGs, `public/favicon-light.svg` and `public/favicon-dark.svg`. The inline script in `index.html` swaps between them whenever the `.dark` class changes, so the tab icon follows the site's theme toggle, not just the OS setting. Colours are hard-coded (a favicon can't read CSS variables): `#0d0d0f` is the dark `--color-background`.
- **Layout** — `RootLayout` composes header, page outlet and footer in a `min-h-dvh` flex column, so the footer follows the content and still sits at the bottom on short pages; `Container` is the one horizontal rhythm.
