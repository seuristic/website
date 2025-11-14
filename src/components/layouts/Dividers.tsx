import { cn } from '@/lib/utils'

export const SectionDivider = () => {
  return (
    <div className="after:bg-border before:bg-border relative col-span-full h-20 before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:-translate-y-1/2 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:-translate-y-1/2" />
  )
}

export const ContentDivider = () => {
  return <div className="h-gutter col-span-1 w-full border-y lg:col-span-2" />
}

export const LineDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'after:bg-border relative col-span-full after:absolute after:-left-[100vw] after:h-px after:w-[200vw] after:-translate-y-1/2',
        className
      )}
    />
  )
}
