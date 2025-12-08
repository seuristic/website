import type { Book, BookStatus } from '@/lib/books'
import { cn } from '@/lib/utils'
import LazyImage from '@/components/custom/LazyImage'

const statusStyles: Record<BookStatus, string> = {
  interested:
    'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-200',
  reading:
    'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-100',
  finished:
    'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-100',
}

const statusLabels: Record<BookStatus, string> = {
  interested: 'Interested',
  reading: 'Reading',
  finished: 'Finished',
}

type BookCardProps = {
  book: Book
}

const BookCard = ({ book }: BookCardProps) => {
  const displayId = book.id.replace(/-/g, ' ')

  return (
    <div className="group relative flex h-full flex-col gap-1 rounded-md border p-1 transition-colors">
      <div className="overflow-hidden rounded-md border">
        <LazyImage
          src={book.image.src}
          sources={book.image.sources}
          width={book.image.width}
          height={book.image.height}
          sizes="(max-width: 1024px) 100vw, 33vw"
          alt={`${displayId} cover`}
          className="aspect-[4/5] w-full object-cover"
          fallbackSrc={book.image.src}
        />
      </div>
      <span
        className={cn(
          'border-muted/60 text-muted-foreground/80 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase',
          statusStyles[book.status]
        )}
      >
        {statusLabels[book.status]}
      </span>
    </div>
  )
}

export default BookCard
