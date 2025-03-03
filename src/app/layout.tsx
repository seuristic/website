import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const interFont = localFont({
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
  variable: "--font-sans"
});

const fragmentMonoFont = Fragment_Mono({
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
        className={cn(
          fragmentMonoFont.variable,
          interFont.variable,
          "font-primary"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
