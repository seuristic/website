import { Button } from '@/components/ui/button'
import { BOOK_STATUS_OPTIONS, type BookStatus } from '@/lib/books'
import { cn } from '@/lib/utils'

type BookFiltersProps = {
  value: BookStatus | 'all'
  onChange: (status: BookStatus | 'all') => void
  counts: Record<BookStatus, number>
  total: number
}

const filterOptions: { value: BookStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  ...BOOK_STATUS_OPTIONS,
]

const BookFilters = ({ value, onChange, counts, total }: BookFiltersProps) => {
  return (
    <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-full grid grid-cols-1 lg:grid-cols-3">
      <div className="bg-background col-span-1 p-1 lg:col-span-3">
        <div className="flex flex-wrap justify-center gap-2 p-3 lg:p-4">
          {filterOptions.map(option => (
            <Button
              key={option.value}
              type="button"
              variant={value === option.value ? 'secondary' : 'outline'}
              size="sm"
              className={cn(
                'rounded-full border-dashed px-3',
                value === option.value && 'border-solid'
              )}
              onClick={() => onChange(option.value)}
              aria-pressed={value === option.value}
            >
              <span>{option.label}</span>
              <span className="text-muted-foreground text-xs">
                {option.value === 'all' ? total : counts[option.value] || 0}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookFilters
