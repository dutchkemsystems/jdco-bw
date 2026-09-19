import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo"

export const metadata = generatePageMetadata(
  "Terms of Service",
  "Terms and conditions for using the JD & CO BW website and services.",
  "/terms"
)

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="text-xs font-medium tracking-wide uppercase text-clay">
        Legal
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-text">Last updated: September 2026</p>

      <div className="prose mt-12 space-y-8 text-muted-text">
        {/* TODO: replace with client-approved terms of service copy */}

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">1. Acceptance of Terms</h2>
          <p className="mt-3">
            By accessing this website, you agree to be bound by these Terms of Service. If you do
            not agree to these terms, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">2. Services</h2>
          <p className="mt-3">
            JD & CO BW provides custom manufacturing services for jackets and outerwear. All projects
            are subject to individual agreements and quotations.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">3. Intellectual Property</h2>
          <p className="mt-3">
            Custom designs created for clients remain the property of the client upon full payment.
            JD & CO BW retains the right to display completed work in its portfolio unless otherwise
            agreed.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">4. Limitation of Liability</h2>
          <p className="mt-3">
            JD & CO BW shall not be liable for any indirect, incidental, or consequential damages
            arising from the use of our website or services.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">5. Contact</h2>
          <p className="mt-3">
            For questions about these terms, contact us at{" "}
            <Link href="/contact" className="text-clay hover:text-clay-deep underline underline-offset-4 transition-colors">
              info@jdco-bw.co.bw
            </Link>.
          </p>
        </section>
      </div>
    </div>
  )
}
