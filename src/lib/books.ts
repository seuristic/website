import { isOptimizedImage, type OptimizedImage } from '@/lib/imageTypes'

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

type BookDefinition = {
  file: string
  id: string
  status: BookStatus
}

const BOOK_IMAGE_QUERY =
  '?w=480;720;960&format=webp;avif;jpg&as=picture' as const

const optimizedBookModules = import.meta.glob<{ default: OptimizedImage }>(
  '../assets/images/books/*.jpg?w=480;720;960&format=webp;avif;jpg&as=picture',
  {
    import: 'default',
    eager: true,
  }
)

const rawBookModules = import.meta.glob<{ default: string }>(
  '../assets/images/books/*.jpg',
  { eager: true }
)

const bookDefinitions: BookDefinition[] = [
  { file: 'deep_work', id: 'deep-work', status: 'finished' },
  { file: 'atomic_habit', id: 'atomic-habit', status: 'finished' },
  { file: 'hooked', id: 'hooked', status: 'reading' },
  {
    file: 'the_subtle_art_of_not_giving_a_fck',
    id: 'the-subtle-art-of-not-giving-a-fck',
    status: 'finished',
  },
  { file: 'ikigai', id: 'ikigai', status: 'finished' },
  {
    file: 'rich_dad_poor_dad',
    id: 'rich-dad-poor-dad',
    status: 'finished',
  },
  { file: 'shoe_dog', id: 'shoe-dog', status: 'finished' },
  {
    file: 'think_and_grow_rich',
    id: 'think-and-grow-rich',
    status: 'reading',
  },
  {
    file: 'cracking_the_coding_interview',
    id: 'cracking-the-coding-interview',
    status: 'finished',
  },
  {
    file: 'system_design_interview_vol1',
    id: 'system-design-interview-vol1',
    status: 'finished',
  },
  { file: 'do_it_today', id: 'do-it-today', status: 'finished' },
  {
    file: 'as_a_man_thinketh',
    id: 'as-a-man-thinketh',
    status: 'finished',
  },
  {
    file: 'before_the_coffee_gets_cold',
    id: 'before-the-coffee-gets-cold',
    status: 'finished',
  },
  {
    file: 'gunahon_ka_devta',
    id: 'gunahon-ka-devta',
    status: 'reading',
  },
  {
    file: 'introduction_to_algorithms',
    id: 'introduction-to-algorithms',
    status: 'finished',
  },
  { file: 'it_ends_with_us', id: 'it-ends-with-us', status: 'finished' },
  { file: 'verity', id: 'verity', status: 'finished' },
  {
    file: 'the_elephant_in_the_brain',
    id: 'the-elephant-in-the-brain',
    status: 'interested',
  },
]

const getBookImage = (file: string): BookImage => {
  const basePath = `../assets/images/books/${file}.jpg`
  const optimizedKey =
    `${basePath}${BOOK_IMAGE_QUERY}` as keyof typeof optimizedBookModules
  const optimizedModule = optimizedBookModules[optimizedKey]
  const optimized = optimizedModule?.default

  if (isOptimizedImage(optimized)) {
    return {
      src: optimized.img.src,
      sources: optimized.sources,
      width: optimized.img.w,
      height: optimized.img.h,
    }
  }

  const rawModule = rawBookModules[basePath as keyof typeof rawBookModules]

  if (rawModule && typeof rawModule.default === 'string') {
    return {
      src: rawModule.default,
      sources: [],
    }
  }

  return {
    src: '',
    sources: [],
  }
}

const books: Book[] = bookDefinitions.map(book => ({
  id: book.id,
  status: book.status,
  image: getBookImage(book.file),
}))

export const getBooks = () => books
