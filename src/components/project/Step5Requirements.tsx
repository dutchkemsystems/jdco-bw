"use client"

import { useProjectFormStore } from "@/lib/stores/projectForm"

const sizeOptions = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"]
const colourOptions = [
  "Navy", "Black", "Charcoal", "Grey", "White", "Red",
  "Royal Blue", "Forest Green", "Khaki", "Sand", "Safety Orange", "Hi-Vis Yellow",
]
const quantityOptions = [
  "20–50 units",
  "50–100 units",
  "100–250 units",
  "250–500 units",
  "500+ units",
]

export function Step5Requirements() {
  const { formData, updateFormData } = useProjectFormStore()

  const toggleSize = (s: string) => {
    const next = formData.sizes.includes(s)
      ? formData.sizes.filter((x) => x !== s)
      : [...formData.sizes, s]
    updateFormData({ sizes: next })
  }

  const toggleColour = (c: string) => {
    const next = formData.colours.includes(c)
      ? formData.colours.filter((x) => x !== c)
      : [...formData.colours, c]
    updateFormData({ colours: next })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-ink">Requirements</h2>
        <p className="mt-1 text-sm text-muted-text">
          Quantities, sizes, and colours — as specific as you can be.
        </p>
      </div>

      {/* Quantity Range */}
      <div>
        <label className="block text-sm font-medium text-ink">
          Estimated Quantity <span className="text-clay">*</span>
        </label>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {quantityOptions.map((q) => {
            const active = formData.quantityRange === q
            return (
              <button
                key={q}
                type="button"
                onClick={() => updateFormData({ quantityRange: q })}
                className={`border px-4 py-3 text-sm text-left transition-colors ${
                  active
                    ? "border-clay bg-sand text-ink"
                    : "border-line bg-white text-muted-text hover:border-graphite"
                }`}
              >
                {q}
              </button>
            )
          })}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <label className="block text-sm font-medium text-ink">
          Sizes Needed
        </label>
        <p className="mt-1 text-xs text-muted-text">Select all that apply.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {sizeOptions.map((s) => {
            const active = formData.sizes.includes(s)
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleSize(s)}
                className={`h-10 min-w-[40px] border px-3 text-sm font-medium transition-colors ${
                  active
                    ? "border-clay bg-clay text-white"
                    : "border-line bg-white text-muted-text hover:border-graphite"
                }`}
              >
                {s}
              </button>
            )
          })}
        </div>
      </div>

      {/* Colours */}
      <div>
        <label className="block text-sm font-medium text-ink">
          Colours Needed
        </label>
        <p className="mt-1 text-xs text-muted-text">Select all that apply.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {colourOptions.map((c) => {
            const active = formData.colours.includes(c)
            return (
              <button
                key={c}
                type="button"
                onClick={() => toggleColour(c)}
                className={`h-10 border px-4 text-sm transition-colors ${
                  active
                    ? "border-clay bg-clay text-white"
                    : "border-line bg-white text-muted-text hover:border-graphite"
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>
      </div>

      {/* Special Requirements */}
      <div>
        <label htmlFor="specialRequirements" className="block text-sm font-medium text-ink">
          Special Requirements
        </label>
        <p className="mt-1 text-xs text-muted-text">
          Any non-standard specs — reflective strips, specific thread colour, compliance labels, etc.
        </p>
        <textarea
          id="specialRequirements"
          value={formData.specialRequirements}
          onChange={(e) => updateFormData({ specialRequirements: e.target.value })}
          rows={3}
          placeholder="e.g. All garments need hi-vis reflective strips on sleeves and back..."
          className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-clay transition-colors resize-none"
        />
      </div>
    </div>
  )
}
