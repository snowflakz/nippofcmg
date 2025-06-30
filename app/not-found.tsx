"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      {/* This CSS hides only the footer on the 404 page */}
      <style jsx global>{`
        footer, .border-t.bg-\\[\\#28406c\\].text-white {
          display: none !important;
        }
      `}</style>
      
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/404_error.png"
            alt="404 Error Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="z-10 text-center max-w-xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg mb-8 text-gray-600">
            This isn't your fault! The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="bg-[#28406c] hover:bg-[#1e325a]">
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    </>
  )
} 