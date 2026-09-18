import type { Resource } from "@/types"

// TODO: replace with CMS
export const resources: Resource[] = [
  {
    slug: "fabric-guide",
    title: "Fabric & Material Guide",
    description:
      "A comprehensive guide to the fabrics we use — from ripstop cotton to technical synthetics. Understand weight, durability, and application.",
    type: "pdf",
    href: "/resources/fabric-guide.pdf",
  },
  {
    slug: "customization-tiers",
    title: "Customization Tier Breakdown",
    description:
      "Compare Plain, Trimmed, and Sublimation tiers — costs, turnaround times, minimums, and what each includes.",
    type: "pdf",
    href: "/resources/customization-tiers.pdf",
  },
  {
    slug: "branding-specifications",
    title: "Branding Specifications",
    description:
      "Logo placement guidelines, file format requirements, and embroidery versus print recommendations for your organisation.",
    type: "pdf",
    href: "/resources/branding-specifications.pdf",
  },
  {
    slug: "size-guide",
    title: "Size Guide",
    description:
      "Full sizing chart across all garment types — chest, waist, length, and sleeve measurements for men's, women's, and unisex fits.",
    type: "pdf",
    href: "/resources/size-guide.pdf",
  },
]

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug)
}
