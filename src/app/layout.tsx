import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const Inter = localFont({
  src: [
    {
      path: "../assets/fonts/InterVariable.ttf",
      style: "normal"
    },
    {
      path: "../assets/fonts/InterVariable-Italic.ttf",
      style: "italic"
    }
  ],
  variable: "--font-sans",
  display: "swap"
});

const FragmentMono = Fragment_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "M Shahanwaz",
  description: "Portfolio website built using Next, Tailwind"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(FragmentMono.variable, Inter.variable, "font-primary")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
