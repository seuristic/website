import Anchor from '@/components/custom/Anchor'
import { Button } from '@/components/ui/button'
import { ArrowDownToLine } from 'lucide-react'
import SELF_PICTURE from '@/assets/images/SELF_PICTURE.jpeg'
import { codingLinks } from '../navbar/Navbar'
import LazyImage from '@/components/LazyImage'

const HeroSection = () => {
  return (
    <>
      <div className="relative aspect-square w-full overflow-hidden p-1">
        <LazyImage
          src={SELF_PICTURE}
          alt="Mohammad Shahanwaz - Profile Picture"
          className="aspect-square w-full rounded-md border object-cover"
        />
      </div>
      <div className="col-span-1 flex w-full flex-col items-start justify-center gap-2 p-1 lg:col-span-2">
        <h1 className="font-serif text-3xl font-medium sm:text-5xl md:text-6xl xl:text-7xl">
          Mohammad Shahanwaz
        </h1>
        <div className="text-muted-foreground flex w-fit flex-wrap items-center gap-1 text-base sm:gap-2 lg:text-lg">
          <span>Software Engineer (vibe)</span>
          <div className="inline-flex gap-1 sm:gap-2">
            <span>⬩</span>
            <span>Creative Curiosity</span>
          </div>
          <div className="inline-flex gap-1 sm:gap-2">
            <span>⬩</span>
            <span>Fitness Enthusiast</span>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Button size="lg" asChild className="cursor-pointer">
            <Anchor href="https://resume.shahanwaz.dev">
              <ArrowDownToLine className="size-4" />
              Resume
            </Anchor>
          </Button>
          {codingLinks.map(({ id, href, icon: Icon }) => (
            <Button
              key={id}
              variant="ghost"
              size="icon"
              className="size-10 cursor-pointer"
              asChild
              aria-label={`Visit ${id} profile`}
            >
              <Anchor href={href}>
                <Icon className="size-5" />
              </Anchor>
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroSection
