import { Metadata } from "next"
import PartnerClient from "./PartnerClient"

export const metadata: Metadata = {
  title: "Partner with Nippon - Business Opportunities",
  description: "Explore partnership opportunities with Nippon. Become a distributor, retail partner, or wholesaler of our quality products.",
}

export default function PartnerPage() {
  return <PartnerClient />
} 