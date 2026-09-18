import Image from "next/image"
import { ThreeDotMark } from "@/components/shared/ThreeDotMark"
import { CTAButton } from "@/components/shared/CTAButton"
import type { Collection } from "@/types"

const accentBg: Record<string, string> = {
  corporate: "bg-corporate",
  sport: "bg-sport",
  safari: "bg-safari",
  mining: "bg-mining",
  logistics: "bg-logistics",
  tactical: "bg-tactical",
  healthcare: "bg-healthcare",
  campus: "bg-campus",
}

interface CollectionHeroProps {
  collection: Collection
}

// TODO: replace with CMS — hero image per collection
export function CollectionHero({ collection }: CollectionHeroProps) {
  return (
    <section className="relative bg-graphite text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/placeholders/hero.svg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ThreeDotMark accent={collection.accent} className="mb-6" />

        <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight md:text-5xl md:leading-tight">
          {collection.name}
        </h1>

        {collection.tagline && (
          <p className="mt-4 text-lg text-white/60">{collection.tagline}</p>
        )}

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          {collection.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <CTAButton href="/start-a-project" variant="primary">
            Start a Project
          </CTAButton>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-1 ${accentBg[collection.accent]}`} />
    </section>
  )
}
