import Logo from "@/ui/components/Logo";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const NAV_LINKS = [
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Experiments",
      path: "/experiments",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];

  return (
    <header className="sticky left-0 top-0 z-50 flex w-full justify-center border border-default-900 bg-default-950/80 backdrop-blur-md">
      <nav className="flex w-full max-w-3xl items-center justify-between px-4 py-5">
        <Link href="/" className="hover:text-default-50">
          <span>
            <Logo size={20} />
          </span>
        </Link>
        <ul className="flex items-center gap-4 text-sm font-semibold md:gap-8">
          {NAV_LINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
