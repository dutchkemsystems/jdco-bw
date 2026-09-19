import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CustomizationTier } from "@/types"

// ─── Form Data (matches ProjectSubmission but split by step) ────────────────

export interface ProjectFormData {
  // Step 1: Organization
  organisationName: string
  organisationType: string
  industry: string

  // Step 2: Contact
  contactName: string
  contactEmail: string
  contactPhone: string
  contactRole: string

  // Step 3: Project
  projectName: string
  description: string
  customizationTier: CustomizationTier | ""
  collections: string[]
  selectedProduct: string

  // Step 4: Branding
  brandingOptions: string[]
  logoUrl: string

  // Steps 5-9 (placeholder for now)
  quantityRange: string
  sizes: string[]
  colours: string[]
  specialRequirements: string
  deadline: string
  budget: string
  urgency: "standard" | "priority" | "urgent"
  attachments: string[]
}

// ─── Default Values ─────────────────────────────────────────────────────────

const defaultFormData: ProjectFormData = {
  organisationName: "",
  organisationType: "",
  industry: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  contactRole: "",
  projectName: "",
  description: "",
  customizationTier: "",
  collections: [],
  selectedProduct: "",
  brandingOptions: [],
  logoUrl: "",
  quantityRange: "",
  sizes: [],
  colours: [],
  specialRequirements: "",
  deadline: "",
  budget: "",
  urgency: "standard",
  attachments: [],
}

// ─── Store ──────────────────────────────────────────────────────────────────

interface ProjectFormStore {
  currentStep: number
  formData: ProjectFormData
  prefilledFrom: string | null // e.g. "corporate" or "Executive Blazer"

  setStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  updateFormData: (data: Partial<ProjectFormData>) => void
  setPrefilledFrom: (source: string | null) => void
  resetForm: () => void
}

export const useProjectFormStore = create<ProjectFormStore>()(
  persist(
    (set) => ({
      currentStep: 1,
      formData: { ...defaultFormData },
      prefilledFrom: null,

      setStep: (step) => set({ currentStep: step }),

      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, 9),
        })),

      prevStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1),
        })),

      updateFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),

      setPrefilledFrom: (source) => set({ prefilledFrom: source }),

      resetForm: () =>
        set({
          currentStep: 1,
          formData: { ...defaultFormData },
          prefilledFrom: null,
        }),
    }),
    {
      name: "jdco-project-form",
      storage: {
        getItem: (name) => {
          if (typeof window === "undefined") return null
          const str = sessionStorage.getItem(name)
          return str ? JSON.parse(str) : null
        },
        setItem: (name, value) => {
          if (typeof window === "undefined") return
          sessionStorage.setItem(name, JSON.stringify(value))
        },
        removeItem: (name) => {
          if (typeof window === "undefined") return
          sessionStorage.removeItem(name)
        },
      },
    }
  )
)
