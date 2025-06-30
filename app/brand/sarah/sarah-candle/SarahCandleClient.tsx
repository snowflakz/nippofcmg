"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function SarahCandleClient() {
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
                src="/candle1.jpg"
                alt="Sarah Candle"
                fill
                className="object-contain bg-white p-4"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/candle2.jpg"
                  alt="Sarah Candle - View 2"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/candle1.jpg"
                  alt="Sarah Candle - View 3"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
              <div className="relative h-[120px] rounded-lg overflow-hidden">
                <Image
                  src="/candle2.jpg"
                  alt="Sarah Candle - View 4"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Sarah Candle</h1>
              <p className="text-xl text-muted-foreground">
                Long-lasting, high-quality candles for reliable lighting during power outages.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Long burning time of up to 8 hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Smokeless and odorless</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>High-quality wax for consistent burn</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Dripless design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-2 mt-1" />
                  <span>Available in packs of different quantities</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Product Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Dimensions</p>
                  <p className="font-medium">20cm x 2.5cm</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Burn Time</p>
                  <p className="font-medium">Up to 8 hours</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Material</p>
                  <p className="font-medium">Premium paraffin wax</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pack Size</p>
                  <p className="font-medium">Pack of 12 candles</p>
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
                Sarah Candles are premium quality, long-lasting candles designed to provide reliable lighting during power outages. Made from high-quality paraffin wax, these candles burn cleanly and consistently for up to 8 hours.
              </p>
              <p>
                Our candles feature a dripless design and are smokeless and odorless, making them perfect for indoor use. They provide bright, consistent light that makes them ideal for emergency lighting, everyday use, or special occasions.
              </p>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Product Features</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Long Burning Time</h3>
                    <p>Each candle burns for up to 8 hours, providing extended lighting during power outages.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Clean Burning</h3>
                    <p>Smokeless and odorless design makes them ideal for indoor use.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Dripless Design</h3>
                    <p>Special formulation minimizes dripping and wax waste.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Stable Base</h3>
                    <p>Wide base ensures stability and prevents tipping.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Consistent Light</h3>
                    <p>Provides bright, steady illumination throughout the burning period.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Usage Suggestions */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Usage Suggestions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Emergency Lighting</h3>
                <ul className="space-y-2">
                  <li>• During power outages</li>
                  <li>• Emergency preparedness</li>
                  <li>• Backup lighting solution</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Everyday Use</h3>
                <ul className="space-y-2">
                  <li>• Reading light</li>
                  <li>• Evening ambiance</li>
                  <li>• Dinner table lighting</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Special Occasions</h3>
                <ul className="space-y-2">
                  <li>• Religious ceremonies</li>
                  <li>• Celebrations</li>
                  <li>• Romantic settings</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 