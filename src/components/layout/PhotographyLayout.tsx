import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LineDivider } from '@/components/layout/Dividers'
import FooterSection from '../home/FooterSection'

type PageShellProps = {
  children: ReactNode
  footer?: ReactNode
  contentClassName?: string
}

const PhotographLayout = ({ children, contentClassName }: PageShellProps) => {
  return (
    <main className="border-y">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-[var(--gutter-space-sm)_1fr_var(--gutter-space-sm)] justify-center lg:grid-cols-[var(--gutter-space)_1fr_var(--gutter-space)]">
        <div className="gutter-pattern border-x" />

        <div>
          <div className="grid grid-cols-[1fr_var(--gutter-space-sm)_1fr_var(--gutter-space-sm)_1fr] lg:grid-cols-[1fr_var(--gutter-space)_1fr_var(--gutter-space)_1fr]">
            {/* gutter-left */}
            <div className="col-span-1 col-start-2 row-start-1 row-end-6 lg:border-x" />
            {/* gutter-right */}
            <div className="col-span-1 col-start-4 row-start-1 row-end-6 lg:border-x" />

            {/* empty first row */}
            <div className="col-span-full col-start-1 row-span-1 row-start-1 h-24 lg:h-36" />

            {/* horizontal line divider (extended beyond width) */}
            <LineDivider className="col-span-full col-start-1 row-span-1 row-start-2" />

            <div
              className={cn(
                'gap-x-gutter-sm lg:gap-x-gutter relative col-span-full col-start-1 row-start-3 grid grid-cols-1 lg:grid-cols-3',
                contentClassName,
              )}
            >
              {children}
            </div>

            {/* horizontal line divider */}
            <LineDivider className="col-span-full col-start-1 row-span-1 row-start-4" />

            <FooterSection />
          </div>
        </div>

        <div className="gutter-pattern border-x" />
      </div>
    </main>
  )
}

export default PhotographLayout
