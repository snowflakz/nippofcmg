"use client"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function NipponPalmOilPage() {
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
                src="/palm-oil1.jpg"
                alt="Nippon Palm Oil"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/palm-oil2.jpg"
                  alt="Nippon Palm Oil - View 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/palm-oil3.jpg"
                  alt="Nippon Palm Oil - View 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/palm-oil4.jpg"
                  alt="Nippon Palm Oil - View 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Nippon Palm Oil</h1>
              <p className="text-xl text-muted-foreground">
                Premium quality palm oil made from carefully selected ingredients, perfect for authentic Nigerian cooking.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>100% pure palm oil</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Rich in natural carotenes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>No artificial coloring</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Perfect for traditional dishes</span>
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
                  <p className="text-sm text-muted-foreground">Volume</p>
                  <p className="font-medium">1 Liter</p>
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
                  <p className="font-medium">12 bottles per carton</p>
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
                Nippon Palm Oil is a premium quality cooking oil that brings authentic taste to your kitchen. Made from carefully selected palm fruits, our palm oil is perfect for traditional Nigerian cooking and other African dishes.
              </p>
              <p>
                Our commitment to quality ensures that every bottle of Nippon Palm Oil meets the highest standards of purity and taste. The oil is rich in natural carotenes and contains no artificial coloring, making it a healthy choice for your family.
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
                    <th className="text-right py-2">Per 100ml</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Energy</td>
                    <td className="text-right">900 kcal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Total Fat</td>
                    <td className="text-right">100g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Saturated Fat</td>
                    <td className="text-right">50g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Monounsaturated Fat</td>
                    <td className="text-right">40g</td>
                  </tr>
                  <tr>
                    <td className="py-2">Polyunsaturated Fat</td>
                    <td className="text-right">10g</td>
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
                <h3 className="text-xl font-bold mb-4">Traditional Dishes</h3>
                <ul className="space-y-2">
                  <li>• Egusi soup</li>
                  <li>• Ogbono soup</li>
                  <li>• Banga soup</li>
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
                <h3 className="text-xl font-bold mb-4">Other Uses</h3>
                <ul className="space-y-2">
                  <li>• Stews</li>
                  <li>• Sauces</li>
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