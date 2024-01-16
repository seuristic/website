import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M. Shahanwaz - Projects",
  description: "Personal projects built by me to showcase my skills",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
