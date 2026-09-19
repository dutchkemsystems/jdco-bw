import { Hero } from "@/components/home/Hero"
import { PositioningStatement } from "@/components/home/PositioningStatement"
import { CollectionGrid } from "@/components/home/CollectionGrid"
import { CustomizationTeaser } from "@/components/home/CustomizationTeaser"
import { JourneyTeaser } from "@/components/home/JourneyTeaser"
import { OrderingTeaser } from "@/components/home/OrderingTeaser"
import { WhyJD } from "@/components/home/WhyJD"
import { ResourcesStrip } from "@/components/home/ResourcesStrip"
import { ProjectCTA } from "@/components/home/ProjectCTA"
import { generatePageMetadata, organizationJsonLd } from "@/lib/seo"

export const metadata = generatePageMetadata(
  "JD & CO BW — Premium B2B Custom Jackets & Outerwear",
  "Custom manufactured jackets and outerwear for organisations, institutions, and teams. Design your professional identity.",
  "/"
)

export default function HomePage() {
  const jsonLd = organizationJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <PositioningStatement />
      <CollectionGrid />
      <CustomizationTeaser />
      <JourneyTeaser />
      <OrderingTeaser />
      <WhyJD />
      <ResourcesStrip />
      <ProjectCTA />
    </>
  )
}
