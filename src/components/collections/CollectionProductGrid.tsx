import { ProductCard } from "@/components/products/ProductCard"
import type { Product } from "@/types"

interface CollectionProductGridProps {
  products: Product[]
}

// TODO: replace with CMS
export function CollectionProductGrid({ products }: CollectionProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-muted-text">No products in this collection yet.</p>
      </div>
    )
  }

  return (
    <section className="bg-bone py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 font-serif text-2xl font-semibold text-ink">
          Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
