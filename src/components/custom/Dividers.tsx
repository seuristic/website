import { cn } from '@/lib/utils'

export const SectionDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'pseudo-gutter-pattern h-gutter-sm lg:h-gutter after:h-gutter-sm lg:after:h-gutter col-span-full after:absolute after:left-0 after:w-[100vw] after:border-y',
        className
      )}
    />
  )
}

export const ContentDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'h-gutter-sm lg:h-gutter pseudo-gutter-pattern after:h-gutter-sm lg:after:h-gutter relative col-span-1 w-full after:absolute after:-left-[calc(var(--gutter-space-sm))] after:w-[calc(100%+2*var(--gutter-space-sm))] after:border-y lg:col-span-2 lg:after:-left-[calc(var(--gutter-space))] lg:after:w-[calc(100%+2*var(--gutter-space))]',
        className
      )}
    />
  )
}

export const LineDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'after:bg-border col-span-full after:absolute after:left-0 after:h-px after:w-[100vw] after:-translate-y-1/2',
        className
      )}
    />
  )
}

export const ContentLineDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'after:bg-border relative col-span-1 h-px w-full after:absolute after:-left-[calc(var(--gutter-space-sm))] after:h-px after:w-[calc(100%+2*var(--gutter-space-sm))] lg:col-span-2 lg:after:-left-[calc(var(--gutter-space))] lg:after:w-[calc(100%+2*var(--gutter-space))]',
        className
      )}
    />
  )
}
