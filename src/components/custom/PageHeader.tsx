import { cn } from '@/lib/utils'

type PageHeaderProps = {
  title: string
  description: string
  className?: string
}

const PageHeader = ({ title, description, className }: PageHeaderProps) => {
  return (
    <div
      className={cn('bg-background col-span-full p-8 text-center', className)}
    >
      <h1 className="text-foreground font-serif text-4xl font-bold md:text-5xl">
        {title}
      </h1>
      <p className="text-muted-foreground mt-4 text-base md:text-lg">
        {description}
      </p>
    </div>
  )
}

export default PageHeader
