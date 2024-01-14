import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/ui/icons";
import Link from "next/link";

export default function Card() {
  return (
    <Link
      href={"/projects/test"}
      className="group flex w-full flex-col gap-1 rounded-xl border border-default-900 p-1 transition-colors hover:border-default-800"
    >
      <div className="relative h-[14rem] w-full overflow-hidden rounded-lg sm:h-[20rem] md:h-[14rem]">
        <Image
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/CSS-Box-Model.png"
          alt="project"
          fill
          className="object-cover opacity-70 transition-opacity group-hover:opacity-100"
        />
      </div>
      <div className="rounded-lg bg-default-900 px-3 py-2 text-sm transition-colors group-hover:bg-default-800">
        <h3 className="flex items-center gap-2 text-sm text-default-300 transition-colors group-hover:text-default-100">
          Some Project Title <ArrowUpRight size={16} weight="bold" />
        </h3>
        <p className="line-clamp-1 text-default-500 transition-colors group-hover:text-default-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          quo sadofasdf skdfjka ierwker skdjfaew akdjf asd.
        </p>
      </div>
    </Link>
  );
}
