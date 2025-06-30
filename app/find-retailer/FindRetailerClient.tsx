"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, ExternalLink } from "lucide-react"

export default function FindRetailerClient() {
  const [location, setLocation] = useState("")
  
  // Mock retailers for demo
  const retailers = [
    {
      name: "Superior Stores",
      address: "123 Main Street, Lagos",
      phone: "+234 123 456 7890",
      products: ["Sarah Sardine", "Nippon Groundnut Oil", "Sarah Mackerel"],
      coordinates: "6.5244,3.3792" // Lagos coordinates
    },
    {
      name: "Family Mart",
      address: "456 Central Avenue, Abuja",
      phone: "+234 234 567 8901",
      products: ["Sarah Sardine", "Nippon Palm Oil", "Sarah Sweet Corn"],
      coordinates: "9.0765,7.3986" // Abuja coordinates
    },
    {
      name: "Everyday Supermarket",
      address: "789 Market Road, Port Harcourt",
      phone: "+234 345 678 9012",
      products: ["All Products"],
      coordinates: "4.8156,7.0498" // Port Harcourt coordinates
    },
    {
      name: "Fresh Foods Market",
      address: "101 Commerce Street, Kano",
      phone: "+234 456 789 0123",
      products: ["Sarah Sardine", "Sarah Mackerel", "Nippon Vegetable Oil"],
      coordinates: "12.0022,8.5920" // Kano coordinates
    },
  ]

  // Function to open Google Maps directions
  const getDirections = (retailer: typeof retailers[0]) => {
    // Try to use the address first (more user-friendly)
    // If that fails, fallback to coordinates
    const formattedAddress = encodeURIComponent(retailer.address);
    
    // Create URL with address as the destination
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${formattedAddress}&destination_place_id=&travelmode=driving`;
    
    // Alternative URL with coordinates as backup
    const coordinatesUrl = `https://www.google.com/maps/dir/?api=1&destination=${retailer.coordinates}`;
    
    // Try to open the main URL, with coordinates as fallback
    try {
      window.open(mapsUrl, '_blank');
    } catch (error) {
      // Fallback to coordinates if there's an issue
      window.open(coordinatesUrl, '_blank');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16 rounded-lg overflow-hidden">
        <Image
          src="/Retailer.jpg"
          alt="Nippon Retailer"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find a Retailer
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Locate Nippon products at a store near you
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Find Nippon Products Near You</h2>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="location" className="sr-only">Location</Label>
              <Input
                id="location"
                placeholder="Enter your location (e.g., city, state)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button className="bg-[#28406c] hover:bg-[#1e325a] transition-colors duration-300">
              Search
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Retailers List */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Available Retailers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {retailers.map((retailer) => (
            <motion.div
              key={retailer.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-2">{retailer.name}</h3>
              <div className="flex items-start space-x-2 mb-2">
                <MapPin className="w-5 h-5 text-[#28406c] mt-0.5" />
                <span>{retailer.address}</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="w-5 h-5 text-[#28406c]" />
                <span>{retailer.phone}</span>
              </div>
              <div className="mb-4">
                <p className="font-semibold mb-1">Available Products:</p>
                <div className="flex flex-wrap gap-2">
                  {retailer.products.map((product) => (
                    <span
                      key={product}
                      className="inline-block bg-gray-100 px-2 py-1 rounded text-sm"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
              <Button 
                className="w-full bg-[#28406c] hover:bg-[#1e325a] transition-colors duration-300 flex items-center justify-center gap-2"
                onClick={() => getDirections(retailer)}
              >
                <MapPin className="w-4 h-4" />
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Become a Retailer */}
      <section className="bg-[#28406c] text-white py-12 px-6 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Nippon Retailer</h2>
          <p className="text-lg mb-8">
            Join our network of successful retailers and bring Nippon's quality products to your customers.
          </p>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="bg-white text-[#28406c] hover:bg-gray-100 border-white hover:text-[#1e325a] transition-colors duration-300"
          >
            <Link href="/partner">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 