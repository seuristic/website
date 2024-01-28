import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import { TProject } from "@/utils/types";
import { ArrowUpRight, GithubLogo, LinkSimple } from "@/ui/icons";

type TProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: TProps): Metadata {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug) as TProject;
  const title = `${project.title} - M. Shahanwaz`;
  const description = project.description;
  return { title, description };
}

export default function Page({ params }: TProps) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug) as TProject;

  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 px-4 py-16 md:py-20">
      <div className="mx-auto space-y-8">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {project.github && (
          <div className="flex flex-wrap gap-4">
            <Link
              className="group inline-flex h-12 items-center gap-1.5 rounded-full bg-base-900 py-1.5 pl-1.5 pr-3 hover:bg-base-800 hover:text-base-100"
              href={project.github}
              target="_blank"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-base-950">
                <GithubLogo size={20} />
              </span>
              GitHub
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight size={16} />
              </span>
            </Link>
            {project.link && (
              <Link
                className="group inline-flex h-12 items-center gap-1.5 rounded-full bg-base-900 py-1.5 pl-1.5 pr-3 hover:bg-base-800 hover:text-base-100"
                href={project.link}
                target="_blank"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-base-950">
                  <LinkSimple size={20} />
                </span>
                Link
                <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            )}
            {project.other_links &&
              project.other_links.map((link, i) => (
                <Link
                  key={i}
                  className="group inline-flex h-12 items-center gap-1.5 rounded-full bg-base-900 py-1.5 pl-1.5 pr-3 hover:bg-base-800 hover:text-base-100"
                  href={link.url}
                  target="_blank"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-base-950">
                    {link.icon ? (
                      <link.icon size={20} />
                    ) : (
                      <LinkSimple size={20} />
                    )}
                  </span>
                  {link.name}
                  <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              ))}
          </div>
        )}
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
      <div className="flex flex-wrap gap-4">
        {project.tags.map((tag: string) => (
          <span key={tag} className="rounded-full bg-base-800 px-4 py-2">
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-4">
        <h2 className="">Features</h2>
        <ul className="list-disc space-y-2 pl-8">
          {project.features.map((feature: string) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      {project.screenshots && (
        <div className="space-y-4">
          <h2>Screenshots</h2>
          <div className="space-y-4">
            {project.screenshots.map((screenshot, i) => (
              <div
                key={i}
                className="relative w-full overflow-hidden rounded-lg border border-base-700 bg-base-800 p-8"
              >
                <Image
                  src={screenshot}
                  alt="project screenshot"
                  sizes="100vw"
                  className="rounded-md object-cover shadow-md"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;
