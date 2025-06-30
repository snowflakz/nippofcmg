"use client"

import { HTMLAttributes, ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export function HeroHeading({ children, className, ...props }: HeroHeadingProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut" 
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.h1>
  )
} 