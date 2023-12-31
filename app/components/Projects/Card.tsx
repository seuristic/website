import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/ui/icons";
import Link from "next/link";

export default function Card() {
  return (
    <Link
      href={"/projects/test"}
      className="group relative flex aspect-square w-full overflow-hidden rounded-xl border-2 border-default-800 p-4 hover:border-accent-700 md:p-6"
    >
      <div className="relative z-10 space-y-1 self-end">
        <h3 className="inline-flex items-center gap-1">
          Some Project Title{" "}
          <ArrowUpRight
            size={20}
            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            weight="bold"
          />
        </h3>
        <p className="line-clamp-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          quo sadofasdf skdfjka ierwker skdjfaew akdjf asd.
        </p>
      </div>
      <div className="absolute left-0 top-0 h-full w-full after:absolute after:inset-0 after:bg-gradient-to-t after:from-default-950/95 after:from-20%">
        <Image
          src="https://qph.cf2.quoracdn.net/main-qimg-0d6e2519f97dc650cc538db7afe1f7b1-lq"
          alt="project"
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
    </Link>
  );
}
