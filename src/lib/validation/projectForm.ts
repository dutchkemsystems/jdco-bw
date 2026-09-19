import { z } from "zod"

// ─── Step 1: Organization ───────────────────────────────────────────────────

export const step1Schema = z.object({
  organisationName: z.string().min(2, "Organisation name is required"),
  organisationType: z.string().min(1, "Please select an organisation type"),
  industry: z.string().min(1, "Please select an industry"),
})

// ─── Step 2: Contact ────────────────────────────────────────────────────────

export const step2Schema = z.object({
  contactName: z.string().min(2, "Contact name is required"),
  contactEmail: z.string().email("Valid email address required"),
  contactPhone: z.string().min(6, "Phone number is required"),
  contactRole: z.string().min(2, "Role or position is required"),
})

// ─── Step 3: Project ────────────────────────────────────────────────────────

export const step3Schema = z.object({
  projectName: z.string().min(2, "Project name is required"),
  description: z.string().min(10, "Please provide a brief description (min 10 characters)"),
  customizationTier: z.enum(["PLAIN", "TRIMMED", "SUBLIMATION"]),
  collections: z.array(z.string()).min(1, "Select at least one collection"),
  selectedProduct: z.string().optional(),
})

// ─── Step 4: Branding ───────────────────────────────────────────────────────

export const step4Schema = z.object({
  brandingOptions: z.array(z.string()).min(1, "Select at least one branding option"),
  logoUrl: z.string().url("Please provide a valid URL").optional().or(z.literal("")),
})

// ─── Step 5: Requirements ───────────────────────────────────────────────────

export const step5Schema = z.object({
  quantityRange: z.string().min(1, "Estimated quantity is required"),
  sizes: z.array(z.string()).min(1, "Select at least one size"),
  colours: z.array(z.string()).min(1, "Select at least one colour"),
  specialRequirements: z.string().optional(),
})

// ─── Step 6: Timeline ───────────────────────────────────────────────────────

export const step6Schema = z.object({
  deadline: z.string().min(1, "Required-by date is required"),
  urgency: z.enum(["standard", "priority", "urgent"]),
  budget: z.string().optional(),
})

// ─── Step 7: Attachments ────────────────────────────────────────────────────

export const step7Schema = z.object({
  attachments: z.array(z.string()).optional(),
})

// ─── Step 8: Review (no validation — read-only) ────────────────────────────

export const step8Schema = z.object({})

// ─── Combined type ──────────────────────────────────────────────────────────

export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3Data = z.infer<typeof step3Schema>
export type Step4Data = z.infer<typeof step4Schema>
export type Step5Data = z.infer<typeof step5Schema>
export type Step6Data = z.infer<typeof step6Schema>

// ─── Organisation types ─────────────────────────────────────────────────────

export const organisationTypes = [
  "Corporate",
  "Government",
  "Non-Profit",
  "School / University",
  "Sports Club",
  "Safari / Tourism",
  "Mining / Industrial",
  "Logistics / Transport",
  "Security / Tactical",
  "Healthcare",
  "Other",
]

// ─── Industries (from content) ──────────────────────────────────────────────

export const industries = [
  "Corporate",
  "Government",
  "Finance",
  "Legal",
  "Consulting",
  "Sport",
  "Fitness",
  "Athletics",
  "Safari",
  "Tourism",
  "Wildlife",
  "Conservation",
  "Mining",
  "Industrial",
  "Construction",
  "Engineering",
  "Logistics",
  "Transport",
  "Supply Chain",
  "Warehousing",
  "Security",
  "Tactical",
  "Protection",
  "Defence",
  "Healthcare",
  "Medical",
  "Hospital",
  "Pharmaceutical",
  "Education",
  "School",
  "University",
  "Other",
]

// ─── Branding options ───────────────────────────────────────────────────────

export const brandingOptions = [
  "Embroidered Logo",
  "Printed Logo",
  "Woven Patch",
  "Sublimated Design",
  "Leather Patch",
  "Reflective Print",
  "Custom Zipper Pulls",
  "Branded Labels",
]
