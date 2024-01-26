import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-auto flex h-9 w-full items-center justify-center border-t border-base-900 px-2">
      <div className="text-sm text-base-700">
        Built with{" "}
        <Link
          href="https://nextjs.org/"
          className="text-base-500 underline-offset-2 hover:underline"
        >
          Next
        </Link>{" "}
        &{" "}
        <Link
          href="https://tailwindcss.com/"
          className="text-base-500 underline-offset-2 hover:underline"
        >
          Tailwind
        </Link>
      </div>
    </div>
  );
}
