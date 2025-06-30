import { Metadata } from "next"
import SarahPageClient from "./SarahPageClient"

export const metadata: Metadata = {
  title: "Sarah Products - Nippon",
  description: "Discover the range of quality Sarah food products by Nippon.",
}

export default function SarahPage() {
  return <SarahPageClient />
} 