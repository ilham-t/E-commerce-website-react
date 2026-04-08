export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
  badge?: string
}

export interface Category {
  id: number
  name: string
  itemCount: number
  image: string
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Lounge Chair",
    price: 299,
    originalPrice: 399,
    image: "/products/chair-1.jpg",
    rating: 4.8,
    reviews: 124,
    category: "Living Room",
    badge: "Sale"
  },
  {
    id: 2,
    name: "Minimalist Coffee Table",
    price: 449,
    image: "/products/table-1.jpg",
    rating: 4.9,
    reviews: 89,
    category: "Living Room"
  },
  {
    id: 3,
    name: "Scandinavian Sofa",
    price: 1299,
    originalPrice: 1599,
    image: "/products/sofa-1.jpg",
    rating: 4.7,
    reviews: 256,
    category: "Living Room",
    badge: "Sale"
  },
  {
    id: 4,
    name: "Wooden Dining Table",
    price: 899,
    image: "/products/table-2.jpg",
    rating: 4.6,
    reviews: 78,
    category: "Kitchen"
  },
  {
    id: 5,
    name: "Velvet Accent Chair",
    price: 349,
    image: "/products/chair-2.jpg",
    rating: 4.8,
    reviews: 145,
    category: "Living Room",
    badge: "New"
  },
  {
    id: 6,
    name: "Oak Bookshelf",
    price: 599,
    originalPrice: 749,
    image: "/products/bookshelf-1.jpg",
    rating: 4.5,
    reviews: 67,
    category: "Office",
    badge: "Sale"
  },
  {
    id: 7,
    name: "Modern Floor Lamp",
    price: 189,
    image: "/products/lamp-1.jpg",
    rating: 4.7,
    reviews: 203,
    category: "Lighting"
  },
  {
    id: 8,
    name: "King Size Bed Frame",
    price: 1199,
    image: "/products/bed-1.jpg",
    rating: 4.9,
    reviews: 312,
    category: "Bedroom",
    badge: "Bestseller"
  }
]

export const trendingProducts: Product[] = [
  {
    id: 9,
    name: "Rattan Armchair",
    price: 379,
    image: "/products/chair-3.jpg",
    rating: 4.6,
    reviews: 98,
    category: "Living Room",
    badge: "Trending"
  },
  {
    id: 10,
    name: "Marble Side Table",
    price: 249,
    originalPrice: 299,
    image: "/products/table-3.jpg",
    rating: 4.8,
    reviews: 156,
    category: "Living Room",
    badge: "Sale"
  },
  {
    id: 11,
    name: "Ceramic Table Lamp",
    price: 129,
    image: "/products/lamp-2.jpg",
    rating: 4.5,
    reviews: 87,
    category: "Lighting"
  },
  {
    id: 12,
    name: "Linen Sectional Sofa",
    price: 1899,
    image: "/products/sofa-2.jpg",
    rating: 4.9,
    reviews: 234,
    category: "Living Room",
    badge: "New"
  }
]

// All products combined for shop page
export const allProducts: Product[] = [
  ...products,
  ...trendingProducts,
  {
    id: 13,
    name: "Office Desk Chair",
    price: 459,
    originalPrice: 549,
    image: "/products/chair-2.jpg",
    rating: 4.7,
    reviews: 189,
    category: "Office",
    badge: "Sale"
  },
  {
    id: 14,
    name: "Nightstand Set",
    price: 299,
    image: "/products/table-3.jpg",
    rating: 4.6,
    reviews: 112,
    category: "Bedroom"
  },
  {
    id: 15,
    name: "Outdoor Lounge Set",
    price: 1599,
    image: "/products/sofa-1.jpg",
    rating: 4.8,
    reviews: 76,
    category: "Outdoor",
    badge: "New"
  },
  {
    id: 16,
    name: "Pendant Light Set",
    price: 349,
    originalPrice: 429,
    image: "/products/lamp-1.jpg",
    rating: 4.7,
    reviews: 145,
    category: "Lighting",
    badge: "Sale"
  }
]

export const categories: Category[] = [
  {
    id: 1,
    name: "Living Room",
    itemCount: 124,
    image: "/categories/living-room.jpg"
  },
  {
    id: 2,
    name: "Bedroom",
    itemCount: 86,
    image: "/categories/bedroom.jpg"
  },
  {
    id: 3,
    name: "Kitchen",
    itemCount: 54,
    image: "/categories/kitchen.jpg"
  },
  {
    id: 4,
    name: "Office",
    itemCount: 42,
    image: "/categories/office.jpg"
  },
  {
    id: 5,
    name: "Outdoor",
    itemCount: 38,
    image: "/categories/outdoor.jpg"
  },
  {
    id: 6,
    name: "Lighting",
    itemCount: 67,
    image: "/categories/lighting.jpg"
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for Creating a Cozy Living Space",
    excerpt: "Transform your living room into a warm, inviting sanctuary with these expert design tips.",
    date: "March 15, 2026",
    category: "Interior Design",
    image: "/blog/cozy-living.jpg"
  },
  {
    id: 2,
    title: "The Rise of Sustainable Furniture",
    excerpt: "Discover how eco-friendly materials are shaping the future of home furnishings.",
    date: "March 10, 2026",
    category: "Sustainability",
    image: "/blog/sustainable.jpg"
  },
  {
    id: 3,
    title: "Minimalist Bedroom Design Ideas",
    excerpt: "Less is more. Explore beautiful minimalist bedroom designs for peaceful sleep.",
    date: "March 5, 2026",
    category: "Bedroom",
    image: "/blog/minimalist.jpg"
  }
]

export const features = [
  {
    icon: "truck",
    title: "Free Delivery",
    description: "On orders over $500"
  },
  {
    icon: "shield",
    title: "Secure Payment",
    description: "100% protected"
  },
  {
    icon: "headphones",
    title: "24/7 Support",
    description: "Dedicated support"
  },
  {
    icon: "refresh",
    title: "Easy Returns",
    description: "30 day return policy"
  }
]
