"use client"

import { useProjectFormStore } from "@/lib/stores/projectForm"

export function Step2Contact() {
  const { formData, updateFormData } = useProjectFormStore()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-ink">Contact</h2>
        <p className="mt-1 text-sm text-muted-text">
          Who should we reach out to about this project?
        </p>
      </div>

      {/* Contact Name */}
      <div>
        <label htmlFor="contactName" className="block text-sm font-medium text-ink">
          Full Name <span className="text-clay">*</span>
        </label>
        <input
          id="contactName"
          type="text"
          value={formData.contactName}
          onChange={(e) => updateFormData({ contactName: e.target.value })}
          placeholder="e.g. Tshepo Mokoena"
          className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-clay transition-colors"
        />
      </div>

      {/* Email + Phone row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-ink">
            Email <span className="text-clay">*</span>
          </label>
          <input
            id="contactEmail"
            type="email"
            value={formData.contactEmail}
            onChange={(e) => updateFormData({ contactEmail: e.target.value })}
            placeholder="tshepo@company.co.bw"
            className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-clay transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contactPhone" className="block text-sm font-medium text-ink">
            Phone <span className="text-clay">*</span>
          </label>
          <input
            id="contactPhone"
            type="tel"
            value={formData.contactPhone}
            onChange={(e) => updateFormData({ contactPhone: e.target.value })}
            placeholder="+267 7X XXX XXX"
            className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-clay transition-colors"
          />
        </div>
      </div>

      {/* Role */}
      <div>
        <label htmlFor="contactRole" className="block text-sm font-medium text-ink">
          Role / Position <span className="text-clay">*</span>
        </label>
        <input
          id="contactRole"
          type="text"
          value={formData.contactRole}
          onChange={(e) => updateFormData({ contactRole: e.target.value })}
          placeholder="e.g. Procurement Manager"
          className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-clay transition-colors"
        />
      </div>
    </div>
  )
}
