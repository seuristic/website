import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowDownIcon, FileIcon, MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { XPattern } from "./pattern";
import { ThemeToggler } from "./theme-toggler";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-1 w-full">
      <div className="relative isolate w-full border-b px-2">
        <div className="custom-container py-2">
          <div className="flex items-center gap-4">
            <Link href={"/"}>
              <Logo size={20} />
            </Link>
            <div className="bg-border hidden h-6 w-px sm:block" />
            <div className="hidden items-center gap-4 text-sm/tight sm:flex [&>a]:font-mono">
              <Link href={"/photography"}>PHOTOGRAPHY</Link>
              <Link href={"/bookshelf"}>BOOKSHELF</Link>
            </div>
            <div className="ml-auto">
              <Button size={"sm"} asChild>
                <Link href="#connect">
                  CONNECT <ArrowDownIcon />
                </Link>
              </Button>
            </div>
            <ThemeToggler />
            <NavMenu />
          </div>
        </div>
        <XPattern shade={false} />
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
        <div className="flex flex-col items-center gap-10 px-4 py-20 font-sans">
          <Link href={"/"}>
            <Logo size={20} />
          </Link>
          <div className="flex flex-col items-center gap-4 font-mono text-sm/tight">
            <Link href={"/photography"}>PHOTOGRAPHY</Link>
          </div>
          <Button size={"sm"} asChild>
            <Link href="https://resume.shahanwaz.dev" target="_blank">
              RESUME <FileIcon />
            </Link>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
