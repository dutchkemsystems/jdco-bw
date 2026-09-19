import { SectionHeading } from "@/components/shared/SectionHeading"
import { CTAButton } from "@/components/shared/CTAButton"
import { BrandSignature } from "@/components/shared/BrandSignature"
import { ThreeDotMark } from "@/components/shared/ThreeDotMark"
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo"
import { Shield, Truck, Scissors, Users } from "lucide-react"

export const metadata = generatePageMetadata(
  "About",
  "JD & CO BW designs professional identities for organisations through custom manufactured jackets and outerwear. Based in Gaborone, Botswana.",
  "/about"
)

const values = [
  {
    icon: Scissors,
    title: "Manufactured, Not Sourced",
    description:
      "We don't resell. Every garment is manufactured to your specification — from fabric selection to final stitch.",
  },
  {
    icon: Shield,
    title: "Built for Industry",
    description:
      "Our collections are designed for the conditions each industry demands. Mining-site durability, clinical-grade hygiene, field-ready construction.",
  },
  {
    icon: Truck,
    title: "End-to-End Delivery",
    description:
      "Design, sampling, production, quality check, delivery. One point of contact. One standard. On time.",
  },
  {
    icon: Users,
    title: "Built for Teams",
    description:
      "From 20-unit orders to 500-unit fleet rollouts — we scale with your organisation. Every piece, the same standard.",
  },
]

export default function AboutPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
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
            {/* TODO: replace with CMS */}
            About JD & CO BW
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {/* TODO: replace with CMS */}
            Premium B2B jackets and outerwear. Custom manufactured for
            organisations, institutions, and teams across Southern Africa.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Our Mission"
                subtitle="Designing professional identities through manufactured outerwear."
                accent="corporate"
              />
            </div>
            <div>
              <p className="text-base leading-relaxed text-muted-text">
                {/* TODO: replace with CMS */}
                JD & CO BW was founded on a simple observation: organisations
                spend millions on branding, but the garments that carry that
                identity are often an afterthought. Generic jackets with
                iron-on logos. Off-the-shelf sizes with no regard for the
                conditions they&apos;ll face.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-text">
                We changed that. Every garment we produce is manufactured
                to the specification of the organisation it represents —
                from fabric weight and construction to colour, trim, and
                branding placement.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-text">
                Based in Gaborone, Botswana, we serve organisations across
                Southern Africa — from corporate headquarters to mining
                sites, from safari lodges to university campuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="What We Stand For"
            subtitle="Four principles that define every garment we produce."
            accent="safari"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border border-line bg-bone">
                    <Icon className="h-5 w-5 text-clay" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-text">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Manufacturing Capability"
                subtitle="From concept to delivery, under one roof."
              />
              <ul className="space-y-4 text-sm leading-relaxed text-muted-text">
                <li className="flex items-start gap-3">
                  <ThreeDotMark className="mt-1" />
                  <span>In-house design and pattern making</span>
                </li>
                <li className="flex items-start gap-3">
                  <ThreeDotMark className="mt-1" />
                  <span>Cut, sew, and finishing facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <ThreeDotMark className="mt-1" />
                  <span>Embroidery, print, and sublimation</span>
                </li>
                <li className="flex items-start gap-3">
                  <ThreeDotMark className="mt-1" />
                  <span>Quality inspection at every stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <ThreeDotMark className="mt-1" />
                  <span>Nationwide delivery across Botswana</span>
                </li>
              </ul>
            </div>
            <div>
              <SectionHeading
                title="Industries Served"
                subtitle="Eight collections, each built for the identity it represents."
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Corporate",
                  "Government",
                  "Sport",
                  "Safari",
                  "Mining",
                  "Logistics",
                  "Security",
                  "Healthcare",
                  "Education",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="border border-line bg-white px-4 py-3 text-sm font-medium text-ink"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-clay py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-2xl leading-tight font-semibold text-white md:text-3xl">
            {/* TODO: replace with CMS */}
            Work With Us
          </h2>
          <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">
            {/* TODO: replace with CMS */}
            Start a project and let our team design the identity your
            organisation deserves.
          </p>
          <div className="mt-8">
            <CTAButton
              href="/start-a-project"
              variant="secondary"
              size="lg"
              className="bg-white text-ink hover:bg-bone"
            >
              Start a Project
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
