import { GithubIcon } from "@/components/icons/brand-icons"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    /* Sticky so it stays visible while scrolling long pages. */
    <footer className="sticky bottom-0 bg-background">
      <Container className="flex h-16 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {siteConfig.name} <span aria-hidden>&middot;</span>{" "}
          {new Date().getFullYear()}
        </p>

        <Button variant="ghost" size="icon" asChild>
          <a
            href={siteConfig.repo}
            target="_blank"
            rel="noreferrer"
            aria-label="Source code on GitHub"
          >
            <GithubIcon />
          </a>
        </Button>
      </Container>
    </footer>
  )
}
