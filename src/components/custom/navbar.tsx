import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowDownIcon, ArrowUpRightIcon, MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

export default function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-1 w-full">
      <div className="relative w-full border-b px-2">
        <div className="mx-auto max-w-3xl px-4 py-2">
          <div className="flex items-center gap-4">
            <Link
              href={"/"}
              className="text-2xl/tight font-semibold tracking-tight"
            >
              Shahanwaz
            </Link>
            <div className="bg-secondary hidden h-6 w-px sm:block" />
            <div className="hidden items-center gap-4 font-mono text-sm/tight sm:flex">
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
              <Button size={"sm"} className="cursor-pointer">
                CONNECT <ArrowDownIcon />
              </Button>
            </div>
            <NavMenu />
          </div>
        </div>
        <div className="bg-border absolute inset-y-0 left-2 h-full w-px lg:left-10">
          <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 rounded border bg-zinc-950" />
        </div>
        <div className="bg-border absolute inset-y-0 right-2 h-full w-px lg:right-10">
          <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 rounded border bg-zinc-950" />
        </div>
      </div>
    </nav>
  );
}

function NavMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="sm:hidden" variant={"ghost"} size={"icon"}>
          <MenuIcon className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        {/* <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader> */}
        <div className="flex flex-col items-center gap-4 p-4 font-sans">
          <Link
            href={"/"}
            className="text-2xl/tight font-semibold tracking-tight"
          >
            Shahanwaz
          </Link>
          <div className="flex flex-col items-center gap-4 font-mono text-sm/tight">
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
          <Link href="https://resume.shahanwaz.dev" target="_blank">
            <Button size={"sm"} className="cursor-pointer">
              RESUME <ArrowUpRightIcon className="size-5" />
            </Button>
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
