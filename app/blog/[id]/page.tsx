import { Metadata } from "next"
import { blogPosts } from "../blog-data"
import BlogPostClient from "./BlogPostClient"

interface PageProps {
  params: {
    id: string;
  };
}

// Add generateStaticParams to export all blog posts at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Parse the ID outside of the component
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);
  
  return {
    title: post ? `${post.title} - Nippon Blog` : "Blog Post - Nippon",
    description: post ? post.excerpt : "Read the latest news and updates from Nippon.",
  };
}

export default function BlogPostPage({ params }: PageProps) {
  // Parse the ID outside of the component
  const postId = parseInt(params.id);
  
  // Return the client component with the parsed ID
  return <BlogPostClient postId={postId} />;
} 