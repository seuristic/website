const IntroSection = () => {
  return (
    <>
      <div className="after:bg-border relative col-span-1 row-span-2 p-1 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:content-['']">
        <span className="text-tertiary-foreground sticky top-[calc(4.5rem+1px)] flex justify-end font-mono text-xs">
          intro
        </span>
      </div>

      <div className="col-span-2 p-1">
        <p className="text-muted-foreground text-justify text-lg">
          I'm a software engineer with a deep passion for building meaningful
          and impactful software. I hold a B.Tech degree in Computer Science and
          Engineering from NIT Delhi, where my curiosity for systems,
          algorithms, and design translated into a strong technical foundation.
          <br />
          <br />
          Currently, I am working as a UI Engineer (AI) at{' '}
          <a
            href="https://nexla.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            Nexla
          </a>{' '}
          , where I design and develop user interfaces for{' '}
          <a
            href="https://express.dev"
            className="text-primary underline-offset-4 hover:underline"
          >
            Express
          </a>
          , an AI-powered product for building data flows and pipelines. I work
          with cross-functional teams to ensure smooth integration between
          frontend and backend systems while creating intuitive, user-focused
          experiences.
          <br />
          <br />
          Previously, I have worked at{' '}
          <a
            href="https://www.bosscoderacademy.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            Bosscoder Academy
          </a>{' '}
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

