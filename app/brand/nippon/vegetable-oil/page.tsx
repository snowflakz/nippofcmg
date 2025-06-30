"use client"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function NipponVegetableOilPage() {
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
                src="/oil1.jpg"
                alt="Nippon Vegetable Oil"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/oil2.jpg"
                  alt="Nippon Vegetable Oil - View 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/oil3.jpg"
                  alt="Nippon Vegetable Oil - View 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/oil4.jpg"
                  alt="Nippon Vegetable Oil - View 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Nippon Vegetable Oil</h1>
              <p className="text-xl text-muted-foreground">
                Pure and healthy cooking oil made from carefully selected ingredients, perfect for all your cooking needs.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>100% pure vegetable oil</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Rich in essential fatty acids</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>No cholesterol</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>High smoke point for all cooking methods</span>
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
                Nippon Vegetable Oil is a premium quality cooking oil that brings health and taste to your kitchen. Made from carefully selected ingredients, our vegetable oil is perfect for all your cooking needs, from frying to baking.
              </p>
              <p>
                Our commitment to quality ensures that every bottle of Nippon Vegetable Oil meets the highest standards of purity and taste. The oil is rich in essential fatty acids and contains no cholesterol, making it a healthy choice for your family.
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
                    <td className="text-right">15g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Monounsaturated Fat</td>
                    <td className="text-right">45g</td>
                  </tr>
                  <tr>
                    <td className="py-2">Polyunsaturated Fat</td>
                    <td className="text-right">40g</td>
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
                <h3 className="text-xl font-bold mb-4">Cooking Methods</h3>
                <ul className="space-y-2">
                  <li>• Deep frying</li>
                  <li>• Stir frying</li>
                  <li>• Sautéing</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Baking</h3>
                <ul className="space-y-2">
                  <li>• Cakes</li>
                  <li>• Cookies</li>
                  <li>• Bread</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Other Uses</h3>
                <ul className="space-y-2">
                  <li>• Salad dressings</li>
                  <li>• Marinades</li>
                  <li>• Sauces</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 