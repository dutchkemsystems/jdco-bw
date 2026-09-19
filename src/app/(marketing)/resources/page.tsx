import { generatePageMetadata } from "@/lib/seo"
import { ResourcesContent } from "@/components/resources/ResourcesContent"

export const metadata = generatePageMetadata(
  "Resources",
  "Specifications, guides, and everything you need to make informed decisions about your order.",
  "/resources"
)

export default function ResourcesPage() {
  return <ResourcesContent />
}
