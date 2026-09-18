import { collections } from "@/lib/content/collections"
import { CollectionCard } from "@/components/collections/CollectionCard"
import { SectionHeading } from "@/components/shared/SectionHeading"

// TODO: replace with CMS
export function CollectionGrid() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Collections"
          subtitle="Eight industries. One standard. Every collection built for the identity it represents."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  )
}
