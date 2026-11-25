import { Link, NavLink } from 'react-router-dom'

import { Container } from '@/components/layout/container'
import { ThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  return (
    <header className="border-b border-grid">
      {/* Each control is a cell, divided by full-height rules; the last one
          meets the rail. */}
      <Container className="flex h-16 items-stretch justify-between">
        <Link
          to="/"
          className="flex items-center font-display text-lg leading-none font-medium"
        >
          {siteConfig.logo}
        </Link>

        <nav className="-mr-inset flex items-stretch">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'flex items-center border-l border-grid px-inset text-base text-muted-foreground hover:bg-accent hover:text-foreground',
                  isActive && 'text-foreground',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          {/* A square cell (header height × header height); the button fills it
              so its hover shading matches the nav cells. */}
          <ThemeToggle className="size-16 rounded-none border-l border-grid [&_svg]:size-5" />
        </nav>
      </Container>
    </header>
  )
}
