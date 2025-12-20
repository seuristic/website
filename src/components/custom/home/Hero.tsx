import Anchor from '@/components/custom/Anchor'
import { Button } from '@/components/ui/button'
import { ArrowDownToLineIcon } from 'lucide-react'
import { isOptimizedImage, type OptimizedImage } from '@/lib/imageTypes'
import profile_picture from '@/assets/images/profile_picture.webp?w=480;768;1200;1600&format=webp;avif;jpg&as=picture'
import profile_picture_raw from '@/assets/images/profile_picture.webp'
import { codingLinks } from '@/components/custom/navbar/Navbar'
import LazyImage from '@/components/custom/LazyImage'
import { ContentLineDivider, LineDivider } from '../Dividers'

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
      <div className="col-span-1 aspect-square w-full p-1">
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

      <LineDivider className="lg:hidden" />

      <div className="bg-background col-span-1 flex w-full flex-col items-start justify-center lg:col-span-2">
        <ContentLineDivider className="hidden lg:block" />

        <h1 className="w-full p-1 font-serif text-3xl leading-tight font-medium sm:text-5xl md:text-6xl xl:text-7xl">
          Mohammad Shahanwaz
        </h1>

        <ContentLineDivider />

        <div className="text-muted-foreground flex w-full flex-wrap items-center gap-1 p-1 text-base sm:gap-2 lg:text-lg">
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

        <ContentLineDivider />

        <div className="flex w-full flex-wrap items-center gap-3 p-1">
          <Button size="lg" asChild className="cursor-pointer">
            <Anchor href="https://resume.shahanwaz.dev">
              <ArrowDownToLineIcon className="size-4" />
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

        <ContentLineDivider className="hidden lg:block" />
      </div>
    </>
  )
}

export default Hero
