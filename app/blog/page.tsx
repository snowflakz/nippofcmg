import { Metadata } from "next"
import { blogPosts } from "./blog-data"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Nippon Blog - Latest News and Updates",
  description: "Stay updated with the latest news, tips, and insights from Nippon.",
}

export default function BlogPage() {
  return (
    <BlogClient blogPosts={blogPosts} />
  )
} 