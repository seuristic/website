"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavMenu from "./Menu";
import Logo from "@/ui/components/Logo";
import { formatPath, parsePathname } from "@/utils/helper";
import cn from "@/utils/cn";
import routes from "@/data/routes";

export default function Navbar() {
  const pathname = usePathname();
  const paths = parsePathname(pathname);
  const activePath = paths.at(0);

  return (
    <header className="sticky left-0 top-0 z-50 flex w-full justify-center border-b border-base-900 bg-base-950/80 backdrop-blur-md">
      <nav className="flex h-16 w-full max-w-3xl items-center justify-between px-4">
        <Link href="/">
          <span>
            <Logo size={20} />
          </span>
        </Link>
        <ul className="hidden items-center gap-4 text-sm font-semibold md:flex md:gap-8">
          {routes.map((route, i) => (
            <li key={i}>
              <Link
                href={formatPath(route.path)}
                className={cn(
                  activePath === route.path ? "text-base-100" : "text-base-400",
                )}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <NavMenu {...{ routes }} />
        </div>
      </nav>
    </header>
  );
}
