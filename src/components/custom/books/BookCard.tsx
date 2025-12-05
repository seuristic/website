import type { Book, BookStatus } from '@/lib/books'
import { cn } from '@/lib/utils'

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
  return (
    <div className="group relative flex h-full flex-col gap-3 rounded-md border p-4 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="font-serif text-xl leading-tight">{book.title}</h3>
          <p className="text-muted-foreground text-sm">{book.author}</p>
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

      <p className="text-muted-foreground text-sm leading-relaxed">
        {book.summary}
      </p>

      <div className="text-tertiary-foreground mt-auto flex items-center justify-between font-mono text-[11px] tracking-tight uppercase">
        <span>#{book.id}</span>
        {book.year && <span>{book.year}</span>}
      </div>
    </div>
  )
}

export default BookCard
