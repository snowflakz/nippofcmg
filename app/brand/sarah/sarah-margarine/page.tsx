import { Metadata } from "next"
import SarahMargarineClient from "./SarahMargarineClient"

export const metadata: Metadata = {
  title: "Sarah Margarine - Nippon",
  description: "Creamy and delicious margarine for all your baking and spreading needs.",
}

export default function SarahMargarinePage() {
  return <SarahMargarineClient />
} 