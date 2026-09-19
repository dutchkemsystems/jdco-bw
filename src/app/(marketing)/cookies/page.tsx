import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo"

export const metadata = generatePageMetadata(
  "Cookie Policy",
  "How JD & CO BW uses cookies on this website.",
  "/cookies"
)

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="text-xs font-medium tracking-wide uppercase text-clay">
        Legal
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">
        Cookie Policy
      </h1>
      <p className="mt-2 text-sm text-muted-text">Last updated: September 2026</p>

      <div className="prose mt-12 space-y-8 text-muted-text">
        {/* TODO: replace with client-approved cookie policy copy */}

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">1. What Are Cookies</h2>
          <p className="mt-3">
            Cookies are small text files stored on your device when you visit our website. They help
            us improve your experience and understand how our website is used.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">2. How We Use Cookies</h2>
          <p className="mt-3">
            We use cookies for analytics purposes to understand how visitors interact with our
            website. This helps us improve our content and user experience.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">3. Managing Cookies</h2>
          <p className="mt-3">
            You can control and delete cookies through your browser settings. Disabling cookies may
            affect the functionality of our website.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink">4. Contact</h2>
          <p className="mt-3">
            For questions about our cookie policy, contact us at{" "}
            <Link href="/contact" className="text-clay hover:text-clay-deep underline underline-offset-4 transition-colors">
              info@jdco-bw.co.bw
            </Link>.
          </p>
        </section>
      </div>
    </div>
  )
}
