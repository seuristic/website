import Anchor from '@/components/custom/Anchor'
import { Button } from '@/components/ui/button'
import { ArrowDownToLine } from 'lucide-react'
import { isOptimizedImage, type OptimizedImage } from '@/lib/imageTypes'
import profile_picture from '@/assets/images/profile_picture.webp?w=480;768;1200;1600&format=webp;avif;jpg&as=picture'
import profile_picture_raw from '@/assets/images/profile_picture.webp'
import { codingLinks } from '@/components/custom/navbar/Navbar'
import LazyImage from '@/components/custom/LazyImage'

const Hero = () => {
  const heroImage = isOptimizedImage(profile_picture)
    ? (profile_picture as OptimizedImage)
    : null
  const fallbackSrc =
    typeof profile_picture_raw === 'string'
      ? profile_picture_raw
      : (heroImage?.img.src ?? '')

  return (
    <>
      <div className="aspect-square w-full p-1">
        <LazyImage
          src={heroImage?.img.src ?? fallbackSrc}
          fallbackSrc={fallbackSrc}
          sources={heroImage?.sources}
          width={heroImage?.img.w}
          height={heroImage?.img.h}
          sizes="(max-width: 1024px) 100vw, 33vw"
          alt="Mohammad Shahanwaz - Profile Picture"
          className="size-full rounded-md border object-cover"
        />
      </div>
      <div className="col-span-1 flex w-full flex-col items-start justify-center gap-2 p-1 lg:col-span-2">
        <h1 className="font-serif text-3xl font-medium sm:text-5xl md:text-6xl xl:text-7xl">
          Mohammad Shahanwaz
        </h1>
        <div className="text-muted-foreground flex w-fit flex-wrap items-center gap-1 text-base sm:gap-2 lg:text-lg">
          <span>(vibe) Software Engineer</span>
          <div className="inline-flex gap-1 sm:gap-2">
            <span>⬩</span>
            <span>Creative Curiosity</span>
          </div>
          <div className="inline-flex gap-1 sm:gap-2">
            <span>⬩</span>
            <span>Fitness Freak</span>
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

export default Hero
