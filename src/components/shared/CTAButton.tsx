import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

export function CTAButton({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wide uppercase transition-colors"

  const variants = {
    primary: "bg-clay text-white hover:bg-clay-deep",
    secondary: "bg-graphite text-white hover:bg-ink",
    ghost: "text-ink border border-line hover:bg-sand",
  }

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-sm",
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
