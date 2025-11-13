import HomeLayout from '@/components/layouts/HomeLayout'
import { SectionDivider } from '@/components/layouts/Dividers'
import HeroSection from '@/components/home/HeroSection'
import IntroSection from '@/components/home/IntroSection'
import ExperienceSection from '@/components/home/ExperienceSection'
import PhotographySection from '@/components/home/PhotographySection'

const Home = () => {
  return (
    <HomeLayout>
      <HeroSection />
      <SectionDivider />
      <IntroSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <PhotographySection />
      <SectionDivider />
    </HomeLayout>
  )
}

export default Home
