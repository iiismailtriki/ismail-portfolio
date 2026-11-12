# Factual Review Checklist — Recruiter Optimization Pass (2026-11-12)

Branch: `feature/recruiter-portfolio-optimization`.

Sources compared:
- **Site:** this repo.
- **CV:** `career-application-os-v2/cv/canonical/Ismail_Triki_CV.pdf` (v3.2, marked APPROVED in
  `cv/CV_SOURCE_OF_TRUTH.md` but **not yet committed** in that repo).
- **AF:** `career-application-os-v2/profile/approved-facts.md` (last change 2026-11-09).
- **SoT:** this repo's `docs/content-source-of-truth.md`.
- **Repos:** `devsecops-deployment-tracker` (main `f41b9f3`, 2026-11-10) and
  `Cloud-native-open-source-SOC-platform---ESPRIT-PFE-2026` (2026-07-30).
- **Credly:** Open Badges assertion `fef01525-…` (AWS Training and Certification; the hashed
  recipient matches Ismail's Gmail address).

The old canonical path `~/Desktop/career-workspace/master-cv/` no longer exists. The canonical CV
now lives in `~/Desktop/career-application-os-v2/cv/canonical/`.

## A. Changed on the site to match the newer approved sources — please confirm

| # | Was | Now | Source |
|---|---|---|---|
| A1 | "Graduated with Highest Honors" (hero, About, education) | Removed. Education shows "Thesis grade: 16.88/20". | AF N7 (never claim) + ED3. SoT (2026-07) had approved "Highest Honors"; AF (2026-11-08) supersedes it. |
| A2 | German "B1 — preparing for B2" | "B1 — telc B1 exam planned Dec 2026" | AF L4/L5, N13; CV |
| A3 | Flexos thesis location "Tunisia (Remote/On-site)" | "Hybrid — mostly remote from Germany" | AF E2; CV |
| A4 | Flexos thesis bullets (site wording) | CV v3.2 bullets 1–4 + one existing site bullet | CV; AF E2 |
| A5 | Education: ESPRIT + Marburg exchange | Adds THWS Schweinfurt, IBE, Oct 2026 – Present (AF says the document check is still pending) | AF F1; CV |
| A6 | Argo CD listed as a skill | Moved to "Learning now" | AF E3 ("not claimable"); repo description "Argo CD in progress" |
| A7 | `public/cv.pdf` = July build (German A2, no SAA) | Canonical v3.2 EN; new `public/cv-de.pdf` = v3.2-de | CV_SOURCE_OF_TRUTH.md |
| A8 | No AWS SAA anywhere | SAA first in Certifications, in the hero, About, JSON-LD and meta | AF C3; Credly |
| A9 | SOC "production-grade", "Multi-Tenant" headline | Removed | AF N6; your request |
| A10 | SOC stack without Shuffle | Shuffle SOAR added | CV; AF E2; SOC repo README |

## B. Conflicts NOT resolved — your decision needed

| # | Conflict | Current site | Options |
|---|---|---|---|
| B1 | **ars vivendi.** AF E1/N14: "NOT FOR CV / NOT USED AS IT EXPERIENCE … unless Ismail explicitly asks later". Your 2026-11-12 request lists the role's S3/website/network duties as approved for the portfolio. | **Kept** (Experience, Skills "Used professionally"), approved bullets verbatim. The CV PDF does not include it, so site and CV now differ. | Keep and update AF to record the portfolio exception, or remove from the site. |
| B2 | **Marburg exchange end date:** SoT says Jun 2026 (completed); AF F1b says Oct 2025 – **Oct 2026**. | Jun 2026 (unchanged) | Which is right? |
| B3 | **Zeek:** listed on the site (SOC card, case study, skills). Not in CV v3.2 or AF, and **0 mentions in the SOC repo**. | Kept, unchanged | Confirm Zeek was deployed, or remove it. |
| B4 | **Cortex:** on the site and in the SOC repo README; not on CV v3.2. | Kept | Probably fine; confirm. |
| B5 | **Privilege-escalation rule (T1548.003):** on the site; CV/AF list only SSH brute force, recon and account discovery. | Kept | Confirm the rule was validated. |
| B6 | **English "C1 — IELTS 7.0":** AF L3 says certificate UNVERIFIED; CV says "C1" only. | Kept | Confirm the IELTS score or drop it. |
| B7 | **Flexos summer internship (Aug–Oct 2025):** not on CV v3.2 or in AF. Kept in 2026-08 on your instruction. | Kept | Still want it? |
| B8 | **SAA issue date:** Credly assertion says `issuedOn 2026-10-31`; AF C3 says passed 2026-11-01. | No date shown (as you asked) | Fix AF if needed. |
| B9 | **Target roles:** AF says primary market is Werkstudent; your request targets junior roles. | Junior roles only | Add "and working-student roles" to the hero/contact? |
| B10 | **"Graduate" wording:** AF ED2 says "Diploma formally awarded: UNVERIFIED". | Says "engineering degree … 2026"; hero no longer says "graduate" | Confirm the diploma is awarded. |
| B11 | **Skills removed** for lack of on-site evidence: OpenAI API, JavaScript, Netplan/iptables (Netplan still appears in the SOC case study). | Removed | Re-add if wanted. |
| B12 | **"I reply in English or German"** (Contact). German is B1. | Added | Keep or drop. |

## C. Evidence links — not added, action needed

| # | Item | Why not linked |
|---|---|---|
| C1 | **SOC thesis repo** `iiismailtriki/Cloud-native-open-source-SOC-platform---ESPRIT-PFE-2026` (public, 40 commits, thesis report, Ansible/Terraform/k8s) | **It appears to contain committed literal credentials**: a TheHive password and API key in `kubernetes/thehive/thehive-secret.yaml`, a token in `ansible/group_vars/all.yml`, an API key in `scripts/setup-thehive.sh`, and a token in `ansible/local-demo/local-vars.yml`. Only their shape was checked; values were not printed. Rotate them, purge them from history, then link the repo. Its `docs/issues-found.md` is good troubleshooting evidence once cleaned. |
| C2 | `cloud-aws-landing-zone` (2 commits, Terraform) | Too small to feature yet; not mentioned in AF or the CV. |
| C3 | `AICallCenter` ("Whisper and LLaMA" chatbot) | Relation to Vocallia unknown. AF has no Vocallia link. |
| C4 | Vocallia / OSTX Tunisia 2025 event link | Still not provided. |

## D. DevSecOps Tracker — what the site now claims, and the evidence for it

Verified on `main` at `f41b9f3`:

- **15 Jenkins stages**, including a new Helm lint + render + Trivy config gate (`5314e6e`).
- **Publish, sign and attest on main only** (`389d711`).
- **Helm chart hardening:** read-only root filesystem with an `emptyDir` for `/tmp`, and
  `fsGroup` (`5314e6e`). The raw `k8s/base` manifests do not have these.
- **Patched-package fixes:** zlib (`84ba374`) and libpcre2 (PR #1).
- **Cosign key rotated** after the private key was lost in a laptop migration (`45831fb`,
  `docs/signing/KEY_ROTATION.md`). The same file says: "Main-branch publishing, signing and
  attestation validation is pending." The site states this as a limitation.
- **Gitleaks false positives** documented by fingerprint (`6bf74cf`).
- **No AI-assisted CI investigation** feature exists on any branch or PR. Nothing is claimed.
- **The pipeline does not deploy.** Stated on the card and in the case study (AF N10).
- **The repo `README.md` and GitHub description are stale** ("Planned: Dockerfile, Kubernetes…",
  "Docker/K8s/Argo CD in progress"). Recruiters see them first; update both.
