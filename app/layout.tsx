import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "M. Shahanwaz",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
