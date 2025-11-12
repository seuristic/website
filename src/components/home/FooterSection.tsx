import { Copyright } from 'lucide-react'

const FooterSection = () => {
  return (
    <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-full col-start-1 row-span-1 row-start-5 flex min-h-20 flex-col flex-wrap justify-center gap-y-1 text-center sm:flex-row sm:justify-between lg:grid lg:grid-cols-3">
      <div className="order-3 col-span-1 grid flex-1 place-items-center p-1 sm:order-1">
        <div className="text-tertiary-foreground flex items-center gap-2 font-mono text-sm">
          <Copyright className="size-4" />
          {new Date().getFullYear()}
        </div>
      </div>
      <div className="order-1 col-span-1 grid place-items-center p-1 sm:order-2">
        <div className="text-tertiary-foreground flex items-center gap-2 font-mono text-sm">
          <p>Mohammad Shahanwaz</p>
        </div>
      </div>
      <div className="order-2 col-span-1 grid flex-1 place-items-center p-1 sm:order-3">
        <div className="text-tertiary-foreground flex items-center gap-2 font-mono text-sm">
          <p>Vite + Tailwind</p>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
