"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function SarahPrawnCrackersClient() {
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
                src="/prawncrackers1.jpg"
                alt="Sarah Prawn Crackers"
                fill
                className="object-contain bg-white p-4"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/prawncrackers2.jpg"
                  alt="Sarah Prawn Crackers - View 2"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/prawncrackers1.jpg"
                  alt="Sarah Prawn Crackers - View 3"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/prawncrackers2.jpg"
                  alt="Sarah Prawn Crackers - View 4"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Sarah Prawn Crackers</h1>
              <p className="text-xl text-muted-foreground">
                Crispy and delicious prawn crackers that are perfect as a snack or side dish.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Authentic prawn flavor</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Light and crispy texture</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Perfect accompaniment for various dishes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Ready to eat</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Available in different pack sizes</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Product Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Net Weight</p>
                  <p className="font-medium">100g</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Shelf Life</p>
                  <p className="font-medium">12 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Storage</p>
                  <p className="font-medium">Store in a cool, dry place</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pack Size</p>
                  <p className="font-medium">24 packs per carton</p>
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
                Sarah Prawn Crackers are a delicious snack made from high-quality ingredients with an authentic prawn flavor. These crackers are light, crispy, and ready to eat straight from the pack.
              </p>
              <p>
                Whether enjoyed as a standalone snack, a party appetizer, or as an accompaniment to Asian cuisine, Sarah Prawn Crackers add a delightful crunch and seafood flavor to your dining experience.
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
                    <td className="text-right">520 kcal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Protein</td>
                    <td className="text-right">5g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Fat</td>
                    <td className="text-right">28g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Carbohydrates</td>
                    <td className="text-right">62g</td>
                  </tr>
                  <tr>
                    <td className="py-2">Salt</td>
                    <td className="text-right">1.5g</td>
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
                <h3 className="text-xl font-bold mb-4">Snacking</h3>
                <ul className="space-y-2">
                  <li>• As a standalone snack</li>
                  <li>• Movie night treat</li>
                  <li>• Lunchbox addition</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Entertaining</h3>
                <ul className="space-y-2">
                  <li>• Party appetizer</li>
                  <li>• Finger food selection</li>
                  <li>• With dipping sauces</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Meal Companion</h3>
                <ul className="space-y-2">
                  <li>• With Asian cuisine</li>
                  <li>• Alongside soups</li>
                  <li>• With seafood dishes</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 