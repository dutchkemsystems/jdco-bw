"use client"

import { useProjectFormStore } from "@/lib/stores/projectForm"
import { brandingOptions } from "@/lib/validation/projectForm"
import { Upload } from "lucide-react"

export function Step4Branding() {
  const { formData, updateFormData } = useProjectFormStore()

  const toggleOption = (option: string) => {
    const next = formData.brandingOptions.includes(option)
      ? formData.brandingOptions.filter((o) => o !== option)
      : [...formData.brandingOptions, option]
    updateFormData({ brandingOptions: next })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-ink">Branding</h2>
        <p className="mt-1 text-sm text-muted-text">
          How should your identity appear on the garment?
        </p>
      </div>

      {/* Branding options multi-select */}
      <div>
        <label className="block text-sm font-medium text-ink">
          Branding Methods <span className="text-clay">*</span>
        </label>
        <p className="mt-1 text-xs text-muted-text">
          Select all that apply.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {brandingOptions.map((option) => {
            const active = formData.brandingOptions.includes(option)
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleOption(option)}
                className={`text-left border px-4 py-3 transition-colors ${
                  active
                    ? "border-clay bg-sand text-ink"
                    : "border-line bg-white text-muted-text hover:border-graphite"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-4 w-4 flex-shrink-0 border flex items-center justify-center ${
                      active ? "border-clay bg-clay" : "border-line"
                    }`}
                  >
                    {active && (
                      <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm">{option}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Logo upload placeholder */}
      <div>
        <label className="block text-sm font-medium text-ink">
          Logo File (optional)
        </label>
        <p className="mt-1 text-xs text-muted-text">
          Upload your logo for reference. We accept PNG, SVG, or AI files.
        </p>
        <div className="mt-3 border-2 border-dashed border-line bg-white px-6 py-10 text-center hover:border-clay transition-colors cursor-pointer">
          <Upload className="mx-auto h-8 w-8 text-muted-text" />
          <p className="mt-3 text-sm text-muted-text">
            Drag and drop, or{" "}
            <span className="font-medium text-clay">browse files</span>
          </p>
          <p className="mt-1 text-xs text-muted-text">
            PNG, SVG, AI — max 10MB
          </p>
          {/* Hidden input would go here in production */}
        </div>
      </div>

      {/* Logo URL input */}
      <div>
        <label htmlFor="logoUrl" className="block text-sm font-medium text-ink">
          Or paste a logo URL
        </label>
        <input
          id="logoUrl"
          type="url"
          value={formData.logoUrl}
          onChange={(e) => updateFormData({ logoUrl: e.target.value })}
          placeholder="https://example.com/logo.png"
          className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-clay transition-colors"
        />
      </div>
    </div>
  )
}
