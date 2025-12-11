import { Button } from '@/components/ui/button'
import { BOOK_STATUS_OPTIONS, type BookStatus } from '@/lib/books'
import { cn } from '@/lib/utils'
import { LineDivider } from '../Dividers'

type BookFiltersProps = {
  value: BookStatus | 'all'
  onChange: (status: BookStatus | 'all') => void
  counts: Record<BookStatus, number>
  total: number
}

const statusStyles: Record<BookStatus, string> = {
  interested:
    'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-200',
  reading:
    'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-100',
  finished:
    'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-100',
}

const filterOptions: { value: BookStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  ...BOOK_STATUS_OPTIONS,
]

const BookFilters = ({ value, onChange, counts, total }: BookFiltersProps) => {
  return (
    <>
      <LineDivider />
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
                  'rounded-full border px-3',
                  value === option.value ? 'border-solid' : 'border-dashed',
                  option.value !== 'all' &&
                    value === option.value &&
                    statusStyles[option.value]
                )}
                onClick={() => onChange(option.value)}
                aria-pressed={value === option.value}
              >
                <span>{option.label}</span>
                <span className="font-mono text-xs">
                  {option.value === 'all' ? total : counts[option.value] || 0}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BookFilters
