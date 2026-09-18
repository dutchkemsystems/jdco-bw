import Link from "next/link"
import { resources } from "@/lib/content/resources"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FileText } from "lucide-react"

// TODO: replace with CMS
export function ResourcesStrip() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Resources"
          subtitle="Specifications, guides, and everything you need to make informed decisions."
          accent="logistics"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={resource.href}
              className="group block border border-line p-6 transition-all hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,.08)]"
            >
              <FileText className="mb-4 h-8 w-8 text-clay" />
              <h3 className="text-sm font-semibold text-ink group-hover:text-clay transition-colors">
                {resource.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-text line-clamp-3">
                {resource.description}
              </p>
              <span className="mt-4 inline-block text-xs font-medium tracking-wide uppercase text-clay">
                Download PDF
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
