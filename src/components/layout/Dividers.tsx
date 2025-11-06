import { cn } from '@/lib/utils'

export const SectionDivider = () => {
  return (
    <div className="before:bg-border after:bg-border relative col-span-full h-20 before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] lg:before:hidden" />
  )
}

export const ContentDivider = () => {
  return <div className="h-gutter col-span-1 w-full border-y lg:col-span-2" />
}

export const LineDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'relative col-span-full h-0 w-full after:absolute after:bottom-0 after:-left-[100vw] after:h-0 after:w-[200vw] after:border-b',
        className,
      )}
    />
  )
}
