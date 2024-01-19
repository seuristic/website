import Hero from "./components/Hero";
import Card from "./components/Project/Card";
import Link from "next/link";
import { ArrowRight } from "@/ui/icons";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-16 md:space-y-32 md:py-32">
      <Hero />
      <section className="space-y-8">
        <div className="space-y-2">
          <h2>Projects</h2>
          <p>Some description</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="projects"
            className="group inline-flex items-center gap-1 text-center text-sm font-semibold underline-offset-2 hover:underline"
          >
            View all projects
            <span className="transition-transform group-hover:translate-x-1 ">
              <ArrowRight size={16} weight="bold" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
