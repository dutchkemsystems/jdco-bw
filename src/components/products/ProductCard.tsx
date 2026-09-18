import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

// TODO: replace with CMS — product image
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block border border-line bg-white transition-all hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,.08)]"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand overflow-hidden">
        <Image
          src="/placeholders/jacket.svg"
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium tracking-wide uppercase text-muted-text">
          {product.category}
        </span>

        <h3 className="mt-2 font-serif text-lg font-semibold text-ink group-hover:text-clay transition-colors">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-text line-clamp-2">
          {product.description}
        </p>

        {/* Colours */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.colours.slice(0, 3).map((colour) => (
            <span
              key={colour}
              className="inline-block border border-line px-2 py-0.5 text-xs text-muted-text"
            >
              {colour}
            </span>
          ))}
        </div>

        {/* Customization tiers */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.customization.map((tier) => (
            <span
              key={tier}
              className="inline-block bg-sand px-2 py-0.5 text-xs font-medium text-ink"
            >
              {tier}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
