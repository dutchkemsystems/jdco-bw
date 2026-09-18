import { journeySteps } from "@/lib/content/journey"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTAButton } from "@/components/shared/CTAButton"

// TODO: replace with CMS
export function JourneyTeaser() {
  return (
    <section className="bg-graphite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Client Journey"
          subtitle="From enquiry to delivery — every step, transparent."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
          {journeySteps.map((step) => (
            <div
              key={step.number}
              className="relative border border-white/10 p-5"
            >
              <span className="text-xs font-mono text-clay">
                {String(step.number).padStart(2, "0")}
              </span>
              <h4 className="mt-2 text-sm font-semibold text-white">
                {step.title}
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-white/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CTAButton
            href="/client-journey"
            variant="ghost"
            size="sm"
            className="border-white/20 text-white hover:bg-white/10"
          >
            View Full Journey
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
