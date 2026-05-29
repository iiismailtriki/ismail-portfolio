# Customization Checklist

Before publishing your portfolio, go through each item below.

## Required

- [ ] **Add your resume PDF** — Place your CV at `public/cv.pdf`. Without this, all "Download Resume" links will 404.
- [ ] **Update GitHub URL** — Search for `github.com/ismailtriki` in all `.astro` files and replace with your actual GitHub profile URL.
- [ ] **Update LinkedIn URL** — Search for `linkedin.com/in/ismail-triki` and replace with your actual LinkedIn URL.
- [ ] **Update astro.config.mjs** — Set `site` to your actual GitHub Pages URL (e.g., `https://ismailtriki.github.io`).

## Recommended

- [ ] **Add a profile photo** — Optional but increases recruiter trust. Add to `public/avatar.jpg` and reference it in `About.astro`.
- [ ] **Update availability status** — In `Hero.astro`, the green dot says "Available — Marburg, Germany". Update this to reflect your actual status and timeline.
- [ ] **Verify experience dates** — Double-check all employment periods in `Experience.astro` match your actual CV.
- [ ] **Add GitHub repo links** — In `Projects.astro`, the GitHub buttons currently link to your profile. If you have public repos, link directly to each project.
- [ ] **German level update** — When your German improves, update the language bar in `About.astro` (currently set to A2 / 20%).
- [ ] **Certifications** — If you add AWS SAA or AWS Security Specialty, add them to the certifications list in `About.astro`.

## Optional

- [ ] **Add a custom domain** — If you have a domain, configure it in GitHub Pages settings and update `astro.config.mjs` accordingly.
- [ ] **Add Open Graph image** — Add a `public/og.png` (1200×630px) and reference it in `Base.astro` with `<meta property="og:image">` for better link previews.
- [ ] **Add Google Analytics** — If you want visitor tracking, add your GA4 tag to `Base.astro` (no cost, no backend needed).
- [ ] **Expand the SOC case study** — The `soc-case-study.astro` page is ready to be expanded with architecture diagrams, screenshots, or benchmark results once your defense is complete.
- [ ] **Add a second project** — When you have more public projects, duplicate a card in `Projects.astro`.

## Before Defense

- [ ] Set availability status to "Open to offers from July 2026" to align with your defense timeline.
- [ ] Keep the SOC case study page unlisted until after defense if you're concerned about IP.
