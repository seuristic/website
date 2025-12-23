import {
  isOptimizedImage,
  type OptimizedImage,
  type PictureSource,
} from '@/lib/imageTypes'

export const photoLocations: Record<string, string> = {
  delhi_metro_1: 'Delhi Metro',
  fatehpur_sikri_1: 'Fatehpur Sikri, UP',
  greater_noida_1: 'Greater Noida, UP',
  greater_noida_2: 'Greater Noida, UP',
  greater_noida_3: 'Greater Noida, UP',
  greater_noida_4: 'Greater Noida, UP',
  home_1: 'Home, Delhi',
  humayun_tomb_1: "Humayun's Tomb, Delhi",
  humayun_tomb_2: "Humayun's Tomb, Delhi",
  humayun_tomb_3: "Humayun's Tomb, Delhi",
  humayun_tomb_4: "Humayun's Tomb, Delhi",
  humayun_tomb_5: "Humayun's Tomb, Delhi",
  jln_stadium_1: 'JLN Stadium, Delhi',
  rishikesh_1: 'Rishikesh, Uttarakhand',
  rishikesh_2: 'Rishikesh, Uttarakhand',
  rishikesh_3: 'Rishikesh, Uttarakhand',
  sarovar_1: 'Sarovar, Delhi',
  sarovar_2: 'Sarovar, Delhi',
  srinagar_1: 'Srinagar, Kashmir',
  srinagar_2: 'Srinagar, Kashmir',
  srinagar_3: 'Srinagar, Kashmir',
  srinagar_4: 'Srinagar, Kashmir',
  srinagar_5: 'Srinagar, Kashmir',
  srinagar_6: 'Srinagar, Kashmir',
  srinagar_7: 'Srinagar, Kashmir',
  srinagar_8: 'Srinagar, Kashmir',
  srinagar_9: 'Srinagar, Kashmir',
  srinagar_10: 'Srinagar, Kashmir',
  srinagar_11: 'Srinagar, Kashmir',
  srinagar_12: 'Srinagar, Kashmir',
  srinagar_13: 'Srinagar, Kashmir',
  srinagar_14: 'Srinagar, Kashmir',
  srinagar_15: 'Srinagar, Kashmir',
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
  'humayun_tomb_4',
  'srinagar_12',
  'srinagar_15',
  'delhi_metro_1',
  'srinagar_9',
  'srinagar_2',
  'srinagar_14',
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
