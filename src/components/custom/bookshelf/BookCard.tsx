import type { Book } from '@/lib/books'
import LazyImage from '@/components/custom/LazyImage'

type BookCardProps = {
  book: Book
}

const BookCard = ({ book }: BookCardProps) => {
  const displayId = book.id.replace(/[-_]/g, ' ')

  return (
    <div className="group relative aspect-square h-full p-6 text-center lg:min-h-84">
      <LazyImage
        src={book.image.src}
        sources={book.image.sources}
        width={book.image.width}
        height={book.image.height}
        sizes="(max-width: 1024px) 100vw, 33vw"
        alt={`${displayId} cover`}
        className="h-full w-fit border object-contain"
        fallbackSrc={book.image.src}
      />
    </div>
  )
}

export default BookCard
