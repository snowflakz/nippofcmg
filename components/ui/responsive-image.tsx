"use client"

import { useState } from 'react'
import Image from 'next/image'

interface ResponsiveImageProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

export function ResponsiveImage({ 
  src, 
  alt, 
  priority = false, 
  className = "", 
  objectFit = 'contain' 
}: ResponsiveImageProps) {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null)
  
  // Handle image loading and determine aspect ratio
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget
    if (img.naturalWidth && img.naturalHeight) {
      setAspectRatio(img.naturalWidth / img.naturalHeight)
    }
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        priority={priority}
        onLoad={handleImageLoad}
        style={{
          objectFit: objectFit,
          objectPosition: 'center',
        }}
      />
    </div>
  )
} 