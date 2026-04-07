import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Category } from "@/lib/data"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/shop/${category.name.toLowerCase().replace(" ", "-")}`}
      className="group relative overflow-hidden rounded-xl"
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6">
        <h3 className="text-lg font-semibold text-white lg:text-xl">
          {category.name}
        </h3>
        <p className="text-sm text-white/70">
          {category.itemCount} items
        </p>
        <div className="mt-2 flex items-center text-sm font-medium text-white opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Shop Now
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
