"use client"

import { useState, useMemo } from "react"
import { products } from "@/lib/content/products"
import { collections } from "@/lib/content/collections"
import { ProductCard } from "@/components/products/ProductCard"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTAButton } from "@/components/shared/CTAButton"
import { breadcrumbJsonLd } from "@/lib/seo"
import type { Product } from "@/types"

export function ProductsContent() {
  const [selectedCollection, setSelectedCollection] = useState<string>("all")
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all")

  const allIndustries = useMemo(() => {
    const set = new Set<string>()
    products.forEach((p) => p.industries.forEach((ind) => set.add(ind)))
    return Array.from(set).sort()
  }, [])

  const filtered = useMemo(() => {
    return products.filter((p: Product) => {
      const matchCollection = selectedCollection === "all" || p.collection === selectedCollection
      const matchIndustry = selectedIndustry === "all" || p.industries.includes(selectedIndustry)
      return matchCollection && matchIndustry
    })
  }, [selectedCollection, selectedIndustry])

  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Products" subtitle="Browse our range of custom manufactured outerwear. Filter by collection or industry." />
        </div>
      </section>

      <section className="border-b border-line bg-white py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="collection-filter" className="text-xs font-medium tracking-wide uppercase text-muted-text">Collection</label>
              <select id="collection-filter" value={selectedCollection} onChange={(e) => setSelectedCollection(e.target.value)} className="h-9 rounded-sm border border-line bg-white px-3 text-sm text-ink">
                <option value="all">All Collections</option>
                {collections.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="industry-filter" className="text-xs font-medium tracking-wide uppercase text-muted-text">Industry</label>
              <select id="industry-filter" value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)} className="h-9 rounded-sm border border-line bg-white px-3 text-sm text-ink">
                <option value="all">All Industries</option>
                {allIndustries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
              </select>
            </div>
            <span className="ml-auto text-sm text-muted-text">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </section>

      <section className="bg-bone py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-muted-text">No products match your filters.</p>
              <div className="mt-4"><CTAButton href="/start-a-project" variant="primary" size="sm">Start a Project</CTAButton></div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((product) => <ProductCard key={product.slug} product={product} />)}
            </div>
          )}
        </div>
      </section>

      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-lg text-muted-text">Can&apos;t find what you need? We manufacture to order.</p>
          <div className="mt-6"><CTAButton href="/start-a-project" variant="primary">Start a Project</CTAButton></div>
        </div>
      </section>
    </>
  )
}
