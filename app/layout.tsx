import type { Metadata } from "next";
import "./globals.css";
import "atropos/css";
import { inter } from "@/ui/fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className={inter.className}>
        <div className="min-h-screen bg-base-950 text-base-100">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
