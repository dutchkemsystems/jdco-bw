import { Check } from "lucide-react"
import type { CustomizationTierData } from "@/lib/content/customization"

const tierBg = {
  PLAIN: "bg-sand",
  TRIMMED: "bg-clay",
  SUBLIMATION: "bg-graphite",
}

const tierText = {
  PLAIN: "text-ink",
  TRIMMED: "text-white",
  SUBLIMATION: "text-white",
}

interface CustomizationCardProps {
  data: CustomizationTierData
}

// TODO: replace with CMS
export function CustomizationCard({ data }: CustomizationCardProps) {
  return (
    <div className="border border-line bg-white overflow-hidden">
      {/* Header */}
      <div className={`px-6 py-4 ${tierBg[data.tier]}`}>
        <h3 className={`font-serif text-xl font-semibold ${tierText[data.tier]}`}>
          {data.name}
        </h3>
        <p className={`mt-1 text-sm ${tierText[data.tier]} opacity-80`}>
          {data.tagline}
        </p>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-sm leading-relaxed text-muted-text">
          {data.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-text">
          <span>{data.turnaround}</span>
          <span className="h-1 w-1 rounded-full bg-line" />
          <span>{data.minimumOrder} min</span>
        </div>

        <ul className="mt-6 space-y-2.5">
          {data.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-muted-text"
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
