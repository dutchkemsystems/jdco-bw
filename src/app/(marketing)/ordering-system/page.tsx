import type { Metadata } from "next"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTAButton } from "@/components/shared/CTAButton"
import { BrandSignature } from "@/components/shared/BrandSignature"
import { OrderingSteps } from "@/components/ordering/OrderingSteps"
import { OrderingNote } from "@/components/ordering/OrderingNote"

// TODO: replace with CMS
export const metadata: Metadata = {
  title: "Ordering System",
  description:
    "Nine steps from enquiry to delivery. A structured process designed for clarity and confidence.",
}

export default function OrderingSystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <BrandSignature />
          <h1 className="mt-6 font-serif text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl md:leading-tight">
            {/* TODO: replace with CMS */}
            Ordering System
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {/* TODO: replace with CMS */}
            Nine steps. One process. From submission to delivery —
            structured, transparent, on schedule.
          </p>
        </div>
      </section>

      {/* Steps grid */}
      <section className="bg-bone py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="The Process"
            subtitle="Each step is designed to keep your project on track."
            accent="sport"
          />
          <OrderingSteps />
        </div>
      </section>

      {/* Note */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-6">
          <OrderingNote />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-clay py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-2xl leading-tight font-semibold text-white md:text-3xl">
            {/* TODO: replace with CMS */}
            Ready to Order?
          </h2>
          <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">
            {/* TODO: replace with CMS */}
            Submit your enquiry and let our team guide you through
            every step.
          </p>
          <div className="mt-8">
            <CTAButton
              href="/start-a-project"
              variant="secondary"
              size="lg"
              className="bg-white text-ink hover:bg-bone"
            >
              Start a Project
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
