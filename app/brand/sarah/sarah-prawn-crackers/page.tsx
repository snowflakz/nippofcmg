import { Metadata } from "next"
import SarahPrawnCrackersClient from "./SarahPrawnCrackersClient"

export const metadata: Metadata = {
  title: "Sarah Prawn Crackers - Nippon",
  description: "Crispy and delicious prawn crackers that are perfect as a snack or side dish.",
}

export default function SarahPrawnCrackersPage() {
  return <SarahPrawnCrackersClient />
} 