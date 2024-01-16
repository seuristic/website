import React from "react";
import Card from "../components/Project/Card";
import {
  CodepenLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@/ui/icons";
import Link from "next/link";

export default function Connect() {
  const SOCIAL_PROFILES = [
    {
      name: "Twitter",
      link: "https://twitter.com/_mshahanwaz",
      icon: TwitterLogo,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mshahanwaz/",
      icon: LinkedinLogo,
    },
    {
      name: "GitHub",
      link: "https://github.com/mshahanwaz",
      icon: GithubLogo,
    },
    {
      name: "CodePen",
      link: "https://codepen.io/mshahanwaz",
      icon: CodepenLogo,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/imshahanwaz/",
      icon: InstagramLogo,
    },
  ];

  return (
    <main className="mx-auto w-full max-w-3xl space-y-16 px-4 py-16 md:space-y-20 md:py-20">
      <div className="text-center max-w-2xl flex flex-col gap-8 items-center mx-auto">
        <h1>Connect</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          illum placeat hic quidem sed quia fugiat eum similique perspiciatis
          aliquid possimus vero!
        </p>
      </div>
      <section className="mt-4 w-full">
        <div className="flex items-center justify-center gap-10">
          {SOCIAL_PROFILES.map((profile, i) => (
            <Link key={i} href={profile.link} target="_blank" title={profile.name}>
              <profile.icon size={32} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
