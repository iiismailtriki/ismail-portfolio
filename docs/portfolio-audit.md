# Portfolio Audit — Cloud/DevOps Repositioning (2026-07-20)

## Starting point

The site was already a well-built single-page Astro + Tailwind portfolio: dark theme,
correct GitHub Pages base-path handling, two real project case studies (SOC platform,
Espr'Eats), real certification badges, Plausible analytics, and an honest "not validated
at production scale" caveat already present on the Espr'Eats case study. This was a
content/positioning and gap-filling pass, not a rebuild.

## Problems found

1. **Identity language out of date.** Hero/About/Contact described Ismail as a
   "final-year engineering student" and framed availability around Werkstudent/internship
   roles. Per Ismail's confirmation, he graduated in July 2026 (Mention Très Bien) — this
   wording was stale and would have undersold his actual status to recruiters.
2. **Experience dates were wrong.** `Experience.astro` listed a single Flexos Tunisie
   entry dated "2024 – 2025" with full project-ownership language. The CV
   (`public/cv.pdf`) shows two separate Flexos internships: a summer internship
   (Aug–Oct 2025, modest "assisted" scope) and — per Ismail's direct confirmation — a
   separate PFE/thesis internship (Dec 2025–Jul 2026) where the SOC platform was actually
   built. The website had conflated the two into one entry with the wrong date range.
3. **Education dates were wrong.** Site said ESPRIT "2020–2025" and exchange "2024–2025";
   CV says ESPRIT "09/2021–Present" and exchange "10/2025–12/2026". Reconciled against
   Ismail's confirmation of a July 2026 graduation.
4. **Certifications were buried** inside the About "quick facts" card rather than being
   a first-class, recruiter-scannable section with its own nav entry.
5. **No Vocallia project** existed anywhere in the site or CV, despite it being real,
   confirmed, recent work (AIESEC/PVG Pune, Top 10 at OSTX Tunisia 2025).
6. **Missing SEO fundamentals**: no `robots.txt`, no `sitemap.xml`, no canonical URL, no
   `og:image`/Twitter card, no structured data (JSON-LD).
7. **No 404 page**, no skip-to-content link (landmarks and heading order were otherwise
   already correct).
8. **The SOC case study had no explicit "Results" section** — the confirmed 4-second
   detection/containment metric wasn't published anywhere.
9. Project cards had no explicit Type/Status labeling (Internship vs. Academic vs. Team;
   Completed vs. Prototype) for quick recruiter scanning.

## What was verified before writing anything

Three sources were cross-checked before any content was changed: `public/cv.pdf`
(via `pdftotext`), the live component source, and Ismail's direct confirmation on
every point where the CV, the site, and the original task instructions disagreed
(dates, Flexos scope, graduation status, the Vocallia project, and the 4-second
metric). See `docs/content-source-of-truth.md` for the reconciled facts and what
still needs a follow-up (the Vocallia event/project link).

## Changes made

- **Copy**: Hero, About, Contact rewritten to remove "final-year student" language;
  repositioned as "Cloud Engineering Graduate." CTA/contact copy updated to target junior
  Cloud/DevOps/Platform/DevSecOps roles instead of Werkstudent-only framing.
- **Experience**: split Flexos into two accurate entries; fixed all experience and
  education dates; added a Vocallia highlight to the PVG/AIESEC entry.
- **Projects**: added a third project card for Vocallia (no invented links — see
  content-source-of-truth.md for the placeholder); added Type/Status badges to all
  three cards; added the confirmed 4-second metric to the SOC platform card's impact list.
- **SOC case study**: added a "Results" section with the 4-second metric, explicitly
  scoped to "the validated lab scenario," matching the existing site's already-honest tone.
- **New Certifications section**: extracted from the About card into its own
  `Certifications.astro` component with a dedicated nav link. No "Currently Learning"
  section was added — no verified in-progress certification exists.
- **SEO**: added `public/robots.txt`, `public/sitemap.xml`, canonical URL, `og:url`,
  `og:image` (using the existing profile photo as a placeholder — see Limitations),
  Twitter card meta, and a `Person` JSON-LD block using only already-public site data.
  Updated the default page title/description.
- **Accessibility**: added a skip-to-content link (`.skip-link` in `global.css`,
  targeting `#main-content` on every page) and a `prefers-reduced-motion` override for
  the scroll-in animations (the Hero's own reduced-motion handling was already correct).
- **404 page**: new `src/pages/404.astro`, base-path aware.
- **Docs**: this file, `docs/content-source-of-truth.md`, `docs/final-qa-report.md`,
  and a rewritten `README.md` (previous README was a generic from-scratch setup guide;
  now reflects the site as a live, maintained project with content-update guidance).

## Removed / left alone

- No components were deleted. `Skills.astro`, the SOC/Espr'Eats case-study bodies
  (beyond the new Results section), and the visual design system (colors, card styles,
  typography, animation restraint) were left as-is — they already matched the intended
  "engineering documentation" aesthetic and didn't need a rebuild.
- Helm/ArgoCD skill tags predate this pass and aren't on the CV; left in place rather
  than removed, flagged in content-source-of-truth.md for Ismail to verify.

## Remaining limitations

- **No lint/type-check tooling exists in this repo** (no ESLint config, no `tsconfig.json`
  script). `npm run build` (Astro's compiler) was the correctness gate used; adding
  lint/type-check tooling was out of scope for a content-accuracy pass and would be a
  separate, deliberate decision.
- **No Lighthouse/browser-automation tooling was available in this environment.**
  Verification was done via: production build success, a local `astro preview` server,
  `curl`-based route/asset/link checks (all 200s), and static HTML analysis (heading
  order, alt text, `rel="noopener noreferrer"` on all external links, JSON-LD/canonical/
  OG tag presence). This is not a substitute for an actual Lighthouse run or a real
  browser visual pass — recommend running Lighthouse from Chrome DevTools against the
  live URL after deployment, and note this file if scores fall short of the requested
  90+/95+/95+/95+ targets.
- **`og:image` uses the existing profile photo**, not a purpose-built 1200×630 social
  card — no image-generation tooling was available to create one. This is a reasonable
  placeholder but not ideal; a dedicated OG image would improve link-preview quality.
- **`profile.png` (~212 KB) is unoptimized** — no image-conversion tooling (e.g. `cwebp`)
  was available in this environment to produce a WebP/AVIF version.
- **Vocallia has no public link** — see `docs/content-source-of-truth.md` for exactly
  where to add it once available.
- The Marburg exchange end date (Dec 2026, per CV) wasn't corrected against the July 2026
  graduation date — Ismail didn't provide a correction for it, so the CV's stated date
  was kept rather than guessed at.

## Follow-up pass — current role + DevSecOps project (2026-08-10)

Branch: `feature/portfolio-current-role-devsecops` (from `main`, backed up at
`backup/pre-current-role-devsecops-update`).

This was a focused content update, not a redesign. Source of truth was re-established against
`application-os/config/approved-facts.md`, `candidate-profile.md`, `current-candidate-status.md`,
and the canonical `master-cv/` (Run 10, 2026-07-31) — all more current than the 2026-07-20
pass above, which several facts had already drifted from.

**Changes:**
- Added the current role: Working Student — IT & Cloud Support, ars vivendi Seniorenresidenz
  Marburg GmbH, Jun 2026 – Present, positioned above the Flexos entries. Bullets are verbatim
  from `approved-facts.md`; explicitly did not add IAM, encryption, GDPR, backup-lifecycle,
  network-administration, user-support, or healthcare-IT claims, and ars vivendi is described
  as a senior-care provider, not a technology employer.
- Corrected drift found during the re-audit: Flexos PFE end date (Jul 2026 → Jun 2026),
  Devoteam end date (Aug 2024 → Jul 2024) and title/bullets, PVG/AIESEC title/bullets (removed
  unapproved CI/CD and containerization claims), exchange semester end date (Dec 2026 → Jun
  2026, now correctly marked complete), "Mention Très Bien" → "Graduated with Highest Honors"
  everywhere it appeared, and added AWX/GitHub Actions (Flexos PFE) and Prometheus/Grafana
  (Skills) — all now explicitly confirmed by canonical sources that didn't exist or weren't
  checked during the 2026-07-20 pass.
- One genuine conflict (not a simple drift) was found and not resolved by guessing: the site's
  separate Flexos summer internship entry (Aug–Oct 2025) doesn't appear in any current
  canonical source. Raised directly with Ismail; his explicit instruction was to keep it as-is.
  See `docs/content-source-of-truth.md` for the full note.
- Replaced `public/cv.pdf` with the canonical, already-QA'd build from `master-cv/output/` —
  see `docs/content-source-of-truth.md`'s "CV replacement" section for the verification detail.
- Audited the DevSecOps Deployment Tracker repo directly (not from memory — its own README was
  stale) and added it to `Projects.astro` as an **In Progress** card, positioned after the SOC
  platform. Decided **not** to add it to the master CV yet (`PORTFOLIO_ONLY_FOR_NOW`) — see
  `docs/content-source-of-truth.md` for the full COMPLETED/PARTIAL/NOT_PRESENT breakdown and
  the milestone that should trigger CV inclusion later.

**Removed / left alone:** No components were deleted or restructured. Hero and Contact were
left unchanged (already accurate, and adding ars vivendi detail there risked implying it's a
cloud-engineering employer, which `approved-facts.md` explicitly rules out); the current-role
positioning was added to About instead.

**Limitations:** Same environment constraints as the 2026-07-20 pass — no Lighthouse/axe tooling.
Browser-based responsive verification was attempted via `claude-in-chrome` but the
`resize_window` tool did not change the rendered viewport in this environment (screenshots
stayed at desktop resolution at every requested size); verified instead via desktop screenshots
plus static Tailwind-class review, since the new markup reuses the exact same responsive
classes as the pre-existing, already-verified cards.
