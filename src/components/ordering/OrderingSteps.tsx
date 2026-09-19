import { orderingSteps } from "@/lib/content/ordering"

// TODO: replace with CMS
export function OrderingSteps() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {orderingSteps.map((step) => (
        <div
          key={step.number}
          className="border border-line bg-white p-6"
        >
          <span className="font-mono text-sm font-semibold text-clay">
            {String(step.number).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-serif text-lg font-semibold text-ink">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-text">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  )
}
