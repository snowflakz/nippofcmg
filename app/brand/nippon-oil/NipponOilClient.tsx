"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NipponOilClient() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-16 rounded-lg overflow-hidden">
        <Image
          src="/nippon oil.png"
          alt="Nippon Groundnut Oil"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nippon Groundnut Oil
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Pure, natural, and locally produced in Nigeria
            </p>
          </div>
        </div>
      </div>

      {/* Product Features */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Premium Quality Groundnut Oil</h2>
            <p className="text-lg text-muted-foreground">
              Produced in our state-of-the-art facility in Calabar, Nigeria, Nippon Groundnut Oil is made from carefully selected groundnuts, ensuring the highest quality and purity.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>100% Pure and Natural</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Rich in Essential Nutrients</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Perfect for All Cooking Needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Locally Produced in Nigeria</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/Nippon Groundnut oil.png"
              alt="Nippon Oil Production"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16 bg-primary/5 py-12 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Nippon Oil?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our premium groundnut oil
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Superior Quality</h3>
            <p className="text-muted-foreground">
              Our oil is extracted using advanced technology to preserve its natural goodness and nutritional value.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Health Benefits</h3>
            <p className="text-muted-foreground">
              Rich in essential fatty acids and antioxidants, promoting heart health and overall well-being.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Versatile Usage</h3>
            <p className="text-muted-foreground">
              Perfect for frying, sautéing, and all types of cooking, enhancing the flavor of your dishes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-primary/5 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Experience the Nippon Difference</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Nippon Groundnut Oil for their cooking needs.
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