import Navbar from "@/components/custom/navbar";
import MarginXPattern from "@/components/custom/pattern";
import { Button } from "@/components/ui/button";
import { ArrowDownToLineIcon, FileIcon, RocketIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />

      <div className="bg-background isolate">
        <div className="relative w-full border-b px-2">
          <div className="mx-auto flex min-h-[80svh] w-full max-w-3xl px-4 py-4 sm:min-h-[650px]">
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
                  ↗ • keen interest in{" "}
                  <span className="line-through">web2</span>, cloud computing,
                  web3, blockchain, LLMs, AI, automation, distributed systems •
                  tech stack ⎇ Next, React, Tailwind, shadcn/ui, Postgres, ♡AI •
                  fitness, competitive programming, and photography • blogs,
                  articles, books — tech, self-growth, or whatever hooks me •
                  free time = anime, outings, food adventures • let&apos;s build
                  together <RocketIcon className="inline size-3.5" />
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://resume.shahanwaz.dev"
                    target="_blank"
                    className="mt-4 w-fit"
                  >
                    <Button>
                      RÉSUMÉ <FileIcon />
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
                <div className="pattern-lines absolute bottom-10 left-10 h-[100px] w-[100px]"></div>
              </div>
            </div>
          </div>
          <MarginXPattern pattern />
        </div>
      </div>
    </main>
  );
}
