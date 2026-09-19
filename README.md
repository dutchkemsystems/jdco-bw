# JD & CO BW

Premium B2B catalogue and customization platform for custom manufactured jackets and outerwear.

## Tech Stack

- **Framework:** Next.js 16.3.5 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-based config via `@theme`)
- **Components:** shadcn/ui (12 components)
- **Fonts:** Fraunces (serif), Inter (sans), JetBrains Mono — self-hosted via `next/font`
- **State:** Zustand with sessionStorage persistence
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (Turbopack)
npm run dev

# Open in browser
open http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx                     # Root layout (fonts, TooltipProvider)
│   ├── globals.css                    # Design tokens (Tailwind v4 @theme)
│   ├── page.tsx                       # Redirects to / (marketing home)
│   ├── sitemap.ts                     # Dynamic sitemap
│   ├── robots.ts                      # Robots.txt
│   ├── not-found.tsx                  # 404 page
│   └── (marketing)/
│       ├── layout.tsx                 # Header + Footer wrapper
│       ├── page.tsx                   # Home page
│       ├── about/page.tsx
│       ├── collections/
│       │   ├── page.tsx               # Collection index
│       │   └── [slug]/page.tsx        # Collection detail (SSG)
│       ├── products/
│       │   ├── page.tsx               # Product index (filterable)
│       │   └── [slug]/page.tsx        # Product detail (SSG)
│       ├── customization/page.tsx
│       ├── client-journey/page.tsx
│       ├── ordering-system/page.tsx
│       ├── resources/page.tsx
│       ├── contact/page.tsx
│       └── start-a-project/
│           ├── page.tsx               # 9-step form
│           └── success/page.tsx       # Submission confirmation
│
├── components/
│   ├── ui/                            # shadcn/ui primitives
│   ├── shared/                        # BrandSignature, ThreeDotMark, CTAButton, SectionHeading
│   ├── layout/                        # Header, Footer, MobileNav, Breadcrumbs
│   ├── home/                          # Hero, CollectionGrid, CustomizationTeaser, etc.
│   ├── collections/                   # CollectionHero, CollectionCard, CollectionMeta
│   ├── products/                      # ProductCard, ProductGallery, ProductSpecs
│   ├── customization/                 # CustomizationTabs, Card, Diagram
│   ├── journey/                       # JourneySteps, StepCard
│   ├── ordering/                      # OrderingSteps, OrderingNote
│   ├── resources/                     # ResourceCard, ResourceList, ContactForm
│   ├── project/                       # ProjectForm, Step1-9, StepIndicator, StepNav
│   └── contact/                       # ContactContent
│
├── lib/
│   ├── api.ts                         # Mock API (submitProject, uploadFile, getProjectStatus)
│   ├── analytics.ts                   # Analytics stub (track function)
│   ├── seo.ts                         # generatePageMetadata, JSON-LD helpers
│   ├── utils.ts                       # cn() utility
│   ├── stores/
│   │   └── projectForm.ts             # Zustand store (sessionStorage)
│   ├── validation/
│   │   └── projectForm.ts             # Zod schemas (steps 1-8)
│   └── content/                       # Static content (TODO: replace with CMS)
│       ├── collections.ts             # 8 collections
│       ├── products.ts                # 8 products (1 per collection)
│       ├── industries.ts              # 9 industries
│       ├── customization.ts           # 3 tiers
│       ├── journey.ts                 # 7-step journey
│       ├── ordering.ts                # 9-step ordering
│       └── resources.ts               # 4 PDF resources
│
└── types/
    └── index.ts                       # All TypeScript interfaces
```

## CMS / Backend Swap-In Points

### Content Layer (`lib/content/*.ts`)

All content is currently static TypeScript files. Every file is marked with `// TODO: replace with CMS`.

To swap in a CMS (Sanity, Strapi, Contentful, etc.):

1. Create API client in `lib/cms.ts`
2. Replace static imports in each content file with async fetches
3. Update page components to use `async` server components with `await`

Key files:
- `lib/content/collections.ts` — 8 collections with slugs, names, descriptions, accents
- `lib/content/products.ts` — 8 products with specs, images, features
- `lib/content/industries.ts` — 9 industries
- `lib/content/customization.ts` — 3 customization tiers
- `lib/content/journey.ts` — 7-step client journey
- `lib/content/ordering.ts` — 9-step ordering process
- `lib/content/resources.ts` — 4 PDF download resources

### API Layer (`lib/api.ts`)

Mock API with artificial delays. Function signatures are the contract — swap implementations without changing consumers.

```typescript
// Current: mock
export async function submitProject(data: SubmitProjectInput): Promise<{ reference: string }> {
  await delay(1500)
  return { reference: generateReference() }
}

// Swap: real API
export async function submitProject(data: SubmitProjectInput): Promise<{ reference: string }> {
  const res = await fetch(`${process.env.API_BASE_URL}/projects`, {
    method: "POST",
    body: JSON.stringify(data),
  })
  return res.json()
}
```

Functions to swap:
- `submitProject()` — project enquiry submission
- `uploadFile()` — file upload (currently mocked, would use S3/R2 presigned URLs)
- `getProjectStatus()` — status lookup

### Analytics (`lib/analytics.ts`)

Stub `track()` function. Replace with GA4, Mixpanel, PostHog, etc.

```typescript
// Swap: real provider
export function track(event: AnalyticsEvent): void {
  window.gtag?.("event", event.name, event.properties)
}
```

## Replacing Placeholder Content

### Images

Currently using SVG placeholders in `/public/placeholders/`:
- `hero.svg` — hero background
- `jacket.svg` — product/collection cards
- `resource.svg` — resource cards

Replace with real photography:
1. Add images to `/public/images/` (or use external CDN)
2. Update `src` in components that reference placeholders
3. Update `images` arrays in `lib/content/products.ts`

### Copy

All text is marked with `{/* TODO: replace with CMS */}` comments. Search for these to find copy that needs client approval.

### Fonts

Self-hosted via `next/font` in `src/app/layout.tsx`:
- Fraunces (serif) — headings
- Inter (sans) — body
- JetBrains Mono (mono) — code/references

To change fonts: update the `next/font/google` imports in `layout.tsx` and the CSS custom properties in `globals.css`.

### Design Tokens

Defined in `src/app/globals.css` via Tailwind v4 `@theme inline`:
- Brand colours: ink, graphite, bone, sand, clay, clay-deep, line, muted-text
- Collection accents: corporate, sport, safari, mining, logistics, tactical, healthcare, campus
- Fonts, radius, spacing

## Assets Needed from Client

### Brand Identity
- [ ] Logo files (SVG, PNG) — primary, white, mono variants
- [ ] Brand guidelines document
- [ ] Official colour palette (hex/RGB values)
- [ ] Typography specifications

### Photography
- [ ] Hero images (one per collection, minimum)
- [ ] Product photography (multiple angles per product)
- [ ] Team/about photography
- [ ] Lifestyle/industry photography

### Content
- [ ] Final product copy (names, descriptions, features)
- [ ] Industry-specific copy
- [ ] About page copy (mission, values, team)
- [ ] Privacy policy
- [ ] Terms of service
- [ ] Cookie policy

### Technical
- [ ] Analytics IDs (GA4, Mixpanel, etc.)
- [ ] API backend URL (when ready)
- [ ] S3/R2 bucket for file uploads
- [ ] Domain and SSL setup
- [ ] Email service for form submissions

### Collection Colours
- [ ] Confirm/adjust accent colours for each collection
- [ ] Provide actual fabric colour references

## Known Gaps / Not-Yet-Wired

### Content
- All copy is placeholder — needs client approval
- Product images are SVG placeholders
- Collection hero images are placeholders
- No real photography anywhere

### Functionality
- File upload in Step 7 is mocked — no real storage
- Form submission is mocked — no real backend
- Analytics is a console.log stub
- No email notifications on form submission
- No admin dashboard for viewing submissions
- No project status tracking (placeholder exists)

### SEO
- `metadataBase` warns about localhost in dev — resolves in production
- OG images are default — need custom images per page
- No structured data for FAQ or HowTo schemas

### A11y
- Keyboard navigation works but not fully tested with screen readers
- No skip-to-content on root layout (only marketing)
- Form error focus management could be improved

### Performance
- No image optimization yet (using SVG placeholders)
- No lazy loading on below-fold sections
- No ISR/SSG for product pages with CMS data

### Missing Pages
- Privacy policy page
- Terms of service page
- Cookie policy page
- 404 page exists but is minimal

### Testing
- No unit tests
- No integration tests
- No E2E tests
- No visual regression tests

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Environment Variables

```env
# When ready to connect real backend
API_BASE_URL=https://api.jdco-bw.co.bw
ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://jdco-bw.co.bw
```

## Git Workflow

```bash
# Current branch structure
master          # Production-ready code

# Commit convention
feat: description     # New features
fix: description      # Bug fixes
chore: description    # Maintenance
```

## License

Proprietary — JD & CO BW. All rights reserved.
