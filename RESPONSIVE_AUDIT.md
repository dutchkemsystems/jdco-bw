# Responsive Audit

**Date:** September 2026
**Status:** Report only — no fixes applied

## 1. Fixed Pixel Widths

| File | Line | Class | Notes |
|------|------|-------|-------|
| `components/ui/dropdown-menu.tsx` | 137 | `min-w-[96px]` | Dropdown min-width — acceptable, not a layout issue |
| `components/home/OrderingTeaser.tsx` | 21 | `min-w-[140px]` | Min-width on a card — safe as min, not fixed |
| `components/project/Step5Requirements.tsx` | 84 | `min-w-[40px]` | Input min-width — acceptable for small inputs |
| `components/project/ProjectForm.tsx` | 141 | `min-h-[400px]` | Form min-height — prevents collapse, acceptable |

**Verdict:** All fixed values are `min-*` constraints, not fixed widths. No `w-[Npx]` or `h-[Npx]` on layout elements. ✅ No issues.

## 2. Text Sizes Below 16px on Mobile

| Class | Used On | Concern |
|-------|---------|---------|
| `text-xs` (12px) | Labels, meta text, footers, step indicators | Used sparingly for labels/meta — acceptable |
| `text-sm` (14px) | Body paragraphs, descriptions | ⚠️ Used as body text on some pages |
| `text-xs` on legal pages | "Legal" label, "Last updated" | Meta text — acceptable |

**Files with `text-sm` as primary body text:**
- `components/layout/Footer.tsx` — company description
- `components/home/Hero.tsx` — hero subtitle
- `components/contact/ContactContent.tsx` — body text
- `components/project/StartProjectContent.tsx` — form descriptions
- Various step components — form field descriptions

**Recommendation:** `text-sm` (14px) is below the 16px minimum for body text on mobile. Consider using `text-base` (16px) as the default and `text-sm` only for labels/meta.

## 3. Grids Missing Responsive Variants

| File | Line | Current Class | Issue |
|------|------|---------------|-------|
| `app/(marketing)/about/page.tsx` | 172 | `grid grid-cols-2` | No `sm:` or `md:` prefix — 2-col on all sizes |

**All other grids** have responsive variants (`sm:grid-cols-2`, `md:grid-cols-3`, `lg:grid-cols-4`, etc.). ✅ Only one grid lacks responsive breakpoints.

**Note:** The `grid grid-cols-2` at line 172 in about/page.tsx is a small stat grid (values like "48h", "72h") that stays 2-col on all sizes. This is intentional — the items are short and 2-col works at all widths.

## 4. Icon Buttons Smaller Than 44×44px

| File | Line | Class | Size | Concern |
|------|------|-------|------|---------|
| `components/project/StepIndicator.tsx` | 30 | `h-8 w-8` | 32×32px | ⚠️ Step circle — decorative, not interactive button |
| `components/home/ResourcesStrip.tsx` | 24 | `h-8 w-8` | 32×32px | ✅ Icon only, wrapped in clickable card |
| `components/resources/ResourceCard.tsx` | 25 | `h-8 w-8` | 32×32px | ✅ Icon only, wrapped in clickable card |
| `components/project/Step4Branding.tsx` | 77 | `h-8 w-8` | 32×32px | ✅ Upload area icon, not a button |
| `components/project/Step7Attachments.tsx` | 104 | `h-8 w-8` | 32×32px | ✅ Upload area icon, not a button |
| `components/contact/ContactContent.tsx` | 65 | `h-10 w-10` | 40×40px | ⚠️ Contact info icon — decorative, not interactive |
| `components/products/ProductSpecs.tsx` | 36 | `h-10 w-10` | 40×40px | ⚠️ Spec icon — decorative, not interactive |

**Verdict:** All `h-8 w-8` (32px) icons are decorative or wrapped in larger clickable areas. The `h-10 w-10` (40px) icons are also decorative. None are standalone interactive buttons below 44px. ✅ No critical issues, but the 40px icons could be bumped to 44px for touch targets if they become clickable.

## Summary

| Category | Findings | Severity |
|----------|----------|----------|
| Fixed pixel widths | 0 issues (all are min-* constraints) | ✅ |
| Body text < 16px | `text-sm` (14px) used as body text in ~5 components | ⚠️ Medium |
| Grids missing responsive | 1 instance (about/stats — intentional) | ✅ |
| Icon buttons < 44px | 0 interactive buttons below threshold | ✅ |

### Recommended Fixes (for next pass)

1. **text-sm body text:** Change `text-sm` to `text-base` for body paragraphs in:
   - `components/layout/Footer.tsx`
   - `components/home/Hero.tsx`
   - `components/contact/ContactContent.tsx`
   - `components/project/StartProjectContent.tsx`
   - Step component descriptions

2. **Optional:** Bump `h-10 w-10` decorative icons to `h-11 w-11` (44px) if they ever become interactive.
