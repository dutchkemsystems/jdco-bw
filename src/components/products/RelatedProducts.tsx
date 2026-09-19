import { products } from "@/lib/content/products"
import { ProductCard } from "./ProductCard"
import type { Product } from "@/types"

interface RelatedProductsProps {
  currentSlug: string
  relatedSlugs: string[]
}

// TODO: replace with CMS
export function RelatedProducts({ currentSlug, relatedSlugs }: RelatedProductsProps) {
  // Get related products by slug, fall back to other products from same collection
  const currentProduct = products.find((p) => p.slug === currentSlug)
  const collection = currentProduct?.collection

  let related = relatedSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined)

  // If not enough related, fill with same-collection products
  if (related.length < 3 && collection) {
    const sameCollection = products.filter(
      (p) => p.collection === collection && p.slug !== currentSlug && !relatedSlugs.includes(p.slug)
    )
    related = [...related, ...sameCollection].slice(0, 4)
  }

  if (related.length === 0) return null

  return (
    <section className="bg-bone py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 font-serif text-2xl font-semibold text-ink">
          Related Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
