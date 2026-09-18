import { orderingSteps } from "@/lib/content/ordering"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTAButton } from "@/components/shared/CTAButton"

// TODO: replace with CMS
export function OrderingTeaser() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Ordering System"
          subtitle="Nine steps. One process. No surprises."
          accent="sport"
        />

        {/* Compact numbered strip */}
        <div className="flex flex-wrap gap-3">
          {orderingSteps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-3 rounded-sm bg-white border border-line p-4 flex-1 min-w-[140px]"
            >
              <span className="flex-shrink-0 font-mono text-sm font-semibold text-clay">
                {String(step.number).padStart(2, "0")}
              </span>
              <div>
                <h4 className="text-sm font-semibold text-ink">
                  {step.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-text line-clamp-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CTAButton href="/ordering-system" variant="secondary">
            View Full Process
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
