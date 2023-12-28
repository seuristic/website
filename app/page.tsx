import Navbar from "@/app/components/Navbar";
import Button from "@/ui/components/Button";
import Image from "next/image";
import { DownloadSimple } from "@/ui/icons";
import luffy from "@/assets/luffy.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-default-950 text-default-50">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-8">
            <h1 className="inline-flex flex-col text-5xl font-bold">
              <span>M.</span>
              <span>Shahanwaz</span>
            </h1>
            <p className="max-w-[400px] text-default-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident modi, unde quidem numquam nemo reprehenderit alias eius
              repellendus odio quas temporibus.
            </p>
            <Button className="inline-flex items-center gap-2">
              Resume <DownloadSimple size={20} />
            </Button>
          </div>
          <div className="relative aspect-square w-full shrink-0 bg-green-300 md:h-[288px] md:w-[unset]">
            <Image
              src={luffy}
              alt="M. Shahanwaz"
              className="object-contain"
              fill
              placeholder="blur"
              quality={100}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
