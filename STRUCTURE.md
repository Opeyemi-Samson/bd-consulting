# BD Consulting — Project Structure

bd-consulting/
├── src/
│   ├── app/                        # Next.js App Router (Server Components by default)
│   │   ├── layout.tsx              # Root layout — fonts, metadata, providers
│   │   ├── page.tsx                # Homepage (Server Component, composes sections)
│   │   ├── globals.css             # Tailwind layers + design tokens (CSS variables)
│   │   ├── sitemap.ts              # Dynamic sitemap.xml generation
│   │   ├── robots.ts               # robots.txt generation
│   │   ├── (marketing)/            # Route group for public marketing pages
│   │   │   ├── about/page.tsx
│   │   │   ├── approach/page.tsx
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx # Dynamic service pages (generateStaticParams)
│   │   │   ├── case-studies/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── insights/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   └── consultation/page.tsx
│   │   └── api/
│   │       └── consultation/route.ts   # Route handler for form submission
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx          # Client Component — scroll/glass behavior
│   │   │   ├── mobile-nav.tsx      # Client Component — sheet/drawer nav
│   │   │   └── footer.tsx          # Server Component — static content
│   │   ├── sections/               # One file per homepage section (all Server
│   │   │   ├── hero.tsx            # Components unless they need interactivity,
│   │   │   ├── client-logos.tsx    # in which case only the interactive part
│   │   │   ├── trust-indicators.tsx# is extracted into a small Client Component)
│   │   │   ├── services.tsx
│   │   │   ├── who-we-help.tsx
│   │   │   ├── why-choose-us.tsx
│   │   │   ├── process.tsx
│   │   │   ├── case-studies.tsx
│   │   │   ├── insights.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── faq.tsx
│   │   │   └── cta.tsx
│   │   ├── ui/                     # shadcn/ui primitives (button, accordion, etc.)
│   │   └── shared/                 # Cross-page reusable building blocks
│   │       ├── section-heading.tsx
│   │       ├── reveal.tsx          # Scroll-reveal wrapper (Framer Motion)
│   │       ├── animated-counter.tsx# GSAP count-up for stats
│   │       ├── cta-button.tsx
│   │       └── logo.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts                # cn() helper, misc utilities
│   │   ├── constants.ts            # Nav links, lifecycle data, services data
│   │   ├── metadata.ts             # Shared SEO metadata builder
│   │   └── validations/
│   │       └── consultation.ts     # Zod schemas for forms
│   │
│   ├── types/
│   │   └── index.ts                # Shared TypeScript types
│   │
│   └── hooks/
│       └── use-scroll-position.ts  # Navbar glass-on-scroll hook
│
├── public/
│   ├── images/
│   └── logo.svg
│
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── components.json                 # shadcn/ui config
├── tsconfig.json
└── package.json

## Architectural rules this structure enforces

1. **Server Components by default.** Only `navbar.tsx`, `mobile-nav.tsx`, form
   components, and animation wrappers are marked `"use client"`. Everything
   else — including every homepage section — renders on the server, which
   keeps the JS bundle minimal and content immediately crawlable for SEO.
2. **Data lives in `lib/constants.ts`**, not inline in components — sections
   are pure presentation, data is swappable (and eventually CMS-replaceable)
   without touching markup.
3. **One section = one file.** No monolithic homepage file — each section in
   `components/sections` is independently reviewable, testable, and reusable.
4. **Route groups (`(marketing)`)** keep the root `app/` directory clean and
   let internal pages share a layout without affecting the URL structure.
