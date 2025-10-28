import PageShell from '@/components/layout/HomeLayout'
import { SectionDivider } from '@/components/layout/Dividers'
import HeroSection from '@/components/home/HeroSection'
import IntroSection from '@/components/home/IntroSection'
import ExperienceSection from '@/components/home/ExperienceSection'
import PhotographySection from '@/components/home/PhotographySection'
import FooterSection from '@/components/home/FooterSection'

const Home = () => {
  return (
    <PageShell footer={<FooterSection />}>
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
