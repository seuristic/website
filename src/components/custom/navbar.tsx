import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="bg-background w-full">
      <div className="relative w-full border-b px-2">
        <div className="mx-auto max-w-3xl px-4 py-2">
          <div className="flex items-center gap-6">
            <Link href={"/"} className="text-2xl font-semibold tracking-tight">
              Shahanwaz
            </Link>
            <div className="bg-secondary h-6 w-px" />
            <div className="flex items-center gap-4 font-mono text-sm/tight">
              <Link
                href={"/blogs"}
                className="text-zinc-400 hover:text-blue-600 active:text-purple-600"
              >
                BLOGS
              </Link>
              <Link
                href={"/photography"}
                className="text-zinc-400 hover:text-blue-600 active:text-purple-600"
              >
                PHOTOGRAPHY
              </Link>
              <Link
                href={"/bookshelf"}
                className="text-zinc-400 hover:text-blue-600 active:text-purple-600"
              >
                BOOKSHELF
              </Link>
            </div>
            <div className="ml-auto">
              <Link href="/">
                <Button size={"sm"}>RESUME</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-border absolute inset-y-0 left-2 h-full w-px lg:left-10">
          <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border bg-zinc-950" />
        </div>
        <div className="bg-border absolute inset-y-0 right-2 h-full w-px lg:right-10">
          <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border bg-zinc-950" />
        </div>
      </div>
    </nav>
  );
}
