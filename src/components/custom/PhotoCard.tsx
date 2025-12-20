import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { MapPinIcon } from 'lucide-react'
import type { Photo } from '@/lib/photos'
import LazyImage from '@/components/custom/LazyImage'

type PhotoCardProps = {
  photo: Photo
  as?: 'button' | 'div'
}

const PhotoCard = ({ photo, as = 'button' }: PhotoCardProps) => {
  const TriggerComponent = as === 'button' ? 'button' : 'div'

  return (
    <Dialog>
      <DialogTrigger asChild>
        <TriggerComponent
          type={as === 'button' ? 'button' : undefined}
          className="group relative aspect-square size-full cursor-pointer overflow-hidden rounded-md border"
          aria-label={`View photo from ${photo.location}`}
        >
          <LazyImage
            src={photo.src}
            sources={photo.sources}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 1024px) 100vw, 33vw"
            alt={photo.alt}
            className="size-full object-cover transition-all duration-300 group-hover:brightness-75"
          />
          <div className="group-hover:bg-primary/5 absolute inset-0 transition-all duration-100" />
        </TriggerComponent>
      </DialogTrigger>
      <DialogContent className="bg-background max-w-3xl rounded-none sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPinIcon className="size-5" />
            {photo.location}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Photo taken at {photo.location}
        </DialogDescription>
        <div className="h-[80vh] w-full text-center">
          <LazyImage
            src={photo.src}
            sources={photo.sources}
            width={photo.width}
            height={photo.height}
            sizes="100vw"
            alt={photo.alt}
            className="h-full w-fit border object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PhotoCard
