import Anchor from '@/components/custom/Anchor'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ContentDivider } from '@/components/layout/Dividers'
import { HistoryIcon } from 'lucide-react'

const ExperienceSection = () => {
  return (
    <>
      <div className="after:bg-border relative col-span-1 row-span-3 p-1 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:content-['']">
        <span className="text-tertiary-foreground sticky top-[calc(4.5rem+1px)] flex font-mono text-xs lg:justify-end">
          experience
        </span>
      </div>

      <div className="col-span-1 space-y-4 p-1 lg:col-span-2">
        <h2 className="font-serif text-3xl">
          <Anchor href="https://nexla.com">Nexla</Anchor>
        </h2>
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg">UI Engineer (AI Team)</span>
            <div className="h-0 w-full flex-1 border-b border-dashed" />
            <span className="text-muted-foreground font-mono text-xs">
              August 2025 - Present
            </span>
          </div>
          <p className="text-muted-foreground text-justify">
            Built the complete onboarding UI flow for new users, streamlining
            the first-time experience and product adoption. Added tool selection
            functionality enabling structured file extraction within chat,
            including file preview, backend-driven schema detection, and a
            tree-visualized schema viewer for intuitive data mapping. Developed
            an interactive component to display extracted result data with
            editable fields, enhancing flexibility and user control throughout
            the extraction workflow.
          </p>
        </div>
      </div>

      <ContentDivider />

      <div className="col-span-1 space-y-4 p-1 lg:col-span-2">
        <h2 className="font-serif text-3xl">
          <Anchor href="https://www.bosscoderacademy.com">
            Bosscoder Academy
          </Anchor>
        </h2>
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <div className="flex items-center gap-2 text-lg">
              <span>Senior Software Engineer</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HistoryIcon className="text-muted-foreground size-4" />
                </TooltipTrigger>
                <TooltipContent>
                  Previously: Software Engineer, Software Engineer Intern
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
            environment powered by Judge0. Re-architected CI/CD pipelines with
            Terraform and GCP, automated deployments, and migrated
            infrastructure to Cloud Run and Vite to enhance performance and
            efficiency. Improved uptime, reduced costs, and elevated user
            experience while mentoring a team of nearly 40 engineers as the
            platform scaled to over 10,000 daily active users.
          </p>
        </div>
      </div>
    </>
  )
}

export default ExperienceSection
