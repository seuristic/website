import PageShell from '@/components/layout/HomeLayout'
import { SectionDivider } from '@/components/layout/Dividers'
import HeroSection from '@/components/home/HeroSection'
import IntroSection from '@/components/home/IntroSection'
import ExperienceSection from '@/components/home/ExperienceSection'
import PhotographySection from '@/components/home/PhotographySection'

const Home = () => {
  return (
    <PageShell>
      <HeroSection />
      <SectionDivider />
      <IntroSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <PhotographySection />
    </PageShell>
  )
}

export default Home
