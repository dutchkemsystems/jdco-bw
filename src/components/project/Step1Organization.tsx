"use client"

import { useProjectFormStore } from "@/lib/stores/projectForm"
import { organisationTypes, industries } from "@/lib/validation/projectForm"

export function Step1Organization() {
  const { formData, updateFormData } = useProjectFormStore()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-ink">Organization</h2>
        <p className="mt-1 text-sm text-muted-text">
          Tell us about the organisation this project is for.
        </p>
      </div>

      {/* Organisation Name */}
      <div>
        <label htmlFor="organisationName" className="block text-sm font-medium text-ink">
          Organisation Name <span className="text-clay">*</span>
        </label>
        <input
          id="organisationName"
          type="text"
          value={formData.organisationName}
          onChange={(e) => updateFormData({ organisationName: e.target.value })}
          placeholder="e.g. Botswana Mining Corp"
          className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-clay transition-colors"
        />
      </div>

      {/* Organisation Type */}
      <div>
        <label htmlFor="organisationType" className="block text-sm font-medium text-ink">
          Organisation Type <span className="text-clay">*</span>
        </label>
        <select
          id="organisationType"
          value={formData.organisationType}
          onChange={(e) => updateFormData({ organisationType: e.target.value })}
          className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink focus:outline-none focus:border-clay transition-colors appearance-none"
        >
          <option value="">Select type...</option>
          {organisationTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-ink">
          Industry <span className="text-clay">*</span>
        </label>
        <select
          id="industry"
          value={formData.industry}
          onChange={(e) => updateFormData({ industry: e.target.value })}
          className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink focus:outline-none focus:border-clay transition-colors appearance-none"
        >
          <option value="">Select industry...</option>
          {industries.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
