import img1 from '../assets/images/img1.jpg'

const Home = () => {
  return (
    <main className="mx-auto grid min-h-screen max-w-7xl grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:--spacing(6)] sm:grid-cols-[var(--gutter-width)_minmax(0,var(--container-7xl))_var(--gutter-width)] lg:[--gutter-width:--spacing(10)]">
      {/* Left Pattern */}
      <div className="row-span-full row-start-1 hidden border-x bg-[image:repeating-linear-gradient(315deg,_var(--border)_0,_var(--border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed sm:block" />

      {/* Main Content */}
      <div className="">
        <div className="grid md:grid-cols-[1fr_--spacing(6)_1fr_--spacing(6)_1fr] lg:grid-cols-[1fr_--spacing(10)_1fr_--spacing(10)_1fr]">
          {/* Left Border */}
          <div className="col-start-2 row-span-full row-start-1 border-x max-md:hidden" />

          {/* Main Container */}
          <div className="after:bg-border before:bg-border relative col-span-full col-start-1 row-start-1 my-16 grid before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] md:my-36 md:grid-cols-3 md:gap-x-6 lg:gap-x-10">
            {/* Row 1 */}
            <div className="after:bg-border relative col-span-1 p-1 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]">
              <img
                src={img1}
                alt="Profile Picture"
                className="aspect-square w-full rounded-md border object-cover"
              />
            </div>
            <div className="col-span-2">
              <h1 className="font-serif text-4xl">Intro</h1>
            </div>

            {/* --- Divider --- */}
            <div className="after:bg-border relative col-span-3 h-20 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]" />

            {/* Row 2 */}
            <div className="bg-accent after:bg-border relative col-span-1 row-span-2 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]">
              <h1 className="font-serif text-4xl">Section 1</h1>
            </div>
            <div className="col-span-2 border-b">
              <h1 className="font-serif text-4xl">Content 1.1</h1>
            </div>
            {/* <div className="col-span-full col-start-2 h-5 border-b" /> */}
            <div className="col-span-2 col-start-2">
              <h1 className="font-serif text-4xl">Content 1.2</h1>
            </div>

            {/* --- Divider --- */}
            <div className="after:bg-border relative col-span-3 h-20 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]" />

            {/* Row 3 */}
            <div className="after:bg-border relative col-span-1 row-span-2 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]">
              <h1 className="font-serif text-4xl">Section 2</h1>
            </div>
            <div className="bg-accent col-span-2 border-b">
              <h1 className="font-serif text-4xl">Content 2.1</h1>
            </div>
            <div className="col-span-2">
              <h1 className="font-serif text-4xl">Content 2.2</h1>
            </div>

            {/* --- Divider --- */}
            <div className="after:bg-border relative col-span-3 h-20 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]" />

            {/* Row 4 */}
            <div className="after:bg-border relative col-span-1 row-span-2 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]">
              <h1 className="font-serif text-4xl">Section 3</h1>
            </div>
            <div className="col-span-2 border-b">
              <h1 className="font-serif text-4xl">Content 3.1</h1>
            </div>
            <div className="col-span-2">
              <h1 className="font-serif text-4xl">Content 3.2</h1>
            </div>

            {/* --- Divider --- */}
            <div className="after:bg-border relative col-span-3 h-20 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]" />

            {/* Row 5 */}
            <div className="after:bg-border relative col-span-full grid grid-cols-3 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] md:gap-6 lg:gap-10">
              <div className="col-span-1 p-1">
                <img
                  src={img1}
                  alt="Profile Picture"
                  className="aspect-square w-full rounded-md border object-cover"
                />
              </div>
              <div className="col-span-1 border-r p-1">
                <img
                  src={img1}
                  alt="Profile Picture"
                  className="aspect-square w-full rounded-md border object-cover"
                />
              </div>
              <div className="col-span-1 border-l p-1">
                <img
                  src={img1}
                  alt="Profile Picture"
                  className="aspect-square w-full rounded-md border object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pattern */}
      <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-border)] sm:col-start-3 sm:block" />
    </main>
  )
}

export default Home
