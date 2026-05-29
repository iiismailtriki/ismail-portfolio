# Ismail Triki — Personal Portfolio

Personal portfolio website built with **Astro** and **Tailwind CSS**. Static, fast, free to host on GitHub Pages.

## Stack

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS
- [GitHub Pages](https://pages.github.com/) — free static hosting
- Google Fonts (DM Serif Display, DM Sans, JetBrains Mono) — loaded via CDN, no npm dependency

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── cv.pdf              ← ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Base.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── soc-case-study.astro
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml
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

## Deploying to GitHub Pages

### 1. Create the repository

Create a GitHub repo named `<your-username>.github.io` (for apex domain) or any name (for `<username>.github.io/<repo>`).

### 2. Update astro.config.mjs

```js
export default defineConfig({
  site: 'https://<your-username>.github.io',
  base: '/',   // or '/repo-name/' if not using apex domain
});
```

### 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 4. Enable GitHub Pages

Go to **Settings → Pages → Source → GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`.

## Customization Checklist

See `CHECKLIST.md` for the full list of things to update before publishing.
# ismail-portfolio
