import { isOptimizedImage, type OptimizedImage } from '@/lib/imageTypes'
import PLACEHOLDER_BOOK_IMAGE from '@/assets/images/photos/IMG_01.jpg?w=480;720&format=webp;avif;jpg&as=picture'
import PLACEHOLDER_BOOK_IMAGE_RAW from '@/assets/images/photos/IMG_01.jpg'

export type BookStatus = 'interested' | 'reading' | 'finished'

export const BOOK_STATUS_OPTIONS = [
  { value: 'interested', label: 'Interested' },
  { value: 'reading', label: 'Reading' },
  { value: 'finished', label: 'Finished' },
] as const satisfies { value: BookStatus; label: string }[]

export type BookImage = {
  src: string
  sources: OptimizedImage['sources']
  width?: number
  height?: number
}

export type Book = {
  id: string
  status: BookStatus
  image: BookImage
}

const placeholderImage: BookImage = isOptimizedImage(PLACEHOLDER_BOOK_IMAGE)
  ? {
      src: PLACEHOLDER_BOOK_IMAGE.img.src,
      sources: PLACEHOLDER_BOOK_IMAGE.sources,
      width: PLACEHOLDER_BOOK_IMAGE.img.w,
      height: PLACEHOLDER_BOOK_IMAGE.img.h,
    }
  : {
      src:
        typeof PLACEHOLDER_BOOK_IMAGE_RAW === 'string'
          ? PLACEHOLDER_BOOK_IMAGE_RAW
          : '',
      sources: [],
    }

const books: Book[] = [
  { id: 'deep-work', status: 'finished', image: placeholderImage },
  {
    id: 'designing-data-intensive-applications',
    status: 'reading',
    image: placeholderImage,
  },
  { id: 'pragmatic-programmer', status: 'finished', image: placeholderImage },
  { id: 'clean-architecture', status: 'interested', image: placeholderImage },
  { id: 'atomic-habits', status: 'finished', image: placeholderImage },
  { id: 'three-body-problem', status: 'interested', image: placeholderImage },
  {
    id: 'design-of-everyday-things',
    status: 'reading',
    image: placeholderImage,
  },
  { id: 'surely-youre-joking', status: 'interested', image: placeholderImage },
  { id: 'hooked', status: 'finished', image: placeholderImage },
  { id: 'phoenix-project', status: 'reading', image: placeholderImage },
  { id: 'thinking-fast-and-slow', status: 'finished', image: placeholderImage },
  { id: 'dune', status: 'interested', image: placeholderImage },
]

export const getBooks = () => books
