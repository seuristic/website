import Navbar from "@/app/components/Navbar";
import Button from "@/ui/components/Button";
import Image from "next/image";
import { DownloadSimple } from "@/ui/icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-default-950 text-default-50">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-32">
        <section className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="flex flex-col gap-8">
            <h1 className="inline-flex flex-col text-5xl font-bold">
              <span>M.</span>
              <span>Shahanwaz</span>
            </h1>
            <p className="text-default-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident modi, unde quidem numquam nemo reprehenderit alias eius
              repellendus odio quas temporibus.
            </p>
            <Button className="inline-flex items-center gap-2">
              Resume <DownloadSimple size={20} />
            </Button>
          </div>
          <div className="relative">
            <Image
              src="https://preview.redd.it/honestly-wouldnt-gear-5-luffy-be-close-to-impossible-to-v0-695vdh5dliib1.jpg?width=640&crop=smart&auto=webp&s=9a1bf2aaabdf601efdd886fe71efb042315d7fae"
              alt="M. Shahanwaz"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </section>
      </main>
    </div>
  );
}
