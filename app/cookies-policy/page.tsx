import { Metadata } from "next"
import CookiesPolicyClient from "./CookiesPolicyClient"

export const metadata: Metadata = {
  title: "Cookies Policy - Nippon",
  description: "Learn about how Nippon uses cookies and similar technologies on our website.",
}

export default function CookiesPolicyPage() {
  return <CookiesPolicyClient />
} 