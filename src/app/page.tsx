import Navbar from "@/components/custom/navbar";
import DiamondPattern from "@/components/custom/pattern";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />

      <div className="bg-background isolate">
        <div className="relative z-3 w-full border-b px-2">
          <div className="mx-auto flex min-h-[80svh] w-full max-w-3xl px-4 py-4 sm:min-h-[650px]">
            <div className="flex w-full flex-1 flex-col-reverse items-center justify-center gap-16 rounded-md sm:flex-row sm:gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground">hi, myself ↓</p>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight">
                  Mohammad Shahanwaz
                </h2>
                <p className="text-muted-foreground text-justify">
                  <span className="text-foreground">software engineer</span> at{" "}
                  <Link href="https://www.bosscoderacademy.com" target="_blank">
                    Bosscoder Academy
                  </Link>{" "}
                  ↗ • focused on building scalable, high-performance, and
                  complex solutions • keen interest in{" "}
                  <span className="line-through">web2</span>, cloud computing,
                  web3, blockchain, LLMs, AI, automation, distributed systems •
                  tech stack ⎇ includes Next, React, Tailwind, shadcn/ui,
                  Postgres, ♡AI • into fitness, competitive programming,
                  photography, and reading • read blogs, articles, and books
                  about tech, self-improvement, or anything that sparks my
                  curiosity • free time? ‣ anime, outings, explore cuisines •
                  let&apos;s build together ⁂
                </p>
              </div>
              <div className="grid h-[200px] w-[200px] shrink-0 grid-cols-2 bg-zinc-500">
                <div className="h-[100px] w-[100px] rounded-l-xl rounded-tr-xl bg-zinc-500"></div>
                <div className="bg-background h-[100px] w-[100px] rounded-bl-xl"></div>
                <div className="bg-background h-[100px] w-[100px] rounded-tr-xl"></div>
                <div className="h-[100px] w-[100px] rounded-tl-xl rounded-r-xl bg-zinc-500"></div>
              </div>
            </div>
          </div>
          <DiamondPattern />
        </div>
      </div>
    </main>
  );
}
