import { cn } from '@/lib/utils'

export const SectionDivider = () => {
  return (
    <div className="after:bg-border before:bg-border h-gutter-sm lg:h-gutter gutter-pattern col-span-full before:absolute before:left-0 before:h-px before:w-[100vw] before:-translate-y-1/2 after:absolute after:left-0 after:h-px after:w-[100vw] after:translate-y-[calc(-50%+var(--gutter-space-sm))] lg:after:translate-y-[calc(-50%+var(--gutter-space))]" />
  )
}

export const ContentDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'h-gutter-sm lg:h-gutter gutter-pattern col-span-1 w-full border-y lg:col-span-2',
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
        'bg-border col-span-1 h-px w-full lg:col-span-2',
        className
      )}
    />
  )
}
