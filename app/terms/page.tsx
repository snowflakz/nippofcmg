import { Metadata } from "next"
import TermsClient from "./TermsClient"

export const metadata: Metadata = {
  title: "Terms and Conditions - Nippon",
  description: "Read Nippon's terms and conditions for using our website and services.",
}

export default function TermsPage() {
  return <TermsClient />
} 