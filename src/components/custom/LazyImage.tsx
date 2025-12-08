import { useState, useRef, useEffect, type ImgHTMLAttributes } from 'react'
import type { PictureSource } from '@/lib/imageTypes'
import { cn } from '@/lib/utils'

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  sources?: PictureSource[]
  className?: string
  placeholder?: string
  fallbackSrc?: string
  onLoad?: () => void
  onError?: () => void
}

const LazyImage = ({
  src,
  alt,
  className,
  sources,
  placeholder,
  fallbackSrc,
  onLoad,
  onError,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [currentSrc, setCurrentSrc] = useState<string>('')
  const [hasTriedFallback, setHasTriedFallback] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before the image enters viewport
      }
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    setIsLoaded(false)
    setHasError(false)
    if (shouldLoad) {
      setCurrentSrc(src)
    } else {
      setCurrentSrc(placeholder ?? transparentPlaceholder)
    }
  }, [shouldLoad, src, placeholder])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    if (fallbackSrc && !hasTriedFallback) {
      setHasTriedFallback(true)
      setHasError(false)
      setIsLoaded(false)
      setCurrentSrc(fallbackSrc)
      return
    }
    setHasError(true)
    onError?.()
  }

  const transparentPlaceholder =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
  const resolvedPlaceholder = placeholder ?? transparentPlaceholder
  const { sizes, ...imgProps } = props

  const pictureSources = Array.isArray(sources) ? sources : []

  return (
    <div className="relative size-full">
      {!isLoaded && !hasError && (
        <div className="bg-muted absolute inset-0 animate-pulse" />
      )}
      {hasError && (
        <div className="bg-muted text-muted-foreground flex items-center justify-center text-sm">
          Failed to load image
        </div>
      )}
      <picture>
        {pictureSources.map((source, index) => (
          <source
            key={`${source.type ?? 'image'}-${index}`}
            srcSet={shouldLoad && !hasTriedFallback ? source.srcset : undefined}
            type={source.type}
            sizes={source.sizes ?? sizes}
          />
        ))}
        <img
          ref={imgRef}
          src={currentSrc || resolvedPlaceholder}
          alt={alt}
          sizes={sizes}
          className={cn(
            'inline-block size-full transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          {...imgProps}
        />
      </picture>
    </div>
  )
}

export default LazyImage
