import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowDownIcon, MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { ThemeToggler } from "./theme-toggler";
import Logo from "./logo";
import {
  CodeforcesIcon,
  GithubIcon,
  LeetcodeIcon,
  LinkedInIcon
} from "@/assets/icons/brands";

export default function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-1">
      <div className="w-full border-b px-2">
        <div className="custom-container flex h-12.5 items-center gap-x-4 py-2">
          <Link href={"/"} className="mr-auto">
            <Logo size={20} />
          </Link>
          <ThemeToggler />
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}

export function NavMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="sm:hidden" variant={"ghost"} size={"icon"}>
          <MenuIcon className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="grid grid-cols-1 place-items-center gap-4 p-4 font-mono">
          <Link href={"/"} className="py-10">
            <Logo size={20} animate={false} />
          </Link>
          <Link href={"/photography"}>PHOTOGRAPHY</Link>
          <Link href={"/bookshelf"}>BOOKSHELF</Link>
          <div className="mt-10 grid grid-cols-2 gap-4">
            <Button size={"icon"} asChild title="Github">
              <Link href="#connect">
                <GithubIcon />
              </Link>
            </Button>
            <Button size={"icon"} asChild title="LinkedIn">
              <Link href="#connect">
                <LinkedInIcon />
              </Link>
            </Button>
            <Button size={"icon"} asChild title="Leetcode">
              <Link href="#connect">
                <LeetcodeIcon />
              </Link>
            </Button>
            <Button size={"icon"} asChild title="Codeforces">
              <Link href="#connect">
                <CodeforcesIcon />
              </Link>
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export function HomeNavbar() {
  return (
    <nav className="bg-background sticky top-0 z-1">
      <div className="w-full border-b px-2">
        <div className="custom-container h-12.5 py-2">
          <div className="flex items-center gap-4">
            <Link href={"/"}>
              <Logo size={20} />
            </Link>
            <div className="bg-border hidden h-6 w-px sm:block" />
            <div className="hidden space-x-4 font-mono text-sm sm:inline">
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
