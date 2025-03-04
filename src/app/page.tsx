import Navbar from "@/components/custom/navbar";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <div className="bg-background isolate">
        {/* section #1 */}
        <div className="relative z-3 flex h-[50vh] w-full border-b px-2 py-2 sm:py-8">
          <div className="mx-auto h-full w-full max-w-3xl px-4 py-2">
            <div className="flex h-full w-full items-center justify-center rounded-md bg-zinc-800">
              Section #1
            </div>
          </div>
          <div className="bg-border absolute inset-y-0 left-2 h-full w-px lg:left-10">
            <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 rounded border bg-zinc-950" />
          </div>
          <div className="bg-border absolute inset-y-0 right-2 h-full w-px lg:right-10">
            <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 rounded border bg-zinc-950" />
          </div>
        </div>

        {/* section #2 */}
        <div className="relative z-2 flex h-[50vh] w-full px-2 py-2 sm:py-8">
          <div className="mx-auto h-full w-full max-w-3xl px-4 py-2">
            <div className="flex h-full w-full items-center justify-center rounded-md bg-zinc-800">
              Section #2
            </div>
          </div>
          <div className="bg-border absolute inset-y-0 left-2 h-full w-px lg:left-10">
            <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 rounded border bg-zinc-950" />
          </div>
          <div className="bg-border absolute inset-y-0 right-2 h-full w-px lg:right-10">
            <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 rounded border bg-zinc-950" />
          </div>
        </div>
      </div>
    </main>
  );
}
