import { Fragment, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ContentDivider } from '@/components/custom/Dividers'
import { cn } from '@/lib/utils'
import { getRandomPhotos } from '@/lib/photos'
import { ArrowUpRightIcon } from 'lucide-react'
import PhotoCard from '@/components/custom/PhotoCard'

const PHOTO_ROWS = 3

const Gallery = () => {
  const capturedPhotos = useMemo(() => getRandomPhotos(3 * PHOTO_ROWS - 2), [])

  return (
    <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-full grid grid-cols-1 lg:grid-cols-3">
      <div className="bg-background col-span-1 p-1">
        <span className="text-tertiary-foreground top-[calc(5rem+4px)] flex font-mono text-xs sm:sticky lg:justify-end">
          gallery
        </span>
      </div>
      {capturedPhotos.map((photo, index) => (
        <Fragment key={photo.id}>
          <ContentDivider className={cn(index % 3 !== 2 && 'lg:hidden')} />
          <div className={cn('group col-span-1 p-1')}>
            <PhotoCard photo={photo} as="div" />
          </div>
        </Fragment>
      ))}
      <ContentDivider className="lg:hidden" />
      <div className="flex min-h-20 items-center justify-center p-1">
        <Link
          to="/photography"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 underline-offset-4 transition-colors hover:underline"
        >
          View more
          <ArrowUpRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export default Gallery
