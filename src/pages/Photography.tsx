import { useMemo } from 'react'
import PhotographyLayout from '@/components/layouts/PhotographyLayout'
import PhotoGrid from '@/components/photography/PhotoGrid'
import { getAllPhotosShuffled } from '@/lib/photos'
import { SectionDivider } from '@/components/layouts/Dividers'

const Photography = () => {
  const capturedPhotos = useMemo(() => getAllPhotosShuffled(), [])

  return (
    <PhotographyLayout>
      <PhotoGrid photos={capturedPhotos} />
      <SectionDivider />
    </PhotographyLayout>
  )
}

export default Photography
