import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowDownIcon, MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { ThemeToggler } from "./theme-toggler";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-1 w-full">
      <div className="isolate w-full border-b px-2">
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
      </div>
    </nav>
  );
}

function NavMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <MenuIcon className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="grid grid-cols-1 place-items-center gap-4 p-4 font-mono">
          <Link href={"/"} className="py-10">
            <Logo size={20} animate={false} />
          </Link>
          <Link href={"/photography"}>PHOTOGRAPHY</Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
