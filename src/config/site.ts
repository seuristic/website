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
    'I’m a software engineer based in India, focused on building user-centric software products. My work spans AI, full-stack engineering, and frontend architecture. Beyond engineering, I enjoy reading, taking photos, and working out. I love documenting ideas, sharing what I learn, and finding inspiration in both technology and the world around me.',

  /** Repo shown in the footer. */
  repo: 'https://github.com/seuristic/website',

  /** Your clock in the footer. `en-IN` makes the short zone name read `IST`
      rather than `GMT+5:30`. */
  clock: { locale: 'en-IN', timeZone: 'Asia/Kolkata' },

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

  /** JetBrains Mono coding ligatures. Flip to false to turn them off. */
  monoLigatures: true,

  /** Geist stylistic sets (ss02/03/05/06), listed in src/index.css. */
  sansAlternates: true,
}

export type NavItem = { label: string; href: string }
export type SocialLink = { label: string; href: string; icon: BrandIcon }
