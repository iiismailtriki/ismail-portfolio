# Content Source of Truth

This file is the reference for any future content change to the portfolio. If a claim
about dates, employers, technologies, or results isn't backed by `public/cv.pdf` or an
explicit confirmation from Ismail, treat it as unverified and don't publish it.

Last reconciled: 2026-07-20, against `public/cv.pdf` and direct confirmation from Ismail.

## Approved identity / positioning

- Name: Ismail Triki
- Title: Cloud Engineering Graduate | DevOps & DevSecOps
- Location: Marburg, Germany
- Status: **Graduated** (confirmed by Ismail — July 2026, ESPRIT, Mention Très Bien).
  `public/cv.pdf` still says "09/2021 – Present" for ESPRIT; the CV file itself is
  outdated and should be refreshed to match this if a new CV is issued.

## Approved education

| Program | School | Location | Dates | Notes |
|---|---|---|---|---|
| Engineering Degree — Cloud & Computer Science | ESPRIT | Ariana, Tunisia | Sep 2021 – Jul 2026 | Graduated, Mention Très Bien. Thesis: Cloud-Native Open-Source SOC Platform |
| Academic Exchange — Computer Science | Philipps-Universität Marburg | Marburg, Germany | Oct 2025 – Dec 2026 | Per CV; end date not corrected by Ismail during this update |

## Approved experience

| Role | Company | Location | Dates | Source |
|---|---|---|---|---|
| Cloud Engineering Intern — DevSecOps & Security Automation (PFE/thesis) | Flexos Tunisie | Tunisia | Dec 2025 – Jul 2026 | Confirmed by Ismail directly (not on current CV, which only shows one merged Flexos entry) |
| Cloud & Security Engineering Intern (summer) | Flexos Tunisie | Tunis, Tunisia | Aug 2025 – Oct 2025 | CV |
| Innovation Intern — International Program | PVG University / AIESEC | Pune, India | Jun 2025 – Aug 2025 | CV |
| Data / Consulting Intern | Devoteam | Ariana, Tunisia | Jun 2024 – Aug 2024 | CV |

**Do not** merge the two Flexos internships back into one entry with the summer
internship's dates but the thesis internship's scope (that was the error found in the
pre-redesign site — the old `Experience.astro` claimed 2024–2025 with full-ownership
language for what the CV shows as a 2-month "assisted" role).

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

AWS (EC2, IAM), OpenStack, Docker, Kubernetes (k3s), Terraform, Ansible, Jenkins, Linux
(Ubuntu/Debian), Bash, Wazuh, OpenSearch, Suricata, Zeek, TheHive, Cortex, Java,
JavaScript, Angular, Spring Boot, REST APIs, OpenAI API, Proxmox VE, VMware ESXi.

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
- AWX or GitHub Actions as part of the SOC platform's automation stack — not evidenced in
  the CV, the pre-existing case study, or confirmed by Ismail. Only Terraform + Ansible
  are confirmed for that project.
- Prometheus, Grafana, or GCP as skills — no evidence found; do not add without confirmation.
- Any Vocallia repo/demo link, AI model name, user count, or production-scale claim.
- The 4-second SOC metric generalized beyond "the validated lab scenario."
