import { Metadata } from "next"
import SarahCandleClient from "./SarahCandleClient"

export const metadata: Metadata = {
  title: "Sarah Candle - Nippon",
  description: "Long-lasting, high-quality candles for reliable lighting during power outages.",
}

export default function SarahCandlePage() {
  return <SarahCandleClient />
} 