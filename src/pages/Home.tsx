const Home = () => {
  return (
    <main className="mx-auto grid min-h-screen max-w-7xl grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:--spacing(6)] sm:grid-cols-[var(--gutter-width)_minmax(0,var(--container-7xl))_var(--gutter-width)] lg:[--gutter-width:--spacing(10)]">
      <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:block dark:[--pattern-fg:var(--color-white)]/10"></div>
      <div className="">
        <div className="grid grid-rows-[1fr] md:grid-cols-[1fr_--spacing(6)_1fr_--spacing(6)_1fr] lg:grid-cols-[1fr_--spacing(12)_1fr_--spacing(12)_1fr]">
          <div className="col-start-2 row-span-full row-start-1 grid border-x border-black/5 max-md:hidden dark:border-white/10" />
          <div className="relative col-span-full col-start-1 row-start-1 mt-12 mb-16 grid min-h-screen before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 md:my-36 md:grid-cols-3 md:gap-x-6 lg:gap-x-12 dark:before:bg-white/10 dark:after:bg-white/10">
            <div className="col-span-full col-start-2 row-span-full row-start-1">
              <h1 className="font-display text-4xl">
                Welcome to Mohammad Shahanwaz's Website
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:col-start-3 sm:block dark:[--pattern-fg:var(--color-white)]/10"></div>
    </main>
  )
}

export default Home
