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

## Follow-up QA — current role + DevSecOps project (2026-08-10)

Branch: `feature/portfolio-current-role-devsecops`.

**Build**: `npm run build` — success, 4 pages generated (`/`, `/soc-case-study/`,
`/espreats-case-study/`, `/404`), no errors.

**CV**: `dist/cv.pdf` confirmed regenerated from the new `public/cv.pdf` (CreationDate
2026-07-31, matching the canonical `master-cv/output/` build) — no stale copy remained; `dist/`
is git-ignored and rebuilds cleanly from `public/`.

**Content checks** (via `grep` over the built HTML):
- ars vivendi entry present with correct bullets; DevSecOps Deployment Tracker card present.
- No leftover "Mention Tr[ès Bien]" string anywhere in the build output.
- No stale "Dec 2026" or "Aug 2024" date strings remaining.
- "Flexos Tunisie" appears 3× (2 experience entries + 1 SOC-project description mention) — no
  accidental duplicate experience entry.
- JSON-LD block unchanged and still factually accurate (doesn't reference specific dates/employers
  that could conflict with the corrections above).

**Routes/links**: local preview server (`astro preview`) + `curl` — `/`, `/soc-case-study/`,
`/espreats-case-study/`, `/cv.pdf`, `/robots.txt`, `/sitemap.xml` all 200; unknown route
correctly 404s. External links checked: GitHub profile, the new
`github.com/iiismailtriki/devsecops-deployment-tracker` link, and both Credly badges all
200. LinkedIn returned 999 (LinkedIn's standard bot-blocking response to automated requests,
not a broken link — pre-existing behavior, unrelated to this change).

**Accessibility**: all `<img>` tags carry `alt` (profile photo has descriptive alt text;
certification badges keep the pre-existing empty `alt=""` since adjacent text already
describes them). Heading order remains sequential (`h1` → `h2` → `h3`, no skipped levels) with
the new project card's `h3` following the same pattern as its siblings.

**Responsive/visual**: verified visually via `claude-in-chrome` at the default desktop
viewport (~1568×784) — Hero, About, Skills, Projects (including the new DevSecOps card), and
Experience (including the new ars vivendi entry and corrected entries) all render correctly
with no visual regressions. **Tablet and mobile visual verification could not be completed**:
the `resize_window` tool did not change the actual rendered viewport in this environment —
screenshots stayed at desktop resolution regardless of the requested window size (tried
768×1024 and 390×844, both ineffective). Fell back to static analysis: the new markup
(ars vivendi experience card, DevSecOps project card) reuses the exact same Tailwind
responsive classes (`flex-wrap`, `md:`/`lg:` grid breakpoints) as the pre-existing cards that
were already visually verified in the 2026-07-20 pass, so no new overflow risk is expected, but
this is reasoning by structural similarity, not a direct visual confirmation — a manual pass at
mobile/tablet widths is recommended before treating this as fully verified.

**Lighthouse**: not run (no Lighthouse/Chrome DevTools CLI available in this environment, same
limitation as the prior pass) — no scores are claimed or fabricated here.
