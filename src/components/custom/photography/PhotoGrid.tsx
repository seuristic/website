import { Fragment } from 'react'
import { LineDivider } from '@/components/custom/Dividers'
import type { Photo } from '@/lib/photos'
import { cn } from '@/lib/utils'
import PhotoCard from '@/components/custom/PhotoCard'

type PhotoGridProps = {
  photos: Photo[]
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-full grid grid-cols-1 lg:grid-cols-3">
      {Array.from({ length: Math.max(9, photos.length) }).map((_, index) => {
        const photo = index < photos.length ? photos[index] : null
        return (
          <Fragment key={index}>
            <LineDivider
              className={cn(
                index > Math.max(2, photos.length) && 'hidden lg:block',
                index > 0 &&
                  (index % 3 !== 0 || index === photos.length - 1) &&
                  'lg:hidden'
              )}
            />
            {photo ? (
              <div className={cn('col-span-1 p-1')}>
                <PhotoCard photo={photo} />
              </div>
            ) : (
              <div
                className={cn(
                  'col-span-1 aspect-square min-h-84 p-1',
                  index > 2 && 'hidden lg:block'
                )}
              />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

export default PhotoGrid
