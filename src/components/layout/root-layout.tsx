import { Outlet } from 'react-router-dom'

import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { cn } from '@/lib/utils'

export function RootLayout() {
  return (
    /* overflow-x-clip trims the full-viewport rules drawn by `band`. */
    <div className="flex min-h-dvh flex-col overflow-x-clip">
      <SiteHeader />

      <Ruler className="border-b" />

      <main className="flex flex-1 flex-col">
        <Container className="flex flex-1 flex-col py-section">
          <Outlet />
        </Container>
      </main>

      {/* Mirror of the top ruler: ticks hang down from the main area's edge. */}
      <Ruler className="border-t" flipped />
      <SiteFooter />
    </div>
  )
}

/** A measurement strip across the column's inner width. `flipped` turns the
 *  ticks upside down so they hang from the top edge. */
function Ruler({
  className,
  flipped,
}: {
  className?: string
  flipped?: boolean
}) {
  return (
    <div aria-hidden className={cn('border-grid', className)}>
      <Container>
        <div className={cn('ruler h-3', flipped && '-scale-y-100')} />
      </Container>
    </div>
  )
}
