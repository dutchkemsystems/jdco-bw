import type { Metadata } from "next"

const SITE_NAME = "JD & CO BW"
const SITE_DESCRIPTION =
  "Premium B2B jackets and outerwear. Custom manufactured for organisations, institutions, and teams. Design your professional identity."
const SITE_URL = "https://jdco-bw.co.bw"

export function generateBaseMetadata(path: string = ""): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  }
}
