import type { Metadata } from "next";
import "./globals.css";
import "atropos/css";
import { inter } from "@/ui/fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "M. Shahanwaz",
  description: "Personal portfolio website",
};

type TProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-dvh flex-col bg-base-950 text-base-100">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
