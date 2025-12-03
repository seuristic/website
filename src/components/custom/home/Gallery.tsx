import { Fragment, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { LineDivider } from '@/components/custom/Dividers'
import { cn } from '@/lib/utils'
import { getRandomPhotos } from '@/lib/photos'
import { ArrowUpRight } from 'lucide-react'
import PhotoCard from '@/components/custom/PhotoCard'

const PHOTO_ROWS = 3

const Gallery = () => {
  const capturedPhotos = useMemo(() => getRandomPhotos(3 * PHOTO_ROWS - 2), [])

  return (
    <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-full grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-1 p-1">
        <span className="text-tertiary-foreground top-[calc(5rem+4px)] flex font-mono text-xs sm:sticky lg:justify-end">
          gallery
        </span>
      </div>
      {capturedPhotos.map((photo, index) => (
        <Fragment key={photo.id}>
          <LineDivider className={cn(index % 3 !== 2 && 'lg:hidden')} />
          <div
            className={cn(
              'group col-span-1 p-1',
              index % 3 === 0 && 'lg:border-r',
              index % 3 === 1 && 'lg:border-l'
            )}
          >
            <PhotoCard photo={photo} as="div" />
          </div>
        </Fragment>
      ))}
      <LineDivider className="lg:hidden" />
      <div className="p-1 lg:border-l">
        <Link to="/photography">
          <Button
            variant="ghost"
            className="h-full w-full cursor-pointer rounded-md border"
          >
            View more
            <ArrowUpRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Gallery
