import { Hero } from "@/components/home/Hero"
import { PositioningStatement } from "@/components/home/PositioningStatement"
import { CollectionGrid } from "@/components/home/CollectionGrid"
import { CustomizationTeaser } from "@/components/home/CustomizationTeaser"
import { JourneyTeaser } from "@/components/home/JourneyTeaser"
import { OrderingTeaser } from "@/components/home/OrderingTeaser"
import { WhyJD } from "@/components/home/WhyJD"
import { ResourcesStrip } from "@/components/home/ResourcesStrip"
import { ProjectCTA } from "@/components/home/ProjectCTA"

export default function HomePage() {
  return (
    <>
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
