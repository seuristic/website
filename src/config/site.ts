import { Mail } from 'lucide-react'

import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  type BrandIcon,
} from '@/components/icons/brand-icons'

/**
 * Single source of truth for everything personal in this template.
 * Fork the repo, edit this file, and the whole site is yours.
 */
export const siteConfig = {
  logo: 'seuristic',
  name: 'Mohammad Shahanwaz',
  /** Swap for your own photo in `public/`. Rendered as an oval, so a portrait crop works best. */
  avatar: '/avatar.jpg',
  role: 'AI Engineer',
  company: { name: 'Nexla', url: 'https://nexla.com' },
  about:
    "Building Express, which turns a prompt into ready-to-use tools for AI agents. I like shipping quickly, learning from real users, and helping other engineers grow. When away from the keyboard, you'll find me behind a camera, in a book, or at the gym.",

  /** Repo shown in the footer. */
  repo: 'https://github.com/seuristic/website',

  nav: [{ label: 'Blogs', href: '/blogs' }] satisfies NavItem[],

  socials: [
    { label: 'GitHub', href: 'https://github.com/seuristic', icon: GithubIcon },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/seuristic',
      icon: LinkedinIcon,
    },
    { label: 'X', href: 'https://x.com/seuristic', icon: XIcon },
    { label: 'Email', href: 'mailto:mohdshahanwaz55@gmail.com', icon: Mail },
  ] satisfies SocialLink[],

  /** Geist Mono coding ligatures (ss11). Flip to false to turn them off. */
  monoLigatures: true,

  /** Geist stylistic sets (ss02/05/06), listed in src/index.css. */
  sansAlternates: true,
}

export type NavItem = { label: string; href: string }
export type SocialLink = { label: string; href: string; icon: BrandIcon }
