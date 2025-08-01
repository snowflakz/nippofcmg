import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NipponOilClient from "./NipponOilClient"

export const metadata: Metadata = {
  title: "Sarah Vegetable Oil - Pure and Natural",
  description: "Discover Nippon's premium groundnut oil, produced in our state-of-the-art facility in Calabar, Nigeria. Pure, natural, and perfect for all your cooking needs.",
}

export default function NipponOilPage() {
  return <NipponOilClient />
} 