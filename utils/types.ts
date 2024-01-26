import { Icon } from "@phosphor-icons/react";
import { StaticImageData } from "next/image";

export type TProject = {
  title: string;
  description: string;
  image: StaticImageData;
  slug: string;
  experiment?: boolean;
  tags: string[];
  github: string;
  link?: string;
  features: string[];
  screenshots?: StaticImageData[];
};

export type TProfile = {
  name: string;
  link: string;
  icon: Icon;
};
