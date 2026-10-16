import { Dot } from "lucide-react"

import { Container } from "@/components/layout/container"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    /* Sits after the page content; the flex column in RootLayout keeps it at the
       bottom of the viewport when the content is short. */
    <footer>
      <Container className="flex h-16 items-center justify-center gap-1 font-mono text-sm text-muted-foreground/70">
        <p>v26</p>

        <Dot aria-hidden className="size-3.5" />

        <a
          href={siteConfig.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 underline-offset-4 hover:text-foreground hover:underline"
        >
          source
        </a>
      </Container>
    </footer>
  )
}
