import { Metadata } from "next"
import BookCallClient from "./BookCallClient"

export const metadata: Metadata = {
  title: "Book A Call - Nippon Foods",
  description: "Schedule a call with our sales team to discuss your business needs and how Nippon can support your growth.",
}

export default function BookCallPage() {
  return <BookCallClient />
} 