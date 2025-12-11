import { Fragment } from 'react'
import BookCard from './BookCard'
import type { Book } from '@/lib/books'
import { LineDivider } from '@/components/custom/Dividers'
import { cn } from '@/lib/utils'

type BookGridProps = {
  books: Book[]
}

const BookGrid = ({ books }: BookGridProps) => {
  if (books.length === 0) {
    return (
      <div className="col-span-full p-4">
        <div className="border-muted text-muted-foreground rounded-md border p-6 text-center">
          No books to show for this status just yet.
        </div>
      </div>
    )
  }

  return (
    <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-full grid grid-cols-1 lg:grid-cols-3">
      {Array.from({ length: Math.max(9, books.length) }).map((_, index) => {
        const book = index < books.length ? books[index] : null
        return (
          <Fragment key={index}>
            <LineDivider
              className={cn(
                index > Math.max(2, books.length) && 'hidden lg:block',
                index > 0 &&
                  (index % 3 !== 0 || index === books.length - 1) &&
                  'lg:hidden'
              )}
            />
            {book ? (
              <div className={cn('col-span-1 p-1')}>
                <BookCard book={book} />
              </div>
            ) : (
              <div
                className={cn(
                  'col-span-1 aspect-square min-h-84 p-1',
                  index > 2 && 'hidden lg:block'
                )}
              />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

export default BookGrid
