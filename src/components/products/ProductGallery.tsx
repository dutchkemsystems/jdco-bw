"use client"

import Image from "next/image"
import { useState } from "react"
import type { Product } from "@/types"

interface ProductGalleryProps {
  product: Product
}

// TODO: replace with CMS — real product images
export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Use placeholder for now — one image per product
  const images = product.images.length > 0
    ? product.images
    : ["/placeholders/jacket.svg"]

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-[3/4] bg-sand border border-line overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt={`${product.name} — ${product.colours[activeIndex] || ""}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails (if multiple images) */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`relative h-16 w-16 border overflow-hidden ${
                i === activeIndex ? "border-clay" : "border-line"
              }`}
            >
              <Image
                src={img}
                alt={`${product.name} thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Colour dots */}
      <div className="flex flex-wrap gap-2">
        {product.colours.map((colour) => (
          <span
            key={colour}
            className="inline-block border border-line px-3 py-1.5 text-xs text-muted-text"
          >
            {colour}
          </span>
        ))}
      </div>
    </div>
  )
}
