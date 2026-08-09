import { Link, NavLink } from "react-router-dom"

import { Container } from "@/components/layout/container"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header>
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-2xl leading-none">
          {siteConfig.logo}
        </Link>

        <nav className="flex items-center gap-stack">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "px-2 py-1 text-sm text-muted-foreground hover:text-foreground",
                  isActive && "text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  )
}
