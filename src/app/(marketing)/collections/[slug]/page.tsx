import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { collections, getCollectionBySlug } from "@/lib/content/collections"
import { getProductsByCollection } from "@/lib/content/products"
import { CollectionHero } from "@/components/collections/CollectionHero"
import { CollectionMeta } from "@/components/collections/CollectionMeta"
import { CollectionProductGrid } from "@/components/collections/CollectionProductGrid"
import { ProjectCTA } from "@/components/home/ProjectCTA"

// TODO: replace with CMS — generateStaticParams from CMS
export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }))
}

// TODO: replace with CMS
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)
  if (!collection) return { title: "Not Found" }

  return {
    title: collection.name,
    description: collection.description,
  }
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

  return (
    <>
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
