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

## Velog sync

`.github/workflows/velog-sync.yml`이 매일 06:00 KST에 velog GraphQL API에서 글을 가져온다.

- `public/velog/*.md` — 전체 글 본문 백업 (프런트매터 + markdown)
- `public/velog/index.json` — 전체 글 목록 (사이트가 미리보기에서 읽는다)
- `src/data/velog.json` — 사이드바에 노출할 최신 5개

사이드바의 글 제목을 누르면 velog로 나가지 않고 `/posts/:slug`에서 백업본을 바로 읽는다. 내용이 바뀐 게 없으면 커밋하지 않으므로, 새 글을 올린 날에만 커밋이 생긴다. 변경이 있으면 같은 워크플로가 이어서 빌드하고 `gh-pages`에 배포한다. 수동 실행은 Actions 탭의 "Run workflow", 로컬 실행은 `node src/scripts/syncVelog.js`.

## Structure

```
public/
  index.html                 # GA4 gtag + SPA 딥링크 복원
  404.html                   # GitHub Pages SPA 라우트 폴백
  velog/                     # velog 글 백업 + index.json (워크플로가 생성)
  portfolio/                 # portfolio PDFs
src/
  App.jsx                    # routes + GA4 page_view tracking
  components/Navbar.jsx      # navigation + language toggle + velog feed
  data/velog.json            # 최신 velog 글 (워크플로가 생성)
  i18n/LanguageContext.jsx   # KO/EN state (localStorage + ?lang=)
  pages/
    Home.jsx      / HomeEn.jsx
    Resume.jsx    / ResumeEn.jsx     # print-optimized résumé
    Portfolio.jsx / PortfolioEn.jsx
    Post.jsx                   # velog 글 미리보기 (/posts/:slug)
  scripts/syncVelog.js       # velog 수집 스크립트
```

## Branching

- `main` — source of truth
- `gh-pages` — built output published by `npm run deploy` (do not edit by hand)
