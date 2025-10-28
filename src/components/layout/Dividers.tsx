import { cn } from '@/lib/utils'

export const SectionDivider = () => {
  return (
    <div className="relative col-span-full h-20 after:absolute after:bottom-0 after:-left-[100vw] after:h-0 after:w-[200vw] after:border-b" />
  )
}

export const ContentDivider = () => {
  return <div className="h-gutter col-span-2 w-full border-y" />
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

