# Final QA Report — Cloud/DevOps Portfolio Repositioning

Date: 2026-07-20
Branch: `feature/cloud-devops-portfolio-v2` (from `main`, backed up at
`backup/pre-cloud-portfolio-redesign`)

## Build

```
npm run build
```
Result: **Success.** 4 pages generated (`/`, `/soc-case-study/`, `/espreats-case-study/`,
`/404`) in 1.63s, no errors or warnings. `dist/` total size: 2.5 MB.

## Lint / Type-check

**Not applicable — not configured in this repo.** No `.eslintrc*` and no `tsconfig.json`
build script exist. Astro's own compiler (via `astro build`) is the correctness gate that
exists today; it passed cleanly. Adding lint/type-check tooling would be a separate,
deliberate scope decision, not bundled into this content pass.

## Automated tests

None exist in the repo and none were added. This is a static content site; the checks
below (route/asset/link verification) serve as the practical regression check.

## Link / asset check

Ran `npm run preview` locally and verified via `curl` under the real `/ismail-portfolio/`
base path:

| Path | Status |
|---|---|
| `/ismail-portfolio/` | 200 |
| `/ismail-portfolio/soc-case-study/` | 200 |
| `/ismail-portfolio/espreats-case-study/` | 200 |
| `/ismail-portfolio/404.html` | 200 |
| `/ismail-portfolio/cv.pdf` | 200 |
| `/ismail-portfolio/profile.png` | 200 |
| `/ismail-portfolio/robots.txt` | 200 |
| `/ismail-portfolio/sitemap.xml` | 200 |
| `/ismail-portfolio/certifications/aws-cloud-practitioner.png` | 200 |
| `/ismail-portfolio/certifications/nutanix-ncp-mci6.png` | 200 |
| `/ismail-portfolio/images/soc-architecture.png` | 200 |
| `/ismail-portfolio/images/espreats-architecture.jpg` | 200 |

Additionally verified programmatically (Python regex over rendered HTML, all 3 pages):
- Every internal `href`/`src` is prefixed with `/ismail-portfolio` — no root-relative
  links that would 404 once deployed.
- All `target="_blank"` anchors (7 on the homepage, 2 on each case study) carry
  `rel="noopener noreferrer"`.
- No broken `<img>` sources; all carry meaningful `alt` text or empty `alt=""` where the
  image is decorative and adjacent text already describes it (certification badges).

## Accessibility (manual/structural review — no automated audit tool available)

- Single `<h1>` per page; sequential `h2`/`h3` nesting, no skipped levels (verified on
  homepage).
- Skip-to-content link added, targets `#main-content` (present on all 4 pages).
- `lang="en"` set on `<html>`.
- `prefers-reduced-motion` now disables both the Hero's own animations (already handled)
  and the scroll-in fade animations (newly added).
- No color-only information conveyed (status/type badges use text labels, not color alone).
- Focus outlines are not suppressed anywhere in the codebase (`grep -rn outline` found no
  `outline: none`/`outline-none` usage) — default browser focus rings remain visible.
- **Not done**: a full automated WCAG audit (e.g. axe-core, Lighthouse accessibility
  score) — no such tool was available in this environment. Recommend running one against
  the live URL post-deploy.

## Performance

- No Lighthouse run was possible in this environment (no Chrome/Lighthouse CLI available).
  **This is a real limitation** — the requested 90+/95+/95+/95+ score targets were not
  measured, only reasoned about structurally:
  - Fully static Astro output, zero client-side framework/hydration cost.
  - `dist/` is 2.5 MB total; the largest single asset is `profile.png` at ~212 KB
    (unoptimized — no WebP/AVIF conversion tooling available here).
  - Below-the-fold case-study images use `loading="lazy"`.
- **Recommendation**: run Lighthouse from Chrome DevTools against the deployed URL after
  this merge and record actual scores here if they fall short of target.

## Responsive design

**Not visually verified in a browser** — no browser-automation/screenshot tool was
available in this environment. Structural review only: the codebase already uses
Tailwind responsive prefixes (`sm:`/`md:`/`lg:`/`xl:`) consistently across Hero, Nav,
Projects, Experience, Skills, and the new Certifications section, matching the patterns
already in place before this change (which were presumably visually tuned by Ismail
previously). No new fixed-width elements or non-wrapping flex rows were introduced other
than ones that reuse the exact same responsive classes as the pre-existing project cards.
**Recommend a manual pass at the listed breakpoints (320–1920px) before relying on this
alone**, per the original request's Phase 17.

## Content accuracy

Reconciled against `public/cv.pdf` and Ismail's direct confirmations — see
`docs/content-source-of-truth.md` for the full reconciliation and what still needs a
follow-up (the Vocallia project link).

## Deployment

See commit/push/merge section of the final summary for live-URL verification results.

## Known limitations (carried from `docs/portfolio-audit.md`)

- No lint/type-check tooling configured.
- No Lighthouse / browser-automation tooling available in this environment — performance
  scores and full visual/responsive QA were not directly measured.
- `og:image` reuses the existing profile photo rather than a purpose-built social card.
- `profile.png` is unoptimized (no image tooling available here).
- Vocallia has no public link yet (placeholder documented).
