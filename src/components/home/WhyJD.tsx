import { SectionHeading } from "@/components/shared/SectionHeading"
import { Shield, Truck, Scissors } from "lucide-react"

// TODO: replace with CMS
const reasons = [
  {
    icon: Scissors,
    title: "Manufactured, Not Sourced",
    description:
      "Every garment is manufactured to order. No off-the-shelf, no middlemen. From fabric to finish, under one roof.",
  },
  {
    icon: Shield,
    title: "Built for Industry",
    description:
      "Designed for the conditions each industry demands — from mining-site durability to clinical-grade hygiene.",
  },
  {
    icon: Truck,
    title: "End-to-End Delivery",
    description:
      "Design, sampling, production, quality check, delivery. One point of contact. One standard. On time.",
  },
]

export function WhyJD() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Why JD & CO BW"
          subtitle="Not a reseller. Not a wholesaler. A manufacturer."
          accent="safari"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-line bg-white">
                  <Icon className="h-5 w-5 text-clay" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-text">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
