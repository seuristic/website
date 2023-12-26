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
    <header className="sticky left-0 top-0 flex w-full justify-center border border-default-800 border-l-purple-950 bg-default-950/30 px-4 py-5 backdrop-blur-md">
      <nav className="flex w-full max-w-3xl items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold">M. Shahanwaz</span>
        </Link>
        <ul className="flex items-center gap-8 text-sm font-semibold">
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
