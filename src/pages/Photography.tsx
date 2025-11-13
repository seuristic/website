import { useMemo } from 'react'
import PhotographyLayout from '@/components/layouts/PhotographyLayout'
import PhotoGrid from '@/components/photography/PhotoGrid'
import { getAllPhotosShuffled } from '@/lib/photos'
import { SectionDivider } from '@/components/layouts/Dividers'
import { SEO } from '@/components/SEO'

const Photography = () => {
  const capturedPhotos = useMemo(() => getAllPhotosShuffled(), [])

  return (
    <>
      <SEO
        title="Photography"
        description="A collection of my photography work capturing moments from various locations including Delhi, Rishikesh, and Noida."
        url="/photography"
      />
      <PhotographyLayout>
        <PhotoGrid photos={capturedPhotos} />
        <SectionDivider />
      </PhotographyLayout>
    </>
  )
}

export default Photography
