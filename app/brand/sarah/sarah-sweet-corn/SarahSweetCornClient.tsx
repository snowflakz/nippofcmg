"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function SarahSweetCornClient() {
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
                src="/sweetcorn1.jpg"
                alt="Sarah Sweet Corn"
                fill
                className="object-cover bg-white"
                priority               
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/sweetcorn2.jpg"
                  alt="Sarah Sweet Corn - View 2"
                  fill
                  className="object-cover bg-white"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                    src="/sweetcorn1.jpg"
                  alt="Sarah Sweet Corn - View 3"
                  fill
                  className="object-cover bg-white"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/sweetcorn2.jpg"
                  alt="Sarah Sweet Corn - View 4"
                  fill
                  className="object-cover bg-white"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Sarah Sweet Corn</h1>
              <p className="text-xl text-muted-foreground">
                Premium quality sweet corn, tender and naturally sweet, perfect for your recipes.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Selected from the finest corn varieties</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Naturally sweet flavor</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Tender kernels, perfect texture</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Preserved at peak freshness</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Versatile addition to many dishes</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Product Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Net Weight</p>
                  <p className="font-medium">425g</p>
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
                Sarah Sweet Corn brings the natural sweetness and tender texture of premium corn right to your table. Our corn is carefully selected and packed at peak freshness to preserve its delicious flavor and nutritional value.
              </p>
              <p>
                Each can contains sweet and tender corn kernels that are ready to use in a variety of dishes, from salads and soups to side dishes and main courses. Sarah Sweet Corn is a convenient and nutritious addition to your pantry, making meal preparation quick and easy.
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
                    <td className="text-right">86 kcal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Protein</td>
                    <td className="text-right">3.2g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Fat</td>
                    <td className="text-right">1.2g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Carbohydrates</td>
                    <td className="text-right">19g</td>
                  </tr>
                  <tr>
                    <td className="py-2">Fiber</td>
                    <td className="text-right">2.7g</td>
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
                <h3 className="text-xl font-bold mb-4">Salads</h3>
                <ul className="space-y-2">
                  <li>• Mixed vegetable salad</li>
                  <li>• Corn and bean salad</li>
                  <li>• Nigerian salad</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Main Dishes</h3>
                <ul className="space-y-2">
                  <li>• Jollof rice addition</li>
                  <li>• Mixed vegetable rice</li>
                  <li>• Corn fritters</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Side Dishes</h3>
                <ul className="space-y-2">
                  <li>• Buttered corn</li>
                  <li>• Corn and vegetable mix</li>
                  <li>• Corn soup</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 