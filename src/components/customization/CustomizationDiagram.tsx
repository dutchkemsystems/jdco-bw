import { customizationTiers } from "@/lib/content/customization"

// Visual representation of customization tiers
// TODO: replace with CMS — real diagram or illustration
export function CustomizationDiagram() {
  return (
    <section className="bg-sand py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="mb-8 text-center font-serif text-2xl font-semibold text-ink">
          How It Works
        </h3>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          {customizationTiers.map((tier, i) => (
            <div key={tier.tier} className="flex items-center gap-4 md:gap-8">
              {/* Step */}
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center border-2 border-clay bg-white font-serif text-2xl font-semibold text-clay">
                  {i + 1}
                </div>
                <p className="text-sm font-medium text-ink">{tier.name}</p>
                <p className="mt-1 text-xs text-muted-text">
                  {tier.turnaround}
                </p>
              </div>

              {/* Arrow */}
              {i < customizationTiers.length - 1 && (
                <div className="hidden md:block">
                  <svg
                    width="40"
                    height="12"
                    viewBox="0 0 40 12"
                    fill="none"
                    className="text-line"
                  >
                    <path
                      d="M0 6H36M36 6L30 1M36 6L30 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
