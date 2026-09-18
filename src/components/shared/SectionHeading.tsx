import { ThreeDotMark } from "./ThreeDotMark"
import type { CollectionAccent } from "@/types"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  accent?: CollectionAccent
  align?: "left" | "center"
}

export function SectionHeading({
  title,
  subtitle,
  accent,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <ThreeDotMark accent={accent} className="mb-4" />
      <h2 className="font-serif text-[2rem] leading-[2.5rem] font-semibold tracking-tight text-ink md:text-[2.5rem] md:leading-[3rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg leading-relaxed text-muted-text max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
