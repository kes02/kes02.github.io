# kes02.github.io

정희진(Heejin Jung)의 이력서·포트폴리오 웹사이트 — **https://kes02.github.io**

A bilingual (Korean / English) résumé & portfolio single-page app, deployed to GitHub Pages.

## Features

- 🌐 **KO / EN toggle** — the whole site in both languages (choice persists; `?lang=en` gives a shareable English link)
- 📄 **Print-ready résumé** — the "Save as PDF" button renders a clean 1–2 page document via `@media print`
- 🗂️ **Portfolio** — project write-ups with downloadable PDFs
- 📊 **Anonymous analytics** — Google Analytics 4 (page views + a `save_resume_pdf` event)

## Tech stack

- React 19 (Create React App)
- react-router-dom 7
- gh-pages (deployment)

## Getting started

```bash
npm install
npm start        # dev server → http://localhost:3000
```

## Build & deploy

```bash
npm run build    # production build → build/
npm run deploy   # build + publish to the gh-pages branch (served by GitHub Pages)
```

## Structure

```
public/
  index.html                 # GA4 gtag
  portfolio/                 # portfolio PDFs
src/
  App.jsx                    # routes + GA4 page_view tracking
  components/Navbar.jsx      # navigation + language toggle
  i18n/LanguageContext.jsx   # KO/EN state (localStorage + ?lang=)
  pages/
    Home.jsx      / HomeEn.jsx
    Resume.jsx    / ResumeEn.jsx     # print-optimized résumé
    Portfolio.jsx / PortfolioEn.jsx
```

## Branching

- `main` — source of truth
- `gh-pages` — built output published by `npm run deploy` (do not edit by hand)
