import { cn } from '@/lib/utils'

/** The page column (see `frame` in index.css): header, main and footer all use
 *  it, so its rules and hatched padding rails line up the whole way down. */
export function Container({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('frame', className)} {...props} />
}
