import Anchor from '@/components/custom/Anchor'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  ContentDivider,
  ContentLineDivider,
  LineDivider,
} from '@/components/custom/Dividers'
import { ArrowUpRightIcon, HistoryIcon } from 'lucide-react'

type ExperienceEntry = {
  company: string
  companyUrl: string
  role: string
  dateRange: string
  previousRoles?: string
  description: string
}

const experiences: ExperienceEntry[] = [
  {
    company: 'Nexla',
    companyUrl: 'https://nexla.com',
    role: 'UI Engineer (AI Team)',
    dateRange: 'August 2025 - Present',
    description:
      'At Express, I delivered key user-facing and AI-driven features across the product lifecycle. I built the complete pricing and subscription flow, implementing a seamless Stripe Checkout experience for plan upgrades. I designed and shipped an end-to-end onboarding system using embedding-based personalization with LanceDB to recommend relevant prompts and improve early user engagement. I also developed context-aware AI tooling that reliably selects and invokes backend tools during chat workflows for structured data extraction, along with interactive visualization components that present extracted data in an editable, user-friendly format.',
  },
  {
    company: 'Bosscoder Academy',
    companyUrl: 'https://www.bosscoderacademy.com',
    role: 'Senior Software Engineer',
    dateRange: '2023 - 2025',
    previousRoles: 'Previously: Internship -> Fulltime',
    description:
      'Owned and scaled critical product and infrastructure systems, spanning AI-driven mentorship, secure video streaming, and a custom coding environment. I modernized CI/CD and cloud infrastructure with Terraform, GCP, Cloud Run, and Vite, enabling faster deployments and improved system reliability. During this growth phase, I helped the platform scale to 10,000+ daily active users while improving uptime, lowering operational costs, and mentoring a team of nearly 40 engineers.',
  },
]

type ExperienceEntryProps = {
  experience: ExperienceEntry
  isLast: boolean
}

const ExperienceEntry = ({ experience, isLast }: ExperienceEntryProps) => {
  const { company, companyUrl, role, dateRange, previousRoles, description } =
    experience

  return (
    <>
      <div className="bg-background col-span-1 lg:col-span-2">
        <h2 className="inline-flex w-full items-center p-1 font-serif text-3xl">
          <Anchor
            href={companyUrl}
            className="group inline-flex items-center gap-1"
          >
            {company}
            <ArrowUpRightIcon className="size-7 opacity-0 transition-opacity group-hover:opacity-100" />
          </Anchor>
        </h2>
        <ContentLineDivider />
        <div className="flex flex-wrap items-center justify-between gap-1 p-1 md:flex-row">
          {previousRoles ? (
            <div className="flex items-center gap-2 text-lg">
              <span>{role}</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HistoryIcon className="text-muted-foreground size-4" />
                </TooltipTrigger>
                <TooltipContent>{previousRoles}</TooltipContent>
              </Tooltip>
            </div>
          ) : (
            <span className="text-lg">{role}</span>
          )}
          {/* <div className="hidden h-0 w-full flex-1 border-b border-dashed lg:block" /> */}
          <span className="text-muted-foreground font-mono text-sm">
            {dateRange}
          </span>
        </div>
        <ContentLineDivider />
        <div className="space-y-2 p-1">
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      {!isLast && <ContentDivider className="lg:col-start-2" />}
    </>
  )
}

const Experience = () => {
  return (
    <>
      <div className="bg-background col-span-1 row-span-3 p-1">
        <span className="text-tertiary-foreground top-[calc(5rem+4px)] flex font-mono text-xs sm:sticky lg:justify-end">
          experience
        </span>
      </div>

      <LineDivider className="lg:hidden" />

      {experiences.map((experience, index) => (
        <ExperienceEntry
          key={experience.company}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </>
  )
}

export default Experience
