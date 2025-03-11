import Navbar from "@/components/custom/navbar";
import { XPattern } from "@/components/custom/pattern";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  ArrowDownToLineIcon,
  FileIcon,
  CogIcon,
  GithubIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      {/* Hero section */}
      <div className="relative isolate w-full border-b px-2">
        <div className="custom-container flex min-h-[80svh] py-4 sm:min-h-[650px]">
          <div className="flex w-full flex-1 flex-col-reverse items-center justify-center gap-8 rounded-md sm:flex-row">
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground inline-flex items-center gap-1">
                hi, myself <ArrowDownIcon className="size-4" />
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Mohammad Shahanwaz
              </h2>
              <p className="text-muted-foreground mt-4 text-justify hyphens-auto">
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
              <div className="flex gap-4">
                <Link
                  href="https://resume.shahanwaz.dev"
                  target="_blank"
                  className="mt-4 w-fit"
                >
                  <Button>
                    RESUME <FileIcon />
                  </Button>
                </Link>
                <Link
                  href="https://resume.shahanwaz.dev/Shahanwaz_Resume.pdf"
                  target="_blank"
                  className="mt-4 w-fit"
                >
                  <Button variant="secondary">
                    DOWNLOAD <ArrowDownToLineIcon />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] w-[200px] shrink-0">
              <div className="absolute top-10 right-10 z-1 h-[100px] w-[100px] bg-zinc-500"></div>
              <div className="shade-lines absolute bottom-10 left-10 h-[100px] w-[100px]"></div>
            </div>
          </div>
        </div>
        <div className="custom-container grid h-96 grid-rows-3 sm:h-36 sm:grid-cols-3 sm:grid-rows-1">
          <div className="flex flex-col items-center justify-center gap-3 border-t border-l p-4 text-center">
            <strong className="text-4xl font-bold">1000</strong>
            <p className="text-muted-foreground font-mono text-sm">
              lines of code written
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 border-t border-l p-4 text-center">
            <strong className="text-4xl font-bold">749</strong>
            <p className="text-muted-foreground font-mono text-sm">bug fixes</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 border-x border-t p-4 text-center">
            <strong className="text-4xl font-bold">690</strong>
            <p className="text-muted-foreground font-mono text-sm">
              DSA problems solved
            </p>
          </div>
        </div>
        <XPattern />
      </div>

      {/* Project section */}
      <div className="relative isolate w-full border-b px-2">
        <div className="custom-container flex py-32">
          <div className="w-full space-y-4">
            <p className="text-muted-foreground inline-flex items-center gap-1">
              projects <CogIcon className="size-4" />
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Things I&apos;ve built in the past
            </h2>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="mt-12 flex flex-col gap-2">
                  <div className="w-fit rounded-full border p-1">
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      alt="profile"
                      width={64}
                      height={64}
                    />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    Project Name {i + 1}
                  </h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione rem libero eveniet totam asperiores similique
                    distinctio sint sunt tempora corrupti saepe nemo incidunt,
                    autem, maiores, enim fugiat temporibus voluptatum
                    voluptatibus.
                  </p>
                  <div className="mt-2 flex items-center gap-8">
                    <Link
                      href={"/"}
                      className="inline-flex items-center gap-2 font-mono text-sm"
                    >
                      <GithubIcon className="size-4" /> GITHUB
                    </Link>
                    <Link
                      href={"/"}
                      className="inline-flex items-center gap-2 font-mono text-sm"
                    >
                      <GithubIcon className="size-4" /> GITHUB
                    </Link>
                  </div>
                  <div className="relative mt-2 aspect-video w-full">
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
        <XPattern />
      </div>

      {/* Contact form section */}
    </main>
  );
}
