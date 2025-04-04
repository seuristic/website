import ContactForm from "@/components/custom/contact-form";
import { HomeNavbar } from "@/components/custom/navbar";
import { XPattern } from "@/components/custom/pattern";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  ArrowDownToLineIcon,
  FileIcon,
  CogIcon,
  SquareArrowOutUpRightIcon,
  SatelliteDishIcon,
  CopyrightIcon,
  PickaxeIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/assets/icons/brands";
import ShahanwazPhoto from "@/assets/images/shahanwaz.png";
import HomeMetrics from "@/components/custom/metrics";
import ImagecLogo from "@/assets/images/projects/imagec-logo.png";
import ImagecBanner from "@/assets/images/projects/imagec-banner.png";
import NITDelhiLogo from "@/assets/images/projects/nitdelhi-logo.png";
import FerBanner from "@/assets/images/projects/fer-banner.png";
import DonezoLogo from "@/assets/images/projects/donezo-logo.png";

const projects = [
  {
    title: "Imagec App",
    subtitle: "Digital Image E-Commerce Platform",
    description:
      "Built a full-stack image e-commerce platform with Next.js 15, React, TypeScript. Secure image processing with ImageKit.io, payments with Razorpay, auth with NextAuth. Automated image delivery, responsive galleries, and email notifications with Mailtrap SMTP.",
    logo: ImagecLogo,
    live: "https://imagec-shahanwaz.vercel.app",
    repo: "https://github.com/seuristic/imagec-app",
    banner: ImagecBanner
  },
  {
    title: "Facial Emotion Recognition for Rehabilitation",
    subtitle: "ML-based emotion detection with LED display and web analytics",
    description:
      "Developed a Facial Emotion Recognition (FER) system for rehabilitation as a final-year project. Improved ML model accuracy and integrated with Arduino-powered LED grids to display emotions as pixelated emojis. Built a MERN-based web app for tracking and analyzing detected emotions.",
    logo: NITDelhiLogo,
    repo: "https://github.com/seuristic/college-project-FER-ml-program",
    banner: FerBanner
  },
  {
    title: "Donezo App",
    subtitle: "All-in-one productivity tracker",
    description:
      "Donezo is an all-in-one productivity tracker that helps you stay organized. Manage notes, to-do lists, and movie collections in one place, with more features coming soon!",
    logo: DonezoLogo,
    // live: "/",
    // repo: "/",
    // banner: FerBanner,
    inProgress: true
  }
];

export default function Home() {
  return (
    <main>
      <HomeNavbar />

      <div className="relative isolate w-full border-b px-2">
        <div className="mx-auto flex w-full max-w-3xl px-4 py-4 sm:min-h-[650px] md:border-x">
          <div className="flex w-full flex-1 flex-col-reverse items-center justify-center gap-8 rounded-md sm:flex-row">
            <div className="space-y-6 sm:space-y-10">
              <div className="space-y-4">
                <p className="text-muted-foreground inline-flex items-center gap-1">
                  hi, myself <ArrowDownIcon className="size-4" />
                </p>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Mohammad Shahanwaz
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-muted-foreground text-justify hyphens-auto">
                  <span className="animate-shine from-border to-border via-foreground bg-gradient-to-r bg-[length:200%_100%] bg-clip-text font-medium text-transparent">
                    software engineer
                  </span>{" "}
                  at{" "}
                  <Link href="https://www.bosscoderacademy.com" target="_blank">
                    Bosscoder Academy
                  </Link>{" "}
                  ↗ keen interest in web2, cloud, web3, blockchain, LLMs, AI,
                  automation, distributed systems, SaaS ⎇ tech stack — Next,
                  React, Tailwind, shadcn/ui, Postgres, AI ‣ into fitness,
                  competitive programming, photography ‣ read blogs, articles,
                  books about tech, self-growth, fiction ‣ anime, outings, food
                  adventures ‣ let&apos;s build together
                </p>
                <div className="inline-flex gap-4">
                  <Button asChild>
                    <Link href="https://resume.shahanwaz.dev" target="_blank">
                      RESUME <FileIcon />
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link
                      href="https://resume.shahanwaz.dev/Shahanwaz_Resume.pdf"
                      target="_blank"
                    >
                      DOWNLOAD <ArrowDownToLineIcon />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="shrink-0 rounded-3xl border p-2">
              <div className="relative size-[180px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={ShahanwazPhoto}
                  alt="profile picture"
                  className="object-cover"
                  fill
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
        <HomeMetrics />
        <XPattern />
      </div>

      <div id="projects" className="relative isolate w-full border-b px-2">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:py-32 md:border-x">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-muted-foreground inline-flex items-center gap-1">
                projects <CogIcon className="size-4" />
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Things I&apos;ve built
              </h2>
            </div>
            <div className="space-y-20 sm:space-y-32">
              {projects &&
                projects.slice(0, 3).map((project, i) => (
                  <div key={i} className="space-y-6">
                    <div className="w-fit rounded-[20px] border p-1">
                      <div className="relative h-16 w-16">
                        <Image
                          src={project.logo}
                          alt="profile"
                          className="overflow-hidden rounded-2xl object-cover shadow"
                          fill
                          placeholder="blur"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="inline-flex flex-wrap items-center gap-4 text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <h4 className="text-sm font-medium text-zinc-500">
                        {project.subtitle}
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-justify hyphens-auto">
                      {project.description}
                    </p>
                    <div className="inline-flex gap-4">
                      {project.live && (
                        <Button asChild>
                          <Link href={project.live}>
                            LIVE <SquareArrowOutUpRightIcon />
                          </Link>
                        </Button>
                      )}
                      {project.repo && (
                        <Button variant="secondary" asChild>
                          <Link href={project.repo}>
                            REPOSITORY <GithubIcon />
                          </Link>
                        </Button>
                      )}
                      {project.inProgress && (
                        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-medium text-yellow-600 dark:text-yellow-500">
                          <PickaxeIcon className="size-4" /> BUILDING
                        </div>
                      )}
                    </div>
                    {project.banner && (
                      <div className="relative aspect-video w-full">
                        <Image
                          src={project.banner}
                          alt=""
                          className="rounded-md shadow-lg"
                          fill
                          placeholder="blur"
                        />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <XPattern />
      </div>

      <div id="connect" className="relative isolate w-full border-b px-2">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:py-32 md:border-x">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-muted-foreground inline-flex items-center gap-1">
                let&apos;s connect <SatelliteDishIcon className="size-4" />
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Contact me
              </h2>
            </div>
            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>
        <XPattern />
      </div>

      <div className="relative isolate px-2">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-center gap-2 px-4 py-4 font-mono text-sm text-zinc-400 md:border-x dark:text-zinc-700">
          <CopyrightIcon className="size-4" />
          {new Date().getFullYear()} Mohammad Shahanwaz
        </div>
      </div>
    </main>
  );
}
