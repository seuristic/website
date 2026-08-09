import { Outlet } from "react-router-dom"

import { Container } from "@/components/layout/container"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col py-section">
        <Container className="flex flex-1 flex-col">
          <Outlet />
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}
