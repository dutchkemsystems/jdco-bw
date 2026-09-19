"use client"

import { useProjectFormStore } from "@/lib/stores/projectForm"
import { Check } from "lucide-react"

const steps = [
  { number: 1, label: "Organization" },
  { number: 2, label: "Contact" },
  { number: 3, label: "Project" },
  { number: 4, label: "Branding" },
  { number: 5, label: "Requirements" },
  { number: 6, label: "Timeline" },
  { number: 7, label: "Attachments" },
  { number: 8, label: "Review" },
]

export function StepIndicator() {
  const { currentStep } = useProjectFormStore()

  return (
    <nav aria-label="Form progress" className="flex items-center gap-1 overflow-x-auto pb-2">
      {steps.map((step) => {
        const isCompleted = currentStep > step.number
        const isCurrent = currentStep === step.number
        const isUpcoming = currentStep < step.number

        return (
          <div key={step.number} className="flex items-center gap-1">
            {/* Step circle */}
            <div
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center text-xs font-medium transition-colors ${
                isCompleted
                  ? "bg-clay text-white"
                  : isCurrent
                    ? "border-2 border-clay text-clay"
                    : "border border-line text-muted-text"
              }`}
            >
              {isCompleted ? (
                <Check className="h-4 w-4" />
              ) : (
                step.number
              )}
            </div>

            {/* Step label (hidden on mobile for compact view) */}
            <span
              className={`hidden sm:inline text-xs whitespace-nowrap ${
                isCurrent
                  ? "font-medium text-ink"
                  : isCompleted
                    ? "text-clay"
                    : "text-muted-text"
              }`}
            >
              {step.label}
            </span>

            {/* Connector */}
            {step.number < steps.length && (
              <div
                className={`hidden sm:block w-4 h-px mx-1 ${
                  isCompleted ? "bg-clay" : "bg-line"
                }`}
              />
            )}
          </div>
        )
      })}
    </nav>
  )
}
