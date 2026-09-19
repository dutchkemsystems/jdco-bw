import type { Product } from "@/types"
import { Check } from "lucide-react"

interface ProductSpecsProps {
  product: Product
}

// TODO: replace with CMS
export function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <div className="space-y-8">
      {/* Features */}
      <div>
        <h3 className="text-sm font-semibold tracking-wide uppercase text-ink mb-4">
          Features
        </h3>
        <ul className="space-y-2.5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-muted-text">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-clay" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-sm font-semibold tracking-wide uppercase text-ink mb-4">
          Available Sizes
        </h3>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="inline-flex h-10 w-10 items-center justify-center border border-line text-sm font-medium text-ink"
            >
              {size}
            </span>
          ))}
        </div>
      </div>

      {/* Branding options */}
      <div>
        <h3 className="text-sm font-semibold tracking-wide uppercase text-ink mb-4">
          Branding Options
        </h3>
        <div className="flex flex-wrap gap-2">
          {product.brandingOptions.map((option) => (
            <span
              key={option}
              className="inline-block bg-sand px-3 py-1.5 text-xs font-medium text-ink"
            >
              {option}
            </span>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div>
        <h3 className="text-sm font-semibold tracking-wide uppercase text-ink mb-4">
          Industries
        </h3>
        <div className="flex flex-wrap gap-2">
          {product.industries.map((industry) => (
            <span
              key={industry}
              className="inline-block border border-line px-3 py-1.5 text-xs text-muted-text"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
