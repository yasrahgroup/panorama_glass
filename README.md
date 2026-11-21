# Panorama Glass Factory

Corporate website for Panorama Glass Factory, a glass processor and architectural glazing supplier based in New Industrial Area, Doha, Qatar.

## Stack

- React 19 + TypeScript (strict)
- Vite 8 + Tailwind CSS 4
- Motion for animation
- Lucide React for interface icons
- Node's built-in test runner via `tsx` for unit tests
- ESLint 9 (flat config) + Prettier

## Requirements

- Node.js 22 or newer
- npm 10 or newer

## Getting started

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:3000`.

## Scripts

| Command                | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the Vite development server        |
| `npm run build`        | Type-check and create a production build |
| `npm run preview`      | Preview the production build locally     |
| `npm run typecheck`    | Run TypeScript without emitting files    |
| `npm run lint`         | Run ESLint                               |
| `npm run lint:fix`     | Run ESLint and apply safe fixes          |
| `npm run format`       | Format supported files with Prettier     |
| `npm run format:check` | Check formatting without modifying files |
| `npm run test`         | Run unit tests                           |
| `npm run clean`        | Remove the production build output       |

## Project layout

```text
src/
├── app/                  Application shell, providers, and route rendering
├── assets/images/        Local photography
├── components/
│   ├── layout/           Navbar, Footer, and page layout shell
│   ├── ui/               Reusable design-system primitives
│   └── ...               Shared feature components
├── data/                 Current content and translation data
├── lib/                  Framework-agnostic helpers
├── pages/                Route-level page components
├── styles/               Tailwind entry and design tokens
├── types/                Shared TypeScript contracts
├── utils/                Pure helpers and unit tests
└── main.tsx              React entry point
```

The source is being migrated incrementally to a feature-based structure. Pages will compose sections, sections will compose reusable UI components, and all copy will move to typed content and localization files.

## Current status

- Client-side routing supports Home, Our Story, Our Portfolio, Request a Quote, and Contact Us.
- English and Arabic navigation/footer strings are available; full page localization is pending.
- Contact and quote forms validate locally but are **not connected to a backend**.
- Some content is placeholder copy and must be replaced with client-approved information before launch.
- Brand and photography assets currently load from remote URLs and must be localized before production.
- Documentation for the target architecture, design system, and integration points will be added as the refactor phases complete.
# panorama_glass
