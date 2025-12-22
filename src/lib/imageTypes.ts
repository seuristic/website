export type PictureSource = {
  srcset: string
  type?: string
  sizes?: string
}

export type OptimizedSourceMap = Record<string, string>

export type OptimizedImage = {
  sources: OptimizedSourceMap
  img: {
    src: string
    w: number
    h: number
    format?: string
  }
}

export const isOptimizedImage = (
  value: unknown
): value is OptimizedImage & { img: { src: string } } => {
  if (!value || typeof value !== 'object') return false
  const maybe = value as Partial<OptimizedImage>
  return (
    maybe.sources !== null &&
    typeof maybe.sources === 'object' &&
    Object.values(maybe.sources).every(val => typeof val === 'string') &&
    typeof maybe.img?.src === 'string' &&
    typeof maybe.img?.w === 'number' &&
    typeof maybe.img?.h === 'number'
  )
}
