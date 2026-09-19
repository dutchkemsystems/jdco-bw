import { notFound } from "next/navigation"
import { collections, getCollectionBySlug } from "@/lib/content/collections"

export const revalidate = 3600
import { getProductsByCollection } from "@/lib/content/products"
import { CollectionHero } from "@/components/collections/CollectionHero"
import { CollectionMeta } from "@/components/collections/CollectionMeta"
import { CollectionProductGrid } from "@/components/collections/CollectionProductGrid"
import { ProjectCTA } from "@/components/home/ProjectCTA"
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo"

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)
  if (!collection) return { title: "Not Found" }

  return generatePageMetadata(
    collection.name,
    collection.description,
    `/collections/${collection.slug}`
  )
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)

  if (!collection) {
    notFound()
  }

  const collectionProducts = getProductsByCollection(slug)

  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Collections", url: "/collections" },
    { name: collection.name, url: `/collections/${collection.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CollectionHero collection={collection} />
      <CollectionMeta
        collection={collection}
        productCount={collectionProducts.length}
      />
      <CollectionProductGrid products={collectionProducts} />
      <ProjectCTA />
    </>
  )
}
