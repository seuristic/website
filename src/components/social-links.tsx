import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function SocialLinks({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul className={cn("flex items-center gap-stack", className)} {...props}>
      {siteConfig.socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <Button variant="outline" size="icon" asChild>
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
