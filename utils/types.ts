import { Icon } from "@phosphor-icons/react";
import { StaticImageData } from "next/image";

export type TProject = {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  slug: string;
  experiment?: boolean;
  tags: string[];
  github?: string;
  link?: string;
  other_links?: { name: string; url: string; icon?: Icon }[];
  features: string[];
  screenshots?: StaticImageData[];
};

export type TProfile = {
  name: string;
  link: string;
  icon: Icon;
};

export type TRoute = {
  name: string;
  path: string;
};

export type TIconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

export type TIcon = {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: TIconWeight;
  mirrored?: boolean;
};
