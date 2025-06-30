"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function SarahMackerelClient() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Product Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/markerel1.jpg"
                alt="Sarah Mackerel"
                fill
                className="object-contain bg-white p-4"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/markerel2.jpg"
                  alt="Sarah Mackerel - View 2"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/markerel1.jpg"
                  alt="Sarah Mackerel - View 3"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/markerel2.jpg"
                  alt="Sarah Mackerel - View 4"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Sarah Mackerel</h1>
              <p className="text-xl text-muted-foreground">
                Premium quality mackerel packed in rich sauce, perfect for any meal.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Made from carefully selected fresh mackerel</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Rich in omega-3 fatty acids and protein</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Packed in premium sauce</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>No artificial preservatives</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Available in various sizes</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Product Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Net Weight</p>
                  <p className="font-medium">155g</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Shelf Life</p>
                  <p className="font-medium">24 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Storage</p>
                  <p className="font-medium">Store in a cool, dry place</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pack Size</p>
                  <p className="font-medium">24 cans per carton</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/find-retailer">Find a Retailer</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-16">
          {/* Description */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Product Description</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Sarah Mackerel is a premium quality canned mackerel product that brings the taste of the ocean to your table. Made from carefully selected fresh mackerel and packed in rich sauce, our mackerel is a perfect addition to any meal.
              </p>
              <p>
                Each can of Sarah Mackerel is packed with essential nutrients, including omega-3 fatty acids and high-quality protein, making it not just delicious but also nutritious. Our commitment to quality ensures that every can meets the highest standards of food safety and taste.
              </p>
            </div>
          </section>

          {/* Nutritional Information */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Nutritional Information</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Nutrient</th>
                    <th className="text-right py-2">Per 100g</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Energy</td>
                    <td className="text-right">190 kcal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Protein</td>
                    <td className="text-right">22g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Fat</td>
                    <td className="text-right">12g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Carbohydrates</td>
                    <td className="text-right">2g</td>
                  </tr>
                  <tr>
                    <td className="py-2">Omega-3</td>
                    <td className="text-right">1.8g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Usage Suggestions */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Usage Suggestions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Meals</h3>
                <ul className="space-y-2">
                  <li>• Mackerel sandwich</li>
                  <li>• Mackerel pasta</li>
                  <li>• Mackerel rice</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Healthy Snacks</h3>
                <ul className="space-y-2">
                  <li>• Mackerel salad</li>
                  <li>• Mackerel toast</li>
                  <li>• Mackerel crackers</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Family Meals</h3>
                <ul className="space-y-2">
                  <li>• Mackerel stew</li>
                  <li>• Mackerel curry</li>
                  <li>• Mackerel casserole</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 