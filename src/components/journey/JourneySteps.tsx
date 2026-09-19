import { journeySteps } from "@/lib/content/journey"
import { StepCard } from "./StepCard"

// TODO: replace with CMS
export function JourneySteps() {
  return (
    <div className="space-y-0">
      {journeySteps.map((step, i) => (
        <StepCard key={step.number} step={step} isLast={i === journeySteps.length - 1} />
      ))}
    </div>
  )
}
