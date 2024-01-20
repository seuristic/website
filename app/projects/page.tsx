import React from "react";
import Card from "../components/Project/Card";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-16 md:space-y-20 md:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <h1>Projects</h1>
        <p>
          Welcome to my projects showcase! It&apos;s a mix of web development and
          core projects providing a glimpse into my software development
          journey. Dive in and explore the code!
        </p>
      </div>
      <section className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </section>
    </main>
  );
}
