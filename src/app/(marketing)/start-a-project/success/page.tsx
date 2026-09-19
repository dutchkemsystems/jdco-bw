"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { BrandSignature } from "@/components/shared/BrandSignature"
import { CTAButton } from "@/components/shared/CTAButton"
import { CheckCircle } from "lucide-react"

function SuccessInner() {
  const searchParams = useSearchParams()
  const reference = searchParams.get("ref") ?? "—"

  return (
    <>
      {/* Hero */}
      <section className="bg-graphite py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <BrandSignature />
          <h1 className="mt-6 font-serif text-3xl leading-tight font-semibold tracking-tight text-white md:text-4xl">
            Project Submitted
          </h1>
        </div>
      </section>

      {/* Confirmation */}
      <section className="bg-bone py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-clay" />

          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">
            Thank You
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-text">
            Your project enquiry has been received. Our team will review it
            and get back to you within 24 hours.
          </p>

          {/* Reference */}
          <div className="mt-8 border border-line bg-white px-8 py-6">
            <p className="text-xs font-medium tracking-wide uppercase text-muted-text">
              Your Reference
            </p>
            <p className="mt-2 font-mono text-2xl font-semibold text-clay">
              {reference}
            </p>
            <p className="mt-2 text-xs text-muted-text">
              Save this reference to check your project status later.
            </p>
          </div>

          {/* What happens next */}
          <div className="mt-10 text-left">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-ink">
              What Happens Next
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-muted-text list-decimal list-inside">
              <li>Our team reviews your enquiry (within 24 hours)</li>
              <li>We may reach out for clarifications</li>
              <li>You&apos;ll receive a detailed quotation</li>
              <li>Upon approval, production begins</li>
            </ol>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton href="/" variant="primary">
              Back to Home
            </CTAButton>
            <CTAButton href="/collections" variant="ghost">
              Browse Collections
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ProjectSuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessInner />
    </Suspense>
  )
}
