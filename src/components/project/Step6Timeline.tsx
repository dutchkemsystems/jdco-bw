"use client"

import { useProjectFormStore } from "@/lib/stores/projectForm"

const urgencyOptions = [
  { value: "standard" as const, label: "Standard", desc: "4–6 weeks" },
  { value: "priority" as const, label: "Priority", desc: "2–3 weeks" },
  { value: "urgent" as const, label: "Urgent", desc: "Under 2 weeks" },
]

export function Step6Timeline() {
  const { formData, updateFormData } = useProjectFormStore()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-ink">Timeline & Budget</h2>
        <p className="mt-1 text-sm text-muted-text">
          When do you need these, and what&apos;s the budget range?
        </p>
      </div>

      {/* Deadline */}
      <div>
        <label htmlFor="deadline" className="block text-sm font-medium text-ink">
          Required By <span className="text-clay">*</span>
        </label>
        <input
          id="deadline"
          type="date"
          value={formData.deadline}
          onChange={(e) => updateFormData({ deadline: e.target.value })}
          min={new Date().toISOString().split("T")[0]}
          className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink focus:outline-none focus:border-clay transition-colors"
        />
      </div>

      {/* Urgency */}
      <div>
        <label className="block text-sm font-medium text-ink">
          Urgency <span className="text-clay">*</span>
        </label>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {urgencyOptions.map((opt) => {
            const active = formData.urgency === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => updateFormData({ urgency: opt.value })}
                className={`text-left border px-4 py-4 transition-colors ${
                  active
                    ? "border-clay bg-sand text-ink"
                    : "border-line bg-white text-muted-text hover:border-graphite"
                }`}
              >
                <span className="text-sm font-semibold">{opt.label}</span>
                <span className="block mt-1 text-xs opacity-70">{opt.desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-ink">
          Budget Range (optional)
        </label>
        <input
          id="budget"
          type="text"
          value={formData.budget}
          onChange={(e) => updateFormData({ budget: e.target.value })}
          placeholder="e.g. P 50,000 – P 100,000"
          className="mt-2 w-full h-11 border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-clay transition-colors"
        />
      </div>
    </div>
  )
}
