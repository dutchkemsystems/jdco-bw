import type { Metadata } from "next"
import { customizationTiers } from "@/lib/content/customization"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTAButton } from "@/components/shared/CTAButton"
import { BrandSignature } from "@/components/shared/BrandSignature"
import { CustomizationTabs } from "@/components/customization/CustomizationTabs"
import { CustomizationCard } from "@/components/customization/CustomizationCard"
import { CustomizationDiagram } from "@/components/customization/CustomizationDiagram"

// TODO: replace with CMS
export const metadata: Metadata = {
  title: "Customization",
  description:
    "Three tiers of customization — Plain, Trimmed, and Sublimation. No compromise on quality, identity, or specification.",
}

export default function CustomizationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <BrandSignature />
          <h1 className="mt-6 font-serif text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl md:leading-tight">
            {/* TODO: replace with CMS */}
            Customization
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {/* TODO: replace with CMS */}
            Three tiers. No compromise. Every garment built to your
            specification — from plain blanks to full sublimation coverage.
          </p>
        </div>
      </section>

      {/* Interactive tabs */}
      <section className="bg-bone py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            title="Compare Tiers"
            subtitle="Select a tier to see what's included."
            accent="corporate"
          />
          <CustomizationTabs />
        </div>
      </section>

      {/* Cards grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="All Tiers"
            subtitle="Every tier includes the same quality standards. The difference is in the detail."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {customizationTiers.map((tier) => (
              <CustomizationCard key={tier.tier} data={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Diagram */}
      <CustomizationDiagram />

      {/* CTA */}
      <section className="bg-clay py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-2xl leading-tight font-semibold text-white md:text-3xl">
            {/* TODO: replace with CMS */}
            Ready to Customize?
          </h2>
          <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">
            {/* TODO: replace with CMS */}
            Start a project and tell us your vision. We&apos;ll recommend
            the right tier and bring it to life.
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
