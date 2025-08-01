"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Calendar as CalendarIcon, MapPin, Phone, Clock } from "lucide-react"
import Image from "next/image"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function BookCallClient() {
  // Form state
  const [formData, setFormData] = useState({
    // Basic Contact Information
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    companyName: "",
    role: "",

    // Business Type and Nature
    businessType: "",
    otherBusinessType: "",
    interestedCategories: [] as string[],
    otherCategory: "",
    operationArea: "",

    // Current Needs and Challenges
    primaryGoal: "",
    otherGoal: "",
    challenges: "",
    currentSuppliers: "",

    // Purchase Volume and Scale
    purchaseVolume: "",

    // Call Logistics
    callDate: null as Date | null,
    specificTopics: "",
  })

  // Error state
  const [errors, setErrors] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    companyName: "",
    businessType: "",
    interestedCategories: "",
    operationArea: "",
    callDate: "",
  })

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Success state
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // Product categories
  const productCategories = [
    "Canned Foods (Sardines, Mackerel)",
    "Cooking Oils (Groundnut, Vegetable)",
    "Condiments",
    "Seasonings and Spices",
    "Snacks and Biscuits",
    "Other"
  ]

  // Primary goals
  const primaryGoals = [
    "Learning more about our product range",
    "Discussing potential distribution partnerships",
    "Understanding pricing and volume discounts",
    "Exploring opportunities for promotional support",
    "Addressing a specific issue or question",
    "Other"
  ]

  // Purchase volumes
  const purchaseVolumes = [
    "Less than ₦1,000,000",
    "₦1,000,000 - ₦5,000,000",
    "₦5,000,000 - ₦10,000,000",
    "Over ₦10,000,000"
  ]

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  // Handle select change
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  // Handle checkbox change
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        interestedCategories: [...prev.interestedCategories, category]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        interestedCategories: prev.interestedCategories.filter(c => c !== category)
      }))
    }

    if (errors.interestedCategories) {
      setErrors(prev => ({ ...prev, interestedCategories: "" }))
    }
  }

  // Handle date change
  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({ ...prev, callDate: date }))
    if (errors.callDate) {
      setErrors(prev => ({ ...prev, callDate: "" }))
    }
  }

  // Function to initiate a phone call
  const initiateCall = () => {
    // Check if the device can make calls (typically on mobile devices)
    const canMakeCall = typeof window !== 'undefined' && !!navigator.userAgent.match(/android|iphone|ipad|ipod|blackberry|windows phone/i)
    
    if (canMakeCall) {
      window.location.href = "tel:+15732125996"
    } else {
      // Show the number for desktop users
      toast.info("Call our sales team directly:", {
        description: "+1 (760) 359 2732",
        duration: 5000
      })
    }
  }

  // Validate form
  const validateForm = () => {
    let isValid = true
    const newErrors = { ...errors }

    // Validate required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
      isValid = false
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address"
      isValid = false
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
      isValid = false
    } else if (!/^[+\d\s-]{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number"
      isValid = false
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required"
      isValid = false
    }

    if (!formData.businessType) {
      newErrors.businessType = "Please select a business type"
      isValid = false
    }

    if (formData.interestedCategories.length === 0) {
      newErrors.interestedCategories = "Please select at least one product category"
      isValid = false
    }

    if (!formData.operationArea.trim()) {
      newErrors.operationArea = "Please specify your area of operation"
      isValid = false
    }

    if (!formData.callDate) {
      newErrors.callDate = "Please select a preferred date for the call"
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
          formType: "booking" // Identify form type for the API route
        })
      })

      if (response.ok) {
        // Clear form
        setFormData({
          fullName: "",
          emailAddress: "",
          phoneNumber: "",
          companyName: "",
          role: "",
          businessType: "",
          otherBusinessType: "",
          interestedCategories: [],
          otherCategory: "",
          operationArea: "",
          primaryGoal: "",
          otherGoal: "",
          challenges: "",
          currentSuppliers: "",
          purchaseVolume: "",
          callDate: null,
          specificTopics: ""
        })

        // Show detailed success message
        setShowSuccessMessage(true)
        toast.success("Your call request has been submitted!", {
          description: "A member of our sales team will call you on your scheduled date.",
          duration: 5000
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
          src="/slide2.jpg"
          alt="Book A Call with Nippon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book A Call With Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss how Nippon can support your business growth
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-16"
      >
        {showSuccessMessage ? (
          <div className="text-center py-8">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mx-auto text-green-500 mb-4"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h2 className="text-2xl font-bold mb-4 text-[#28406c]">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your booking request has been successfully submitted. A member of our sales team will call you on your scheduled date.
            </p>
            <p className="text-gray-600 mb-6">
              Feel free to reach out to us on our <Link href="/contact" className="text-[#28406c] underline">contact page</Link> if you have any questions.
            </p>
            <Button onClick={() => setShowSuccessMessage(false)} className="mt-4">
              Book Another Call
            </Button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-[#28406c]">
              Schedule Your Call With Our Sales Team
            </h2>
            <p className="text-gray-600 mb-10 text-center">
              Please fill out the form below to help us prepare for our conversation and ensure we can address your specific needs.
            </p>
            <div className="flex justify-center mb-8">
              <Button 
                onClick={initiateCall} 
                className="bg-green-600 hover:bg-green-700"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Now (+1 (760) 359 2732)
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1: Basic Contact Information */}
              <div className="space-y-6 border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold text-[#28406c] flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Basic Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emailAddress">Email Address <span className="text-red-500">*</span></Label>
                    <Input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className={errors.emailAddress ? "border-red-500" : ""}
                    />
                    {errors.emailAddress && <p className="text-red-500 text-sm">{errors.emailAddress}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number <span className="text-red-500">*</span></Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={errors.phoneNumber ? "border-red-500" : ""}
                      required
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={errors.companyName ? "border-red-500" : ""}
                    />
                    {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="role">Your Role/Title <span className="text-gray-500">(Optional)</span></Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder="Enter your role or title"
                      value={formData.role}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Business Type and Nature */}
              <div className="space-y-6 border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold text-[#28406c] flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Business Type and Nature
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessType">What type of business are you? <span className="text-red-500">*</span></Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange("businessType", value)}
                      value={formData.businessType}
                    >
                      <SelectTrigger id="businessType" className={errors.businessType ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retailer">Retailer (e.g., Supermarket, Hypermarket, Convenience Store)</SelectItem>
                        <SelectItem value="distributor">Distributor/Wholesaler</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                        <SelectItem value="foodservice">Food Service (e.g., Restaurant, Hotel, Catering)</SelectItem>
                        <SelectItem value="manufacturer">Manufacturer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.businessType && <p className="text-red-500 text-sm">{errors.businessType}</p>}
                  </div>

                  {formData.businessType === "other" && (
                    <div className="space-y-2">
                      <Label htmlFor="otherBusinessType">Please specify your business type</Label>
                      <Input
                        id="otherBusinessType"
                        name="otherBusinessType"
                        placeholder="Specify your business type"
                        value={formData.otherBusinessType}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  <div className="space-y-3">
                    <Label>What categories of FMCG products are you currently interested in? <span className="text-red-500">*</span></Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {productCategories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={formData.interestedCategories.includes(category)}
                            onCheckedChange={(checked) => handleCategoryChange(category, checked === true)}
                          />
                          <Label htmlFor={`category-${category}`} className="cursor-pointer">{category}</Label>
                        </div>
                      ))}
                    </div>
                    {errors.interestedCategories && <p className="text-red-500 text-sm">{errors.interestedCategories}</p>}
                  </div>

                  {formData.interestedCategories.includes("Other") && (
                    <div className="space-y-2">
                      <Label htmlFor="otherCategory">Please specify other categories</Label>
                      <Input
                        id="otherCategory"
                        name="otherCategory"
                        placeholder="Specify other product categories"
                        value={formData.otherCategory}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="operationArea">What is your primary area of operation/market? <span className="text-red-500">*</span></Label>
                    <Input
                      id="operationArea"
                      name="operationArea"
                      placeholder="e.g., Lagos, Southwest Nigeria, Nationwide"
                      value={formData.operationArea}
                      onChange={handleChange}
                      className={errors.operationArea ? "border-red-500" : ""}
                    />
                    {errors.operationArea && <p className="text-red-500 text-sm">{errors.operationArea}</p>}
                  </div>
                </div>
              </div>

              {/* Section 3: Current Needs and Challenges */}
              <div className="space-y-6 border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold text-[#28406c] flex items-center gap-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="m9 12 2 2 4-4" />
                  </svg> Current Needs and Challenges
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="primaryGoal">What are your primary goals for this call?</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange("primaryGoal", value)}
                      value={formData.primaryGoal}
                    >
                      <SelectTrigger id="primaryGoal">
                        <SelectValue placeholder="Select your primary goal" />
                      </SelectTrigger>
                      <SelectContent>
                        {primaryGoals.map(goal => (
                          <SelectItem key={goal} value={goal}>{goal}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.primaryGoal === "Other" && (
                    <div className="space-y-2">
                      <Label htmlFor="otherGoal">Please specify your primary goal</Label>
                      <Input
                        id="otherGoal"
                        name="otherGoal"
                        placeholder="Specify your primary goal"
                        value={formData.otherGoal}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="challenges">What are some of the key challenges you currently face in sourcing or selling FMCG products?</Label>
                    <Textarea
                      id="challenges"
                      name="challenges"
                      placeholder="Describe your current challenges"
                      rows={3}
                      value={formData.challenges}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentSuppliers">Are you currently working with other FMCG suppliers? If so, which ones?</Label>
                    <Input
                      id="currentSuppliers"
                      name="currentSuppliers"
                      placeholder="List your current suppliers (optional)"
                      value={formData.currentSuppliers}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Purchase Volume and Scale */}
              <div className="space-y-6 border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold text-[#28406c] flex items-center gap-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg> Purchase Volume and Scale
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="purchaseVolume">What is your estimated monthly/annual purchase volume for the categories you are interested in?</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange("purchaseVolume", value)}
                    value={formData.purchaseVolume}
                  >
                    <SelectTrigger id="purchaseVolume">
                      <SelectValue placeholder="Select your estimated purchase volume" />
                    </SelectTrigger>
                    <SelectContent>
                      {purchaseVolumes.map(volume => (
                        <SelectItem key={volume} value={volume}>{volume}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Section 5: Call Logistics */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#28406c] flex items-center gap-2">
                  <Clock className="w-5 h-5" /> Call Logistics
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="callDate">Kindly select your preferred Date for us to Call <span className="text-red-500">*</span></Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.callDate && "text-muted-foreground",
                            errors.callDate && "border-red-500"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.callDate ? format(formData.callDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.callDate || undefined}
                          onSelect={handleDateChange}
                          initialFocus
                          disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 3))}
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.callDate && <p className="text-red-500 text-sm">{errors.callDate}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specificTopics">Any specific topics you would like the sales team to be prepared to discuss?</Label>
                    <Textarea
                      id="specificTopics"
                      name="specificTopics"
                      placeholder="Enter any specific topics you'd like to discuss"
                      rows={3}
                      value={formData.specificTopics}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit" 
                  size="lg"
                  className="bg-[#28406c] hover:bg-[#1e325a] flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book A Call Now"}
                </Button>
              </div>
            </form>
          </>
        )}
      </motion.div>

      {/* Contact Information */}
      <div className="max-w-4xl mx-auto bg-[#28406c]/5 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#28406c]">
          Need Immediate Assistance?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-[#28406c]" />
            <span>+1 (760) 359 2732</span>
          </div>
          <div className="flex items-center gap-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-[#28406c]"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>enquiries@nipponnig.com</span>
          </div>
        </div>
      </div>
    </div>
  )
} 