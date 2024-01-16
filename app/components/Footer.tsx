import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-auto flex w-full flex-col">
      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 41"
        fill="none"
      >
        <path
          className="stroke-base-900 stroke-1"
          d="M0 40.5H540H562.5H573.75C573.75 40.5 573.75 40.5 585 40.5C596.25 40.5 593 20.5 596.25 20.5C599.5 20.5 599 40.5 607.5 40.5C616 40.5 608.5 40.5 618.75 40.5C629 40.5 626.5 0.5 630 0.5C633.5 0.5 630 40.5 641.25 40.5C652.5 40.5 652.5 40.5 652.5 40.5H675H720H1440"
        />
      </svg>
      <div className="flex w-full items-center justify-center p-2">
        <div className="flex items-center gap-2 text-sm text-base-700">
          Built with{" "}
          <Link
            href="https://nextjs.org/"
            className="text-base-500 underline-offset-2 hover:underline"
          >
            Next.js
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
    </div>
  );
}
