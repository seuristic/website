import Navbar from "@/components/custom/navbar";
import { XPattern } from "@/components/custom/pattern";
import { Button } from "@/components/ui/button";
import { ArrowDownToLineIcon, FileIcon } from "lucide-react";
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
              <p className="text-muted-foreground">hi, myself ↓</p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Mohammad Shahanwaz
              </h2>
              <p className="text-muted-foreground mt-4 text-justify hyphens-auto">
                <span className="text-foreground">software engineer</span> at{" "}
                <Link href="https://www.bosscoderacademy.com" target="_blank">
                  Bosscoder Academy
                </Link>{" "}
                ↗ keen interest in web2, cloud, web3, blockchain, LLMs, AI,
                automation, distributed systems ⎇ tech stack — Next, React,
                Tailwind, shadcn/ui, Postgres, AI • fitness, competitive
                programming, photography  blogs, articles, books — tech,
                self-growth, or whatever hooks me ◦ anime, outings, food
                adventures ⁂ let&apos;s build together
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
        <div className="custom-container grid h-96 grid-rows-3 sm:h-48 sm:grid-cols-3 sm:grid-rows-1">
          <div className="flex flex-col items-center justify-center gap-4 border-t border-l p-4 text-center">
            <strong className="text-4xl font-bold">1000</strong>
            <p className="text-muted-foreground font-mono text-sm">
              lines of code written
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border-t border-l p-4 text-center">
            <strong className="text-4xl font-bold">749</strong>
            <p className="text-muted-foreground font-mono text-sm">bug fixes</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border-x border-t p-4 text-center">
            <strong className="text-4xl font-bold">690</strong>
            <p className="text-muted-foreground font-mono text-sm">
              DSA problems solved
            </p>
          </div>
        </div>
        <XPattern />
      </div>

      {/* Project section */}

      {/* Contact form section */}
    </main>
  );
}
