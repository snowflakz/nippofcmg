import { Metadata } from "next"
import SarahMackerelClient from "./SarahMackerelClient"

export const metadata: Metadata = {
  title: "Sarah Mackerel - Premium Quality Mackerel | Nippon",
  description: "Discover Sarah Mackerel, premium quality mackerel packed in rich sauce. Perfect for any meal, made with the finest ingredients.",
}

export default function SarahMackerelPage() {
  return <SarahMackerelClient />
} 