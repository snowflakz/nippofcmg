"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BlogPost } from "./blog-data"
import { Calendar, User, Tag } from "lucide-react"

interface BlogClientProps {
  blogPosts: BlogPost[]
}

export default function BlogClient({ blogPosts }: BlogClientProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#28406c] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nippon Blog</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and stories from Nippon
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-[220px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    {post.category && (
                      <div className="flex items-center text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#28406c] line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-5 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-500">
                      {post.author}
                    </span>
                  </div>
                  <Button asChild size="sm" className="bg-[#28406c] hover:bg-[#1e325a]">
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#28406c]">Categories</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className="px-4 py-2 bg-[#28406c] text-white rounded-md hover:bg-[#1e325a] transition-colors">
              All
            </Link>
            <Link href="/blog?category=Industry Insights" className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
              Industry Insights
            </Link>
            <Link href="/blog?category=Behind the Scenes" className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
              Behind the Scenes
            </Link>
            <Link href="/blog?category=Sustainability" className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
              Sustainability
            </Link>
            <Link href="/blog?category=Recipes" className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
              Recipes
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-10 bg-[#28406c] text-white p-8 rounded-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter to receive the latest updates from Nippon</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md flex-grow text-gray-900"
              />
              <Button className="bg-white text-[#28406c] hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 