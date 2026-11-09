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

Each post is a folder in `src/content/blog/` holding an `index.md` and any images it uses. The folder name is the slug:

```
src/content/blog/
  hello-world/
    index.md
    cover.png
```

The frontmatter is three keys:

```md
---
title: 'Hello World!'
date: '2025-12-25'
excerpt: 'One line shown in the list.'
---
```

`src/lib/blog.ts` picks it up at build time via `import.meta.glob` — no index to update.

Reference images relatively, `![A description](./cover.png)`. Subfolders work too (`./images/cover.png`). Vite fingerprints them in the build, so they cache well. Absolute (`/avatar.jpg`, served from `public/`) and remote URLs pass through unchanged.

Add `draft: true` to the frontmatter to keep a post in `npm run dev` only. Production builds leave it out, so it's safe to commit and push, but its files are still readable in the public repo.

## Conventions

- **Spacing** — four tokens in `src/index.css` (`stack`, `block`, `section`, `gutter`) back every gap: `gap-stack`, `gap-block`, `py-section`, `px-gutter`. Don't hand-pick spacing values in components.
- **Fonts** — `font-display` (Bricolage Grotesque), `font-sans` (Geist), `font-mono` (Geist Mono), plus `font-pixel-square` / `-circle` / `-grid` / `-triangle` / `-line` (Geist Pixel at `ELSH` 1 / 20 / 40 / 60 / 80, the font's named instances). Bricolage Grotesque, Geist and Geist Mono are self-hosted from their official releases in `src/assets/fonts/`, because the Google Fonts builds strip OpenType features; Geist Pixel comes from Google Fonts (`index.html`).
- **OpenType features** — one place each in `src/index.css`: `--sans-features` (Geist stylistic sets) and `--mono-features` (Geist Mono coding ligatures, which live in `ss11`). Toggle either with `sansAlternates` / `monoLigatures` in `src/config/site.ts`.
- **Theme** — `.dark` class on `<html>`, set before first paint by an inline script in `index.html`, toggled by `src/hooks/use-theme.ts`.
- **Favicon** — two hand-written SVGs, `public/favicon-light.svg` and `public/favicon-dark.svg`. The inline script in `index.html` swaps between them whenever the `.dark` class changes, so the tab icon follows the site's theme toggle, not just the OS setting. Colours are hard-coded (a favicon can't read CSS variables): `#0d0d0f` is the dark `--color-background`.
- **Layout** — `RootLayout` composes header, page outlet and footer in a `min-h-dvh` flex column, so the footer follows the content and still sits at the bottom on short pages; `Container` is the one horizontal rhythm.
