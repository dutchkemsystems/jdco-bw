import { generatePageMetadata } from "@/lib/seo"
import dynamic from "next/dynamic"

const StartProjectContent = dynamic(
  () => import("@/components/project/StartProjectContent").then((m) => ({ default: m.StartProjectContent })),
  {
    loading: () => (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-1">
            <div className="h-2 w-2 bg-clay animate-pulse" style={{ animationDelay: "0ms" }} />
            <div className="h-2 w-2 bg-clay animate-pulse" style={{ animationDelay: "150ms" }} />
            <div className="h-2 w-2 bg-clay animate-pulse" style={{ animationDelay: "300ms" }} />
          </div>
          <p className="text-xs tracking-wide uppercase text-muted-text">Loading form…</p>
        </div>
      </div>
    ),
  }
)

export const metadata = generatePageMetadata(
  "Start a Project",
  "Complete the form below and our team will review your requirements within 24 hours.",
  "/start-a-project"
)

export default function StartProjectPage() {
  return <StartProjectContent />
}
