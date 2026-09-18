import type { Product } from "@/types"

// TODO: replace with CMS — one product per collection for grid demo
export const products: Product[] = [
  {
    slug: "executive-blazer-corporate",
    name: "Executive Blazer",
    collection: "corporate",
    category: "Blazers",
    description:
      "Structured single-breasted blazer with contrast lining. Designed for boardrooms, conferences, and institutional representation.",
    images: ["/images/placeholder.svg"],
    colours: ["Navy", "Charcoal", "Black"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    features: [
      "Fully lined interior",
      "Interior breast pocket",
      "Contrast piping on lapel",
      "Machine washable",
    ],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
    brandingOptions: ["Embroidered logo", "Woven patch", "Printed crest"],
    industries: ["corporate", "government", "finance"],
    related: ["boardroom-jacket-corporate"],
  },
  {
    slug: "match-day-jacket-sport",
    name: "Match Day Jacket",
    collection: "sport",
    category: "Track Jackets",
    description:
      "Full-zip warm-up jacket with raglan sleeves and team-colour panel options. Worn on the bench, built for the pitch.",
    images: ["/images/placeholder.svg"],
    colours: ["Team Red / Black", "Team Blue / White", "Custom"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    features: [
      "Raglan sleeve construction",
      "Zippered side pockets",
      "Inner mesh lining",
      "Embroidery-ready chest panel",
    ],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
    brandingOptions: ["Team crest embroidery", "Sponsor print", "Sublimated design"],
    industries: ["sport", "fitness", "clubs"],
    related: ["warm-up-top-sport"],
  },
  {
    slug: "field-safari-jacket",
    name: "Field Safari Jacket",
    collection: "safari",
    category: "Safari Jackets",
    description:
      "Four-pocket bush jacket in ripstop cotton. Functional for the field, refined for the lodge.",
    images: ["/images/placeholder.svg"],
    colours: ["Khaki", "Olive", "Stone"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    features: [
      "Four utility pockets",
      "Internal drawstring waist",
      "Ventilated back yoke",
      "Reinforced elbows",
    ],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
    brandingOptions: ["Embroidered logo", "Leather patch", "Sublimated panel"],
    industries: ["safari", "tourism", "conservation"],
    related: ["lodge-winter-safari"],
  },
  {
    slug: "hi-vis-mining",
    name: "Hi-Vis Site Jacket",
    collection: "mining",
    category: "Safety Jackets",
    description:
      "SABS-compliant high-visibility jacket with reflective tape and reinforced seams. Made for the site, not the boardroom.",
    images: ["/images/placeholder.svg"],
    colours: ["Hi-Vis Yellow", "Hi-Vis Orange"],
    sizes: ["M", "L", "XL", "2XL", "3XL"],
    features: [
      "SABS-compliant reflective tape",
      "Waterproof outer shell",
      "Fleece lining",
      "Radio loop on shoulder",
    ],
    customization: ["PLAIN", "TRIMMED"],
    brandingOptions: ["Reflective logo print", "Embroidered company name"],
    industries: ["mining", "industrial", "construction"],
    related: ["hard-shell-mining"],
  },
  {
    slug: "fleet-driver-jacket",
    name: "Fleet Driver Jacket",
    collection: "logistics",
    category: "Fleet Jackets",
    description:
      "Zip-through driver jacket with fleet branding zones. Consistent identity across every vehicle, every route.",
    images: ["/images/placeholder.svg"],
    colours: ["Black / Hi-Vis Yellow", "Navy / Silver"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    features: [
      "Contrast sleeve panels",
      "Full zip with chin guard",
      "Pen pocket on left sleeve",
      "Machine washable at 40°C",
    ],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
    brandingOptions: ["Reflective print", "Embroidered logo", "Sublimated panels"],
    industries: ["logistics", "transport", "warehousing"],
    related: ["warehouse-jacket-logistics"],
  },
  {
    slug: "operator-jacket-tactical",
    name: "Operator Jacket",
    collection: "tactical",
    category: "Tactical Jackets",
    description:
      "Matte-finish tactical jacket with concealed zip and low-profile pockets. Authority without announcement.",
    images: ["/images/placeholder.svg"],
    colours: ["Matte Black", "Dark Olive", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    features: [
      "Concealed front zip",
      "Low-profile chest pockets",
      "Silent zip pulls",
      "Reinforced shoulders",
    ],
    customization: ["PLAIN", "TRIMMED"],
    brandingOptions: ["Subdued embroidery", "Tonal logo print"],
    industries: ["security", "tactical", "protection"],
    related: ["patrol-fleece-tactical"],
  },
  {
    slug: "clinical-smock-healthcare",
    name: "Clinical Smock",
    collection: "healthcare",
    category: "Medical Outerwear",
    description:
      "Lightweight, antimicrobial smock with snap-front closure. Designed for rounds, shifts, and clinical environments.",
    images: ["/images/placeholder.svg"],
    colours: ["White", "Sky Blue", "Mint Green"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    features: [
      "Antimicrobial fabric treatment",
      "Snap-front closure",
      "Chest ID pocket",
      "Bartacked stress points",
    ],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
    brandingOptions: ["Embroidered name", "Hospital logo", "Department colour panel"],
    industries: ["healthcare", "medical", "hospital"],
    related: ["ward-jacket-healthcare"],
  },
  {
    slug: "campus-bomber-campus",
    name: "Campus Bomber",
    collection: "campus",
    category: "Bomber Jackets",
    description:
      "Classic bomber silhouette with school or university branding. From orientation to graduation — wear the name.",
    images: ["/images/placeholder.svg"],
    colours: ["School Navy", "School Maroon", "Custom"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    features: [
      "Ribbed cuffs and hem",
      "Zip-through front",
      "Embroidery-ready back panel",
      "Lined interior",
    ],
    customization: ["PLAIN", "TRIMMED", "SUBLIMATION"],
    brandingOptions: ["School crest embroidery", "Year print", "Sublimated design"],
    industries: ["education", "school", "university"],
    related: ["prefect-blazer-campus"],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collection === collectionSlug)
}
