import HomeLayout from '@/components/layouts/HomeLayout'
import { SectionDivider } from '@/components/custom/Dividers'
import Introduction from '@/components/custom/home/Introduction'
import Experience from '@/components/custom/home/Experience'
import Gallery from '@/components/custom/home/Gallery'
import Blogs from '@/components/custom/home/Blogs'
import { SEO } from '@/components/custom/SEO'
import Hero from '@/components/custom/home/Hero'
import useFeatureFlag, { BLOGS_FLAG_KEY } from '@/hooks/useFeatureFlag'

const Home = () => {
  const blogsEnabled = useFeatureFlag(BLOGS_FLAG_KEY, true)

  return (
    <>
      <SEO />
      <HomeLayout>
        <Hero />
        <SectionDivider />
        <Introduction />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Gallery />
        {blogsEnabled && (
          <>
            <SectionDivider />
            <Blogs />
          </>
        )}
        <SectionDivider />
      </HomeLayout>
    </>
  )
}

export default Home
