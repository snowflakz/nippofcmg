import { Metadata } from "next"
import SarahSardineClient from "./SarahSardineClient"

export const metadata: Metadata = {
  title: "Sarah Sardine - Premium Quality Sardines | Nippon",
  description: "Discover Sarah Sardine, premium quality sardines packed in rich tomato sauce. Perfect for any meal, made with the finest ingredients.",
}

export default function SarahSardinePage() {
  return <SarahSardineClient />
} 