"use client"

export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-medium tracking-wide uppercase text-clay">Error</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-ink">
        Something went wrong
      </h1>
      <p className="mt-2 max-w-md text-muted-text">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={reset}
        className="mt-8 border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-clay"
      >
        Try again
      </button>
    </div>
  )
}
