"use client";

import Button from "@/ui/components/Button";
import Image from "next/image";
import { DownloadSimple } from "@/ui/icons";
import Link from "next/link";
import Atropos from "atropos/react";
import { profile_image } from "@/ui/images";

function HeroImage() {
  return (
    <div className="relative aspect-square w-full shrink-0 md:h-[250px]">
      <Image
        src={profile_image}
        alt="M. Shahanwaz"
        className="rounded-md object-contain"
        fill
        sizes="100vw"
        placeholder="blur"
        quality={100}
        priority
      />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
      <div className="flex flex-col gap-8">
        <h1 className="inline-flex flex-col">
          <span>M.</span>
          <span>Shahanwaz</span>
        </h1>
        <p className="md:max-w-md">
          I am a passionate and creative full stack web developer, committed to
          transforming imaginative ideas into vibrant digital realities.
          Currently working at{" "}
          <Link
            className="text-base-300 underline-offset-2 hover:underline"
            href="https://www.bosscoderacademy.com"
            target="_blank"
          >
            Bosscoder Academy
          </Link>{" "}
          as a software developer.
        </p>
        <Link
          href="https://resume.shahanwaz.dev"
          target="_blank"
          className="w-fit"
        >
          <Button className="inline-flex items-center gap-2">
            Resume <DownloadSimple size={20} />
          </Button>
        </Link>
      </div>
      <div className="hidden md:block">
        <Atropos>
          <HeroImage />
        </Atropos>
      </div>
      <div className="md:hidden">
        <HeroImage />
      </div>
    </div>
  );
}
