# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4

Commands
- Install dependencies
  - npm install
- Development server (Turbopack)
  - npm run dev
  - Opens http://localhost:3000
- Production build (Turbopack)
  - npm run build
- Start production server
  - npm start
- Lint
  - Lint all files: npm run lint
  - Auto-fix: npx eslint . --fix
- Type-check
  - npx tsc --noEmit
- Tests
  - No test runner is configured in this repo. If tests are added (e.g., Jest or Vitest), document single-test commands here.

Architecture overview
- App Router
  - app/layout.tsx defines the HTML shell and global fonts using next/font (Geist Sans/Mono). It also imports global styles from app/globals.css and applies font CSS variables to the body.
  - app/page.tsx is the home route. It renders links and icons sourced from public/*.svg using next/image.
  - Static assets live in public/ and are referenced with absolute paths (e.g., /next.svg).
- Styling (Tailwind v4)
  - app/globals.css imports Tailwind via @import "tailwindcss" and defines theme tokens via @theme inline. Colors and font variables are driven by CSS custom properties and updated for dark mode with prefers-color-scheme.
- TypeScript config
  - tsconfig.json uses bundler moduleResolution and strict settings. A path alias "@/*" points to the repository root, enabling absolute-style imports (e.g., import x from "@/app/..." ).
- Linting
  - eslint.config.mjs uses FlatConfig and extends "next/core-web-vitals" and "next/typescript". Common output/build directories are ignored (node_modules, .next, out, build) as well as next-env.d.ts.
- Next.js config
  - next.config.ts currently contains the default empty NextConfig; modify here for custom build/runtime options as needed.

Notes for agents working in this repo
- Use the provided npm scripts for build/run/lint; these invoke Next.js with Turbopack where applicable.
- Respect the @/* path alias when generating imports. The alias resolves to the repository root per tsconfig.json.
- Prefer placing new routes and layouts under app/ (App Router). Keep shared UI in a components/ or app/(group)/components/ folder if/when introduced; import using the @ alias.
- Follow the existing ESLint configuration; run "npm run lint" and, if appropriate, "npx eslint . --fix" after code edits.
