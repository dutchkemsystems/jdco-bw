import { customizationTiers } from "@/lib/content/customization"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTAButton } from "@/components/shared/CTAButton"
import { ThreeDotMark } from "@/components/shared/ThreeDotMark"

// TODO: replace with CMS
export function CustomizationTeaser() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Customization"
          subtitle="Three tiers. No compromise. Every garment built to your specification."
          accent="corporate"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {customizationTiers.map((tier) => (
            <div
              key={tier.tier}
              className="relative border border-line p-8"
            >
              <ThreeDotMark className="mb-4" />
              <h3 className="font-serif text-xl font-semibold text-ink">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm tracking-wide text-clay font-medium">
                {tier.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-text">
                {tier.description}
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-text">
                <span>{tier.turnaround}</span>
                <span className="h-1 w-1 rounded-full bg-line" />
                <span>{tier.minimumOrder} min</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/customization" variant="secondary">
            Explore Customization
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
