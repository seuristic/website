import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const aeonikFont = localFont({
  src: "../assets/fonts/Aeonik.ttf",
  variable: "--font-primary",
  display: "swap"
});

const fragmentMono = Fragment_Mono({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "M Shahanwaz",
  description: "Portfolio website built using Next 15, Tailwind 4"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aeonikFont.variable} ${fragmentMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
