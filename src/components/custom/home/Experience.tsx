import Anchor from '@/components/custom/Anchor'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ContentDivider, LineDivider } from '@/components/custom/Dividers'
import { HistoryIcon } from 'lucide-react'
import Nexla from '@/components/icons/Nexla'
import BosscoderAcademy from '@/components/icons/BosscoderAcademy'

type ExperienceEntry = {
  icon: React.ElementType
  company: string
  companyUrl: string
  role: string
  dateRange: string
  previousRoles?: string
  achievements: string[]
}

const experiences: ExperienceEntry[] = [
  {
    icon: Nexla,
    company: 'Nexla',
    companyUrl: 'https://nexla.com',
    role: 'UI Engineer (AI Team)',
    dateRange: 'August 2025 - Present',
    achievements: [
      'Built the complete onboarding UI flow for new users, streamlining the first-time experience and product adoption.',
      'Added tool selection functionality enabling structured file extraction within chat, including file preview, backend-driven schema detection, and a tree-visualized schema viewer for intuitive data mapping.',
      'Developed an interactive component to display extracted result data with editable fields, enhancing flexibility and user control throughout the extraction workflow.',
    ],
  },
  {
    icon: BosscoderAcademy,
    company: 'Bosscoder Academy',
    companyUrl: 'https://www.bosscoderacademy.com',
    role: 'Senior Software Engineer',
    dateRange: '2023 - 2025',
    previousRoles: 'Previously: Software Engineer, Software Engineer Intern',
    achievements: [
      'Led the development of an AI-powered mentor system, a secure HLS-based video streaming platform, and an in-house coding environment powered by Judge0.',
      'Re-architected CI/CD pipelines with Terraform and GCP, automated deployments, and migrated infrastructure to Cloud Run and Vite to enhance performance and efficiency.',
      'Improved uptime, reduced costs, and elevated user experience while mentoring a team of nearly 40 engineers as the platform scaled to over 10,000 daily active users.',
    ],
  },
]

type ExperienceEntryProps = {
  experience: ExperienceEntry
  isLast: boolean
}

const ExperienceEntry = ({ experience, isLast }: ExperienceEntryProps) => {
  const { company, companyUrl, role, dateRange, previousRoles, achievements } =
    experience

  return (
    <>
      <div className="bg-background col-span-1 space-y-2 p-1 lg:col-span-2">
        <h2 className="font-serif text-3xl">
          <Anchor href={companyUrl} className="inline-flex items-center gap-3">
            <experience.icon className="size-8" />
            {company}
          </Anchor>
        </h2>
        <div className="space-y-2">
          <div className="flex flex-col items-baseline gap-2 lg:flex-row">
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
            <div className="hidden h-0 w-full flex-1 border-b border-dashed lg:block" />
            <span className="text-muted-foreground font-mono text-sm">
              {dateRange}
            </span>
          </div>
          <ul className="text-muted-foreground list-disc space-y-1 pl-4 lg:text-justify">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
      {!isLast && <ContentDivider />}
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
