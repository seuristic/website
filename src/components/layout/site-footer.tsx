import { GithubIcon } from "@/components/icons/brand-icons"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    /* Sits after the page content; the flex column in RootLayout keeps it at the
       bottom of the viewport when the content is short. */
    <footer>
      <Container className="flex h-16 items-center justify-between">
        <p className="text-sm text-muted-foreground">
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
