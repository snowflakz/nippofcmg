import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us - Nippon",
  description: "Learn about Nippon's history and our commitment to quality consumer goods in Nigeria.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
        <Image
          src="/Nippon Office .jpg"
          alt="Nippon Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            About Nippon
          </h1>
        </div>
      </div>

      {/* Our History Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Founded in 1993, Nippon began its journey as a specialized marketing and distribution company for electronics and electrical gadgets. Our commitment to excellence and customer satisfaction quickly established us as a trusted name in the Nigerian market.
            </p>
            <p className="text-lg text-muted-foreground">
              Over the years, we have strategically diversified our portfolio to include a wide range of fast-moving consumer goods, becoming the Sole Agent for the prestigious SARAH brand of processed foods and allied products.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we continue to expand our operations, recently establishing our groundnut oil production facility in Calabar, Nigeria, further strengthening our commitment to quality and local production.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/Nippon History.jpg"
              alt="Nippon History"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Who We Are</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="/Nippon Production.png"
              alt="Nippon Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <p className="text-lg text-muted-foreground">
              At Nippon, we are more than just a company - we are a family of dedicated professionals committed to delivering excellence in everything we do. Our team combines decades of industry experience with innovative thinking to bring the best products to Nigerian consumers.
            </p>
            <p className="text-lg text-muted-foreground">
              We take pride in our role as a key player in Nigeria's consumer goods sector, contributing to the nation's economic growth while maintaining the highest standards of quality and service.
            </p>
            <p className="text-lg text-muted-foreground">
              Our commitment to sustainability, local production, and community development sets us apart and drives our continued success in the market.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-primary/5 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Be part of our story as we continue to grow and serve Nigeria with quality products and exceptional service.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/partner">Partner with Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 