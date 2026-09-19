import { CTAButton } from "@/components/shared/CTAButton"
import type { Product } from "@/types"

interface ProductCTAProps {
  product: Product
}

// TODO: replace with CMS
export function ProductCTA({ product }: ProductCTAProps) {
  return (
    <section className="bg-clay py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-serif text-2xl leading-tight font-semibold text-white md:text-3xl">
          Interested in the {product.name}?
        </h2>
        <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">
          {/* TODO: replace with CMS */}
          Start a project with this product. Tell us your quantities,
          branding requirements, and timeline.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
