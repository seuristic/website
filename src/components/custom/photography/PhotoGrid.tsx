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
      {photos.map((photo, index) => (
        <Fragment key={photo.id}>
          <LineDivider
            className={cn(
              index === 0 && 'hidden',
              index > 0 &&
                (index % 3 !== 0 || index === photos.length - 1) &&
                'lg:hidden'
            )}
          />
          <div className="col-span-1 p-1">
            <PhotoCard photo={photo} />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default PhotoGrid
