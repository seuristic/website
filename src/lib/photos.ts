import {
  isOptimizedImage,
  type OptimizedImage,
  type PictureSource,
} from '@/lib/imageTypes'

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
  sources: PictureSource[]
  width: number
  height: number
  alt: string
  location: string
  pinned: boolean
}

export type ProfileImage = {
  src: string
  sources: PictureSource[]
  width: number
  height: number
}

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

const photoModules = import.meta.glob<OptimizedImage>(
  '../assets/images/photos/*.jpg',
  {
    query: '?w=480;768;1200;1600&format=webp;avif;jpg&as=picture',
    import: 'default',
    eager: true,
  }
)

const profilePhotoModules = import.meta.glob<OptimizedImage>(
  '../assets/images/profile_picture.webp',
  {
    query: '?w=480;768;1200;1600&format=webp;avif;jpg&as=picture',
    import: 'default',
    eager: true,
  }
)

const normalizeSources = (
  sources: OptimizedImage['sources']
): PictureSource[] => {
  return Object.entries(sources).map(([format, srcset]) => ({
    type: `image/${format === 'jpg' ? 'jpeg' : format}`,
    srcset,
  }))
}

function getAllPhotos(): Photo[] {
  return Object.entries(photoModules)
    .map(([path, module]) => {
      const pathParts = path.split('/')
      const filenameWithExt = pathParts[pathParts.length - 1] || ''
      const filename = filenameWithExt.replace(/\.jpg$/i, '')
      const filenameKey = filename.toLowerCase()

      const location =
        photoLocations[filenameKey] ||
        filenameKey
          .replace(/_/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase())

      if (!isOptimizedImage(module)) {
        return null
      }

      const sources = normalizeSources(module.sources)

      return {
        id: filenameKey,
        src: module.img.src,
        sources,
        width: module.img.w,
        height: module.img.h,
        alt: location,
        location: location,
        pinned: pinnedPhotoIdSet.has(filenameKey),
      }
    })
    .filter((photo): photo is Photo => Boolean(photo))
}

export function getAllPhotosSorted(): Photo[] {
  return getAllPhotos().sort((a, b) => a.id.localeCompare(b.id))
}

export function getAllPhotosShuffled(): Photo[] {
  return getAllPhotosSorted()
}

export function getRandomPhotos(count: number = 6): Photo[] {
  const allPhotos = getAllPhotosSorted()
  return allPhotos.slice(0, Math.min(count, allPhotos.length))
}

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

export function getProfilePicture(): ProfileImage {
  const profileModule =
    profilePhotoModules['../assets/images/profile_picture.webp']

  if (!isOptimizedImage(profileModule)) {
    return { src: '', sources: [], width: 0, height: 0 }
  }

  return {
    src: profileModule.img.src,
    sources: normalizeSources(profileModule.sources),
    width: profileModule.img.w,
    height: profileModule.img.h,
  }
}
