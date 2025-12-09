// Photo metadata mapping - maps image names to their locations
import { isOptimizedImage, type OptimizedImage } from '@/lib/imageTypes'

export const photoLocations: Record<string, string> = {
  img_01: 'JLN Stadium, Delhi',
  img_02: 'Greater Noida, UP',
  img_03: 'Greater Noida, UP',
  img_04: 'Sarovar, Delhi',
  img_05: 'Rishikesh, UK',
  img_06: 'Rishikesh, UK',
  img_07: 'Rishikesh, UK',
  img_08: 'JLN Stadium, Delhi',
  img_09: 'Greater Noida, UP',
  img_10: 'Greater Noida, UP',
  img_11: 'Sarovar, Delhi',
  img_12: 'Fatehpur Sikri, UP',
  img_13: 'Home, Delhi',
  img_14: "Humayun's Tomb, Delhi",
  img_15: "Humayun's Tomb, Delhi",
  img_16: "Humayun's Tomb, Delhi",
  img_17: "Humayun's Tomb, Delhi",
  img_18: "Humayun's Tomb, Delhi",
}

export interface Photo {
  id: string
  src: string
  sources: OptimizedImage['sources']
  width: number
  height: number
  alt: string
  location: string
}

// Dynamically import all images from the photos directory
// Explicitly import optimized variants (imagetools) and raw images (fallback)
const optimizedPhotoModules = import.meta.glob<{ default: OptimizedImage }>(
  '../assets/images/photos/*.jpg?w=480;768;1200;1600&format=webp;avif;jpg&as=picture',
  {
    import: 'default',
    eager: true,
  }
)

const rawPhotoModules = import.meta.glob<{ default: string }>(
  '../assets/images/photos/*.jpg',
  { eager: true }
)

// Convert imported modules to Photo objects
function getAllPhotos(): Photo[] {
  return Object.entries(rawPhotoModules)
    .map(([path, rawModule]) => {
      // Extract filename from path (e.g., "img_01.jpg" from full path)
      // Handle both alias paths (@/assets/...) and relative paths
      const pathParts = path.split('/')
      const filenameWithExt = pathParts[pathParts.length - 1] || ''
      const filename = filenameWithExt.replace(/\.jpg$/i, '')
      const filenameKey = filename.toLowerCase()

      const location =
        photoLocations[filenameKey] ||
        // Fall back to a friendly label if no mapping is found
        (filenameKey.startsWith('img_')
          ? `Photo ${filenameKey.slice(4)}`
          : filename)

      const optimized =
        optimizedPhotoModules[
          path.replace('../assets', '..') as keyof typeof optimizedPhotoModules
        ]?.default || optimizedPhotoModules[path]?.default

      const { img, sources } = isOptimizedImage(optimized)
        ? optimized
        : {
            img: {
              src: rawModule.default,
              w: 0,
              h: 0,
              format: 'jpg',
            },
            sources: [],
          }

      return {
        id: filenameKey,
        src: img.src,
        sources,
        width: img.w,
        height: img.h,
        alt: location,
        location: location,
      }
    })
    .filter((photo): photo is Photo => Boolean(photo))
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Get all photos sorted by filename
export function getAllPhotosSorted(): Photo[] {
  return getAllPhotos().sort((a, b) => {
    // Extract numbers from IDs like "img_01" -> 1
    const numA = parseInt(a.id.replace('img_', '')) || 0
    const numB = parseInt(b.id.replace('img_', '')) || 0
    return numA - numB
  })
}

// Get all photos shuffled (for photography page)
export function getAllPhotosShuffled(): Photo[] {
  const allPhotos = getAllPhotos()
  return shuffleArray(allPhotos)
}

// Get random photos (for homepage)
export function getRandomPhotos(count: number = 6): Photo[] {
  const allPhotos = getAllPhotos()
  const shuffled = shuffleArray(allPhotos)
  return shuffled.slice(0, Math.min(count, allPhotos.length))
}
