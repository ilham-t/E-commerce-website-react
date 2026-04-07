import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/ui/product-card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/data"

interface ProductGridProps {
  title: string
  subtitle?: string
  products: Product[]
  showViewAll?: boolean
  viewAllLink?: string
}

export function ProductGrid({ 
  title, 
  subtitle, 
  products, 
  showViewAll = true,
  viewAllLink = "/shop" 
}: ProductGridProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-muted-foreground max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
          {showViewAll && (
            <Button asChild variant="ghost" className="self-start sm:self-auto">
              <Link href={viewAllLink}>
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>

        {/* Product grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
