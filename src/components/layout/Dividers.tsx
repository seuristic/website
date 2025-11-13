import { cn } from '@/lib/utils'

export const SectionDivider = () => {
  return <div className="col-span-full h-20 border-y" />
}

export const ContentDivider = () => {
  return <div className="h-gutter col-span-1 w-full border-y lg:col-span-2" />
}

export const LineDivider = ({ className }: { className?: string }) => {
  return (
    <div className={cn('bg-border col-span-full h-px w-full', className)} />
  )
}
