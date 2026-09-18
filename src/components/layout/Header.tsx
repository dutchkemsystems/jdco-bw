import Link from "next/link"
import { ThreeDotMark } from "@/components/shared/ThreeDotMark"
import { CTAButton } from "@/components/shared/CTAButton"
import { Menu } from "lucide-react"

// TODO: replace with CMS — nav items, mobile menu logic
const navItems = [
  { label: "Collections", href: "/collections" },
  { label: "Products", href: "/products" },
  { label: "Customization", href: "/customization" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bone/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3">
          <ThreeDotMark />
          <span className="font-serif text-lg font-semibold tracking-tight text-ink">
            JD & CO BW
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-text hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <CTAButton href="/start-a-project" variant="primary" size="sm" className="hidden sm:inline-flex">
            Start a Project
          </CTAButton>
          <button
            type="button"
            className="md:hidden p-2 text-ink"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
