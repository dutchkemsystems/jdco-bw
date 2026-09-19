"use client"

import { useProjectFormStore } from "@/lib/stores/projectForm"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface StepNavProps {
  onNext: () => void
  onPrev: () => void
  isFirstStep: boolean
  isLastStep: boolean
  isSubmitting?: boolean
}

export function StepNav({ onNext, onPrev, isFirstStep, isLastStep, isSubmitting }: StepNavProps) {
  return (
    <div className="flex items-center justify-between border-t border-line pt-6 mt-8">
      {/* Back */}
      {!isFirstStep ? (
        <button
          type="button"
          onClick={onPrev}
          className="flex items-center gap-2 text-sm font-medium text-muted-text hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      ) : (
        <div />
      )}

      {/* Next / Submit */}
      <button
        type="button"
        onClick={onNext}
        disabled={isSubmitting}
        className="flex items-center gap-2 h-11 px-6 bg-clay text-white text-sm font-medium tracking-wide uppercase hover:bg-clay-deep transition-colors disabled:opacity-50"
      >
        {isLastStep ? "Submit Project" : "Continue"}
        {!isLastStep && <ArrowRight className="h-4 w-4" />}
      </button>
    </div>
  )
}
