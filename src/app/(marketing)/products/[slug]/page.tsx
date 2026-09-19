import { notFound } from "next/navigation"
import { products, getProductBySlug } from "@/lib/content/products"

export const revalidate = 3600
import { getCollectionBySlug } from "@/lib/content/collections"
import { ProductGallery } from "@/components/products/ProductGallery"
import { ProductSpecs } from "@/components/products/ProductSpecs"
import { CustomizationBadges } from "@/components/products/CustomizationBadges"
import { RelatedProducts } from "@/components/products/RelatedProducts"
import { ProductCTA } from "@/components/products/ProductCTA"
import Link from "next/link"
import { CTAButton } from "@/components/shared/CTAButton"
import { ThreeDotMark } from "@/components/shared/ThreeDotMark"
import { generatePageMetadata, breadcrumbJsonLd, productJsonLd } from "@/lib/seo"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Not Found" }

  return generatePageMetadata(
    product.name,
    product.description,
    `/products/${product.slug}`,
    product.images[0]
  )
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const collection = getCollectionBySlug(product.collection)

  const jsonLd = productJsonLd({
    name: product.name,
    description: product.description,
    image: product.images[0] || "/placeholders/jacket.svg",
    collection: product.category,
  })

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    ...(collection
      ? [{ name: collection.name, url: `/collections/${collection.slug}` }]
      : []),
    { name: product.name, url: `/products/${product.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-line bg-white py-4">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs text-muted-text">
            <Link href="/products" className="hover:text-ink transition-colors">
              Products
            </Link>
            <span>/</span>
            {collection && (
              <>
                <Link
                  href={`/collections/${collection.slug}`}
                  className="hover:text-ink transition-colors"
                >
                  {collection.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-ink font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <ProductGallery product={product} />

            {/* Details */}
            <div>
              {/* Collection badge */}
              {collection && (
                <div className="flex items-center gap-3 mb-4">
                  <ThreeDotMark accent={collection.accent} />
                  <a
                    href={`/collections/${collection.slug}`}
                    className="text-xs font-medium tracking-wide uppercase text-muted-text hover:text-ink transition-colors"
                  >
                    {collection.name}
                  </a>
                </div>
              )}

              <h1 className="font-serif text-3xl leading-tight font-semibold text-ink md:text-4xl">
                {product.name}
              </h1>

              <p className="mt-1 text-sm text-muted-text">
                {product.category}
              </p>

              <p className="mt-6 text-base leading-relaxed text-muted-text">
                {product.description}
              </p>

              {/* Customization tiers */}
              <div className="mt-8">
                <h3 className="text-xs font-medium tracking-wide uppercase text-muted-text mb-3">
                  Available Customization
                </h3>
                <CustomizationBadges tiers={product.customization} />
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="/start-a-project" variant="primary">
                  Start a Project
                </CTAButton>
                <CTAButton href="/customization" variant="ghost" size="sm">
                  Compare Tiers
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="border-t border-line bg-bone py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink mb-8">
                Specifications
              </h2>
              <ProductSpecs product={product} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink mb-8">
                Customization
              </h2>
              <p className="text-sm leading-relaxed text-muted-text">
                This product is available in{" "}
                {product.customization
                  .map((t) => t.charAt(0) + t.slice(1).toLowerCase())
                  .join(", ")}{" "}
                tiers. Each tier offers different levels of customization — from
                plain garments ready for branding, to full sublimation with
                unlimited design coverage.
              </p>
              <div className="mt-6">
                <CTAButton href="/customization" variant="ghost" size="sm">
                  Learn About Tiers
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <RelatedProducts
        currentSlug={product.slug}
        relatedSlugs={product.related}
      />

      {/* CTA */}
      <ProductCTA product={product} />
    </>
  )
}
