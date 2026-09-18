/**
 * Analytics event tracking stub.
 *
 * Replace with real analytics provider (GA4, Mixpanel, PostHog, etc.).
 */

export type AnalyticsEvent =
  | { name: "page_view"; properties: { path: string } }
  | { name: "project_started"; properties: { step: number } }
  | { name: "project_submitted"; properties: { reference: string } }
  | { name: "collection_viewed"; properties: { slug: string } }
  | { name: "product_viewed"; properties: { slug: string } }
  | { name: "resource_downloaded"; properties: { slug: string } }
  | { name: "cta_clicked"; properties: { location: string; label: string } }

export function track(event: AnalyticsEvent): void {
  // TODO: replace with real analytics provider
  if (process.env.NODE_ENV === "development") {
    console.log("[analytics]", event.name, event.properties)
  }
}
