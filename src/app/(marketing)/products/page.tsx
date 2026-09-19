import { generatePageMetadata } from "@/lib/seo"
import { ProductsContent } from "@/components/products/ProductsContent"

export const metadata = generatePageMetadata(
  "Products",
  "Browse our range of custom manufactured outerwear. Filter by collection or industry.",
  "/products"
)

export default function ProductsPage() {
  return <ProductsContent />
}
