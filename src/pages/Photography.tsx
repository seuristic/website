import { Fragment, useMemo } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LineDivider } from '@/components/layout/Dividers'
import { MapPin } from 'lucide-react'
import FooterSection from '@/components/home/FooterSection'
import PhotographLayout from '@/components/layout/PhotographyLayout'
import { getAllPhotosShuffled } from '@/lib/photos'
import { cn } from '@/lib/utils'

const Photography = () => {
  const capturedPhotos = useMemo(() => getAllPhotosShuffled(), [])

  return (
    <PhotographLayout footer={<FooterSection />}>
      <div className="gap-x-gutter-sm lg:gap-x-gutter relative col-span-full grid grid-cols-1 lg:grid-cols-3">
        {capturedPhotos.map((photo, index) => (
          <Fragment key={photo.id}>
            <LineDivider
              className={cn(
                'col-span-full border-b after:border-none',
                index === 0 && 'hidden',
                index > 0 && index % 3 !== 0 && 'lg:hidden',
              )}
            />
            <div className="col-span-1 p-1">
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
      </div>
    </PhotographLayout>
  )
}

export default Photography
