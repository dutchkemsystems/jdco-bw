import type { Collection } from "@/types"

// TODO: replace with CMS
export const collections: Collection[] = [
  {
    slug: "corporate",
    name: "Corporate Collection",
    tagline: "Professional identity, manufactured.",
    description:
      "Bespoke jackets and outerwear for corporate organisations, government departments, and institutional teams. Designed to project authority, cohesion, and professionalism.",
    accent: "corporate",
    industries: ["government", "corporate", "finance", "legal", "consulting"],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
  },
  {
    slug: "sport",
    name: "Sport Collection",
    tagline: "Performance meets identity.",
    description:
      "Technical jackets and warm-up gear for sports teams, athletic clubs, and fitness organisations. Built for movement, designed for pride.",
    accent: "sport",
    industries: ["sport", "fitness", "athletics", "clubs"],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
  },
  {
    slug: "safari",
    name: "Safari Collection",
    tagline: "Built for the bush. Designed for the brand.",
    description:
      "Durable, functional outerwear for safari operators, game reserves, and wildlife tourism. Rugged construction meets refined identity.",
    accent: "safari",
    industries: ["safari", "tourism", "wildlife", "conservation"],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
  },
  {
    slug: "mining",
    name: "Mining Collection",
    tagline: "Engineered for the site. Designed for the team.",
    description:
      "Heavy-duty workwear and safety-compliant outerwear for mining operations, logistics hubs, and industrial sites.",
    accent: "mining",
    industries: ["mining", "industrial", "construction", "engineering"],
    customization: ["PLAIN", "TRIMMED"],
  },
  {
    slug: "logistics",
    name: "Logistics Collection",
    tagline: "Visibility. Identity. Durability.",
    description:
      "High-visibility and branded outerwear for logistics, transport, and supply chain operations. Fleet-ready, shift-tested.",
    accent: "logistics",
    industries: ["logistics", "transport", "supply-chain", "warehousing"],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
  },
  {
    slug: "tactical",
    name: "Tactical Collection",
    tagline: "Silent authority.",
    description:
      "Matte, low-profile outerwear for security firms, tactical units, and private protection detail. Functional, discreet, commanding.",
    accent: "tactical",
    industries: ["security", "tactical", "protection", "defence"],
    customization: ["PLAIN", "TRIMMED"],
  },
  {
    slug: "healthcare",
    name: "Healthcare Collection",
    tagline: "Clinical precision. Human identity.",
    description:
      "Professional outerwear for healthcare organisations, hospitals, and medical teams. Hygienic, identifiable, and built for long shifts.",
    accent: "healthcare",
    industries: ["healthcare", "medical", "hospital", "pharmaceutical"],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
  },
  {
    slug: "campus",
    name: "Campus Collection",
    tagline: "Wear the institution.",
    description:
      "School, university, and campus outerwear that builds community and institutional pride. From prefects to graduation.",
    accent: "campus",
    industries: ["education", "school", "university", "campus"],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
  },
]

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug)
}
