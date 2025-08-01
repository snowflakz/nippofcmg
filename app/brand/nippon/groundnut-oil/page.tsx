"use client"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function NipponGroundnutOilPage() {
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
                src="/groundnut-oil1.jpg"
                alt="Sarah Vegetable Oil"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/groundnut-oil2.jpg"
                  alt="Sarah Vegetable Oil - View 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/groundnut-oil3.jpg"
                  alt="Sarah Vegetable Oil - View 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/groundnut-oil4.jpg"
                  alt="Sarah Vegetable Oil - View 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Sarah Vegetable Oil</h1>
              <p className="text-xl text-muted-foreground">
                Premium quality groundnut oil made from carefully selected groundnuts, perfect for all your cooking needs.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>100% pure groundnut oil</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Rich in healthy fats</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>No artificial additives</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>High smoke point</span>
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
                Sarah Vegetable Oil is a premium quality cooking oil that brings authentic taste and health benefits to your kitchen. Made from carefully selected vegetables, our oil is perfect for all types of cooking.
              </p>
              <p>
                Our commitment to quality ensures that every bottle of Sarah Vegetable Oil meets the highest standards of purity and taste. The oil is rich in healthy fats and contains no artificial additives, making it a healthy choice for your family.
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
                    <td className="text-right">20g</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Monounsaturated Fat</td>
                    <td className="text-right">50g</td>
                  </tr>
                  <tr>
                    <td className="py-2">Polyunsaturated Fat</td>
                    <td className="text-right">30g</td>
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
                  <li>• Frying</li>
                  <li>• Sautéing</li>
                  <li>• Stir-frying</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Dishes</h3>
                <ul className="space-y-2">
                  <li>• Fried rice</li>
                  <li>• Stir-fried vegetables</li>
                  <li>• Fried chicken</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Other Uses</h3>
                <ul className="space-y-2">
                  <li>• Salad dressings</li>
                  <li>• Marinades</li>
                  <li>• Baking</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 