import ContactForm from "@/components/custom/contact-form";
import { HomeNavbar } from "@/components/custom/navbar";
import { XPattern } from "@/components/custom/pattern";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  ArrowDownToLineIcon,
  FileIcon,
  CogIcon,
  SquareArrowOutUpRightIcon,
  SatelliteDishIcon,
  CopyrightIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/assets/icons/brands";

export default function Home() {
  return (
    <main>
      <HomeNavbar />

      <div className="relative isolate w-full border-b px-2">
        <div className="custom-container flex py-4 sm:min-h-[650px]">
          <div className="flex w-full flex-1 flex-col-reverse items-center justify-center gap-8 rounded-md sm:flex-row">
            <div className="space-y-6 sm:space-y-10">
              <div className="space-y-4">
                <p className="text-muted-foreground inline-flex items-center gap-1">
                  hi, myself <ArrowDownIcon className="size-4" />
                </p>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Mohammad Shahanwaz
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-muted-foreground text-justify hyphens-auto">
                  <span className="text-foreground">software engineer</span> at{" "}
                  <Link href="https://www.bosscoderacademy.com" target="_blank">
                    Bosscoder Academy
                  </Link>{" "}
                  ↗ keen interest in web2, cloud, web3, blockchain, LLMs, AI,
                  automation, distributed systems, SaaS ⎇ tech stack — Next,
                  React, Tailwind, shadcn/ui, Postgres, AI ‣ into fitness,
                  competitive programming, photography ‣ read blogs, articles,
                  books about tech, self-growth, fiction ‣ anime, outings, food
                  adventures ‣ let&apos;s build together
                </p>
                <div className="inline-flex gap-4">
                  <Button asChild>
                    <Link href="https://resume.shahanwaz.dev" target="_blank">
                      RESUME <FileIcon />
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link
                      href="https://resume.shahanwaz.dev/Shahanwaz_Resume.pdf"
                      target="_blank"
                    >
                      DOWNLOAD <ArrowDownToLineIcon />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-[200px] w-[200px] shrink-0">
              <div className="absolute top-10 right-10 z-1 h-[100px] w-[100px]">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="profile picture"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="shade-lines absolute bottom-10 left-10 h-[100px] w-[100px]" />
            </div>
          </div>
        </div>
        <div className="custom-container mt-20 sm:mt-0">
          <div className="grid h-96 grid-rows-3 divide-y border border-b-0 sm:h-36 sm:grid-cols-3 sm:grid-rows-1 sm:divide-x sm:divide-y-0">
            <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
              <strong className="text-4xl font-bold">1000</strong>
              <p className="text-muted-foreground font-mono text-sm">
                lines of code
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
              <strong className="text-4xl font-bold">749</strong>
              <p className="text-muted-foreground font-mono text-sm">
                bug fixes
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
              <strong className="text-4xl font-bold">690</strong>
              <p className="text-muted-foreground font-mono text-sm">
                dsa problems
              </p>
            </div>
          </div>
        </div>
        <XPattern />
      </div>

      <div id="projects" className="relative isolate w-full border-b px-2">
        <div className="custom-container py-20 sm:py-32">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-muted-foreground inline-flex items-center gap-1">
                projects <CogIcon className="size-4" />
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Things I&apos;ve built in the past
              </h2>
            </div>
            <div className="space-y-20 sm:space-y-32">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="space-y-6">
                    <div className="w-fit rounded-[20px] border p-1">
                      <div className="relative h-16 w-16">
                        <Image
                          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                          alt="profile"
                          className="overflow-hidden rounded-2xl object-cover"
                          fill
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Project Name {i + 1}
                    </h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione rem libero eveniet totam asperiores similique
                      distinctio sint sunt tempora corrupti saepe nemo incidunt,
                      autem, maiores, enim fugiat temporibus voluptatum
                      voluptatibus.
                    </p>
                    <div className="inline-flex gap-4">
                      <Button variant="secondary" asChild>
                        <Link href={"/"}>
                          LIVE <SquareArrowOutUpRightIcon />
                        </Link>
                      </Button>
                      <Button variant="secondary" asChild>
                        <Link href={"/"}>
                          REPOSITORY <GithubIcon />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative aspect-video w-full">
                      <Image
                        src="https://wallpapershome.com/images/pages/pic_h/6469.jpg"
                        alt=""
                        className="rounded-md"
                        fill
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <XPattern />
      </div>

      <div id="connect" className="relative isolate w-full border-b px-2">
        <div className="custom-container py-20 sm:py-32">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-muted-foreground inline-flex items-center gap-1">
                let&apos;s connect <SatelliteDishIcon className="size-4" />
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Contact me
              </h2>
            </div>
            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>
        <XPattern />
      </div>

      <div className="relative isolate px-2">
        <div className="custom-container flex items-center justify-center gap-2 py-4 font-mono text-sm text-zinc-400 dark:text-zinc-700">
          <CopyrightIcon className="size-4" />
          {new Date().getFullYear()} Mohammad Shahanwaz
        </div>
      </div>
    </main>
  );
}
