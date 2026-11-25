import { AtSign } from 'lucide-react'

import { SocialLinks } from '@/components/social-links'
import { siteConfig } from '@/config/site'

export function HomePage() {
  return (
    /* Centred in the main area, then lifted by half of pb-optical —
       geometric centre reads as "slightly low" to the eye. */
    <section className="flex flex-1 flex-col justify-center pb-optical">
      {/* Intro and bio are one group; a hatched band separates them from the links. */}
      <div className="flex flex-col gap-block">
        <header className="flex flex-col gap-stack">
          {/* The photo's square bounding box, drawn like the rest of the grid:
              1px rule, hatched only up to a ruled circle that keeps a clear
              ring of space around the photo. */}
          <div className="mb-stack w-fit border border-grid hatch p-1.5">
            <div className="rounded-full border border-grid bg-background p-1.5">
              <img
                src={siteConfig.avatar}
                alt={siteConfig.name}
                width={112}
                height={112}
                className="size-28 rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="font-display text-4xl font-medium sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="border-l-2 border-border pl-4 font-display text-xl font-medium text-foreground">
            {siteConfig.role}{' '}
            <a
              href={siteConfig.company.url}
              target="_blank"
              rel="noreferrer"
              className="link font-sans"
            >
              {/* Inline (not flex) so the name keeps the line's baseline; the icon is an
                  atomic inline, so the underline skips it. */}
              <AtSign
                aria-hidden
                className="mr-0.5 inline size-[0.85em] align-[-0.1em]"
              />
              {siteConfig.company.name.toLowerCase()}
            </a>
          </p>
        </header>

        <p className="leading-relaxed text-muted-foreground">
          {siteConfig.about}
        </p>
      </div>

      <div aria-hidden className="band my-block" />

      <SocialLinks />
    </section>
  )
}
