import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import projects from "@/data/projects";
import { TProject } from "@/utils/types";
import { GithubLogo, LinkSimple } from "@/ui/icons";
import ProjectLink from "@/app/components/Project/Link";

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
            <ProjectLink icon={GithubLogo} name="GitHub" url={project.github} />
            {project.link && (
              <ProjectLink icon={LinkSimple} name="Link" url={project.link} />
            )}
            {project.other_links &&
              project.other_links.map((link, i) => (
                <ProjectLink
                  key={i}
                  icon={link.icon ?? LinkSimple}
                  name={link.name}
                  url={link.url}
                />
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
          <span key={tag} className="rounded-full bg-base-900 px-4 py-2">
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
                className="relative w-full overflow-hidden rounded-lg border border-base-800 bg-base-900 p-8"
              >
                <Image
                  src={screenshot}
                  alt="project screenshot"
                  sizes="100vw"
                  className="object-cover shadow-md"
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
