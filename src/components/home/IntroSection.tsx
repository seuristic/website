import Anchor from '../custom/Anchor'
import { LineDivider } from '../layouts/Dividers'

const IntroSection = () => {
  return (
    <>
      <div className="col-span-1 row-span-3 p-1">
        <span className="text-tertiary-foreground flex font-mono text-xs lg:justify-end">
          introduction
        </span>
      </div>

      <LineDivider className="lg:hidden" />

      <div className="col-span-1 p-1 lg:col-span-2">
        <p className="text-muted-foreground text-justify text-lg">
          I'm a software engineer with a deep passion for building meaningful
          and impactful software. I hold a B.Tech degree in Computer Science and
          Engineering from NIT Delhi, where my curiosity for systems,
          algorithms, and design translated into a strong technical foundation.
          <br />
          <br />
          Currently, I am working as a UI Engineer (AI) at{' '}
          <Anchor
            href="https://nexla.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            Nexla
          </Anchor>{' '}
          , where I design and develop user interfaces for{' '}
          <Anchor
            href="https://express.dev"
            className="text-primary underline-offset-4 hover:underline"
          >
            Express
          </Anchor>
          , an AI-powered product for building data flows and pipelines. I work
          with cross-functional teams to ensure smooth integration between
          frontend and backend systems while creating intuitive, user-focused
          experiences.
          <br />
          <br />
          Previously, I have worked at{' '}
          <Anchor
            href="https://www.bosscoderacademy.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            Bosscoder Academy
          </Anchor>{' '}
          as a Lead Software Engineer where I had built a platform with a dozen
          of features including AI mentorship, in-house doubt support chat
          system, code execution platform, HLS/DASH-based video player etc. from
          scratch, explored and utilized cloud providers and led technical team.
        </p>
      </div>
    </>
  )
}

export default IntroSection
