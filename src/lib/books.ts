import {
  isOptimizedImage,
  type OptimizedImage,
  type PictureSource,
} from '@/lib/imageTypes'

export type BookStatus = 'interested' | 'reading' | 'finished'

export const BOOK_STATUS_OPTIONS = [
  { value: 'interested', label: 'Interested' },
  { value: 'reading', label: 'Reading' },
  { value: 'finished', label: 'Finished' },
] as const satisfies { value: BookStatus; label: string }[]

export type BookImage = {
  src: string
  sources: PictureSource[]
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

const bookModules = import.meta.glob<OptimizedImage>(
  '../assets/images/books/*.jpg',
  {
    query: '?w=480;720;960&format=webp;avif;jpg&as=picture',
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

const bookDefinitions: BookDefinition[] = [
  { file: 'deep_work', id: 'deep-work', status: 'finished' },
  { file: 'atomic_habit', id: 'atomic-habit', status: 'finished' },
  { file: 'hooked', id: 'hooked', status: 'finished' },
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

export const getBooks = () => {
  return bookDefinitions.map(({ file, id, status }) => {
    const bookModule = bookModules[`../assets/images/books/${file}.jpg`]

    if (!isOptimizedImage(bookModule)) {
      throw new Error(`Book image not found for file: ${file}`)
    }

    return {
      id,
      status,
      image: {
        src: bookModule.img.src,
        sources: normalizeSources(bookModule.sources),
        width: bookModule.img.w,
        height: bookModule.img.h,
      },
    }
  })
}
