import Image from 'next/image'
import React from 'react'
import { ImageReveal } from './Reveal'

// An image that takes its height from the column beside it instead of its own proportions,
// so a text + image row ends where the text ends. The image is absolutely positioned (`fill`)
// and cropped with object-cover; it never adds height to the row.
// On mobile (stacked layout) there is no sibling to match, so it falls back to `mobileAspect`.
const FitImage = ({
  src,
  alt = "",
  className = "",
  imgClassName = "object-center",
  minHeight = "min-h-[360px]",
  mobileAspect = "md:aspect-[4/5]",
  sizes = "(max-width: 800px) 100vw, 50vw",
  quality = 90,
  ...imageProps
}) => {
  return (
    <ImageReveal className={`relative w-full h-full ${minHeight} md:min-h-0 md:h-auto ${mobileAspect} ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} quality={quality} className={`object-cover ${imgClassName}`} {...imageProps} />
    </ImageReveal>
  )
}

export default FitImage
