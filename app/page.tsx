import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroHeading } from "@/components/hero-heading"
import HeroSlider from "@/components/hero-slider"
import CountUp from "@/components/count-up"

export const metadata: Metadata = {
  title: "Nippon - Premium Food Products in Nigeria",
  description: "Discover Nippon's premium food products including Sarah Sardines and Nippon Cooking Oils. Quality, taste, and nutrition for every meal.",
}

// Featured Products
const featuredProducts = [
  {
    name: "Sarah Sardine",
    description: "Premium quality sardines packed in rich tomato sauce.",
    image: "/sardine1.jpg",
    link: "/brand/sarah/sarah-sardine",
  },
  {
    name: "Sarah Mackerel",
    description: "Fresh and flavorful mackerel, rich in omega-3 fatty acids.",
    image: "/markerel1.jpg",
    link: "/brand/sarah/sarah-mackerel",
  },
  {
    name: "Nippon Groundnut Oil",
    description: "Pure, natural groundnut oil for all your cooking needs.",
    image: "/nippon oil1.jpg",
    link: "/brand/nippon-oil",
  },
]

// Premium Brands
const premiumBrands = [
  {
    name: "Sarah",
    description: "Quality food products that bring joy to every meal",
    image: "/sardine2.jpg",
    link: "/brand/sarah",
    buttonText: "Explore Sarah Products"
  },
  {
    name: "Nippon Oil",
    description: "Pure, natural oils produced locally in Nigeria",
    image: "/nippon oil1.jpg",
    link: "/brand/nippon-oil",
    buttonText: "Explore Nippon Oils"
  }
]

// Blog Posts
const blogPosts = [
  {
    id: 1,
    title: "The Rise of Local Food Production in Nigeria",
    excerpt: "Exploring how local food production is transforming Nigeria's economy.",
    image: "/slide1.jpg",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Quality Control in Food Manufacturing",
    excerpt: "A deep dive into our rigorous quality control processes.",
    image: "/slide2.jpg",
    date: "2024-03-10",
  },
]

export default function HomePage() {
  const sliderImages = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
  ]

  return (
    <div className="relative">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <HeroSlider images={sliderImages} interval={10000} />
        <div className="absolute inset-0 bg-[#28406c]/50 z-10"></div>
        <div className="relative z-20 h-full container mx-auto flex items-center">
          <div className="max-w-4xl mx-auto text-center px-4 md:px-0">
            <HeroHeading className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Nourishing Nigerian Families with Premium Quality Food
            </HeroHeading>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Nippon's premium food products empower Nigerian families with quality, taste, and nutrition since 1993
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link href="/find-retailer">Find Our Retailer</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link href="/book-a-call">Book A Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase - Updated to match Featured Products structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#28406c]">
              Our Premium Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium brands that have been trusted by Nigerian families for decades
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {premiumBrands.map((brand) => (
              <div 
                key={brand.name}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain p-4 bg-white"
                    priority
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-[#28406c]/5 to-[#28406c]/10">
                  <h3 className="text-2xl font-bold mb-2 text-[#28406c]">{brand.name}</h3>
                  <p className="text-gray-700 mb-4 text-lg">{brand.description}</p>
                  <Button asChild className="w-full">
                    <Link href={brand.link}>{brand.buttonText}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#28406c]">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular products loved by customers across Nigeria
            </p>
          </div>
          {/* Recommended image size: 500x500px, square or 4:3 aspect ratio */}
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.name}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 bg-white"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#28406c]">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button asChild className="w-full">
                    <Link href={product.link}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#28406c]">
              Our Commitment to Quality
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Since 1993, Nippon has been committed to delivering the highest quality food products to Nigerian families. Our state-of-the-art facilities and rigorous quality control ensure that each product meets international standards.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-[#28406c] rounded-full p-1 mt-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700">Premium ingredients sourced locally when possible</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#28406c] rounded-full p-1 mt-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700">Strict quality control at every production stage</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#28406c] rounded-full p-1 mt-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700">Modern production facilities</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#28406c] rounded-full p-1 mt-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700">Supporting local communities and employment</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/slide4.jpg"
              alt="Nippon Quality"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#28406c]">
              Latest News & Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest news and industry insights
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-[240px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                  <h3 className="text-2xl font-bold mb-3 text-[#28406c]">{post.title}</h3>
                  <p className="text-gray-600 mb-5">{post.excerpt}</p>
                  <Button asChild variant="outline" className="border-[#28406c] text-[#28406c] hover:bg-[#28406c] hover:text-white">
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#28406c] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Nippon?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Become a retailer or distributor of our premium food products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white text-[#28406c] hover:bg-white/90 border-white">
              <Link href="/partner">Partner with Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-[#28406c] hover:bg-white/90 border-white">
              <Link href="/book-a-call">Book A Call</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Trust Signals */}
      <section className="py-12 container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <CountUp end={30} suffix="+" />
            <div className="text-gray-600">Years in Business</div>
          </div>
          <div className="text-center">
            <CountUp end={1000000} prefix="" suffix="+" className="text-3xl font-bold text-[#28406c] mb-1" />
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <CountUp end={500} suffix="+" className="text-3xl font-bold text-[#28406c] mb-1" />
            <div className="text-gray-600">Retailers Nationwide</div>
          </div>
          <div className="text-center">
            <CountUp end={100} suffix="%" className="text-3xl font-bold text-[#28406c] mb-1" />
            <div className="text-gray-600">Quality Guaranteed</div>
          </div>
        </div>
      </section>
    </div>
  )
}
