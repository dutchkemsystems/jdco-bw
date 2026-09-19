"use client"

import { useEffect } from "react"
import { resources } from "@/lib/content/resources"
import { ResourceList } from "@/components/resources/ResourceList"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTAButton } from "@/components/shared/CTAButton"
import { BrandSignature } from "@/components/shared/BrandSignature"
import { track } from "@/lib/analytics"
import { breadcrumbJsonLd } from "@/lib/seo"

export function ResourcesContent() {
  useEffect(() => {
    track({ name: "page_view", properties: { path: "/resources" } })
  }, [])

  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <BrandSignature />
          <h1 className="mt-6 font-serif text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl md:leading-tight">
            Resources
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Specifications, guides, and everything you need to make
            informed decisions about your order.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="bg-bone py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Downloads"
            subtitle="PDF guides covering fabrics, customization, branding, and sizing."
          />
          <ResourceList resources={resources} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-lg text-muted-text">
            Need more information? Contact our team directly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact" variant="primary">
              Contact Us
            </CTAButton>
            <CTAButton href="/start-a-project" variant="ghost">
              Start a Project
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
