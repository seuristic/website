import { Fragment } from 'react'
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
import IMG_01 from '@/assets/images/photos/IMG_01.jpg'
import IMG_02 from '@/assets/images/photos/IMG_02.jpg'
import IMG_03 from '@/assets/images/photos/IMG_03.jpg'
import IMG_04 from '@/assets/images/photos/IMG_04.jpg'
import IMG_05 from '@/assets/images/photos/IMG_05.jpg'
import IMG_06 from '@/assets/images/photos/IMG_06.jpg'
import IMG_07 from '@/assets/images/photos/IMG_07.jpg'
import { ArrowUpRight, MapPin } from 'lucide-react'

const capturedPhotos = [
  {
    id: 1,
    src: IMG_01,
    alt: 'JLN Stadium, Delhi',
    location: 'JLN Stadium, Delhi',
  },
  {
    id: 2,
    src: IMG_02,
    alt: 'Greater Noida, UP',
    location: 'Greater Noida, UP',
  },
  {
    id: 3,
    src: IMG_03,
    alt: 'Greater Noida, UP',
    location: 'Greater Noida, UP',
  },
  {
    id: 4,
    src: IMG_04,
    alt: 'Sarovar, Delhi',
    location: 'Sarovar, Delhi',
  },
  {
    id: 5,
    src: IMG_05,
    alt: 'Rishikesh, UK',
    location: 'Rishikesh, UK',
  },
  {
    id: 6,
    src: IMG_06,
    alt: 'Rishikesh, UK',
    location: 'Rishikesh, UK',
  },
  {
    id: 7,
    src: IMG_07,
    alt: 'Rishikesh, UK',
    location: 'Rishikesh, UK',
  },
]

const PhotographySection = () => {
  return (
    <div className="gap-x-gutter-sm lg:gap-x-gutter relative col-span-full grid grid-cols-3">
      <div className="col-span-1 p-1">
        <span className="text-tertiary-foreground sticky top-[calc(4.5rem+1px)] flex justify-end font-mono text-xs">
          photography
        </span>
      </div>
      {capturedPhotos.map((photo, index) => (
        <Fragment key={photo.id}>
          {index % 3 === 2 && (
            <LineDivider className="border-b after:border-none" />
          )}
          <div
            className={cn(
              'group col-span-1 p-1',
              index % 3 === 0 && 'border-r',
              index % 3 === 1 && 'border-l',
            )}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="group dark:text-foreground text-background relative h-full w-full cursor-pointer overflow-hidden rounded-md border">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-square w-full object-cover object-bottom"
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
      <div className="col-span-1 border-l p-1">
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
