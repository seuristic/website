import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { MapPin } from 'lucide-react'
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
          className="group relative flex aspect-square h-full w-full cursor-pointer flex-col gap-1 overflow-hidden rounded-md border p-1"
          aria-label={`View photo from ${photo.location}`}
        >
          <div className="h-full w-full overflow-hidden rounded">
            <LazyImage
              src={photo.src}
              sources={photo.sources}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 1024px) 100vw, 33vw"
              alt={photo.alt}
              className="h-full w-full object-cover object-bottom grayscale transition-[filter] duration-300 group-hover:grayscale-0"
            />
          </div>
          <div className="bg-secondary flex items-center gap-2 rounded px-3 py-2 transition-colors">
            <MapPin className="size-4" />
            <span className="text-sm">{photo.location}</span>
          </div>
        </TriggerComponent>
      </DialogTrigger>
      <DialogContent className="bg-background max-w-3xl rounded-none sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="size-5" />
            {photo.location}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Photo taken at {photo.location}
        </DialogDescription>
        <div className="h-[80vh] w-full border text-center">
          <LazyImage
            src={photo.src}
            sources={photo.sources}
            width={photo.width}
            height={photo.height}
            sizes="100vw"
            alt={photo.alt}
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PhotoCard
