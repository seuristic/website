import { Metadata } from "next";
import React from "react";
import projects from "@/data/projects";
import { TProject } from "@/app/components/Project/Card";
import Image from "next/image";
import { ArrowUpRight, GithubLogo, LinkSimple } from "@/ui/icons";
import Link from "next/link";

type TProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: TProps): Metadata {
  const project = projects.find((p: TProject) => p.slug === params.slug);
  const title = project ? `${project.title} - M. Shahanwaz` : ":(";
  const description = project ? project.description : "Broken link";

  return { title, description };
}

export default function Page({ params }: TProps) {
  const project = projects.find((p: TProject) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="mx-auto w-full max-w-3xl space-y-8 px-4 py-16 md:py-20">
        <p>Undefined</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 px-4 py-16 md:py-20">
      <div className="mx-auto space-y-8">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="flex gap-4">
          <Link
            href={project.github}
            className="group inline-flex h-12 items-center gap-1.5 rounded-full bg-base-900 py-1.5 pl-1.5 pr-3 hover:bg-base-800 hover:text-base-100"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-base-950">
              <GithubLogo size={20} />
            </span>
            GitHub
            <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={16} />
            </span>
          </Link>
          <Link
            href={project.github}
            className="group inline-flex h-12 items-center gap-1.5 rounded-full bg-base-900 py-1.5 pl-1.5 pr-3 hover:bg-base-800 hover:text-base-100"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-base-950">
              <LinkSimple size={20} />
            </span>
            Link
            <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </div>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt="project"
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="flex gap-4">
        {project.tags.map((tag: string) => (
          <span key={tag} className="rounded-full bg-base-800 px-4 py-2">
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-4">
        <h2 className="">Features</h2>
        <ul className="list-disc space-y-4 pl-8">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            Deleniti, maxime voluptas?
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            laboriosam totam eaque atque suscipit impedit, ut nesciunt corrupti?
          </li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2>Screenshots</h2>
        <div className="space-y-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border-4 border-base-800">
            <Image
              src="https://animeindia.in/wp-content/uploads/2023/10/71cf9-16368203172095-1920-1024x576.jpg"
              alt="project"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border-4 border-base-800">
            <Image
              src="https://animeindia.in/wp-content/uploads/2023/10/71cf9-16368203172095-1920-1024x576.jpg"
              alt="project"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
