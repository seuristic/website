import type { ReactNode } from 'react'
import { LineDivider } from '@/components/layouts/Dividers'
import FooterSection from '../home/FooterSection'

type BaseLayoutProps = {
  children: ReactNode
  borderColumns?: 1 | 2
}

const BaseLayout = ({ children, borderColumns = 1 }: BaseLayoutProps) => {
  return (
    <main className="border-y">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-[var(--gutter-space-sm)_1fr_var(--gutter-space-sm)] justify-center lg:grid-cols-[var(--gutter-space)_1fr_var(--gutter-space)]">
        <div className="gutter-pattern border-x" />

        <div>
          <div className="grid grid-cols-[1fr_var(--gutter-space-sm)_1fr_var(--gutter-space-sm)_1fr] overflow-x-hidden lg:grid-cols-[1fr_var(--gutter-space)_1fr_var(--gutter-space)_1fr]">
            <div className="col-span-1 col-start-2 row-start-1 row-end-6 lg:border-x" />
            {borderColumns === 2 && (
              <div className="col-span-1 col-start-4 row-start-1 row-end-6 lg:border-x" />
            )}

            <div className="col-span-full col-start-1 row-span-1 row-start-1 h-24 lg:h-36" />
            <LineDivider className="col-start-1 row-span-1 row-start-2" />

            <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-full col-start-1 row-start-3 grid grid-cols-1 overflow-x-hidden lg:grid-cols-3">
              {children}
            </div>

            <FooterSection />
          </div>
        </div>

        <div className="gutter-pattern border-x" />
      </div>
    </main>
  )
}

export default BaseLayout
