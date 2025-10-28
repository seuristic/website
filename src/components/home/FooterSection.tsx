import { Copyright } from 'lucide-react'

const FooterSection = () => {
  return (
    <>
      <div className="col-span-1 grid h-20 place-items-center p-1">
        <div className="text-tertiary-foreground flex items-center gap-2 font-mono text-sm">
          <Copyright className="size-4" />
          {new Date().getFullYear()}
        </div>
      </div>
      <div className="col-span-1 grid place-items-center p-1">
        <div className="text-tertiary-foreground flex items-center gap-2 font-mono text-sm">
          <p>Mohammad Shahanwaz</p>
        </div>
      </div>
      <div className="col-span-1 grid place-items-center p-1">
        <div className="text-tertiary-foreground flex items-center gap-2 font-mono text-sm">
          <p>Vite + Tailwind</p>
        </div>
      </div>
    </>
  )
}

export default FooterSection
