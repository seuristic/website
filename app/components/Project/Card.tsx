import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "@/ui/icons";
import Link from "next/link";

type TCard = {
  project: TProject;
};

type TProject = {
  title: string;
  description: string;
  image: StaticImageData;
  slug: string;
  experiment?: boolean;
};

export default function Card({ project }: TCard) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex w-full flex-col gap-1 rounded-xl border border-base-900 hover:border-base-800 p-1 transition-colors"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt="project"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="rounded-lg bg-base-900 px-3 py-2 text-sm transition-colors group-hover:bg-base-800">
        <h3 className="inline-flex items-center gap-1 text-sm text-base-300 transition-colors group-hover:text-base-100">
          {project.title}{" "}
          <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={16} weight="bold" />
          </span>
        </h3>
        <p className="line-clamp-1 text-base-500 transition-colors group-hover:text-base-400">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
