export type PictureSource = {
  srcset: string
  type?: string
  sizes?: string
}

export type OptimizedImage = {
  sources: PictureSource[]
  img: {
    src: string
    w: number
    h: number
    format: string
  }
}

export const isOptimizedImage = (
  value: unknown
): value is OptimizedImage & { img: { src: string } } => {
  if (!value || typeof value !== 'object') return false
  const maybe = value as Partial<OptimizedImage>
  return (
    Array.isArray(maybe.sources) &&
    typeof maybe.img?.src === 'string' &&
    typeof maybe.img?.w === 'number' &&
    typeof maybe.img?.h === 'number'
  )
}
