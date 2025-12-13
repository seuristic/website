import type { ReactNode } from 'react'
import { SectionDivider } from '@/components/custom/Dividers'
import Footer from '@/components/custom/Footer'

type BaseLayoutProps = {
  children: ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <main className="relative border-y">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-[var(--gutter-space-sm)_1fr_var(--gutter-space-sm)] justify-center lg:grid-cols-[var(--gutter-space)_1fr_var(--gutter-space)]">
        <div className="gutter-pattern border-x" />

        <div>
          <div className="grid grid-cols-[1fr_var(--gutter-space-sm)_1fr_var(--gutter-space-sm)_1fr] lg:grid-cols-[1fr_var(--gutter-space)_1fr_var(--gutter-space)_1fr]">
            <div className="gutter-pattern col-span-1 col-start-2 row-start-1 row-end-6 hidden lg:block lg:border-x" />
            <div className="gutter-pattern col-span-1 col-start-4 row-start-1 row-end-6 hidden lg:block lg:border-x" />

            <div className="col-span-full col-start-1 row-span-1 row-start-1 h-[calc(var(--navbar-height-sm)-2px)] lg:h-[calc(var(--navbar-height)-2px)]" />
            <SectionDivider className="col-start-1 row-span-1 row-start-2" />

            <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-full col-start-1 row-start-3 grid grid-cols-1 lg:grid-cols-3">
              {children}
            </div>

            <Footer />
          </div>
        </div>

        <div className="gutter-pattern border-x" />
      </div>
    </main>
  )
}

export default BaseLayout
