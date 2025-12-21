// Photo metadata mapping - maps image names to their locations
import { isOptimizedImage, type OptimizedImage } from '@/lib/imageTypes'

export const photoLocations: Record<string, string> = {
  delhi_metro: 'Delhi Metro',
  fatehpur_sikri: 'Fatehpur Sikri, UP',
  greater_noida: 'Greater Noida, UP',
  greater_noida2: 'Greater Noida, UP',
  greater_noida3: 'Greater Noida, UP',
  greater_noida4: 'Greater Noida, UP',
  home: 'Home, Delhi',
  humayun_tomb: "Humayun's Tomb, Delhi",
  humayun_tomb2: "Humayun's Tomb, Delhi",
  humayun_tomb3: "Humayun's Tomb, Delhi",
  humayun_tomb4: "Humayun's Tomb, Delhi",
  humayun_tomb5: "Humayun's Tomb, Delhi",
  jln_stadium: 'JLN Stadium, Delhi',
  rishikesh: 'Rishikesh, Uttarakhand',
  rishikesh2: 'Rishikesh, Uttarakhand',
  rishikesh3: 'Rishikesh, Uttarakhand',
  sarovar: 'Sarovar, Delhi',
  sarovar2: 'Sarovar, Delhi',
}

export interface Photo {
  id: string
  src: string
  sources: OptimizedImage['sources']
  width: number
  height: number
  alt: string
  location: string
  pinned: boolean
}

// Add photo ids here to pin them to the homepage gallery (e.g., 'home', 'rishikesh')
const pinnedPhotoIds: string[] = [
  'delhi_metro',
  'humayun_tomb',
  'fatehpur_sikri',
  'rishikesh',
  'humayun_tomb2',
  'rishikesh2',
  'greater_noida2',
  'home',
]
const pinnedPhotoIdSet = new Set(pinnedPhotoIds.map(id => id.toLowerCase()))

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
        // Fall back to a friendly, human-readable label
        filenameKey
          .replace(/_/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase())

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
        pinned: pinnedPhotoIdSet.has(filenameKey),
      }
    })
    .filter((photo): photo is Photo => Boolean(photo))
}

// Get all photos sorted by filename
export function getAllPhotosSorted(): Photo[] {
  return getAllPhotos().sort((a, b) => a.id.localeCompare(b.id))
}

// Get all photos in a deterministic order (for photography page)
export function getAllPhotosShuffled(): Photo[] {
  return getAllPhotosSorted()
}

// Get photos in a deterministic order (for homepage)
export function getRandomPhotos(count: number = 6): Photo[] {
  const allPhotos = getAllPhotosSorted()
  return allPhotos.slice(0, Math.min(count, allPhotos.length))
}

// Get pinned photos first, then fill the rest with random non-pinned photos.
export function getPinnedPhotos(count?: number): Photo[] {
  const allPhotos = getAllPhotos()
  const photosById = new Map(allPhotos.map(photo => [photo.id, photo]))

  const pinnedPhotos = pinnedPhotoIds
    .map(id => photosById.get(id.toLowerCase()))
    .filter((photo): photo is Photo => Boolean(photo))

  if (count === undefined) {
    return pinnedPhotos
  }

  if (pinnedPhotos.length >= count) {
    return pinnedPhotos.slice(0, count)
  }

  const remaining = allPhotos
    .filter(photo => !pinnedPhotoIdSet.has(photo.id))
    .sort((a, b) => a.id.localeCompare(b.id))
  const filler = remaining.slice(0, count - pinnedPhotos.length)

  return [...pinnedPhotos, ...filler]
}
