import Image from "next/image"
import { CTAButton } from "@/components/shared/CTAButton"
import { BrandSignature } from "@/components/shared/BrandSignature"

// TODO: replace with CMS
export function Hero() {
  return (
    <section className="relative bg-graphite text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/hero.svg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <BrandSignature />

          <h1 className="mt-6 font-serif text-4xl leading-tight font-semibold tracking-tight md:text-6xl md:leading-tight">
            {/* TODO: replace with CMS */}
            Designing Professional Identities
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-xl">
            {/* TODO: replace with CMS */}
            Custom manufactured jackets and outerwear for the industries and
            organisations that shape the world.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href="/start-a-project" variant="primary" size="lg">
              Start a Project
            </CTAButton>
            <CTAButton href="/collections" variant="ghost" size="lg" className="border-white/30 text-white hover:bg-white/10">
              View Collections
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-clay" />
    </section>
  )
}
