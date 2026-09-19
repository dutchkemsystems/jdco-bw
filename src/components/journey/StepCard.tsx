import type { JourneyStep } from "@/types"

interface StepCardProps {
  step: JourneyStep
  isLast: boolean
}

// TODO: replace with CMS
export function StepCard({ step, isLast }: StepCardProps) {
  return (
    <div className="flex gap-8">
      {/* Timeline line + number */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-clay bg-white font-serif text-lg font-semibold text-clay">
          {String(step.number).padStart(2, "0")}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-line" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? "pb-0" : ""}`}>
        <h3 className="font-serif text-xl font-semibold text-ink">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-text max-w-lg">
          {step.description}
        </p>
      </div>
    </div>
  )
}
