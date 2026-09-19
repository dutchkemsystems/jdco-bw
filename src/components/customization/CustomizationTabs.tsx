"use client"

import { useState } from "react"
import { customizationTiers } from "@/lib/content/customization"
import { ThreeDotMark } from "@/components/shared/ThreeDotMark"
import { Check } from "lucide-react"

const tierStyles = {
  PLAIN: "border-sand bg-sand/30",
  TRIMMED: "border-clay bg-clay/5",
  SUBLIMATION: "border-graphite bg-graphite/5",
}

const tierAccent = {
  PLAIN: "text-muted-text",
  TRIMMED: "text-clay",
  SUBLIMATION: "text-graphite",
}

// TODO: replace with CMS
export function CustomizationTabs() {
  const [activeTier, setActiveTier] = useState(customizationTiers[0].tier)

  const active = customizationTiers.find((t) => t.tier === activeTier)!

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-4 mb-8">
        {customizationTiers.map((tier) => (
          <button
            key={tier.tier}
            type="button"
            onClick={() => setActiveTier(tier.tier)}
            className={`flex-1 border-b-2 px-4 py-3 text-sm font-medium tracking-wide uppercase transition-colors ${
              activeTier === tier.tier
                ? "border-clay text-ink"
                : "border-line text-muted-text hover:text-ink"
            }`}
          >
            {tier.name}
          </button>
        ))}
      </div>

      {/* Active tier content */}
      <div className={`border p-8 ${tierStyles[activeTier]}`}>
        <ThreeDotMark className="mb-4" />
        <h3 className="font-serif text-2xl font-semibold text-ink">
          {active.name}
        </h3>
        <p className={`mt-1 text-sm font-medium ${tierAccent[activeTier]}`}>
          {active.tagline}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-text">
          {active.description}
        </p>

        <div className="mt-6 flex items-center gap-6 text-sm text-muted-text">
          <div>
            <span className="text-xs tracking-wide uppercase">Turnaround</span>
            <p className="mt-1 font-medium text-ink">{active.turnaround}</p>
          </div>
          <div className="h-8 w-px bg-line" />
          <div>
            <span className="text-xs tracking-wide uppercase">Minimum Order</span>
            <p className="mt-1 font-medium text-ink">{active.minimumOrder}</p>
          </div>
        </div>

        <ul className="mt-8 space-y-3">
          {active.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-muted-text"
            >
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-clay" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
