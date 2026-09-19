import { Info } from "lucide-react"

// TODO: replace with CMS
export function OrderingNote() {
  return (
    <div className="border border-clay/20 bg-clay/5 p-6">
      <div className="flex gap-4">
        <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay" />
        <div>
          <h4 className="text-sm font-semibold text-ink">
            Important Note
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-muted-text">
            {/* TODO: replace with CMS */}
            The ordering process is tailored to each project. Timelines and
            deposit structures may vary depending on customization tier,
            order volume, and seasonal demand. Our team will provide a
            detailed breakdown during the quotation phase.
          </p>
        </div>
      </div>
    </div>
  )
}
