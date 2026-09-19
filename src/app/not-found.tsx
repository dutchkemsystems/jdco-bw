import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-medium tracking-wide uppercase text-clay">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-ink">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-muted-text">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-clay"
      >
        Back to home
      </Link>
    </div>
  )
}
