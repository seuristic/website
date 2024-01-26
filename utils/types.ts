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
