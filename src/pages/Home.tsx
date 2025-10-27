import { Button } from '@/components/ui/button'
import profile_picture from '../assets/images/profile_picture.jpeg'
import {
  ArrowDownToLine,
  ArrowUpRight,
  ArrowUpRightIcon,
  Copyright,
  HistoryIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Anchor from '@/components/custom/Anchor'

const SectionDivider = () => {
  return (
    <div className="relative col-span-full h-20 after:absolute after:bottom-0 after:-left-[100vw] after:h-0 after:w-[200vw] after:border-b" />
  )
}

const ContentDivider = () => {
  return <div className="h-gutter col-span-2 w-full border-y" />
}

const LineDivider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'relative col-span-full h-0 w-full after:absolute after:bottom-0 after:-left-[100vw] after:h-0 after:w-[200vw] after:border-b',
        className,
      )}
    />
  )
}

const Home = () => {
  return (
    <main className="border-y">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-rows-[1fr_1px_auto_1px_auto] justify-center sm:grid-cols-[var(--gutter-space)_minmax(0,var(--container-7xl))_var(--gutter-space)]">
        {/* Left Pattern */}
        <div className="gutter-pattern border-x" />

        {/* Main Content */}
        <div className="">
          <div className="grid grid-cols-[1fr_var(--gutter-space)_1fr_var(--gutter-space)_1fr]">
            <div className="col-span-1 col-start-2 row-start-1 row-end-6 border-x" />

            {/* Empty Space */}
            <div className="col-span-full col-start-1 row-span-1 row-start-1 h-36" />

            {/* Line */}
            <LineDivider className="col-span-full col-start-1 row-span-1 row-start-2" />

            {/* Main Container */}
            <div className="gap-x-gutter relative col-span-full col-start-1 row-start-3 grid grid-cols-3">
              {/* Row 1: Hero */}
              <div className="relative col-span-1 aspect-square w-full p-1 after:absolute after:bottom-0 after:-left-[100vw] after:h-0 after:w-[200vw] after:border-b">
                <img
                  src={profile_picture}
                  alt="Profile Picture"
                  className="aspect-square w-full rounded-md border object-cover"
                />
              </div>
              <div className="col-span-2 flex w-full flex-col items-start justify-center gap-1 p-1">
                <h1 className="font-serif text-7xl">Mohammad Shahanwaz</h1>
                <div className="text-muted-foreground flex items-center gap-4 text-lg">
                  <span>Software Engineer</span>
                  <span className="text-border">/</span>
                  <span>AI</span>
                  <span className="text-border">/</span>
                  <span>Web</span>
                </div>
                <a
                  href="https://resume.shahanwaz.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button size="lg" className="cursor-pointer">
                    <ArrowDownToLine className="size-4" />
                    Resume
                  </Button>
                </a>
              </div>

              <SectionDivider />

              {/* Row 2: Introduction */}
              <div className="after:bg-border relative col-span-1 row-span-2 p-1 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:content-['']">
                <span className="text-tertiary-foreground sticky top-[calc(4.5rem+1px)] flex justify-end font-mono text-xs">
                  about-me
                </span>
              </div>

              <div className="col-span-2 p-1">
                <p className="text-muted-foreground text-justify text-lg">
                  I'm a software engineer with a deep passion for building
                  meaningful and impactful software. I hold a B.Tech degree in
                  Computer Science and Engineering from NIT Delhi, where my
                  curiosity for systems, algorithms, and design translated into
                  a strong technical foundation.
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
                  , an AI-powered product for building data flows and pipelines.
                  I work with cross-functional teams to ensure smooth
                  integration between frontend and backend systems while
                  creating intuitive, user-focused experiences.
                  <br />
                  <br />
                  Previously, I have worked at{' '}
                  <a
                    href="https://www.bosscoderacademy.com"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Bosscoder Academy
                  </a>{' '}
                  as a Lead Software Engineer where I had built a platform with
                  a dozen of features including AI mentorship, in-house doubt
                  support chat system, code execution platform, HLS/DASH-based
                  video player etc. from scratch, explored and utilized cloud
                  providers and led technical team.
                </p>
              </div>

              <SectionDivider />

              {/* Row 3: Experience */}
              <div className="after:bg-border relative col-span-1 row-span-3 p-1 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:content-['']">
                <span className="text-tertiary-foreground sticky top-[calc(4.5rem+1px)] flex justify-end font-mono text-xs">
                  experience
                </span>
              </div>

              <div className="col-span-2 space-y-4 p-1">
                <h2 className="font-serif text-3xl">
                  <Anchor href="https://nexla.com">Nexla</Anchor>
                </h2>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-lg">UI Engineer</span>
                    <div className="h-0 w-full flex-1 border-b border-dashed" />
                    <span className="text-muted-foreground font-mono text-xs">
                      August 2025 - Present
                    </span>
                  </div>
                  <p className="text-muted-foreground text-justify">
                    Led the development of an AI-powered mentor system, a secure
                    HLS-based video streaming platform, and an in-house coding
                    environment powered by Judge0. Re-architected CI/CD
                    pipelines with Terraform and GCP, automated deployments, and
                    migrated infrastructure to Cloud Run and Vite to enhance
                    performance and efficiency. Improved uptime, reduced costs,
                    and elevated user experience while mentoring a team of
                    nearly 40 engineers as the platform scaled to over 10,000
                    daily active users.
                  </p>
                </div>
              </div>

              <ContentDivider />

              <div className="col-span-2 space-y-4 p-1">
                <h2 className="font-serif text-3xl">
                  <Anchor href="https://www.bosscoderacademy.com">
                    Bosscoder Academy
                  </Anchor>
                </h2>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <div className="flex items-center gap-2 text-lg">
                      <span>Senior Software Engineer</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HistoryIcon className="text-muted-foreground size-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          Previously: Software Engineer, Software Engineer
                          Intern
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="h-0 w-full flex-1 border-b border-dashed" />
                    <span className="text-muted-foreground font-mono text-xs">
                      2023 - 2025
                    </span>
                  </div>
                  <p className="text-muted-foreground text-justify">
                    Led the development of an AI-powered mentor system, a secure
                    HLS-based video streaming platform, and an in-house coding
                    environment powered by Judge0. Re-architected CI/CD
                    pipelines with Terraform and GCP, automated deployments, and
                    migrated infrastructure to Cloud Run and Vite to enhance
                    performance and efficiency. Improved uptime, reduced costs,
                    and elevated user experience while mentoring a team of
                    nearly 40 engineers as the platform scaled to over 10,000
                    daily active users.
                  </p>
                </div>
              </div>

              <SectionDivider />

              {/* Row 4: Photography */}
              <div className="gap-x-gutter relative col-span-full grid grid-cols-3">
                <div className="col-span-1 p-1">
                  <span className="text-tertiary-foreground sticky top-[calc(4.5rem+1px)] flex justify-end font-mono text-xs">
                    photography
                  </span>
                </div>
                {Array.from({ length: 4 }).map((_, index) => (
                  <>
                    {index % 3 === 2 && (
                      <LineDivider className="border-b after:border-none" />
                    )}
                    <div
                      className={cn(
                        'col-span-1 p-1',
                        index % 3 === 0 && 'border-r',
                        index % 3 === 1 && 'border-l',
                      )}
                      key={index}
                    >
                      <img
                        src={profile_picture}
                        alt="Profile Picture"
                        className="aspect-square w-full rounded-md border object-cover"
                      />
                    </div>
                  </>
                ))}
                <div className="col-span-1 border-l p-1">
                  <Link to="/photography" className="mt-4">
                    <Button
                      variant="ghost"
                      className="h-full w-full cursor-pointer rounded-md"
                    >
                      View more
                      <ArrowUpRight className="size-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Line */}
            <LineDivider className="col-span-full col-start-1 row-span-1 row-start-4" />

            {/* Footer */}
            <div className="gap-x-gutter col-span-full col-start-1 row-span-1 row-start-5 grid grid-cols-3">
              <div className="col-span-1 grid h-20 place-items-center p-1">
                <div className="text-tertiary-foreground flex items-center gap-2 font-mono text-sm">
                  <Copyright className="size-4" />
                  {new Date().getFullYear()}
                </div>
              </div>
              <div className="col-span-2 grid place-items-center p-1">
                <div className="text-tertiary-foreground flex items-center gap-2 font-mono text-sm">
                  <p>Mohammad Shahanwaz</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Pattern */}
        <div className="gutter-pattern border-x" />
      </div>
    </main>
  )
}

export default Home
