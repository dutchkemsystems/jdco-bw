import type { CustomizationTier } from "@/types"

// TODO: replace with CMS
export interface CustomizationTierData {
  tier: CustomizationTier
  name: string
  tagline: string
  description: string
  features: string[]
  turnaround: string
  minimumOrder: string
}

// TODO: replace with CMS
export const customizationTiers: CustomizationTierData[] = [
  {
    tier: "PLAIN",
    name: "Plain",
    tagline: "Clean. Ready. Yours.",
    description:
      "Standard garments in your chosen colour, ready for off-the-shelf branding. Fastest turnaround, lowest minimum.",
    features: [
      "Wide colour selection",
      "Standard sizing range",
      "Ready for embroidery or print",
      "Fastest turnaround",
    ],
    turnaround: "2–3 weeks",
    minimumOrder: "20 units",
  },
  {
    tier: "TRIMMED",
    name: "Trimmed",
    tagline: "Detail that distinguishes.",
    description:
      "Custom trim, piping, zipper colours, and panel detailing. Your identity in every seam.",
    features: [
      "Custom contrast piping",
      "Branded zip pulls",
      "Colour-matched buttons",
      "Inner lining options",
      "Embroidered or printed logos",
    ],
    turnaround: "4–6 weeks",
    minimumOrder: "50 units",
  },
  {
    tier: "SUBLIMATION",
    name: "Sublimation",
    tagline: "Every surface, your surface.",
    description:
      "Full-coverage sublimation printing across the entire garment. Unlimited colours, unlimited patterns. No restriction on design.",
    features: [
      "Full-garment print coverage",
      "Unlimited colours",
      "Photographic detail",
      "No minimum colour restrictions",
      "Permanent dye — no peeling",
    ],
    turnaround: "6–8 weeks",
    minimumOrder: "100 units",
  },
]

export function getCustomizationTierData(tier: CustomizationTier) {
  return customizationTiers.find((t) => t.tier === tier)
}
