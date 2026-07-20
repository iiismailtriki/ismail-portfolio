# Ismail Triki — Cloud & DevOps Engineering Portfolio

Live: https://iiismailtriki.github.io/ismail-portfolio/

Personal portfolio positioned for Junior Cloud Engineering, DevOps, Platform Engineering,
and DevSecOps roles. Static, fast, built with **Astro** and **Tailwind CSS**, hosted free
on GitHub Pages.

## Stack

- [Astro](https://astro.build/) — static site generator (`output: 'static'`)
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS
- [GitHub Pages](https://pages.github.com/) — static hosting via GitHub Actions
- Google Fonts (DM Serif Display, DM Sans, JetBrains Mono) — loaded via CDN, no npm dependency
- [Plausible](https://plausible.io/) — privacy-friendly analytics (`src/utils/plausible.ts`)

## Project Structure

```
/
├── public/
│   ├── certifications/         ← AWS + Nutanix badge images
│   ├── images/                 ← project architecture diagrams
│   ├── cv.pdf                  ← downloadable resume
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro     ← includes Education
│   │   ├── Certifications.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Base.astro           ← SEO meta, JSON-LD, skip link
│   ├── pages/
│   │   ├── index.astro
│   │   ├── soc-case-study.astro
│   │   ├── espreats-case-study.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

There is no lint or type-check script configured in this project (no ESLint/TypeScript
config present) — `npm run build` (Astro's own compiler) is the primary correctness check.

## GitHub Pages / Base Path Notes

This site is served from `https://iiismailtriki.github.io/ismail-portfolio/` (a project
page, not a user/apex page), so `astro.config.mjs` sets:

```js
export default defineConfig({
  site: 'https://iiismailtriki.github.io',
  base: '/ismail-portfolio',
  output: 'static',
});
```

Every internal link/asset reference in components uses
`const base = import.meta.env.BASE_URL.replace(/\/$/, '')` and prefixes paths with it
(e.g. `` `${base}/cv.pdf` ``). **Never hardcode a path starting with `/` without the `base`
prefix** — it will 404 once deployed, even though it works in `astro dev` at the root.

Deployment is handled by `.github/workflows/deploy.yml`: any push to `main` triggers a
build and deploy via `actions/deploy-pages`.

## Updating Content

- **Experience / Education**: `src/components/Experience.astro` — dates and claims here
  must match `docs/content-source-of-truth.md` and the CV in `public/cv.pdf`.
- **Projects**: `src/components/Projects.astro`. The Vocallia entry has a `note` field
  instead of a link — see `docs/content-source-of-truth.md` for what to fill in once a
  public link exists.
- **Certifications**: `src/components/Certifications.astro`. Badge images live in
  `public/certifications/`.
- **CV**: replace `public/cv.pdf` directly (keep the filename so links keep working, or
  update every `cv.pdf` reference across components if you rename it).

## Accessibility Notes

- Skip-to-content link (`.skip-link` in `global.css`) jumps to `#main-content` on every page.
- `prefers-reduced-motion` disables the scroll-in animations and the Hero's floating/glow
  loops (kept: the one-shot entrance animation, since it's brief and non-repeating).
- Single `<h1>` per page, sequential heading levels.

## Performance Notes

- Fully static output, no client-side framework/hydration.
- `public/profile.png` (~212 KB) is currently unoptimized — a WebP/AVIF conversion would
  reduce this further; no image-optimization tooling is wired into the build yet.
- Below-the-fold case-study images use `loading="lazy"`.

## Deployment

Push to `main` → GitHub Actions (`deploy.yml`) builds with `npm ci && npm run build` and
publishes `dist/` via `actions/deploy-pages`. Check the Actions tab for build status.

## Documentation

- `docs/portfolio-audit.md` — audit findings and what changed, and why.
- `docs/content-source-of-truth.md` — approved dates, titles, claims; what must never be
  published without verification.
- `docs/final-qa-report.md` — build/test/link/accessibility results from the last pass.
