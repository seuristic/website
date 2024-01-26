import { ArrowLeft } from "@/ui/icons";
import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "404",
    description: "Could not find requested resource",
  };
}

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-16 px-4">
      <div className="flex min-h-[calc(100dvh-100px-2px)] flex-col items-center justify-center gap-4 text-center">
        <h1>404</h1>
        <p>Could not find requested resource</p>
        <div className="mt-4 flex justify-center">
          <Link
            className="group inline-flex items-center gap-1 text-center text-sm font-semibold"
            href="/"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              <ArrowLeft size={16} />
            </span>
            Return home page
          </Link>
        </div>
      </div>
    </main>
  );
}
