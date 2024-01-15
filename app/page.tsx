import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Project/Card";
import Link from "next/link";
import { ArrowRight } from "@/ui/icons";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-16 md:space-y-32 md:py-32">
      <Hero />
      <section>
        <h2 className="mb-1">Projects</h2>
        <p>Some description</p>
        <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="projects" className="hover:underline underline-offset-2 text-center text-sm font-semibold">
            View all projects -->
          </Link>
        </div>
      </section>
    </main>
  );
}
