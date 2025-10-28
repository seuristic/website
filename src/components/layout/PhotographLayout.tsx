import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LineDivider } from '@/components/layout/Dividers'

type PageShellProps = {
  children: ReactNode
  footer?: ReactNode
  contentClassName?: string
}

const PhotographLayout = ({
  children,
  footer,
  contentClassName,
}: PageShellProps) => {
  return (
    <main className="border-y">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-rows-[1fr_1px_auto_1px_auto] justify-center sm:grid-cols-[var(--gutter-space)_minmax(0,var(--container-7xl))_var(--gutter-space)]">
        <div className="gutter-pattern border-x" />

        <div>
          <div className="grid grid-cols-[1fr_var(--gutter-space)_1fr_var(--gutter-space)_1fr]">
            {/* gutter-left */}
            <div className="col-span-1 col-start-2 row-start-1 row-end-6 border-x" />
            {/* gutter-right */}
            <div className="col-span-1 col-start-4 row-start-1 row-end-6 border-x" />

            {/* empty first row */}
            <div className="col-span-full col-start-1 row-span-1 row-start-1 h-36" />

            {/* horizontal line divider (extended beyond width) */}
            <LineDivider className="col-span-full col-start-1 row-span-1 row-start-2" />

            <div
              className={cn(
                'gap-x-gutter relative col-span-full col-start-1 row-start-2 grid grid-cols-3',
                contentClassName,
              )}
            >
              {children}
            </div>

            <LineDivider className="col-span-full col-start-1 row-span-1 row-start-4" />

            {footer ? (
              <div className="gap-x-gutter col-span-full col-start-1 row-span-1 row-start-5 grid grid-cols-3">
                {footer}
              </div>
            ) : null}
          </div>
        </div>

        <div className="gutter-pattern border-x" />
      </div>
    </main>
  )
}

export default PhotographLayout
