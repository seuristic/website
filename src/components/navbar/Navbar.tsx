import { useState } from 'react'
import {
  Sun,
  Moon,
  Menu,
  X,
  Linkedin,
  Instagram,
  Twitter,
  Github,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from '@/hooks/useTheme'
import NavLink from './NavLink'
import Anchor from '../custom/Anchor'
import { Separator } from '../ui/separator'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="border-border bg-background/90 fixed top-0 z-40 w-full border-b p-4 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 justify-start">
            <Link to="/" className="text-foreground font-serif text-xl">
              seuristic
            </Link>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <NavLink to="/photography">Photography</NavLink>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="hidden gap-2 md:flex">
              <Button
                variant="ghost"
                asChild
                size="icon"
                className="cursor-pointer"
              >
                <Anchor href="https://linkedin.com/in/mshahanwaz">
                  <Linkedin className="size-4" />
                </Anchor>
              </Button>
              <Anchor href="https://github.com/seuristic">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Github className="size-4" />
                </Button>
              </Anchor>
              <Anchor href="https://instagram.com/seuristic">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Instagram className="size-4" />
                </Button>
              </Anchor>
              <Anchor href="https://x.com/seuristic" className="block">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Twitter className="size-4" />
                </Button>
              </Anchor>

              <div className="flex items-center self-stretch">
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-6"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'bg-background/80 fixed inset-0 z-50 backdrop-blur-sm transition-opacity duration-300',
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          'bg-background border-border fixed top-0 right-0 z-50 h-full w-full max-w-sm transform border-l transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Menu Header */}
          <div className="border-border flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold">Mohammad Shahanwaz</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1">
            <div className="flex flex-col gap-2 py-4">
              <NavLink
                to="/blogs"
                onClick={closeMobileMenu}
                className="h-fit justify-start rounded-none py-4"
              >
                Blogs
              </NavLink>
              <NavLink
                to="/photography"
                className="h-fit justify-start rounded-none py-4"
                onClick={closeMobileMenu}
              >
                Photography
              </NavLink>
            </div>

            {/* Mobile Icon Links */}
            <div className="border-border border-t p-4">
              <div className="flex items-center gap-4">
                <Anchor href="https://linkedin.com/in/mshahanwaz">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                  >
                    <Linkedin className="size-4" />
                  </Button>
                </Anchor>
                <Anchor href="https://github.com/seuristic">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                  >
                    <Github className="size-4" />
                  </Button>
                </Anchor>
                <Anchor href="https://instagram.com/seuristic">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                  >
                    <Instagram className="size-4" />
                  </Button>
                </Anchor>
                <Anchor href="https://x.com/seuristic" className="block">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                  >
                    <Twitter className="size-4" />
                  </Button>
                </Anchor>

                <div className="flex items-center self-stretch">
                  <Separator
                    orientation="vertical"
                    className="data-[orientation=vertical]:h-6"
                  />
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="size-4" />
                  ) : (
                    <Moon className="size-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
