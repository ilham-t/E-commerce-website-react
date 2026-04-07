import { CategoryCard } from "@/components/ui/category-card"
import { categories } from "@/lib/data"

export function CategoryShowcase() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of furniture categories to find the perfect pieces for every room in your home.
          </p>
        </div>

        {/* Category grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
