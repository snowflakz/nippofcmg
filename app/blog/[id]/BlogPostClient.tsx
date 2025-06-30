"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, User, Tag, Facebook, Twitter } from "lucide-react"
import { blogPosts } from "../blog-data"

export default function BlogPostClient({ postId }: { postId: number }) {
  const post = blogPosts.find(p => p.id === postId)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
      >
        {/* Hero Image */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="px-8 py-10">
          {/* Post Header */}
          <header className="mb-10 border-b pb-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {post.category}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#28406c]">{post.title}</h1>
            <p className="text-lg text-gray-600">{post.excerpt}</p>
          </header>

          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none mb-12 prose-headings:text-[#28406c] prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-p:mb-6 prose-p:leading-normal prose-li:my-4 prose-li:leading-normal prose-a:text-[#28406c] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social Share */}
          <div className="border-t pt-8 mt-10">
            <h2 className="text-xl font-bold mb-4 text-[#28406c]">Share this post</h2>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title
                    )}&url=${encodeURIComponent(
                      `${window.location.origin}/blog/${post.id}`
                    )}`,
                    "_blank"
                  )
                }}
                aria-label="Share on Twitter"
                className="text-[#1DA1F2] border-[#1DA1F2] hover:bg-[#1DA1F2]/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `${window.location.origin}/blog/${post.id}`
                    )}`,
                    "_blank"
                  )
                }}
                aria-label="Share on Facebook"
                className="text-[#4267B2] border-[#4267B2] hover:bg-[#4267B2]/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="text-[#28406c] border-[#28406c] hover:bg-[#28406c]/10">
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </motion.article>
    </div>
  )
} 