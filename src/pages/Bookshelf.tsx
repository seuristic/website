import { useMemo, useState } from 'react'
import BookFilters from '@/components/custom/bookshelf/BookFilters'
import BookGrid from '@/components/custom/bookshelf/BookGrid'
import BookshelfLayout from '@/components/layouts/BookshelfLayout'
import { LineDivider, SectionDivider } from '@/components/custom/Dividers'
import { SEO } from '@/components/custom/SEO'
import PageHeader from '@/components/custom/PageHeader'
import { getBooks, type BookStatus } from '@/lib/books'

type FilterStatus = BookStatus | 'all'

const Bookshelf = () => {
  const books = useMemo(() => getBooks(), [])
  const [status, setStatus] = useState<FilterStatus>('all')

  const counts = useMemo(() => {
    return books.reduce<Record<BookStatus, number>>(
      (acc, book) => {
        acc[book.status] = (acc[book.status] || 0) + 1
        return acc
      },
      {
        interested: 0,
        reading: 0,
        finished: 0,
      }
    )
  }, [books])

  const filteredBooks = useMemo(
    () =>
      status === 'all' ? books : books.filter(book => book.status === status),
    [books, status]
  )

  return (
    <>
      <SEO
        title="Bookshelf"
        description="A curated shelf of books I'm eyeing, reading through, or have already finished."
        url="/bookshelf"
      />
      <BookshelfLayout>
        <PageHeader
          title="Bookshelf"
          description="A curated shelf of books I'm eyeing, reading through, or have already finished."
        />
        <BookFilters
          value={status}
          onChange={setStatus}
          counts={counts}
          total={books.length}
        />
        <BookGrid books={filteredBooks} />
        <SectionDivider />
      </BookshelfLayout>
    </>
  )
}

export default Bookshelf
