import React from "react";
import Link from "next/link";
import profiles from "@/data/profiles";

export default function Connect() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-16 md:space-y-20 md:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <h1>Connect</h1>
        <p>Get in Touch – Whether it&apos;s for collaboration, opportunities, or a friendly chat, I&apos;d love to hear from you. Let&apos;s connect!</p>
      </div>
      <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-10">
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
    </main>
  );
}
