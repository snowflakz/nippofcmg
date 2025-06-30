import { Metadata } from "next"
import SarahSweetCornClient from "./SarahSweetCornClient"

export const metadata: Metadata = {
  title: "Sarah Sweet Corn - Nippon",
  description: "Premium quality sweet corn, tender and naturally sweet, perfect for your recipes.",
}

export default function SarahSweetCornPage() {
  return <SarahSweetCornClient />
} 