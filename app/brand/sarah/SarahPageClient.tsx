"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

// Recommended product image sizes: 600x600px (square) for consistent display
const products = [
  {
    name: "Sarah Sardine",
    description: "Premium quality sardines packed in rich tomato sauce, perfect for any meal.",
    images: ["/sardine1.jpg", "/sardine2.jpg", "/sardine3.jpg"],
  },
  {
    name: "Sarah Mackerel",
    description: "Fresh and flavorful mackerel, a great source of omega-3 fatty acids.",
    images: ["/markerel1.jpg", "/markerel2.jpg"],
  },
  {
    name: "Sarah Chicken Cube",
    description: "Rich and savory chicken bouillon cubes for enhanced flavor in your cooking.",
    images: ["/chickencubes1.jpg", "/chickencubes2.jpg"],
  },
  {
    name: "Sarah Prawn Crackers",
    description: "Crispy and delicious prawn crackers, perfect for snacking.",
    images: ["/prawncrackers1.jpg", "/prawncrackers2.jpg"],
  },
  {
    name: "Sarah Sweet Corn",
    description: "Sweet and tender corn kernels, harvested at peak freshness.",
    images: ["/corn1.png", "/corn2.png"],
  },
  {
    name: "Sarah Margarine",
    description: "Creamy and spreadable margarine, perfect for baking and cooking.",
    images: ["/margarine.jpg"],
  },
  {
    name: "Sarah Candle",
    description: "Long-lasting candles that create the perfect ambiance.",
    images: ["/candle.jpg"],
  },
]

export default function SarahPageClient() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-16 rounded-lg overflow-hidden">
        <Image
          src="/Sarah Products.jpg"
          alt="Sarah Products"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sarah Products
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Quality food products that bring joy to every Nigerian home
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-[300px]">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain p-2 bg-white transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <Button asChild>
                <Link href={`/brand/sarah/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <section className="mt-16 text-center py-12 bg-primary/5 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Experience Sarah Quality</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Sarah products for their daily needs.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/find-retailer">Find a Retailer</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 