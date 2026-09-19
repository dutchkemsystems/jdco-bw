"use client"

import { useCallback, useEffect, useState } from "react"
import { useProjectFormStore } from "@/lib/stores/projectForm"
import { track } from "@/lib/analytics"
import { StepIndicator } from "./StepIndicator"
import { StepNav } from "./StepNav"
import { Step1Organization } from "./Step1Organization"
import { Step2Contact } from "./Step2Contact"
import { Step3Project } from "./Step3Project"
import { Step4Branding } from "./Step4Branding"
import { Step5Requirements } from "./Step5Requirements"
import { Step6Timeline } from "./Step6Timeline"
import { Step7Attachments } from "./Step7Attachments"
import { Step8Review } from "./Step8Review"
import { Step9Submit } from "./Step9Submit"
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
  step6Schema,
  step7Schema,
  step8Schema,
} from "@/lib/validation/projectForm"

const schemas = [
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
  step6Schema,
  step7Schema,
  step8Schema,
]

const stepComponents = [
  Step1Organization,
  Step2Contact,
  Step3Project,
  Step4Branding,
  Step5Requirements,
  Step6Timeline,
  Step7Attachments,
  Step8Review,
  Step9Submit,
]

export function ProjectForm() {
  const { currentStep, formData, nextStep, prevStep } =
    useProjectFormStore()
  const [errors, setErrors] = useState<string[]>([])

  const stepIndex = currentStep - 1
  const isFirstStep = currentStep === 1
  const isLastStep = currentStep === 9

  // Track step completion on step change
  useEffect(() => {
    track({ name: "project_started", properties: { step: currentStep } })
  }, [currentStep])

  // beforeunload warning when form has data
  useEffect(() => {
    const hasData = Object.values(formData).some((v) => {
      if (Array.isArray(v)) return v.length > 0
      return v !== "" && v !== "standard"
    })

    if (!hasData) return

    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault()
    }
    window.addEventListener("beforeunload", handler)
    return () => window.removeEventListener("beforeunload", handler)
  }, [formData])

  const validate = useCallback(() => {
    if (stepIndex >= schemas.length) return true
    const schema = schemas[stepIndex]
    const result = schema.safeParse(formData)
    if (result.success) {
      setErrors([])
      return true
    }
    setErrors(result.error.issues.map((i) => i.message))
    return false
  }, [stepIndex, formData])

  const handleNext = useCallback(() => {
    if (!validate()) return
    // Step 9 (Submit) handles its own logic
    if (isLastStep) return
    setErrors([])
    nextStep()
  }, [validate, isLastStep, nextStep])

  const handlePrev = useCallback(() => {
    setErrors([])
    prevStep()
  }, [prevStep])

  const StepComponent = stepComponents[stepIndex] ?? Step9Submit
  const showNav = currentStep < 9

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

      {/* Navigation (hidden on step 9 — Submit handles its own) */}
      {showNav && (
        <StepNav
          onNext={handleNext}
          onPrev={handlePrev}
          isFirstStep={isFirstStep}
          isLastStep={false}
        />
      )}
    </div>
  )
}
