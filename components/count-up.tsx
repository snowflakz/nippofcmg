"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function CountUp({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "", 
  className = "text-3xl font-bold text-[#28406c]" 
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  useEffect(() => {
    // Only start counting when in view
    if (!inView) return;
    
    // Reset counter when end value changes or when it comes into view
    countRef.current = 0
    setCount(0)
    
    const step = Math.max(1, Math.floor(end / (duration / 16)))
    const startTime = Date.now()
    
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    
    timerRef.current = setInterval(() => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      countRef.current = Math.min(Math.floor(progress * end), end)
      setCount(countRef.current)
      
      if (countRef.current >= end) {
        if (timerRef.current) {
          clearInterval(timerRef.current)
        }
      }
    }, 16)
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [inView, end, duration])
  
  // Format the count for display
  const formatCount = (value: number) => {
    if (value >= 1000000) {
      return "1M"
    }
    return value.toLocaleString()
  }
  
  return (
    <div ref={ref} className={className}>
      {prefix}{formatCount(count)}{suffix}
    </div>
  )
} 