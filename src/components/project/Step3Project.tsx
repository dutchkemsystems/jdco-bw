"use client"

import { useProjectFormStore } from "@/lib/stores/projectForm"
import { collections } from "@/lib/content/collections"
import { products } from "@/lib/content/products"
import type { CustomizationTier } from "@/types"

const tierLabels: Record<CustomizationTier, { name: string; desc: string }> = {
  PLAIN: { name: "Plain", desc: "Standard colour, no customisation beyond sizing." },
  TRIMMED: { name: "Trimmed", desc: "Contrast trims, piping, and selective embroidery." },
  SUBLIMATION: { name: "Sublimation", desc: "Full custom print across the entire garment." },
}

export function Step3Project() {
  const { formData, updateFormData } = useProjectFormStore()

  const selectedCollections = formData.collections

  const toggleCollection = (slug: string) => {
    const next = selectedCollections.includes(slug)
      ? selectedCollections.filter((s) => s !== slug)
      : [...selectedCollections, slug]
    updateFormData({ collections: next })
  }

  // Filter products by selected collection (if any)
  const availableProducts = selectedCollections.length > 0
    ? products.filter((p) => selectedCollections.includes(p.collection))
    : products

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-ink">Project</h2>
        <p className="mt-1 text-sm text-muted-text">
          What are we making? Pick a collection, choose a product, and set the
          customisation level.
        </p>
      </div>

      {/* Project Name */}
      <div>
        <label htmlFor="projectName" className="block text-sm font-medium text-ink">
          Project Name <span className="text-clay">*</span>
        </label>
        <input
          id="projectName"
          type="text"
          value={formData.projectName}
          onChange={(e) => updateFormData({ projectName: e.target.value })}
          placeholder="e.g. 2026 Fleet Rollout"
          className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-clay transition-colors"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-ink">
          Brief Description <span className="text-clay">*</span>
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => updateFormData({ description: e.target.value })}
          rows={3}
          placeholder="What's the project about? Any context that helps us understand your needs..."
          className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-clay transition-colors resize-none"
        />
      </div>

      {/* Collection multi-select */}
      <div>
        <label className="block text-sm font-medium text-ink">
          Collection <span className="text-clay">*</span>
        </label>
        <p className="mt-1 text-xs text-muted-text">
          Select one or more collections.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {collections.map((col) => {
            const active = selectedCollections.includes(col.slug)
            return (
              <button
                key={col.slug}
                type="button"
                onClick={() => toggleCollection(col.slug)}
                className={`text-left border px-4 py-3 transition-colors ${
                  active
                    ? "border-clay bg-sand text-ink"
                    : "border-line bg-white text-muted-text hover:border-graphite"
                }`}
              >
                <span className="text-sm font-medium">{col.name}</span>
                {col.tagline && (
                  <span className="block mt-0.5 text-xs opacity-70">{col.tagline}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Product select */}
      <div>
        <label htmlFor="selectedProduct" className="block text-sm font-medium text-ink">
          Specific Product (optional)
        </label>
        <select
          id="selectedProduct"
          value={formData.selectedProduct}
          onChange={(e) => updateFormData({ selectedProduct: e.target.value })}
          className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink focus:outline-none focus:border-clay transition-colors appearance-none"
        >
          <option value="">No preference — we&apos;ll recommend</option>
          {availableProducts.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name} ({p.collection})
            </option>
          ))}
        </select>
      </div>

      {/* Customization Tier */}
      <div>
        <label className="block text-sm font-medium text-ink">
          Customisation Tier <span className="text-clay">*</span>
        </label>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {(Object.keys(tierLabels) as CustomizationTier[]).map((tier) => {
            const active = formData.customizationTier === tier
            const info = tierLabels[tier]
            return (
              <button
                key={tier}
                type="button"
                onClick={() => updateFormData({ customizationTier: tier })}
                className={`text-left border px-4 py-4 transition-colors ${
                  active
                    ? "border-clay bg-sand text-ink"
                    : "border-line bg-white text-muted-text hover:border-graphite"
                }`}
              >
                <span className="text-sm font-semibold">{info.name}</span>
                <span className="block mt-1 text-xs opacity-70">{info.desc}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
