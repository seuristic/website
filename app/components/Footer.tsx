import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full items-center justify-center gap-1 border-t border-base-900 p-2">
      <div className="flex items-center gap-2 text-sm text-base-700">
        Built with{" "}
        <Link href="https://nextjs.org/" className="text-base-500 hover:underline underline-offset-2">
          Next.js
        </Link>{" "}
        & <Link href="https://tailwindcss.com/" className="text-base-500 hover:underline underline-offset-2">Tailwind</Link>
      </div>
    </div>
  );
}
