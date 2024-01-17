import Logo from "@/ui/components/Logo";
import Link from "next/link";
import React from "react";
import NavMenu from "./NavMenu";

export default function Navbar() {
  const NAV_ROUTES = [
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Connect",
      path: "/connect",
    },
  ];

  return (
    <header className="sticky left-0 top-0 z-50 flex w-full justify-center border border-base-900 bg-base-950/80 backdrop-blur-md">
      <nav className="flex h-16 w-full max-w-3xl items-center justify-between px-4">
        <Link href="/">
          <span>
            <Logo size={20} />
          </span>
        </Link>
        <ul className="hidden items-center gap-4 text-sm font-semibold md:flex md:gap-8">
          {NAV_ROUTES.map((link, i) => (
            <li key={i}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <NavMenu routes={NAV_ROUTES} />
        </div>
      </nav>
    </header>
  );
}
