import Link from "next/link"
import { ThreeDotMark } from "@/components/shared/ThreeDotMark"

// TODO: replace with CMS — footer links, company info
const footerLinks = {
  collections: [
    { label: "Corporate", href: "/collections/corporate" },
    { label: "Sport", href: "/collections/sport" },
    { label: "Safari", href: "/collections/safari" },
    { label: "Mining", href: "/collections/mining" },
    { label: "Logistics", href: "/collections/logistics" },
    { label: "Tactical", href: "/collections/tactical" },
    { label: "Healthcare", href: "/collections/healthcare" },
    { label: "Campus", href: "/collections/campus" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Client Journey", href: "/client-journey" },
    { label: "Ordering System", href: "/ordering-system" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-graphite text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ThreeDotMark className="[&>span]:bg-clay" />
              <span className="font-serif text-lg font-semibold tracking-tight">
                JD & CO BW
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              {/* TODO: replace with CMS */}
              Premium B2B jackets and outerwear. Custom manufactured for
              organisations, institutions, and teams.
            </p>
            <p className="mt-6 text-xs tracking-[0.2em] uppercase text-white/30">
              Feel It.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-4">
              Collections
            </h4>
            <ul className="space-y-2">
              {footerLinks.collections.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} JD & CO BW. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/30">
              <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-white/60 transition-colors">Cookies</Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/30 text-right">
            Gaborone, Botswana
          </p>
        </div>
      </div>
    </footer>
  )
}
