import { cn } from "@/lib/utils"
import type { CollectionAccent } from "@/types"

const accentColors: Record<CollectionAccent, string> = {
  corporate: "#1F3A5F",
  sport: "#C0392B",
  safari: "#7A6A3F",
  mining: "#3E3E3E",
  logistics: "#1E6F5C",
  tactical: "#2B2F2B",
  healthcare: "#2A7F9E",
  campus: "#5C4B8A",
}

interface ThreeDotMarkProps {
  accent?: CollectionAccent
  className?: string
}

export function ThreeDotMark({ accent, className }: ThreeDotMarkProps) {
  const color = accent ? accentColors[accent] : "#B8794A"

  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      <span className="block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      <span className="block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
    </span>
  )
}
