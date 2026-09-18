import { ThreeDotMark } from "@/components/shared/ThreeDotMark"
import type { Collection } from "@/types"

interface CollectionMetaProps {
  collection: Collection
  productCount: number
}

// TODO: replace with CMS
export function CollectionMeta({ collection, productCount }: CollectionMetaProps) {
  return (
    <section className="border-b border-line bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center gap-8 text-sm text-muted-text">
          <div className="flex items-center gap-3">
            <ThreeDotMark accent={collection.accent} />
            <span className="font-medium text-ink">{collection.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <span>{productCount} product{productCount !== 1 ? "s" : ""}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {collection.industries.map((industry) => (
              <span
                key={industry}
                className="inline-block rounded-sm border border-line px-2.5 py-1 text-xs"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 ml-auto">
            {collection.customization.map((tier) => (
              <span
                key={tier}
                className="inline-block bg-sand px-2.5 py-1 text-xs font-medium text-ink"
              >
                {tier}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
