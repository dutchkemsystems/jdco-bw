"use client"

import { FileText, Download } from "lucide-react"
import { track } from "@/lib/analytics"
import type { Resource } from "@/types"

interface ResourceCardProps {
  resource: Resource
}

// TODO: replace with CMS — real PDF assets
export function ResourceCard({ resource }: ResourceCardProps) {
  function handleDownload() {
    track({ name: "resource_downloaded", properties: { slug: resource.slug } })
  }

  return (
    <a
      href={resource.href}
      download
      onClick={handleDownload}
      className="group block border border-line bg-white p-6 transition-all hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,.08)]"
    >
      <div className="flex items-start justify-between">
        <FileText className="h-8 w-8 text-clay flex-shrink-0" />
        <Download className="h-4 w-4 text-muted-text opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-ink group-hover:text-clay transition-colors">
        {resource.title}
      </h3>

      <p className="mt-2 text-xs leading-relaxed text-muted-text line-clamp-3">
        {resource.description}
      </p>

      <span className="mt-4 inline-block text-xs font-medium tracking-wide uppercase text-clay">
        Download PDF
      </span>
    </a>
  )
}
