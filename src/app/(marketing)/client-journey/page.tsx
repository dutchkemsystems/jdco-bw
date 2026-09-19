import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTAButton } from "@/components/shared/CTAButton"
import { BrandSignature } from "@/components/shared/BrandSignature"
import { JourneySteps } from "@/components/journey/JourneySteps"
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata = generatePageMetadata(
  "Client Journey",
  "From enquiry to delivery — every step of the process, transparent and on schedule.",
  "/client-journey"
)

export default function ClientJourneyPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Client Journey", url: "/client-journey" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <BrandSignature />
          <h1 className="mt-6 font-serif text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl md:leading-tight">
            {/* TODO: replace with CMS */}
            Client Journey
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {/* TODO: replace with CMS */}
            Seven steps from enquiry to delivery. Every stage documented.
            No surprises.
          </p>
        </div>
      </section>

      {/* Journey steps */}
      <section className="bg-bone py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="The Process"
            subtitle="Each step builds on the last. Transparency at every stage."
            accent="corporate"
          />
          <JourneySteps />
        </div>
      </section>

      {/* Differentiator */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl max-w-2xl mx-auto">
            {/* TODO: replace with CMS */}
            The Client Journey is our commitment to transparency. You&apos;ll
            never wonder where your project stands.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-clay py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-2xl leading-tight font-semibold text-white md:text-3xl">
            {/* TODO: replace with CMS */}
            Begin Your Journey
          </h2>
          <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">
            {/* TODO: replace with CMS */}
            Start with Step 1. Complete the enquiry form and our team
            will be in touch within 24 hours.
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
