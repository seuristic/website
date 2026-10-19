import { Outlet } from "react-router-dom"

import { Container } from "@/components/layout/container"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      {/* Vertical padding lives on the column, not <main>, so its side rules
          run unbroken from the header's rule to the footer's. */}
      <main className="flex flex-1 flex-col">
        <Container className="flex flex-1 flex-col border-muted-foreground/10 py-section md:border-x">
          <Outlet />
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}
