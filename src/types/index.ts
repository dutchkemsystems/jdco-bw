// ─── Collection & Product Types ──────────────────────────────────────────────

export type CustomizationTier = "PLAIN" | "TRIMMED" | "SUBLIMATION"

export type CollectionAccent =
  | "corporate"
  | "sport"
  | "safari"
  | "mining"
  | "logistics"
  | "tactical"
  | "healthcare"
  | "campus"

export interface Collection {
  slug: string
  name: string
  tagline?: string
  description: string
  accent: CollectionAccent
  industries: string[]
  customization: CustomizationTier[]
}

export interface Product {
  slug: string
  name: string
  collection: string // collection slug
  category: string
  description: string
  images: string[]
  colours: string[]
  sizes: string[]
  features: string[]
  customization: CustomizationTier[]
  brandingOptions: string[]
  industries: string[]
  related: string[] // product slugs
}

// ─── Resources ──────────────────────────────────────────────────────────────

export interface Resource {
  slug: string
  title: string
  description: string
  type: "pdf"
  href: string
}

// ─── Client Journey ─────────────────────────────────────────────────────────

export interface JourneyStep {
  number: number
  title: string
  description: string
}

// ─── Ordering System ────────────────────────────────────────────────────────

export interface OrderingStep {
  number: number
  title: string
  description: string
}

// ─── Industries ─────────────────────────────────────────────────────────────

export interface Industry {
  slug: string
  name: string
  description: string
}

// ─── Project Submission ─────────────────────────────────────────────────────

export type ProjectStatus =
  | "NEW"
  | "UNDER_REVIEW"
  | "CLARIFICATION_REQUIRED"
  | "QUOTATION"
  | "APPROVED"
  | "PRODUCTION"
  | "COMPLETED"
  | "CLOSED"

export interface ProjectSubmission {
  // Organization
  organisationName: string
  organisationType: string
  industry: string

  // Contact
  contactName: string
  contactEmail: string
  contactPhone: string
  contactRole: string

  // Project
  projectName: string
  description: string
  customizationTier: CustomizationTier
  collections: string[] // collection slugs

  // Branding
  brandingOptions: string[]
  logoUrl?: string

  // Requirements
  quantityRange: string
  sizes: string[]
  colours: string[]
  specialRequirements: string

  // Timeline
  deadline: string
  budget: string
  urgency: "standard" | "priority" | "urgent"

  // Attachments
  attachments: string[] // file URLs

  // System
  reference: string
  status: ProjectStatus
  createdAt: string
}
