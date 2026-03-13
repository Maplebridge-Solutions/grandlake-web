# GLK Transit — Official Web Presence

The marketing and policy website for **GLK Transit**, the official transit app for the **Municipality of Grand Lake, New Brunswick**. Built and maintained by [Maplebridge Solutions](mailto:Info@maplebridgesolutions.ca).

---

## Overview

This is a Next.js web application that serves as the public-facing site for the GLK Transit mobile app. It provides:

- A **landing page** showcasing the app's core features
- **Legal & policy pages** (Privacy Policy, Terms & Conditions, Wallet & Refund Policy)
- A **Support / Help Center** page
- SEO metadata, Open Graph tags, sitemap, and robots.txt for discoverability

The site is designed to complement the GLK Transit mobile app — giving users a place to review policies, get support, and download the app.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript 5.8 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss` |
| Animations | [Framer Motion](https://motion.dev/) (`motion/react`) |
| UI Primitives | [Radix UI](https://www.radix-ui.com/) — Accordion |
| Icons | [Lucide React](https://lucide.dev/) + custom SVG brand icons |
| Font | [Work Sans](https://fonts.google.com/specimen/Work+Sans) via `next/font/google` (self-hosted) |
| Images | `next/image` with AVIF/WebP optimization |

---

## Project Structure

```
glk-transit/
├── app/
│   ├── layout.tsx              # Root layout — Navbar, Footer, metadata, skip-nav
│   ├── page.tsx                # Home page (assembles section components)
│   ├── globals.css             # Tailwind v4 theme tokens & base styles
│   ├── icon.png                # Favicon (auto-served by Next.js App Router)
│   ├── sitemap.ts              # Generates /sitemap.xml
│   ├── robots.ts               # Generates /robots.txt
│   ├── privacy/page.tsx        # Privacy Policy page
│   ├── terms/page.tsx          # Terms & Conditions page
│   ├── wallet-policy/page.tsx  # Wallet & Refund Policy page
│   └── support/page.tsx        # Support / Help Center page
│
├── components/
│   ├── Layout.tsx              # Navbar (sticky, mobile hamburger) + Footer
│   ├── HomeComponents.tsx      # Shared UI: icons, download buttons, feature cards, policy links
│   ├── Policies.tsx            # All policy page content components
│   ├── sections/
│   │   ├── HeroSection.tsx     # Landing hero with phone mockup and download CTAs
│   │   ├── FeaturesSection.tsx # Core features grid
│   │   ├── FAQSection.tsx      # Accordion FAQ
│   │   └── PoliciesSection.tsx # Policy link cards
│   └── ui/
│       └── accordion.tsx       # Radix UI accordion (shadcn pattern)
│
├── public/
│   └── assets/
│       ├── logo.png            # GLK Transit logo (also used as favicon)
│       └── bus.png             # Bus photo used in hero phone mockup
│
├── next.config.ts              # Next.js config — compression, image formats, console removal
├── postcss.config.mjs          # PostCSS config for Tailwind v4
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9+

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

---

## Design Tokens

All design tokens are defined in `app/globals.css` under `@theme`. The key brand values:

| Token | Value | Usage |
|---|---|---|
| `--color-brand` | `#40843C` | Primary green — buttons, accents, links |
| `--color-brand-light` | `#F2FFF2` | Hero background, light tints |
| `--color-brand-subtle` | `#D4E9D7` | Badge backgrounds, hover states |
| `--color-content-primary` | `#121212` | Body text, headings |
| `--color-content-secondary` | `#4D4D4D` | Subtext, descriptions |
| `--color-surface-page` | `#F9F9F9` | Page background |

---

## Pages

### `/` — Home
The main landing page. Composed of four sections:
- **HeroSection** — headline, download CTAs (App Store / Google Play), phone mockup with bus image
- **FeaturesSection** — Live Tracking, Digital Tickets, Transit Wallet feature cards
- **FAQSection** — Accordion FAQ covering tickets, tracking, refunds, wallet, and offline use
- **PoliciesSection** — Quick links to legal pages

### `/privacy` — Privacy Policy
Details how GLK Transit collects, uses, and protects personal data.

### `/terms` — Terms & Conditions
The terms governing use of the GLK Transit app and transit services.

### `/wallet-policy` — Wallet & Refund Policy
Explains how the Transit Wallet works, top-up methods, and the refund eligibility window.

### `/support` — Support / Help Center
Contact information and common support topics. Email links open Gmail compose directly.

---

## Performance & Accessibility

### Performance
- **LCP image preloaded** — `bus.png` in the hero has `priority` prop, emitting `fetchpriority="high"` and a `<link rel="preload">`
- **Self-hosted font** — `next/font/google` downloads Work Sans at build time, eliminating the render-blocking Google Fonts network request
- **Font display swap** — `display: "swap"` prevents invisible text during font load
- **Image optimization** — `next/image` serves AVIF/WebP automatically; source PNGs are never sent to the browser
- **JS minification** — `console.*` calls stripped in production builds; source maps not sent to the browser
- **Compression** — Gzip/Brotli enabled via `compress: true` in next.config

### Accessibility
- **Skip-to-content link** — visible on focus, jumps keyboard users past the navbar to `#main-content`
- **`prefers-reduced-motion`** — all Framer Motion animations disabled when the OS setting is on
- **Focus styles** — `focus-visible` rings on every interactive element (links, buttons, hamburger)
- **ARIA** — `aria-label` on nav, hamburger button (`aria-expanded`, `aria-controls`), download buttons; `aria-hidden` on all decorative icons and background blobs
- **Semantic HTML** — `<nav>`, `<main id="main-content">`, `<footer>`, section headings in correct order

### SEO
- Full `<title>` template — subpages render as `"Page Title | GLK Transit"`
- Open Graph and Twitter card metadata on all pages
- `/sitemap.xml` — auto-generated via `app/sitemap.ts`
- `/robots.txt` — auto-generated via `app/robots.ts`
- Favicon served from `app/icon.png` (Next.js App Router convention)

---

## Contact

**Maplebridge Solutions** — technology partner for GLK Transit

Email: [Info@maplebridgesolutions.ca](https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca)
