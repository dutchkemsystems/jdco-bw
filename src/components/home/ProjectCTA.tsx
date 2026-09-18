import { CTAButton } from "@/components/shared/CTAButton"
import { ThreeDotMark } from "@/components/shared/ThreeDotMark"

// TODO: replace with CMS
export function ProjectCTA() {
  return (
    <section className="bg-clay py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <ThreeDotMark className="mb-6 mx-auto [&>span]:bg-white" />

        <h2 className="font-serif text-3xl leading-tight font-semibold text-white md:text-5xl md:leading-tight">
          {/* TODO: replace with CMS */}
          Ready to Design Your Identity?
        </h2>

        <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
          {/* TODO: replace with CMS */}
          Start a project today. Tell us about your organisation, your vision,
          and your timeline.
        </p>

        <div className="mt-10">
          <CTAButton
            href="/start-a-project"
            variant="secondary"
            size="lg"
            className="bg-white text-ink hover:bg-bone"
          >
            Start a Project
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
