import { generatePageMetadata } from "@/lib/seo"
import { ContactContent } from "@/components/contact/ContactContent"

export const metadata = generatePageMetadata(
  "Contact Us",
  "Have a question, need a quotation, or ready to start a project? Get in touch.",
  "/contact"
)

export default function ContactPage() {
  return <ContactContent />
}
