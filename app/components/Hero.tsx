import Button from "@/ui/components/Button";
import Image from "next/image";
import { DownloadSimple } from "@/ui/icons";
import profile_image from "@/public/assets/profile-image.jpeg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
      <div className="flex flex-col gap-8">
        <h1 className="inline-flex flex-col text-5xl font-bold">
          <span>M.</span>
          <span>Shahanwaz</span>
        </h1>
        <p className="max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          modi, unde quidem numquam nemo reprehenderit alias eius repellendus
          odio quas temporibus.
        </p>
        <Link
          href="https://drive.google.com/uc?export=download&id=1WzJkfRpXK2Ccc3yb9GWpQNXSiKifsDfO"
          target="_blank"
          className="w-fit"
        >
          <Button className="inline-flex items-center gap-2">
            Resume <DownloadSimple size={20} weight="bold" />
          </Button>
        </Link>
      </div>
      <div className="relative aspect-square w-full shrink-0 bg-green-300 md:h-[288px] md:w-[unset]">
        <Image
          src={profile_image}
          alt="M. Shahanwaz"
          className="object-contain"
          fill
          placeholder="blur"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
