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
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-2 place-items-center gap-6">
          {profiles.map((profile, i) => (
            <Link
              key={i}
              className="grid aspect-square h-20 place-items-center rounded-xl border border-base-800 bg-base-900"
              href={profile.link}
              target="_blank"
              title={profile.name}
            >
              <profile.icon size={32} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
