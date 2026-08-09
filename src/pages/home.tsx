import { SocialLinks } from "@/components/social-links"
import { siteConfig } from "@/config/site"

export function HomePage() {
  return (
    /* Centred in the main area, then lifted by half of pb-optical —
       geometric centre reads as "slightly low" to the eye. */
    <section className="flex flex-1 flex-col justify-center gap-section pb-optical">
      {/* Intro and bio are one group; the section gap separates them from the links. */}
      <div className="flex flex-col gap-block">
        <header className="flex flex-col gap-stack">
          <img
            src={siteConfig.avatar}
            alt={siteConfig.name}
            width={112}
            height={112}
            className="mb-stack size-28 rounded-full border object-cover"
          />
          <h1 className="font-display text-5xl leading-tight sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="text-muted-foreground">
            {siteConfig.role} at{" "}
            <a
              href={siteConfig.company.url}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              {siteConfig.company.name}
            </a>
          </p>
        </header>

        <p className="text-muted-foreground leading-relaxed">
          {siteConfig.about}
        </p>
      </div>

      <SocialLinks />
    </section>
  )
}
