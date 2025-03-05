import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowDownIcon, ArrowUpRightIcon, MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import DiamondPattern from "./pattern";

export default function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-1 w-full">
      <div className="relative w-full border-b px-2">
        <div className="mx-auto max-w-3xl px-4 py-2">
          <div className="flex items-center gap-4">
            <Link
              href={"/"}
              className="logo text-2xl/tight font-semibold tracking-tight"
            >
              Shahanwaz
            </Link>
            <div className="bg-secondary hidden h-6 w-px sm:block" />
            <div className="hidden items-center gap-4 font-mono text-sm/tight sm:flex">
              <Link href={"/blogs"}>BLOGS</Link>
              <Link href={"/photography"}>PHOTOGRAPHY</Link>
              <Link href={"/bookshelf"}>BOOKSHELF</Link>
            </div>
            <div className="ml-auto">
              <Button size={"sm"} className="cursor-pointer">
                CONNECT <ArrowDownIcon />
              </Button>
            </div>
            <NavMenu />
          </div>
        </div>
        <DiamondPattern />
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
        <div className="flex flex-col items-center gap-4 p-4 font-sans">
          <Link
            href={"/"}
            className="text-2xl/tight font-semibold tracking-tight"
          >
            Shahanwaz
          </Link>
          <div className="flex flex-col items-center gap-4 font-mono text-sm/tight">
            <Link href={"/blogs"}>BLOGS</Link>
            <Link href={"/photography"}>PHOTOGRAPHY</Link>
            <Link href={"/bookshelf"}>BOOKSHELF</Link>
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
