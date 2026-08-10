# Content Source of Truth

This file is the reference for any future content change to the portfolio. If a claim
about dates, employers, technologies, or results isn't backed by the canonical master CV
(`~/Desktop/career-workspace/master-cv/`), `application-os/config/approved-facts.md`, or an
explicit confirmation from Ismail, treat it as unverified and don't publish it.

Last reconciled: 2026-08-10, against `application-os/config/approved-facts.md`,
`application-os/config/candidate-profile.md`, `application-os/config/current-candidate-status.md`,
the canonical `master-cv/sections/experience.tex` (Run 10, 2026-07-31), and direct confirmation
from Ismail on the one item those sources didn't resolve (see "Flexos summer internship" below).
The previous reconciliation (2026-07-20) is superseded wherever it conflicts with this one.

## Approved identity / positioning

- Name: Ismail Triki
- Title: Cloud Engineering Graduate | DevOps & DevSecOps
- Location: Marburg, Germany
- Status: **Graduated** — ESPRIT, July 2026. Approved English wording is **"Graduated with
  Highest Honors"** (the French "Mention Très Bien" is retired from all current English-facing
  content per `approved-facts.md`, Run 04, 2026-07-22).
- Current employment: **Working Student — IT & Cloud Support**, ars vivendi Seniorenresidenz
  Marburg GmbH, Marburg, Germany, June 2026 – Present. See "ars vivendi" below.
- `public/cv.pdf` is now generated from the canonical `master-cv/` source and includes the
  ars vivendi entry — no longer stale (see "CV replacement" below).

## Approved education

| Program | School | Location | Dates | Notes |
|---|---|---|---|---|
| Engineering Degree — Cloud & Computer Science | ESPRIT | Ariana, Tunisia | Sep 2021 – Jul 2026 | Graduated with Highest Honors. Thesis: Cloud-Native Open-Source SOC Platform |
| Academic Exchange — Computer Science | Philipps-Universität Marburg | Marburg, Germany | Oct 2025 – Jun 2026 | Corrected end date (was "Dec 2026" in the site, an uncorrected artifact of the 2026-07-20 pass). `current-candidate-status.md` marks this **COMPLETED** as of 2026-07-30 — do not describe it as ongoing. |

## ars vivendi Seniorenresidenz Marburg GmbH — new current role

Added 2026-08-10. Title, dates, and all three responsibility bullets are used **verbatim**
from `application-os/config/approved-facts.md` — not paraphrased or strengthened. ars vivendi
is a senior-care provider (stationary care, assisted/service living, ambulatory care) — the
site must never describe it as a technology or cloud company; the role is IT/cloud support,
not a reflection of the employer's line of business.

Approved bullets (do not add to or strengthen):
- Support the migration of internal file storage and backup workflows from on-premises servers to AWS S3.
- Maintain and update the company website, supporting day-to-day digital operations.
- Assist with network and connectivity troubleshooting across the Marburg location.

**Do not add**, even if it seems like a natural extension: IAM/identity-and-access-management,
encryption, GDPR/data-protection compliance work, backup lifecycle policies or restoration,
network administration (as distinct from troubleshooting), user support/helpdesk duties, or any
healthcare-specific IT/compliance/security claim inferred from the employer being a care
provider. Do not claim sole ownership or completion of the AWS S3 migration.

## Approved experience

| Role | Company | Location | Dates | Source |
|---|---|---|---|---|
| Working Student — IT & Cloud Support | ars vivendi Seniorenresidenz Marburg GmbH | Marburg, Germany | Jun 2026 – Present | `approved-facts.md`, `candidate-profile.md`, canonical master-cv (Run 10) |
| Cloud Engineering Intern — DevSecOps & Security Automation (PFE/thesis) | Flexos Tunisie | Tunisia | Dec 2025 – Jun 2026 | `approved-facts.md` + canonical master-cv. **Corrected end date** — site previously said "Jul 2026"; canonical sources say June 2026. |
| Cloud & Security Engineering Intern (summer) | Flexos Tunisie | Tunis, Tunisia | Aug 2025 – Oct 2025 | Kept on Ismail's explicit instruction (2026-08-10) — see "Flexos summer internship" conflict note below. |
| Cloud & DevOps Intern — International Innovation Program | PVG University / AIESEC | Pune, India | Jun 2025 – Aug 2025 | `approved-facts.md` + canonical master-cv. **Corrected title and bullets** — see note below. |
| Cloud, Data & DevOps Intern | Devoteam | Ariana, Tunisia | Jun 2024 – Jul 2024 | `approved-facts.md` + canonical master-cv. **Corrected end date** (was "Aug 2024") and title (was "Data / Consulting Intern"), and bullets — see note below. |

**Do not** merge the two Flexos internships back into one entry with the summer
internship's dates but the thesis internship's scope (that was the error found in the
pre-redesign site — the old `Experience.astro` claimed 2024–2025 with full-ownership
language for what the CV shows as a 2-month "assisted" role).

### Conflict found and resolved — Flexos summer internship (2026-08-10)

The site lists a separate "Cloud & Security Engineering Intern" summer entry (Aug–Oct 2025,
Linux/Docker/monitoring scope) that does **not** appear anywhere in `approved-facts.md`,
`candidate-profile.md`, or the canonical `master-cv/sections/experience.tex` — those sources
list only the single Dec 2025 – Jun 2026 Flexos (PFE/thesis) entry. This is a genuine
discrepancy between the portfolio and the currently-maintained canonical sources, not a simple
wording drift, so it was raised directly with Ismail rather than resolved by guessing. **His
explicit instruction: keep it as-is.** The portfolio may legitimately carry more detail than
the one-page CV has room for; this entry's dates/scope were not otherwise disputed. If this
entry is ever found to be wrong, correct it here and in `Experience.astro` together.

### Wording/date corrections applied 2026-08-10 (not conflicts — old portfolio copy vs. current canonical)

- **PVG/AIESEC**: title corrected from "Innovation Intern — International Program" to "Cloud &
  DevOps Intern — International Innovation Program"; bullets rewritten to remove claims of
  "CI/CD tooling exposure" and "pipeline monitoring for enterprise data/reporting systems" —
  `approved-facts.md` explicitly excludes containerization, CI/CD practice claims, and
  cloud-service integration for this role (a drift already caught and corrected once in the
  master CV itself, per `application-os/reports/run-04-master-migration.md`).
- **Devoteam**: title corrected from "Data / Consulting Intern" to "Cloud, Data & DevOps
  Intern"; end date corrected from "Aug 2024" to "Jul 2024"; bullets rewritten to remove
  invented "DevOps-oriented workflows," "data processing pipelines," and "monitoring" claims —
  `approved-facts.md` explicitly excludes deployment/scripting/CI/CD claims for this role (same
  Run 04 correction history as above).
- **Flexos PFE/thesis**: end date corrected from "Jul 2026" to "Jun 2026" to match
  `approved-facts.md` and the canonical master CV.
- **Exchange semester**: end date corrected from "Dec 2026" to "Jun 2026" — the 2026-07-20 pass
  explicitly left this uncorrected ("Ismail didn't provide a correction for it"); the newer,
  effective-dated `current-candidate-status.md` (verified 2026-07-30) resolves it and marks the
  exchange **COMPLETED**.
- **"Mention Très Bien" → "Graduated with Highest Honors"**: applied everywhere on the site
  (Experience education card, About section) per `approved-facts.md`'s Run 04 wording change.

## Approved SOC platform result

"SSH brute-force detection and automated containment completed in under 4 seconds" —
confirmed real by Ismail. **Always scope this to the validated lab scenario.** Never
generalize it to other detection scenarios, to production environments, or drop the
"lab scenario" qualifier — the case study and project card both carry this caveat
intentionally; keep it if this content is edited further.

## Vocallia — what's confirmed vs. what's missing

Confirmed by Ismail directly (not in the CV or prior site content at all):
- Team project during the AIESEC/PVG University international innovation program, Pune, India
- Cloud-oriented AI voice automation platform — automates phone interactions/voice workflows
  via APIs, backend services, and speech-processing components
- Ismail's role: technical design contribution, backend/API integration, cloud-oriented
  architecture, application configuration, Git-based collaboration, deployment preparation,
  workflow validation
- Result: Top 10 at OSTX Tunisia 2025
- International, multicultural team (not solo)

**Missing / explicitly not to invent:**
- No public repository or demo link exists yet. Ismail said he has "a link related to the
  project/event" but it wasn't provided during this update.
- **Action needed from Ismail:** add the OSTX Tunisia 2025 event/project link to the
  `vocallia` project entry in `src/components/Projects.astro` — replace the `note` field
  (currently: *"Team repository is not public. Event/project link to be added — see
  docs/content-source-of-truth.md."*) with either a real `caseStudy`/external link, or at
  minimum update the note text once a link is available.
- Do not invent a GitHub repo, a live demo, specific AI models used, user counts, or
  production deployment claims for Vocallia — none of that was confirmed.

## Technologies confirmed by CV/repo evidence

AWS (EC2, IAM), OpenStack, Docker, Kubernetes (k3s), Terraform, Ansible, AWX, GitHub Actions,
Jenkins, Linux (Ubuntu/Debian), Bash, Wazuh, OpenSearch, Suricata, Zeek, TheHive, Cortex,
Prometheus, Grafana, Java, JavaScript, Angular, Spring Boot, REST APIs, OpenAI API, Proxmox VE,
VMware ESXi. (AWX, GitHub Actions, Prometheus, Grafana added 2026-08-10 — now explicitly listed
in `approved-facts.md` and the canonical `master-cv/sections/skills.tex`; see the superseded
notes above.)

Helm and ArgoCD appear in `Skills.astro` pre-existing this update (not on the CV) — left
as-is since they predate this content pass and weren't flagged as incorrect; verify with
Ismail before expanding on them in interview prep.

## Certifications

- AWS Certified Cloud Practitioner (Amazon Web Services) — Credly-linked, badge image present
- Nutanix Certified Professional — Multicloud Infrastructure 6 (Nutanix) — Credly-linked, badge image present

No "Currently Learning" / planned-certifications section was added — no evidence of a
specific in-progress certification was available. Add one only with real confirmation.

## Claims that must NOT be used

- "Final-year student" / "final-year engineering student" as an identity descriptor —
  Ismail has graduated. ("Final-year thesis" as a description of *when the SOC project
  was completed* is fine and factually accurate.)
- Any Flexos PFE-level ownership language applied to the Aug–Oct 2025 summer internship.
- **Superseded 2026-08-10**: this file previously excluded AWX and GitHub Actions from the
  SOC platform's automation stack as "not evidenced." The canonical master CV and
  `approved-facts.md` now explicitly confirm both ("Automated infrastructure and application
  deployment using Terraform, Ansible, AWX, and GitHub Actions") — `Experience.astro`'s Flexos
  PFE entry was updated to match. The line below is kept only for historical context; treat
  AWX and GitHub Actions as approved for the Flexos PFE/SOC-platform role going forward.
- ~~AWX or GitHub Actions as part of the SOC platform's automation stack — not evidenced in
  the CV, the pre-existing case study, or confirmed by Ismail. Only Terraform + Ansible
  are confirmed for that project.~~
- ~~Prometheus, Grafana, or GCP as skills — no evidence found; do not add without
  confirmation.~~ **Superseded 2026-08-10 for Prometheus/Grafana**: the canonical
  `master-cv/sections/skills.tex` and `approved-facts.md` now explicitly list both under
  "DevSecOps & Observability" — added to `Skills.astro`'s Security & SOC group to match. GCP
  remains unconfirmed for professional/production use — `approved-facts.md` allows only
  "Google Cloud Platform — foundational knowledge" wording, and no such wording exists on the
  site today; do not add a bare "GCP" skill tag without that exact qualified phrasing.
- Any Vocallia repo/demo link, AI model name, user count, or production-scale claim.
- The 4-second SOC metric generalized beyond "the validated lab scenario."

## CV replacement (2026-08-10)

`public/cv.pdf` was replaced with the canonical, QA-approved build from
`~/Desktop/career-workspace/master-cv/output/Ismail_Triki_CV.pdf` (built 2026-07-31, Run 10 —
see `application-os/reports/run-10-master-migration.md` for the full build/QA trail: document-
policy check, word-for-word fact match against `approved-facts.md`, ATS text extraction,
7/7 hyperlink validation, PDF metadata check, 1-page confirmation, visual inspection at 150
DPI). Re-verified independently during this update:
- `pdfinfo`: 1 page, correct title/subject/keywords metadata, no stray "Mention" text.
- `pdftotext -layout`: ars vivendi entry present and correctly worded; all experience/education
  dates match this file's corrected table above.
- `application-os/scripts/check-links.py --pdf`: 7/7 links resolve (email, phone, LinkedIn,
  GitHub, Portfolio, both Credly badges).
- The previous `public/cv.pdf` (dated 2026-07-18) predates ars vivendi and the Portfolio
  header link — do not restore it. `dist/cv.pdf` is git-ignored and regenerates from
  `public/cv.pdf` on every `npm run build`, so no separate fix was needed there.
- **Do not use** `application-os/master/cv/` as a source for future CV syncs — it is
  documented as a reference copy only; the real canonical source is `master-cv/` at the
  `career-workspace` repo root.

## DevSecOps Deployment Tracker (2026-08-10)

Public repo: `https://github.com/iiismailtriki/devsecops-deployment-tracker`. Audited directly
(README, git log, Dockerfile, tests, lint/security-scan reports) rather than described from
memory — the repo's own README was stale (still said "Planned, not yet implemented:
Dockerfile/containerization" even though Docker had been added three commits earlier) and was
not trusted at face value.

**COMPLETED_AND_VERIFIED** (re-ran locally, all passing at audit time):
- Flask REST API — 4 endpoints (`/`, `/health`, `/version`, `/info`)
- Automated tests — pytest, 6 tests, all passing
- Ruff (lint) — all checks pass
- Bandit (static security analysis) — no issues found
- pip-audit (dependency scanning) — no known vulnerabilities
- Docker containerization — non-root runtime user (uid 10001), container healthcheck, OCI
  image metadata labels, Gunicorn as the WSGI server
- Trivy image scan and Trivy config scan — reports present in `reports/`; 0 actionable
  vulnerabilities, 0 Dockerfile misconfigurations
- Hadolint Dockerfile lint — 2 minor advisory findings only, non-blocking

**PARTIAL**: the checks above are real and automated as tools/commands, but not yet wired into
an enforced CI gate — there is no `.github/workflows/` directory in the repo, so nothing
currently blocks a merge or build on these checks failing.

**NOT_PRESENT**: GitHub Actions / CI pipeline, CI-enforced gates, Kubernetes manifests (the
`deploy/` directory exists but is empty), Helm, Argo CD / GitOps, monitoring, deployment
environments.

**Portfolio decision**: added as an **In Progress** project card (`Projects.astro`), positioned
immediately after the SOC platform flagship project. Card lists only the COMPLETED_AND_VERIFIED
items as "Implemented," states the current stage honestly (checks run locally, not yet CI-
gated), and puts GitHub Actions CI, Kubernetes manifests, and Argo CD/GitOps under "Next
(planned, not yet built)" — never under implemented technologies. Links to the real, public
GitHub repo; no demo link exists and none was invented.

**CV decision: `PORTFOLIO_ONLY_FOR_NOW`.** The project clears a reasonable bar for portfolio
inclusion (working app, automated tests, containerization, and vulnerability scanning are all
genuinely complete), but not the higher bar for the one-page CV: it lacks a CI pipeline and any
deployment automation — two of the elements a "DevSecOps" pitch leans on most — and
`master-cv/sections/projects.tex` has already been condensed twice (Run 04, Run 10) just to fit
the ars vivendi entry, with no further slack to add a third project without cutting existing
SOC-platform or Vocallia evidence. Adding it now would trade stronger, fully-complete evidence
for weaker, partially-complete evidence.
**Milestone that should trigger CV inclusion**: once a GitHub Actions workflow wires the
existing Ruff/Bandit/pip-audit/Trivy checks into an actual blocking CI gate (turning them from
local commands into enforced automation), the project would justify a compact CV line — at
that point, re-run this same threshold check rather than adding it automatically.
