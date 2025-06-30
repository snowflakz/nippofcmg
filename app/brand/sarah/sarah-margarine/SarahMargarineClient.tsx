"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function SarahMargarineClient() {
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
                src="/margarine1.jpg"
                alt="Sarah Margarine"
                fill
                className="object-cover bg-white"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/margarine2.jpg"
                  alt="Sarah Margarine - View 2"
                  fill
                  className="object-cover bg-white"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/margarine1.jpg"
                  alt="Sarah Margarine - View 3"
                  fill
                  className="object-cover bg-white"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/margarine2.jpg"
                  alt="Sarah Margarine - View 4"
                  fill
                  className="object-cover bg-white"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Sarah Margarine</h1>
              <p className="text-xl text-muted-foreground">
                Creamy and delicious margarine for all your baking and spreading needs.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Rich, creamy texture</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Great for baking and cooking</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Delicious spread for bread and pastries</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>No trans fats</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Available in various pack sizes</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Product Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Net Weight</p>
                  <p className="font-medium">250g</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Shelf Life</p>
                  <p className="font-medium">12 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Storage</p>
                  <p className="font-medium">Keep refrigerated</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pack Size</p>
                  <p className="font-medium">48 tubs per carton</p>
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
                Sarah Margarine offers a rich, creamy texture and delicious taste that makes it perfect for all your cooking, baking, and spreading needs. Made with premium ingredients, our margarine delivers consistent quality and excellent taste.
              </p>
              <p>
                Whether you're making pastries, cakes, or simply spreading it on bread, Sarah Margarine provides the perfect balance of flavor and texture. Its versatile nature makes it an essential ingredient in every Nigerian kitchen.
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
                    <td className="text-right">720 kcal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Protein</td>
                    <td className="text-right">0.2g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Fat</td>
                    <td className="text-right">80g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Carbohydrates</td>
                    <td className="text-right">0.5g</td>
                  </tr>
                  <tr>
                    <td className="py-2">Salt</td>
                    <td className="text-right">1.0g</td>
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
                <h3 className="text-xl font-bold mb-4">Baking</h3>
                <ul className="space-y-2">
                  <li>• Cakes and muffins</li>
                  <li>• Cookies and pastries</li>
                  <li>• Bread and scones</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Cooking</h3>
                <ul className="space-y-2">
                  <li>• Sautéing vegetables</li>
                  <li>• Frying foods</li>
                  <li>• Making sauces</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Spreading</h3>
                <ul className="space-y-2">
                  <li>• Bread and toast</li>
                  <li>• Sandwiches</li>
                  <li>• Crackers and biscuits</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 