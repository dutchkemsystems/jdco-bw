# JD & CO BW — Handover Document

**Date:** September 2026
**Project:** Premium B2B custom jackets & outerwear website
**Tech:** Next.js 16.3.5, TypeScript, Tailwind CSS v4, shadcn/ui

---

## 1. Completed Pages & Features

### Pages (35 routes)

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Home page — hero, positioning, collection grid, customization teaser, journey teaser, ordering teaser, why JD, resources strip, project CTA |
| `/about` | Static | Company overview, stats, values, team |
| `/collections` | Static | 8 collection cards with filtering |
| `/collections/[slug]` | SSG | 8 pre-rendered collection detail pages (hero, meta, product grid, CTA) |
| `/products` | Static | Product index with client-side filtering |
| `/products/[slug]` | SSG | 8 pre-rendered product detail pages (gallery, specs, badges, related, CTA) |
| `/customization` | Static | 3-tier customization system (tabs, cards, diagram) |
| `/client-journey` | Static | 7-step client timeline |
| `/ordering-system` | Static | 9-step ordering process grid |
| `/resources` | Static | 4 PDF resources + contact form |
| `/contact` | Static | Contact form with validation |
| `/start-a-project` | Static | 9-step project form (dynamic import) |
| `/start-a-project/success` | Static | Submission confirmation with reference |
| `/privacy` | Static | Privacy policy (placeholder) |
| `/terms` | Static | Terms of service (placeholder) |
| `/cookies` | Static | Cookie policy (placeholder) |
| `/sitemap.xml` | Dynamic | Auto-generated from pages + collections + products |
| `/robots.txt` | Dynamic | Allow all, disallow `/api/` and `/_next/` |

### Features

- **9-step project form** — Zustand store, sessionStorage persistence, query param prefills, beforeunload warning, analytics per step
- **Form validation** — Zod schemas for all 9 steps
- **SEO** — generateMetadata on all pages, JSON-LD (Organization, BreadcrumbList, Product), OG images, canonical URLs
- **A11y** — focus-visible ring, prefers-reduced-motion, skip-to-content, aria-describedby on form errors, nav landmarks
- **Loading/error states** — loading.tsx and error.tsx for marketing route group
- **Performance** — dynamic import for Start a Project form, revalidate=3600 on collection/product pages, @next/bundle-analyzer
- **Footer** — links to all pages including legal
- **Header** — responsive with mobile nav (Sheet component)
- **Shared components** — ThreeDotMark, SectionHeading, CTAButton, BrandSignature

---

## 2. All TODOs in Codebase

### Content Layer (74 total)

| File | Line | TODO |
|------|------|------|
| `lib/analytics.ts` | 17 | replace with real analytics provider |
| `lib/api.ts` | 67 | replace with real API call (submitProject) |
| `lib/api.ts` | 78 | replace with real upload (S3/R2) |
| `lib/api.ts` | 92 | replace with real status lookup |
| `lib/content/collections.ts` | 3 | replace with CMS |
| `lib/content/products.ts` | 3 | replace with CMS — one product per collection |
| `lib/content/industries.ts` | 3 | replace with CMS |
| `lib/content/customization.ts` | 3, 14 | replace with CMS |
| `lib/content/journey.ts` | 3 | replace with CMS |
| `lib/content/ordering.ts` | 3 | replace with CMS |
| `lib/content/resources.ts` | 3 | replace with CMS |
| `components/resources/ContactForm.tsx` | 10, 35 | replace with CMS + real API call |
| `components/resources/ResourceCard.tsx` | 11 | replace with CMS — real PDF assets |
| `components/resources/ResourceList.tsx` | 8 | replace with CMS |
| `components/products/ProductCard.tsx` | 9 | replace with CMS — product image |
| `components/products/ProductGallery.tsx` | 11 | replace with CMS — real product images |
| `components/products/ProductSpecs.tsx` | 8 | replace with CMS |
| `components/products/ProductCTA.tsx` | 8, 17 | replace with CMS |
| `components/products/RelatedProducts.tsx` | 10 | replace with CMS |
| `components/products/CustomizationBadges.tsx` | 14 | replace with CMS |
| `components/collections/CollectionHero.tsx` | 21 | replace with CMS — hero image per collection |
| `components/collections/CollectionMeta.tsx` | 9 | replace with CMS |
| `components/collections/CollectionProductGrid.tsx` | 8 | replace with CMS |
| `components/home/Hero.tsx` | 5, 26, 31 | replace with CMS |
| `components/home/PositioningStatement.tsx` | 1, 8 | replace with CMS |
| `components/home/CollectionGrid.tsx` | 5 | replace with CMS |
| `components/home/CustomizationTeaser.tsx` | 6 | replace with CMS |
| `components/home/JourneyTeaser.tsx` | 5 | replace with CMS |
| `components/home/OrderingTeaser.tsx` | 5 | replace with CMS |
| `components/home/WhyJD.tsx` | 4 | replace with CMS |
| `components/home/ResourcesStrip.tsx` | 6 | replace with CMS |
| `components/home/ProjectCTA.tsx` | 4, 12, 17 | replace with CMS |
| `components/customization/CustomizationTabs.tsx` | 20 | replace with CMS |
| `components/customization/CustomizationCard.tsx` | 20 | replace with CMS |
| `components/customization/CustomizationDiagram.tsx` | 4 | replace with CMS — real diagram or illustration |
| `components/journey/StepCard.tsx` | 8 | replace with CMS |
| `components/journey/JourneySteps.tsx` | 4 | replace with CMS |
| `components/ordering/OrderingSteps.tsx` | 3 | replace with CMS |
| `components/ordering/OrderingNote.tsx` | 3, 14 | replace with CMS |
| `components/layout/Header.tsx` | 6 | replace with CMS — nav items, mobile menu logic |
| `components/layout/Footer.tsx` | 4, 39 | replace with CMS — footer links, company info |
| `app/(marketing)/about/page.tsx` | 58, 62, 82, 201, 205 | replace with CMS |
| `app/(marketing)/collections/page.tsx` | 33, 56 | replace with CMS |
| `app/(marketing)/customization/page.tsx` | 33, 37, 78, 82 | replace with CMS |
| `app/(marketing)/client-journey/page.tsx` | 30, 34, 57, 68, 72 | replace with CMS |
| `app/(marketing)/ordering-system/page.tsx` | 31, 35, 65, 69 | replace with CMS |
| `app/(marketing)/privacy/page.tsx` | 22 | replace with client-approved privacy policy copy |
| `app/(marketing)/terms/page.tsx` | 22 | replace with client-approved terms of service copy |
| `app/(marketing)/cookies/page.tsx` | 22 | replace with client-approved cookie policy copy |

---

## 3. Assets Needed from Client

### Blocking (required before launch)

| Asset | Description | Used In |
|-------|-------------|---------|
| **Logo files** | SVG, PNG — primary, white, mono variants | Header, Footer, Favicon |
| **Brand guidelines** | Official colours, typography, spacing | globals.css tokens, all components |
| **Product photography** | Multiple angles per product (8 products) | ProductGallery, ProductCard |
| **Hero images** | One per collection minimum (8 collections) | CollectionHero, Hero |
| **Final copy** | All product descriptions, features, specs | All content files |
| **About page copy** | Mission, values, team bios | About page |
| **Privacy policy** | Client-approved legal copy | `/privacy` |
| **Terms of service** | Client-approved legal copy | `/terms` |
| **Cookie policy** | Client-approved legal copy | `/cookies` |

### Needed (required for full functionality)

| Asset | Description | Used In |
|-------|-------------|---------|
| **Analytics ID** | GA4, Mixpanel, or PostHog key | lib/analytics.ts |
| **API backend URL** | When real backend is ready | lib/api.ts |
| **S3/R2 bucket** | For file uploads | lib/api.ts (uploadFile) |
| **Email service** | For form submission notifications | lib/api.ts (submitProject) |
| **Domain + SSL** | Production domain | Metadata, sitemap |

### Nice-to-have (can launch without)

| Asset | Description | Used In |
|-------|-------------|---------|
| **Lifestyle photography** | Industry/team photos | About, Resources |
| **PDF resources** | Real spec sheets, capability docs | Resources page |
| **Custom icons** | Brand-specific icon set | Throughout |
| **OG images** | Social sharing images per page | Metadata |
| **Illustrations** | Custom diagrams for customization | CustomizationDiagram |

---

## 4. Platform Decision: CMS & Backend

### Recommended: Headless CMS + Serverless

| Component | Recommendation | Tradeoffs |
|-----------|---------------|-----------|
| **CMS** | Sanity (free tier) | Generous free tier, real-time preview, great Next.js integration. Alternative: Contentful (more enterprise, higher cost) |
| **Backend** | Next.js API Routes + Vercel Functions | Zero infra, scales automatically. Alternative: Separate Express/Nest.js service for complex logic |
| **Database** | None initially (CMS handles content) | Add Prisma + Postgres only if project tracking grows beyond simple form submissions |
| **File Storage** | Cloudflare R2 or S3 | R2 is cheaper, S3 is more established. Both work with presigned URLs |
| **Auth** | Not needed initially | Add Clerk or NextAuth only if admin dashboard is needed |
| **Hosting** | Vercel | Native Next.js support, preview deployments, analytics. Alternative: Cloudflare Pages (cheaper, but less Next.js integration) |

### Why This Stack

1. **Lowest operational cost** — Sanity free tier + Vercel free/hobby tier
2. **Fastest to production** — No server management, auto-scaling
3. **Best DX** — Next.js + Vercel is the intended deployment path
4. **CMS-first content** — Sanity's real-time preview means content editors can work alongside developers
5. **Incremental migration** — Can swap mock APIs one at a time without big-bang rewrite

### Migration Path

```
Phase 1: Sanity setup + content import from lib/content/*.ts
Phase 2: Replace lib/api.ts with real endpoints
Phase 3: Add file uploads (R2 presigned URLs)
Phase 4: Add email notifications (Resend or similar)
Phase 5: Add admin dashboard (if needed)
```

---

## 5. Build Status

```
✅ npm run build    — passes (35 routes)
✅ npm run lint     — 0 errors, 3 warnings (unused params in mocks)
✅ npx tsc --noEmit — no errors
```

**Warnings (all in mock implementations, expected):**
- `ContactForm.tsx:34` — `_data` unused (mock doesn't use form data)
- `api.ts:65` — `data` unused (mock ignores input)
- `api.ts:90` — `_reference` unused (mock ignores input)

---

## 6. Git Log

```
f49b412 docs: comprehensive README with dev setup, structure, swap-in points, and gaps
4676eb8 feat: SEO, sitemap, robots, JSON-LD, a11y polish
8d39669 feat: project form steps 5-9, submit, success, analytics, beforeunload
651ea2b feat: project form steps 1-4, zustand store, validation, query params
e69391a feat: about, resources, contact pages with analytics
41adf89 feat: customization, client journey, ordering system
7922d16 feat: products index and detail pages with SSG
2635283 feat: collections index and detail pages with SSG
0eb76aa feat: home page, shared components, header, footer
3e51b13 scaffold: full project setup with deps, types, content stubs
```
