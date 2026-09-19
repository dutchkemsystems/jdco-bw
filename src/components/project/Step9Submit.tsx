"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useProjectFormStore } from "@/lib/stores/projectForm"
import { submitProject } from "@/lib/api"
import { track } from "@/lib/analytics"
import { finalSubmissionSchema } from "@/lib/validation/projectForm"
import { Loader2, CheckCircle } from "lucide-react"

export function Step9Submit() {
  const { formData, resetForm } = useProjectFormStore()
  const router = useRouter()
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    setStatus("submitting")
    setError(null)

    // Validate full payload before submission
    const parsed = finalSubmissionSchema.safeParse({
      organisationName: formData.organisationName,
      organisationType: formData.organisationType,
      industry: formData.industry,
      contactName: formData.contactName,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone,
      contactRole: formData.contactRole,
      projectName: formData.projectName,
      description: formData.description,
      customizationTier: formData.customizationTier,
      collections: formData.collections,
      brandingOptions: formData.brandingOptions,
      logoUrl: formData.logoUrl,
      quantityRange: formData.quantityRange,
      sizes: formData.sizes,
      colours: formData.colours,
      specialRequirements: formData.specialRequirements,
      deadline: formData.deadline,
      urgency: formData.urgency,
      budget: formData.budget,
      attachments: formData.attachments,
    })

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Validation failed"
      setError(`Please go back and fix: ${firstError}`)
      setStatus("idle")
      return
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { selectedProduct: _, ...submitData } = parsed.data
      const submitResult = await submitProject(submitData)

      track({ name: "project_submitted", properties: { reference: submitResult.reference } })

      setStatus("done")
      resetForm()

      // Brief pause then redirect
      setTimeout(() => {
        router.push(`/start-a-project/success?ref=${submitResult.reference}`)
      }, 1200)
    } catch {
      setError("Something went wrong. Please try again.")
      setStatus("idle")
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle className="h-12 w-12 text-clay" />
        <p className="mt-4 font-serif text-xl font-semibold text-ink">
          Project Submitted
        </p>
        <p className="mt-2 text-sm text-muted-text">
          Redirecting to your confirmation...
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-ink">Submit</h2>
        <p className="mt-1 text-sm text-muted-text">
          You&apos;re about to submit your project enquiry. Our team will review
          it and respond within 24 hours.
        </p>
      </div>

      <div className="border border-line bg-sand p-6">
        <p className="text-sm text-ink">
          By submitting, you agree to be contacted by JD & CO BW regarding
          this project enquiry.
        </p>
      </div>

      {error && (
        <div className="border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === "submitting"}
        className="w-full h-12 bg-clay text-white text-sm font-medium tracking-wide uppercase hover:bg-clay-deep transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Project Enquiry"
        )}
      </button>
    </div>
  )
}
