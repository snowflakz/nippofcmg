import { Metadata } from "next"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata: Metadata = {
  title: "Privacy Policy - Nippon",
  description: "Learn about how Nippon collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
} 