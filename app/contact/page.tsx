import { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Us - Nippon",
  description: "Get in touch with Nippon. We're here to help with your inquiries about our products and services.",
}

export default function ContactPage() {
  return <ContactClient />
} 