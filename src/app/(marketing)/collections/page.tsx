import type { Metadata } from "next"
import { collections } from "@/lib/content/collections"
import { CollectionCard } from "@/components/collections/CollectionCard"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTAButton } from "@/components/shared/CTAButton"

// TODO: replace with CMS
export const metadata: Metadata = {
  title: "Collections",
  description:
    "Eight industry-specific collections. One standard. Every garment built for the identity it represents.",
}

export default function CollectionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Our Collections"
            subtitle="Eight industries. One standard. Every collection built for the identity it represents."
          />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            {/* TODO: replace with CMS */}
            From corporate boardrooms to mining sites, from safari lodges to
            campus grounds — each collection is engineered for the conditions
            it will face.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-bone py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <CollectionCard key={collection.slug} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-lg text-muted-text">
            {/* TODO: replace with CMS */}
            Not sure which collection fits? Tell us about your organisation.
          </p>
          <div className="mt-6">
            <CTAButton href="/start-a-project" variant="primary">
              Start a Project
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
