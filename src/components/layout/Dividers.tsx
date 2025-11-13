import { cn } from '@/lib/utils'

export const SectionDivider = () => {
  return (
    <div className="before:bg-border after:bg-border relative col-span-full h-20 before:absolute before:top-0 before:-left-[50vw] before:h-px before:w-[200vw] after:absolute after:bottom-0 after:-left-[50vw] after:h-px after:w-[200vw]" />
  )
}

export const ContentDivider = () => {
  return <div className="h-gutter col-span-1 w-full border-y lg:col-span-2" />
}

export const LineDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('bg-border relative col-span-full h-px w-full', className)}
    />
  )
}
