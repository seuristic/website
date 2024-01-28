import React from "react";
import Link from "next/link";
import profiles from "@/data/profiles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect - M. Shahanwaz",
  description:
    "Connect me whether it's for collaboration, opportunities, or a friendly chat",
};

export default function Connect() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-16 md:space-y-20 md:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <h1>Connect</h1>
        <p>
          Get in Touch - Whether it&apos;s for collaboration, opportunities, or
          a friendly chat, I&apos;d love to hear from you. Let&apos;s connect!
        </p>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-10">
        {profiles.map((profile, i) => (
          <Link
            key={i}
            href={profile.link}
            target="_blank"
            title={profile.name}
          >
            <profile.icon size={32} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center text-base-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={200}
          viewBox="0 0 634 104"
          fill="none"
        >
          <path
            d="M8 8C8 8 511.5 8 526 8C540.5 8 237.5 37.3333 220 38.6087C202.5 39.8841 519.5 58.6957 534.5 58.6957C549.5 58.6957 290 81.971 303.5 81.971C317 81.971 626 96 626 96"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </main>
  );
}
