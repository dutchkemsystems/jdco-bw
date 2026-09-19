import { generatePageMetadata } from "@/lib/seo"
import { SuccessContent } from "@/components/project/SuccessContent"

export const metadata = generatePageMetadata(
  "Project Submitted",
  "Your project enquiry has been received. Our team will review it within 24 hours.",
  "/start-a-project/success"
)

export default function ProjectSuccessPage() {
  return <SuccessContent />
}
