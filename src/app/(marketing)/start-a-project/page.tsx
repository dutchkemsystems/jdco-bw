import { generatePageMetadata } from "@/lib/seo"
import { StartProjectContent } from "@/components/project/StartProjectContent"

export const metadata = generatePageMetadata(
  "Start a Project",
  "Complete the form below and our team will review your requirements within 24 hours.",
  "/start-a-project"
)

export default function StartProjectPage() {
  return <StartProjectContent />
}
