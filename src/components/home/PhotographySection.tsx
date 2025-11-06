import { Fragment, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LineDivider } from '@/components/layout/Dividers'
import { cn } from '@/lib/utils'
import { getRandomPhotos } from '@/lib/photos'
import { ArrowUpRight, MapPin } from 'lucide-react'

const PhotographySection = () => {
  // Get 7 random photos for the homepage
  const capturedPhotos = useMemo(() => getRandomPhotos(4), [])

  return (
    <div className="gap-x-gutter-sm lg:gap-x-gutter relative col-span-full grid grid-cols-1 lg:grid-cols-3">
      <div className="after:bg-border relative col-span-1 p-1 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:content-[''] lg:after:hidden">
        <span className="text-tertiary-foreground sticky top-[calc(4.5rem+1px)] flex font-mono text-xs lg:justify-end">
          photography
        </span>
      </div>
      {capturedPhotos.map((photo, index) => (
        <Fragment key={photo.id}>
          <LineDivider
            className={cn(
              'col-span-full border-b after:border-none',
              index % 3 !== 2 && 'lg:hidden',
              index === 0 && 'border-none',
            )}
          />
          <div
            className={cn(
              'group col-span-1 p-1',
              index % 3 === 0 && 'lg:border-r',
              index % 3 === 1 && 'lg:border-l',
            )}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="group dark:text-foreground text-background relative h-full w-full cursor-pointer overflow-hidden rounded-md border">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="block aspect-square w-full object-cover object-bottom"
                  />
                  <div className="dark:from-background/80 from-foreground/80 dark:via-background/50 via-foreground/50 dark:group-hover:bg-background/50 group-hover:bg-foreground/50 pointer-events-none absolute inset-0 bg-linear-[5deg] from-10% via-30% to-transparent to-100% transition-colors" />
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                    <MapPin className="size-4" />
                    <span className="font-mono text-xs font-medium tracking-wide">
                      {photo.location}
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-background max-w-3xl sm:max-w-5xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <MapPin className="size-5" />
                    {photo.location}
                  </DialogTitle>
                </DialogHeader>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-[80vh] w-full rounded-xs object-contain"
                />
              </DialogContent>
            </Dialog>
          </div>
        </Fragment>
      ))}
      <div className="col-span-1 border-t p-1 lg:border-l">
        <Link to="/photography" className="mt-4">
          <Button
            variant="ghost"
            className="h-full w-full cursor-pointer rounded-md"
          >
            View more
            <ArrowUpRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default PhotographySection
