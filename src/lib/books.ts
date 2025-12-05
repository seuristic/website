export type BookStatus = 'interested' | 'reading' | 'finished'

export const BOOK_STATUS_OPTIONS = [
  { value: 'interested', label: 'Interested' },
  { value: 'reading', label: 'Reading' },
  { value: 'finished', label: 'Finished' },
] as const satisfies { value: BookStatus; label: string }[]

export type Book = {
  id: string
  title: string
  author: string
  status: BookStatus
  summary: string
  year?: number
}

const books: Book[] = [
  {
    id: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    status: 'finished',
    summary: 'Building the muscle for focused work and protecting time from shallow demands.',
    year: 2016,
  },
  {
    id: 'designing-data-intensive-applications',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'reading',
    summary: 'A systems-first tour of storage, streams, and scaling patterns for reliable products.',
    year: 2017,
  },
  {
    id: 'pragmatic-programmer',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    status: 'finished',
    summary: 'Timeless guidance on thinking about code, teams, and the craft of shipping software.',
    year: 1999,
  },
  {
    id: 'clean-architecture',
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    status: 'interested',
    summary: 'Patterns for building maintainable systems that keep business logic at the center.',
    year: 2017,
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'finished',
    summary: 'Small, consistent improvements compound into durable habits and outcomes.',
    year: 2018,
  },
  {
    id: 'three-body-problem',
    title: 'The Three-Body Problem',
    author: 'Liu Cixin',
    status: 'interested',
    summary: 'Hard sci-fi with cosmic stakes and a slow, rewarding build toward first contact.',
    year: 2006,
  },
  {
    id: 'design-of-everyday-things',
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    status: 'reading',
    summary: 'Human-centered design principles that make interfaces intuitive and forgiving.',
    year: 1988,
  },
  {
    id: 'surely-youre-joking',
    title: "Surely You're Joking, Mr. Feynman!",
    author: 'Richard P. Feynman',
    status: 'interested',
    summary: 'Playful stories from a physicist who chased curiosity across disciplines.',
    year: 1985,
  },
  {
    id: 'hooked',
    title: 'Hooked',
    author: 'Nir Eyal',
    status: 'finished',
    summary: 'The hook model for products that earn habitual use without dark patterns.',
    year: 2014,
  },
  {
    id: 'phoenix-project',
    title: 'The Phoenix Project',
    author: 'Gene Kim, Kevin Behr & George Spafford',
    status: 'reading',
    summary: 'A novelized look at DevOps principles, bottlenecks, and flow in IT organizations.',
    year: 2013,
  },
  {
    id: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    status: 'finished',
    summary: 'How two modes of thinking shape judgment, bias, and the choices we make.',
    year: 2011,
  },
  {
    id: 'dune',
    title: 'Dune',
    author: 'Frank Herbert',
    status: 'interested',
    summary: 'Epic sci-fi politics, ecology, and power told through the desert planet Arrakis.',
    year: 1965,
  },
]

export const getBooks = () => books
