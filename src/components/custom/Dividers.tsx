import { cn } from '@/lib/utils'

export const SectionDivider = () => {
  return (
    <div className="after:bg-border before:bg-border col-span-full h-20 before:absolute before:left-0 before:h-px before:w-[100vw] before:-translate-y-1/2 after:absolute after:left-0 after:h-px after:w-[100vw] after:translate-y-[calc(-50%+80px)]" />
  )
}

export const ContentDivider = () => {
  return <div className="h-gutter col-span-1 w-full border-y lg:col-span-2" />
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
