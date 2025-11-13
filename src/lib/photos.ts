// Photo metadata mapping - maps image names to their locations
export const photoLocations: Record<string, string> = {
  IMG_01: 'JLN Stadium, Delhi',
  IMG_02: 'Greater Noida, UP',
  IMG_03: 'Greater Noida, UP',
  IMG_04: 'Sarovar, Delhi',
  IMG_05: 'Rishikesh, UK',
  IMG_06: 'Rishikesh, UK',
  IMG_07: 'Rishikesh, UK',
  IMG_08: 'JLN Stadium, Delhi',
  IMG_09: 'Greater Noida, UP',
  IMG_10: 'Greater Noida, UP',
  IMG_11: 'Sarovar, Delhi',
  IMG_12: 'Rishikesh, UK',
  IMG_13: 'Rishikesh, UK',
  IMG_14: "Humayun's Tomb, Delhi",
  IMG_15: "Humayun's Tomb, Delhi",
  IMG_16: "Humayun's Tomb, Delhi",
  IMG_17: "Humayun's Tomb, Delhi",
  IMG_18: "Humayun's Tomb, Delhi",
}

export interface Photo {
  id: string
  src: string
  alt: string
  location: string
}

// Dynamically import all images from the photos directory
const photoModules = import.meta.glob<{ default: string }>(
  '@/assets/images/photos/*.jpg',
  { eager: true },
)

// Convert imported modules to Photo objects
function getAllPhotos(): Photo[] {
  return Object.entries(photoModules).map(([path, module]) => {
    // Extract filename from path (e.g., "IMG_01.jpg" from full path)
    // Handle both alias paths (@/assets/...) and relative paths
    const pathParts = path.split('/')
    const filenameWithExt = pathParts[pathParts.length - 1] || ''
    const filename = filenameWithExt.replace(/\.jpg$/i, '')

    const location =
      photoLocations[filename] || filename.replace('IMG_', 'Photo ')

    return {
      id: filename,
      src: module.default,
      alt: location,
      location: location,
    }
  })
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
    // Extract numbers from IDs like "IMG_01" -> 1
    const numA = parseInt(a.id.replace('IMG_', '')) || 0
    const numB = parseInt(b.id.replace('IMG_', '')) || 0
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
