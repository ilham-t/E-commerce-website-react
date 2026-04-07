import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { FeaturesBar } from "@/components/sections/features-bar"
import { CategoryShowcase } from "@/components/sections/category-showcase"
import { ProductGrid } from "@/components/sections/product-grid"
import { PromoBanner } from "@/components/sections/promo-banner"
import { BlogSection } from "@/components/sections/blog-section"
import { Newsletter } from "@/components/sections/newsletter"
import { products, trendingProducts } from "@/lib/data"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Features Bar */}
        <FeaturesBar />

        {/* Browse by Category */}
        <CategoryShowcase />

        {/* Featured Products */}
        <ProductGrid 
          title="Featured Products"
          subtitle="Discover our handpicked selection of premium furniture pieces."
          products={products.slice(0, 4)}
        />

        {/* Promotional Banner */}
        <PromoBanner />

        {/* Trending Products */}
        <ProductGrid 
          title="Trending Now"
          subtitle="See what everyone is loving this season."
          products={trendingProducts}
          viewAllLink="/shop/trending"
        />

        {/* Blog Section */}
        <BlogSection />

        {/* Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
