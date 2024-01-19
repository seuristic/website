import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/ui/icons";
import Link from "next/link";

export default function Card() {
  return (
    <Link
      href={"/projects/test"}
      className="group flex w-full flex-col gap-1 rounded-xl border p-1 transition-colors border-base-800"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/CSS-Box-Model.png"
          alt="project"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="rounded-lg bg-base-900 px-3 py-2 text-sm transition-colors group-hover:bg-base-800">
        <h3 className="inline-flex items-center gap-1 text-sm text-base-300 transition-colors group-hover:text-base-100">
          Some Project Title{" "}
          <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={16} weight="bold" />
          </span>
        </h3>
        <p className="line-clamp-1 text-base-500 transition-colors group-hover:text-base-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          quo sadofasdf skdfjka ierwker skdjfaew akdjf asd.
        </p>
      </div>
    </Link>
  );
}
