import { Button } from '@/components/ui/button'
import profile_picture from '../assets/images/profile_picture.jpeg'
import { ArrowDownToLine, ArrowUpRight, Copyright } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

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
                <div className="text-muted-foreground text-lg">
                  Software Engineer
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
                  introduction
                </span>
              </div>

              <div className="col-span-2 p-1">
                <p className="text-muted-foreground text-justify text-lg">
                  I'm a software engineer passionate about building scalable
                  systems, creative digital products, and impactful developer
                  tools. At{' '}
                  <span className="text-primary">Bosscoder Academy</span>, I've
                  led engineering teams, architected cost-efficient cloud
                  solutions, and developed AI-driven support systems that cut
                  costs by over 50%. My work spans across full-stack
                  development, DevOps, and applied AI -&gt; from migrating
                  infrastructures with Terraform and Cloud Run, to creating
                  secure video platforms and online coding environments.
                  <br />
                  <br />I thrive at the intersection of engineering,
                  problem-solving, and mentorship, having guided 40+ engineers
                  and interns through best practices and scalable design. Beyond
                  work, I explore projects like Imagec, a full-stack image
                  licensing platform, and Facial Emotion Recognition systems
                  integrated with hardware - research that earned me a
                  publication at the{' '}
                  <span className="text-primary">ACM IC3 Conference 2023</span>.
                  <br />
                  <br />
                  With a B.Tech in CSE from{' '}
                  <span className="text-primary">NIT Delhi</span>, I'm on a
                  journey to craft products that are not only technically sound
                  but also meaningful, performant, and human-centric.
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
                <h2 className="font-serif text-3xl">Nexla</h2>

                {/* UI Engineer (AI) */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-lg">UI Engineer (AI)</span>
                    <div className="h-0 w-full flex-1 border-b border-dashed" />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      August 2025 - Present
                    </span>
                  </div>
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>
                      Designed and launched an AI-powered mentor and
                      doubt-support system that streamlined queries and cut down
                      support overhead by more than half.
                    </li>
                    <li>
                      Transitioned backend services from App Engine to Cloud
                      Run, which significantly boosted performance while
                      reducing costs.
                    </li>
                    <li>
                      Re-architected CI/CD runners using Terraform and GCP,
                      making infrastructure leaner and more cost-efficient.
                    </li>
                    <li>
                      Rolled out multi-region load balancing on Cloud Run, which
                      improved both uptime and responsiveness for users.
                    </li>
                    <li>
                      Guided and mentored a team of nearly 40 engineers and
                      interns, shaping code quality, reviews, and engineering
                      practices.
                    </li>
                  </ul>
                </div>
              </div>

              <ContentDivider />

              <div className="col-span-2 space-y-4 p-1">
                <h2 className="font-serif text-3xl">Bosscoder Academy</h2>

                {/* Senior Software Engineer */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-lg">Senior Software Engineer</span>
                    <div className="h-0 w-full flex-1 border-b border-dashed" />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      April 2025 - August 2025
                    </span>
                  </div>
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>
                      Designed and launched an AI-powered mentor and
                      doubt-support system that streamlined queries and cut down
                      support overhead by more than half.
                    </li>
                    <li>
                      Transitioned backend services from App Engine to Cloud
                      Run, which significantly boosted performance while
                      reducing costs.
                    </li>
                    <li>
                      Re-architected CI/CD runners using Terraform and GCP,
                      making infrastructure leaner and more cost-efficient.
                    </li>
                    <li>
                      Rolled out multi-region load balancing on Cloud Run, which
                      improved both uptime and responsiveness for users.
                    </li>
                    <li>
                      Guided and mentored a team of nearly 40 engineers and
                      interns, shaping code quality, reviews, and engineering
                      practices.
                    </li>
                  </ul>
                </div>

                {/* Software Engineer */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-lg">Software Engineer</span>
                    <div className="h-0 w-full flex-1 border-b border-dashed" />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      July 2023 - March 2025
                    </span>
                  </div>
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>
                      Helped scale the platform to seamlessly serve 10,000+
                      daily active users with improved reliability.
                    </li>
                    <li>
                      Built an in-house online coding environment powered by
                      Judge0, allowing assessments and practice without relying
                      on third-party platforms.
                    </li>
                    <li>
                      Developed a secure video streaming system with encrypted
                      HLS delivery, cutting hosting costs dramatically.
                    </li>
                    <li>
                      Automated deployment pipelines end-to-end, turning
                      releases into a fast, repeatable process.
                    </li>
                    <li>
                      Switched the build system to Vite, trimming down build and
                      deployment times by more than two-thirds.
                    </li>
                  </ul>
                </div>

                {/* Software Engineering Intern */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-lg">Software Engineering Intern</span>
                    <div className="h-0 w-full flex-1 border-b border-dashed" />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      January 2023 - June 2023
                    </span>
                  </div>
                  <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                    <li>
                      Built the foundation of a full-stack MVP using React.js,
                      Node.js, and Flask with Firebase for storage and auth.
                    </li>
                    <li>
                      Took ownership of monitoring and maintaining cloud
                      services across AWS and GCP, ensuring smooth deployments
                      and uptime.
                    </li>
                  </ul>
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
                {Array.from({ length: 7 }).map((_, index) => (
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
