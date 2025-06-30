import { Metadata } from "next"
import SarahChickenCubeClient from "./SarahChickenCubeClient"

export const metadata: Metadata = {
  title: "Sarah Chicken Cube - Nippon",
  description: "Rich and savory chicken bouillon cubes for enhanced flavor in your cooking.",
}

export default function SarahChickenCubePage() {
  return <SarahChickenCubeClient />
} 