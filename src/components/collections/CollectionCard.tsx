import Image from "next/image"
import Link from "next/link"
import { ThreeDotMark } from "@/components/shared/ThreeDotMark"
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

interface CollectionCardProps {
  collection: Collection
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group relative block overflow-hidden border border-line bg-white transition-all hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,.08)]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-sand">
        <Image
          src="/placeholders/jacket.svg"
          alt={collection.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Accent bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${accentBg[collection.accent]}`}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <ThreeDotMark accent={collection.accent} />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-text">
            {collection.tagline}
          </span>
        </div>

        <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-clay transition-colors">
          {collection.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-text line-clamp-2">
          {collection.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {collection.industries.slice(0, 3).map((industry) => (
            <span
              key={industry}
              className="inline-block rounded-sm border border-line px-2.5 py-1 text-xs text-muted-text"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
