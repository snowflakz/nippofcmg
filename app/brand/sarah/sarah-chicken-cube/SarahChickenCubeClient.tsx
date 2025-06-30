"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

// Recommended image sizes: Main image 800x800px, thumbnails 300x300px (square format)
export default function SarahChickenCubeClient() {
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
                src="/chickencubes1.jpg"
                alt="Sarah Chicken Cube"
                fill
                className="object-contain bg-white p-4"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/chickencubes2.jpg"
                  alt="Sarah Chicken Cube - View 2"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/chickencubes1.jpg"
                  alt="Sarah Chicken Cube - View 3"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/chickencubes2.jpg"
                  alt="Sarah Chicken Cube - View 4"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Sarah Chicken Cube</h1>
              <p className="text-xl text-muted-foreground">
                Rich and savory chicken bouillon cubes for enhanced flavor in your cooking.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Rich chicken flavor for all your cooking needs</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Easy to dissolve in hot water</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Enhances the taste of soups, stews, and rice dishes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Made with quality ingredients</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Available in packs of different sizes</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Product Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Net Weight</p>
                  <p className="font-medium">8g per cube</p>
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
                  <p className="font-medium">50 cubes per carton</p>
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
                Sarah Chicken Cubes are the perfect way to add rich, savory flavor to your cooking. Each cube is packed with authentic chicken taste that dissolves easily to enhance soups, stews, rice dishes, and more.
              </p>
              <p>
                Our chicken cubes are crafted with quality ingredients to ensure consistent flavor every time. They're an essential ingredient for kitchens across Nigeria, helping home cooks and professional chefs create delicious meals with ease.
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
                    <th className="text-right py-2">Per Cube</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Energy</td>
                    <td className="text-right">25 kcal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Protein</td>
                    <td className="text-right">1.2g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Fat</td>
                    <td className="text-right">1.5g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Carbohydrates</td>
                    <td className="text-right">2.8g</td>
                  </tr>
                  <tr>
                    <td className="py-2">Salt</td>
                    <td className="text-right">1.7g</td>
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
                <h3 className="text-xl font-bold mb-4">Soups & Stews</h3>
                <ul className="space-y-2">
                  <li>• Chicken soup</li>
                  <li>• Vegetable soup</li>
                  <li>• Nigerian stews</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Rice Dishes</h3>
                <ul className="space-y-2">
                  <li>• Jollof rice</li>
                  <li>• Fried rice</li>
                  <li>• Coconut rice</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Other Dishes</h3>
                <ul className="space-y-2">
                  <li>• Pasta dishes</li>
                  <li>• Vegetable dishes</li>
                  <li>• Marinades</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 