"use client"

import { useProjectFormStore } from "@/lib/stores/projectForm"
import { collections } from "@/lib/content/collections"
import { products } from "@/lib/content/products"
import { Pencil } from "lucide-react"

function Row({ label, value, editStep }: { label: string; value: string; editStep: number }) {
  const { setStep } = useProjectFormStore()

  return (
    <div className="flex items-start justify-between gap-4 border-b border-line py-3 last:border-b-0">
      <div>
        <p className="text-xs font-medium tracking-wide uppercase text-muted-text">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-ink">{value || "—"}</p>
      </div>
      <button
        type="button"
        onClick={() => setStep(editStep)}
        className="flex-shrink-0 flex items-center gap-1 text-xs text-clay hover:text-clay-deep transition-colors"
      >
        <Pencil className="h-3 w-3" />
        Edit
      </button>
    </div>
  )
}

export function Step8Review() {
  const { formData } = useProjectFormStore()

  const collectionNames = formData.collections
    .map((s) => collections.find((c) => c.slug === s)?.name ?? s)
    .join(", ")

  const productName = formData.selectedProduct
    ? products.find((p) => p.slug === formData.selectedProduct)?.name ?? ""
    : ""

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-ink">Review</h2>
        <p className="mt-1 text-sm text-muted-text">
          Check everything looks right before submitting.
        </p>
      </div>

      {/* Sections */}
      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-muted-text">
          Organization
        </p>
        <Row label="Organisation" value={formData.organisationName} editStep={1} />
        <Row label="Type" value={formData.organisationType} editStep={1} />
        <Row label="Industry" value={formData.industry} editStep={1} />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-muted-text">
          Contact
        </p>
        <Row label="Name" value={formData.contactName} editStep={2} />
        <Row label="Email" value={formData.contactEmail} editStep={2} />
        <Row label="Phone" value={formData.contactPhone} editStep={2} />
        <Row label="Role" value={formData.contactRole} editStep={2} />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-muted-text">
          Project
        </p>
        <Row label="Project Name" value={formData.projectName} editStep={3} />
        <Row label="Description" value={formData.description} editStep={3} />
        <Row label="Collection" value={collectionNames} editStep={3} />
        {productName && <Row label="Product" value={productName} editStep={3} />}
        <Row label="Customisation" value={formData.customizationTier} editStep={3} />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-muted-text">
          Branding
        </p>
        <Row
          label="Options"
          value={formData.brandingOptions.join(", ")}
          editStep={4}
        />
        {formData.logoUrl && (
          <Row label="Logo" value={formData.logoUrl} editStep={4} />
        )}
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-muted-text">
          Requirements
        </p>
        <Row label="Quantity" value={formData.quantityRange} editStep={5} />
        <Row label="Sizes" value={formData.sizes.join(", ")} editStep={5} />
        <Row label="Colours" value={formData.colours.join(", ")} editStep={5} />
        {formData.specialRequirements && (
          <Row
            label="Special"
            value={formData.specialRequirements}
            editStep={5}
          />
        )}
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-muted-text">
          Timeline
        </p>
        <Row label="Deadline" value={formData.deadline} editStep={6} />
        <Row label="Urgency" value={formData.urgency} editStep={6} />
        {formData.budget && (
          <Row label="Budget" value={formData.budget} editStep={6} />
        )}
      </div>

      {formData.attachments.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-muted-text">
            Attachments
          </p>
          {formData.attachments.map((url, i) => (
            <Row key={i} label={`File ${i + 1}`} value={url} editStep={7} />
          ))}
        </div>
      )}
    </div>
  )
}
