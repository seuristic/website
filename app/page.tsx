import Hero from "./components/Hero";
import Card from "./components/Project/Card";
import Link from "next/link";
import { ArrowRight } from "@/ui/icons";
import projects from "@/data/projects";
import { formatPath } from "@/utils/helper";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-16 md:space-y-32 md:py-32">
      <Hero />
      <section className="space-y-8">
        <div className="space-y-2">
          <h2>Projects</h2>
          <p>
            Explore a mix of web development and core projects, skillfully
            executed and thoughtfully designed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map(
            (project, i) => i < 4 && <Card key={i} {...{ project }} />,
          )}
        </div>
        <div className="flex justify-center">
          <Link
            href={formatPath("projects")}
            className="group inline-flex items-center gap-1 text-center text-sm font-semibold"
          >
            View all projects
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
