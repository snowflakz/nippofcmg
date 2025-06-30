import { Metadata } from "next"
import FindRetailerClient from "./FindRetailerClient"

export const metadata: Metadata = {
  title: "Find a Retailer - Nippon",
  description: "Find Nippon products at a retailer near you or contact us to become a retailer.",
}

export default function FindRetailerPage() {
  return <FindRetailerClient />
} 