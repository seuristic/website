import Anchor from '@/components/custom/Anchor'
import { Button } from '@/components/ui/button'
import {
  ArrowDownToLine,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react'
import SELF_PICTURE from '@/assets/images/SELF_PICTURE.jpeg'

const socialLinks = [
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/mshahanwaz',
    icon: Linkedin,
  },
  {
    id: 'github',
    href: 'https://github.com/seuristic',
    icon: Github,
  },
  {
    id: 'instagram',
    href: 'https://instagram.com/seuristic',
    icon: Instagram,
  },
  {
    id: 'x',
    href: 'https://x.com/seuristic',
    icon: Twitter,
  },
]

const HeroSection = () => {
  return (
    <>
      <div className="relative col-span-1 aspect-square w-full p-1 after:absolute after:bottom-0 after:-left-[100vw] after:h-0 after:w-[200vw] after:border-b">
        <img
          src={SELF_PICTURE}
          alt="Profile Picture"
          className="aspect-square w-full rounded-md border object-cover"
        />
      </div>
      <div className="col-span-2 flex w-full flex-col items-start justify-center gap-1 p-1">
        <h1 className="font-serif text-7xl">Mohammad Shahanwaz</h1>
        <div className="text-muted-foreground mt-2 flex items-center gap-2 text-lg">
          <span>(vibe) Software Engineer</span>
          <span>⬩</span>
          <span>Creative &amp; Curious</span>
          <span>⬩</span>
          <span>Fitness Enthusiast</span>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <Anchor href="https://resume.shahanwaz.dev">
            <Button size="lg" className="cursor-pointer">
              <ArrowDownToLine className="size-4" />
              Resume
            </Button>
          </Anchor>
          {socialLinks.map(({ id, href, icon: Icon }) => (
            <Anchor key={id} href={href}>
              <Button
                variant="ghost"
                size="icon"
                className="size-10 cursor-pointer"
              >
                <Icon className="size-5" />
              </Button>
            </Anchor>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroSection
