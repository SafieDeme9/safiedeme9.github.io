# Safietou Deme · portfolio

Source of my personal portfolio: **https://safietoudeme.com**

A single-page site presenting my work as a fullstack developer, on the web and on mobile (React, Next.js, React Native / Expo, Supabase), my experience and how to reach me. It is available in English and Italian, with light and dark themes.

## Stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/) + TypeScript (strict)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- ESLint (typescript-eslint, react-hooks, react-refresh)

No UI kit or i18n library. Translations are a small typed dictionary.

## Project structure

```
src/
  components/         UI components (Header, ProjectCard, CaseStudy, ...)
    sections/         Page sections (About, Projects, Experience, Contact)
  data/               Typed content: projects, jobs, tech stack
  i18n/               Dictionary (EN/IT), language context and provider
  lib/theme.ts        Theme detection/persistence
  types/              Shared types (Project, CaseStudy, Job)
public/               Static assets (WebP images, favicons, Open Graph image)
```

Content lives in `src/data/`, and UI strings live in `src/i18n/dictionary.ts`. The Italian dictionary is typed as the English one, so a missing key is a compile error.

## Running locally

Requires Node.js 20+.

```bash
npm ci
npm run dev       # dev server at http://localhost:5173
npm run lint      # ESLint
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It installs dependencies, runs `npm run build` and publishes `dist/` to GitHub Pages using the official `upload-pages-artifact` / `deploy-pages` actions. There is no manual deploy step.

The custom domain `safietoudeme.com` is configured in the repository's Pages settings, which is why there is no `CNAME` file. Vite's `base` is `/` to match.
