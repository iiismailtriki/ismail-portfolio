# Ismail Triki — Cloud & DevOps Engineering Portfolio

Live: https://iiismailtriki.github.io/ismail-portfolio/

Personal portfolio positioned for Junior Cloud Engineering, DevOps, Platform Engineering,
and DevSecOps roles. Static, fast, built with **Astro** and **Tailwind CSS**, hosted free
on GitHub Pages.

## Stack

- [Astro 7](https://astro.build/) — static site generator (`output: 'static'`), built-in image optimization (`astro:assets`, AVIF/WebP)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite` — design tokens live in `src/styles/global.css` (`@theme`)
- Self-hosted fonts via Fontsource (DM Serif Display, DM Sans, JetBrains Mono) — no requests to Google Fonts
- [GitHub Pages](https://pages.github.com/) via GitHub Actions (SHA-pinned actions, Dependabot)
- [Plausible](https://plausible.io/) — cookieless analytics (`src/utils/plausible.ts`)

Requires **Node 24** (`.nvmrc`; Astro 7 needs ≥ 22.23.4).

## Project Structure

```
/
├── public/                     ← served as-is: cv.pdf, og.png, favicon.svg, robots.txt
├── scripts/
│   ├── check-dist.mjs          ← post-build link/asset/base-path/a11y checks (no deps)
│   └── make-og-image.py        ← regenerates public/og.png (Pillow)
├── src/
│   ├── assets/                 ← images optimized at build time (profile, diagrams, badges)
│   ├── components/             ← Nav, Hero, PipelineStrip, Projects, Experience, Skills,
│   │                             Certifications, About, Contact, Footer, Figure, Icon
│   ├── data/site.ts            ← contact links, CV path, case-study list
│   ├── layouts/
│   │   ├── Base.astro          ← <head>, SEO/OG, JSON-LD, nav + footer, scroll reveal
│   │   └── CaseStudy.astro     ← shared case-study header, TOC, next-case-study nav
│   ├── pages/                  ← index, 3 case studies, 404, sitemap.xml (generated)
│   ├── styles/global.css
│   └── utils/                  ← paths.ts (withBase), plausible.ts
├── .github/workflows/deploy.yml
└── astro.config.mjs
```

## Commands

| Command | What it does |
|---|---|
| `npm ci` | Install exactly what the lockfile pins |
| `npm run dev` | Dev server at http://localhost:4321/ismail-portfolio/ |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | `astro check` — TypeScript + Astro diagnostics |
| `npm run check:dist` | Verify internal links, assets, anchors, base path, one `<h1>`/page, `alt`, canonical, sitemap |
| `npm run check:links` | Same, plus request every external link (needs network) |
| `npm run check:claims` | Fail if retired/unsupported claims reappear (honours, unscoped lab metric, production SOC, outdated German/SAA wording) |
| `npm run verify` | `check` + `build` + `check:dist` + `check:claims` — run this before opening a PR |

CI runs `npm audit --audit-level=high`, `check`, `build`, `check:dist` and `check:claims` on every pull
request; only pushes to `main` deploy.

## GitHub Pages / Base Path Notes

The site is served from `https://iiismailtriki.github.io/ismail-portfolio/` (a project page),
so `astro.config.mjs` sets `site` and `base: '/ismail-portfolio'`.

Build every internal URL with `withBase()` from `src/utils/paths.ts`
(e.g. `withBase('/cv.pdf')`, `withBase('/#projects')`). **Never hardcode a path starting with
`/`** — it works in some local setups but 404s once deployed. `npm run check:dist` fails the
build if any internal link escapes the base path.

## Updating Content

- **Source of truth first**: dates, titles, claims and metrics must match
  `docs/content-source-of-truth.md`. Don't strengthen approved wording.
- **Experience / Education**: `src/components/Experience.astro`.
- **Projects**: `src/components/Projects.astro` — `built` lists only what the repo/sources
  evidence; planned work goes in `next`. Re-audit the DevSecOps Tracker card against its repo
  (`github.com/iiismailtriki/devsecops-deployment-tracker`) before changing it; the hero
  pipeline strip (`PipelineStrip.astro`) mirrors that repo's Jenkinsfile too.
- **Case studies**: `src/pages/*-case-study.astro` on `layouts/CaseStudy.astro`. Each
  top-level `<section>` with a `.section-label` gets a table-of-contents entry automatically.
  New case studies also go in `caseStudies` in `src/data/site.ts`.
- **Images**: put them in `src/assets/` and render with `<Figure>`/`<Picture>` so they're
  converted to AVIF/WebP — don't put large images in `public/`.
- **Social preview**: `python3 scripts/make-og-image.py` after changing name/title.
- **CV**: the canonical source is `~/Desktop/career-workspace/master-cv/` — rebuild there, then
  copy its output over `public/cv.pdf` (keep the filename) and re-verify before committing.

## Accessibility Notes

- Skip link, landmarks, one `<h1>` per page, sequential headings.
- Text colours meet WCAG AA (≥ 4.5:1) on every surface they're used on.
- Visible `:focus-visible` outline; mobile menu exposes `aria-expanded`, closes on Escape and
  returns focus to the toggle.
- Content is never hidden without JavaScript: scroll-reveal only applies once `html.js` is set.
- `prefers-reduced-motion` turns off scroll reveals and all animations.

## Documentation

- `docs/factual-review-2026-11.md` — open factual conflicts and evidence status (2026-11-12).
- `docs/audit-2026-11.md` — modernization audit (prioritized findings) and validation results.
- `docs/content-source-of-truth.md` — approved dates, titles, claims; what must never be
  published without verification.
- `docs/portfolio-audit.md`, `docs/final-qa-report.md` — earlier passes (2026-07), kept for history.
