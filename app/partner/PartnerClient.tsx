"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import Image from "next/image"
import { toast } from "sonner"

const partnershipTypes = [
  {
    title: "Become a Distributor",
    description: "Join our network of trusted distributors and bring Nippon products to your region.",
    benefits: [
      "Exclusive territory rights",
      "Competitive wholesale prices",
      "Marketing support",
      "Training and development",
      "Regular business reviews",
    ],
  },
  {
    title: "Retail Partnership",
    description: "Partner with us as a retail outlet and offer our quality products to your customers.",
    benefits: [
      "Regular product supply",
      "Point of sale materials",
      "Promotional support",
      "Competitive pricing",
      "Business growth opportunities",
    ],
  },
  {
    title: "Wholesale Partnership",
    description: "Purchase our products in bulk for your business needs.",
    benefits: [
      "Volume-based discounts",
      "Flexible payment terms",
      "Priority order processing",
      "Dedicated account manager",
      "Custom packaging options",
    ],
  },
]

export default function PartnerClient() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    partnership: "",
    message: ""
  })
  
  // Error state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    partnership: ""
  })
  
  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  // Validate form
  const validateForm = () => {
    let isValid = true
    const newErrors = { ...errors }
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
      isValid = false
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }
    
    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
      isValid = false
    } else if (!/^[+\d\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
      isValid = false
    }
    
    // Validate company
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
      isValid = false
    }
    
    // Validate partnership type
    if (!formData.partnership) {
      newErrors.partnership = "Please select a partnership type"
      isValid = false
    }
    
    setErrors(newErrors)
    return isValid
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          formType: "partnership" // Identify form type for the API route
        })
      })
      
      if (response.ok) {
        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          partnership: "",
          message: ""
        })
        
        // Show success message
        toast.success("Your partnership request has been submitted successfully!", {
          description: "Our team will contact you shortly."
        })
      } else {
        // Show error message
        toast.error("Failed to submit form", {
          description: "Please try again later or contact us directly."
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Something went wrong", {
        description: "Please try again later or contact us directly."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16 rounded-lg overflow-hidden">
        <Image
          src="/partner.jpg"
          alt="Nippon Partnership"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Partner with Nippon
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our network of successful partners and grow your business with Nigeria's trusted brand
            </p>
          </div>
        </div>
      </div>

      {/* Partnership Types */}
      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
              <p className="text-muted-foreground mb-6">{type.description}</p>
              <ul className="space-y-3">
                {type.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Supply Chain Section */}
      <section className="mb-16 bg-primary/5 py-12 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Supply Chain Advantage</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Partner with Nippon and benefit from our robust supply chain network, ensuring reliable product delivery and consistent quality.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Quality Control</h3>
              <p className="text-muted-foreground">
                Rigorous quality checks at every stage of production and distribution
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Efficient Distribution</h3>
              <p className="text-muted-foreground">
                Nationwide distribution network ensuring timely delivery
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">ROI Focus</h3>
              <p className="text-muted-foreground">
                Competitive pricing and support to maximize your returns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-[#28406c]">
            Schedule Your Call With Our Sales Team
          </h2>
          <p className="text-gray-600 mb-10 text-center">
            Please fill out the form below to help us prepare for our conversation and ensure we can address your specific needs.
          </p>
          <p className="text-gray-600 mb-6 text-center">
            To get in touch with our sales team to see how we can work together. You can call us on: +1 (573) 212 5996, +23407 728 9270
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name <span className="text-red-500">*</span></Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className={errors.company ? "border-red-500" : ""}
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="partnership">Partnership Type <span className="text-red-500">*</span></Label>
              <select
                id="partnership"
                name="partnership"
                className={`w-full p-2 border rounded-md ${errors.partnership ? "border-red-500" : ""}`}
                value={formData.partnership}
                onChange={handleChange}
              >
                <option value="">Select partnership type</option>
                <option value="distributor">Distributor</option>
                <option value="retail">Retail Partner</option>
                <option value="wholesale">Wholesale Partner</option>
              </select>
              {errors.partnership && <p className="text-red-500 text-sm mt-1">{errors.partnership}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your business and partnership goals"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
            </Button>
          </form>
        </motion.div>
      </section>
    </div>
  )
} 