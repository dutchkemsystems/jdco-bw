"use client"

import { Suspense, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useProjectFormStore } from "@/lib/stores/projectForm"
import { collections } from "@/lib/content/collections"
import { products } from "@/lib/content/products"
import { ProjectForm } from "@/components/project/ProjectForm"
import { BrandSignature } from "@/components/shared/BrandSignature"
import { breadcrumbJsonLd } from "@/lib/seo"
import { X } from "lucide-react"

function PrefillHandler() {
  const searchParams = useSearchParams()
  const { updateFormData, setPrefilledFrom } = useProjectFormStore()

  useEffect(() => {
    const collection = searchParams.get("collection")
    const product = searchParams.get("product")
    const customization = searchParams.get("customization")

    let source: string | null = null

    if (collection && collections.find((c) => c.slug === collection)) {
      updateFormData({ collections: [collection] })
      const col = collections.find((c) => c.slug === collection)
      source = col?.name ?? collection
    }

    if (product) {
      const p = products.find((pr) => pr.slug === product)
      if (p) {
        updateFormData({ selectedProduct: p.slug, collections: [p.collection] })
        source = p.name
      }
    }

    if (customization && ["PLAIN", "TRIMMED", "SUBLIMATION"].includes(customization)) {
      updateFormData({ customizationTier: customization as "PLAIN" | "TRIMMED" | "SUBLIMATION" })
    }

    if (source) setPrefilledFrom(source)
  }, [searchParams, updateFormData, setPrefilledFrom])

  return null
}

function StartProjectInner() {
  const { prefilledFrom, updateFormData, setPrefilledFrom } = useProjectFormStore()

  const clearPrefill = () => {
    updateFormData({ collections: [], selectedProduct: "", customizationTier: "" })
    setPrefilledFrom(null)
  }

  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Start a Project", url: "/start-a-project" },
  ])

  return (
    <>
      <PrefillHandler />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-graphite py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <BrandSignature />
          <h1 className="mt-6 font-serif text-3xl leading-tight font-semibold tracking-tight text-white md:text-4xl">Start a Project</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">Complete the form below and our team will review your requirements within 24 hours.</p>
        </div>
      </section>

      {prefilledFrom && (
        <div className="bg-sand border-b border-line">
          <div className="mx-auto max-w-3xl px-6 py-3 flex items-center justify-between">
            <p className="text-sm text-ink">Continuing from <span className="font-medium">{prefilledFrom}</span></p>
            <button type="button" onClick={clearPrefill} className="flex items-center gap-1 text-xs text-muted-text hover:text-ink transition-colors">
              <X className="h-3 w-3" /> Clear
            </button>
          </div>
        </div>
      )}

      <section className="bg-bone py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ProjectForm />
        </div>
      </section>
    </>
  )
}

export function StartProjectContent() {
  return (
    <Suspense fallback={null}>
      <StartProjectInner />
    </Suspense>
  )
}
