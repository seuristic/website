import Link from "next/link";
import * as React from "react";
import { ArrowUpRight } from "@/ui/icons";
import { TIcon } from "@/utils/types";

type TProps = {
  icon: React.ComponentType<TIcon>;
  url: string;
  name: string;
};

export default function ProjectLink(props: TProps) {
  return (
    <Link
      className="group inline-flex h-12 items-center gap-1.5 rounded-full bg-base-900 py-1.5 pl-1.5 pr-3 hover:bg-base-800 hover:text-base-100"
      href={props.url}
      target="_blank"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-base-950">
        <props.icon size={20} />
      </span>
      {props.name}
      <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}
