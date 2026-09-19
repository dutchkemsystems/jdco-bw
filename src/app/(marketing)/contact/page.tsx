"use client"

import { useEffect } from "react"
import { ContactForm } from "@/components/resources/ContactForm"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { BrandSignature } from "@/components/shared/BrandSignature"
import { track } from "@/lib/analytics"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

// TODO: replace with CMS — contact details, metadata
const contactDetails = [
  {
    icon: MapPin,
    label: "Location",
    value: "Gaborone, Botswana",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+267 000 0000",
    href: "tel:+2670000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@jdco-bw.co.bw",
    href: "mailto:info@jdco-bw.co.bw",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 08:00–17:00",
  },
]

export default function ContactPage() {
  useEffect(() => {
    track({ name: "page_view", properties: { path: "/contact" } })
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <BrandSignature />
          <h1 className="mt-6 font-serif text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl md:leading-tight">
            {/* TODO: replace with CMS */}
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {/* TODO: replace with CMS */}
            Have a question, need a quotation, or ready to start a project?
            Get in touch.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="bg-bone py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionHeading
                title="Send a Message"
                subtitle="We'll respond within 24 hours."
                accent="corporate"
              />
              <ContactForm />
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <SectionHeading
                title="Contact Details"
                subtitle="Reach us directly."
              />

              <div className="space-y-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-line bg-white">
                        <Icon className="h-5 w-5 text-clay" />
                      </div>
                      <div>
                        <p className="text-xs font-medium tracking-wide uppercase text-muted-text">
                          {detail.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-ink">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  )

                  if (detail.href) {
                    return (
                      <a
                        key={detail.label}
                        href={detail.href}
                        className="block hover:opacity-80 transition-opacity"
                      >
                        {content}
                      </a>
                    )
                  }

                  return (
                    <div key={detail.label}>{content}</div>
                  )
                })}
              </div>

              {/* Quick CTA */}
              <div className="mt-12 border border-line bg-white p-6">
                <h3 className="font-serif text-lg font-semibold text-ink">
                  Ready to Start?
                </h3>
                <p className="mt-2 text-sm text-muted-text">
                  Complete our project enquiry form for a detailed
                  consultation.
                </p>
                <a
                  href="/start-a-project"
                  className="mt-4 inline-block text-sm font-medium tracking-wide uppercase text-clay hover:text-clay-deep transition-colors"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
