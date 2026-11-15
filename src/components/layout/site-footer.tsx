import { useEffect, useState } from 'react'
import { GitCommitHorizontal, Slash } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { siteConfig } from '@/config/site'

const { locale, timeZone } = siteConfig.clock

const clock = new Intl.DateTimeFormat(locale, {
  timeZone,
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
  timeZoneName: 'short',
})

const deployedAt = new Intl.DateTimeFormat(locale, {
  timeZone,
  dateStyle: 'medium',
  timeStyle: 'short',
  hourCycle: 'h23',
}).format(new Date(import.meta.env.BUILD_TIME))

function useNow() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

export function SiteFooter() {
  const now = useNow()
  const parts = clock.formatToParts(now)
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value

  return (
    /* Sits after the page content; the flex column in RootLayout keeps it at the
       bottom of the viewport when the content is short. */
    <footer className="border-t border-muted-foreground/10">
      <Container className="flex h-16 items-center justify-between border-muted-foreground/10 font-mono text-sm text-muted-foreground/70 md:border-x">
        <p className="flex items-center gap-2">
          <time dateTime={now.toISOString()}>
            {part('hour')}
            {/* Hidden on odd seconds; visibility keeps its width so nothing shifts. */}
            <span
              className={
                now.getSeconds() % 2 ? 'invisible motion-reduce:visible' : ''
              }
            >
              :
            </span>
            {part('minute')} {part('timeZoneName')}
          </time>
        </p>

        <a
          href={siteConfig.repo}
          target="_blank"
          rel="noreferrer"
          title={`Deployed ${deployedAt}`}
          className="inline-flex items-center gap-1.5 underline-offset-4 hover:text-foreground hover:underline"
        >
          <GitCommitHorizontal aria-hidden className="size-4" />v
          {import.meta.env.APP_VERSION}
        </a>
      </Container>
    </footer>
  )
}
