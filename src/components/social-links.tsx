import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function SocialLinks({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      className={cn(
        'flex w-fit divide-x divide-grid border border-grid',
        className,
      )}
      {...props}
    >
      {siteConfig.socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-none"
            asChild
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon />
            </a>
          </Button>
        </li>
      ))}
    </ul>
  )
}
