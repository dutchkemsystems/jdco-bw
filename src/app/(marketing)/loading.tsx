export default function MarketingLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-1">
          <div className="h-2 w-2 bg-clay animate-pulse" style={{ animationDelay: "0ms" }} />
          <div className="h-2 w-2 bg-clay animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="h-2 w-2 bg-clay animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
        <p className="text-xs tracking-wide uppercase text-muted-text">Loading…</p>
      </div>
    </div>
  )
}
