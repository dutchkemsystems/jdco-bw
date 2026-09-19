import type { CustomizationTier } from "@/types"
import { getCustomizationTierData } from "@/lib/content/customization"

interface CustomizationBadgesProps {
  tiers: CustomizationTier[]
}

const tierStyles: Record<CustomizationTier, string> = {
  PLAIN: "bg-sand text-ink",
  TRIMMED: "bg-clay text-white",
  SUBLIMATION: "bg-graphite text-white",
}

// TODO: replace with CMS
export function CustomizationBadges({ tiers }: CustomizationBadgesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tiers.map((tier) => {
        const data = getCustomizationTierData(tier)
        return (
          <div
            key={tier}
            className={`px-4 py-2 text-xs font-medium tracking-wide uppercase ${tierStyles[tier]}`}
          >
            <span>{data?.name || tier}</span>
            {data && (
              <span className="ml-2 opacity-60">
                {data.turnaround}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}
