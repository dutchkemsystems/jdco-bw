"use client"

import { useCallback, useState } from "react"
import { useProjectFormStore } from "@/lib/stores/projectForm"
import { StepIndicator } from "./StepIndicator"
import { StepNav } from "./StepNav"
import { Step1Organization } from "./Step1Organization"
import { Step2Contact } from "./Step2Contact"
import { Step3Project } from "./Step3Project"
import { Step4Branding } from "./Step4Branding"
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
} from "@/lib/validation/projectForm"
import type { ZodError } from "zod"

const schemas = [step1Schema, step2Schema, step3Schema, step4Schema]
const stepComponents = [Step1Organization, Step2Contact, Step3Project, Step4Branding]

export function ProjectForm() {
  const { currentStep, formData, setStep, nextStep, prevStep } =
    useProjectFormStore()
  const [errors, setErrors] = useState<string[]>([])

  const stepIndex = currentStep - 1
  const isFirstStep = currentStep === 1
  const isLastStep = currentStep === 4 // Only 4 steps built for now

  const validate = useCallback(() => {
    if (stepIndex >= schemas.length) return true
    const schema = schemas[stepIndex]
    const result = schema.safeParse(formData)
    if (result.success) {
      setErrors([])
      return true
    }
    setErrors(
      result.error.issues.map((i) => i.message)
    )
    return false
  }, [stepIndex, formData])

  const handleNext = useCallback(() => {
    if (!validate()) return
    if (isLastStep) {
      // Would submit — for now just log
      // eslint-disable-next-line no-console
      console.log("Project form submitted:", formData)
      return
    }
    setErrors([])
    nextStep()
  }, [validate, isLastStep, formData, nextStep])

  const handlePrev = useCallback(() => {
    setErrors([])
    prevStep()
  }, [prevStep])

  // Only render up to step 4
  if (stepIndex >= stepComponents.length) {
    return (
      <div className="border border-line bg-white p-8 text-center">
        <p className="text-sm text-muted-text">
          Steps 5–9 coming next. Currently on step {currentStep}.
        </p>
        <button
          type="button"
          onClick={() => setStep(4)}
          className="mt-4 text-sm font-medium text-clay hover:text-clay-deep"
        >
          Back to Step 4
        </button>
      </div>
    )
  }

  const StepComponent = stepComponents[stepIndex]

  return (
    <div className="border border-line bg-white p-6 md:p-8">
      {/* Step indicator */}
      <div className="mb-8">
        <StepIndicator />
      </div>

      {/* Validation errors */}
      {errors.length > 0 && (
        <div className="mb-6 border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-800">
            Please fix the following:
          </p>
          <ul className="mt-2 space-y-1">
            {errors.map((err, i) => (
              <li key={i} className="text-sm text-red-700">
                {err}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Step content */}
      <div className="min-h-[400px]">
        <StepComponent />
      </div>

      {/* Navigation */}
      <StepNav
        onNext={handleNext}
        onPrev={handlePrev}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
      />
    </div>
  )
}
