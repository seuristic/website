import { CopyrightIcon, XIcon } from 'lucide-react'
import Anchor from './Anchor'

const Footer = () => {
  return (
    <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-full col-start-1 row-span-1 row-start-5 flex min-h-20 flex-col flex-wrap justify-center pb-2 text-center sm:flex-row sm:justify-between lg:grid lg:grid-cols-3 lg:pb-0">
      <div className="order-2 col-span-1 grid flex-1 place-items-center p-1 sm:order-1">
        <div className="text-tertiary-foreground flex items-center gap-1 font-mono text-sm">
          <CopyrightIcon className="size-4" />
          {new Date().getFullYear()}
        </div>
      </div>
      <div className="order-1 col-span-1 grid place-items-center p-1 sm:order-2">
        <div className="text-tertiary-foreground flex items-center gap-2 font-mono text-sm">
          <p>Mohammad Shahanwaz</p>
        </div>
      </div>
      <div className="order-3 col-span-1 grid flex-1 place-items-center p-1">
        <div className="text-tertiary-foreground flex items-center gap-2 font-mono text-sm">
          <Anchor
            href="https://vite.dev/"
            className="text-fuchsia-500 underline-offset-4 hover:underline dark:text-fuchsia-400"
          >
            Vite
          </Anchor>
          <XIcon className="size-3" />
          <Anchor
            href="https://tailwindcss.com/"
            className="text-sky-500 underline-offset-4 hover:underline dark:text-sky-400"
          >
            Tailwind
          </Anchor>
        </div>
      </div>
    </div>
  )
}

export default Footer
