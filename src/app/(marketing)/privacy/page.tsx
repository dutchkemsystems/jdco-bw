import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo"

export const metadata = generatePageMetadata(
  "Privacy Policy",
  "How JD & CO BW collects, uses, and protects your personal information.",
  "/privacy"
)

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="text-xs font-medium tracking-wide uppercase text-clay">
        Legal
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-text">Last updated: September 2026</p>

      <div className="prose mt-12 space-y-8 text-muted-text">
        {/* TODO: replace with client-approved privacy policy copy */}

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">1. Information We Collect</h2>
          <p className="mt-3">
            When you submit a project enquiry through our website, we collect your name, email address,
            phone number, organisation name, and project details. This information is used solely to
            respond to your enquiry and manage your project.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">2. How We Use Your Information</h2>
          <p className="mt-3">
            We use your information to communicate with you about your project, provide quotes, and
            deliver our services. We do not sell or share your personal information with third parties
            for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">3. Data Retention</h2>
          <p className="mt-3">
            We retain your project information for the duration of our business relationship and for
            a reasonable period thereafter to facilitate future enquiries.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">4. Contact Us</h2>
          <p className="mt-3">
            For questions about this policy, contact us at{" "}
            <Link href="/contact" className="text-clay hover:text-clay-deep underline underline-offset-4 transition-colors">
              info@jdco-bw.co.bw
            </Link>.
          </p>
        </section>
      </div>
    </div>
  )
}
