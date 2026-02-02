# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rudra Digital is a single-page marketing/landing website for a web design business targeting local UK businesses. Built with React 19, TypeScript, and Vite, styled with Tailwind CSS via CDN.

## Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server on http://localhost:3000
npm run build  # Production build to dist/
npm run preview # Preview production build
```

## Architecture

**Entry Flow:** `index.html` → `index.tsx` → `App.tsx` → Section components

**Styling:** Tailwind CSS loaded via CDN in `index.html`. Custom color tokens defined inline:
- `rudra-bg` (#F8FAFC) - Background
- `rudra-text` (#1F2933) - Text
- `rudra-accent` (#4F6D7A) - Accent/buttons
- `rudra-accent-hover` (#3E5661) - Hover states

**Path Alias:** `@/*` maps to project root (configured in both `vite.config.ts` and `tsconfig.json`)

**Components:** All in `/components/` as named exports with `.tsx` extension:
- `Header` - Fixed navbar with scroll effects, mobile hamburger menu
- `Hero`, `Services`, `WhoIsThisFor`, `HowItWorks`, `Contact`, `Footer` - Page sections
- `Button` - Reusable button/link with `primary`/`secondary`/`outline` variants

**Navigation:** Smooth-scroll anchor links (`#services`, `#who-is-this-for`, `#how-it-works`, `#contact`) with `scroll-margin-top: 90px` for fixed header offset.

## Environment

Set `GEMINI_API_KEY` in `.env.local` (exposed as `process.env.GEMINI_API_KEY` and `process.env.API_KEY` via Vite define).
