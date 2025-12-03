import HomeLayout from '@/components/custom/layouts/HomeLayout'
import { SectionDivider } from '@/components/custom/Dividers'
import Introduction from '@/components/custom/home/Introduction'
import Experience from '@/components/custom/home/Experience'
import Gallery from '@/components/custom/home/Gallery'
import { SEO } from '@/components/custom/SEO'
import Hero from '@/components/custom/home/Hero'

const Home = () => {
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
        <SectionDivider />
      </HomeLayout>
    </>
  )
}

export default Home
