import Logo from "@/components/custom/logo";
import { XPattern } from "@/components/custom/pattern";
import { cn } from "@/lib/utils";
import { CameraIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Photography"
};

export default function PhotographyPage() {
  const photoList = [
    "https://images6.alphacoders.com/129/1293436.jpg",
    "https://i.pinimg.com/originals/12/39/bd/1239bd52ed659fbdb6a941bc87d26c53.jpg",
    "https://mrwallpaper.com/images/hd/sung-jinwoo-from-solo-leveling-4k-5nocnj2a0sy7bkyp.jpg",
    "https://wallpapersok.com/images/high/igris-from-solo-leveling-4k-noriawlf3y7v5jh7.jpg",
    "https://mrwallpaper.com/images/hd/igris-and-jinwoo-solo-leveling-4k-7vnufsi3vg7bhybf.jpg"
  ];
  return (
    <main className="relative">
      <nav className="bg-background sticky top-0 z-1">
        <div className="w-full border-b px-2">
          <div className="custom-container flex h-12.5 items-center py-2">
            <Link href={"/"}>
              <Logo
                className="text-muted-foreground hover:text-foreground"
                size={20}
              />
            </Link>
          </div>
        </div>
      </nav>
      <div className="relative">
        <div className="custom-container space-y-4 py-10">
          <p className="text-muted-foreground inline-flex items-center gap-1">
            camera clicks <CameraIcon className="size-4" />
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Photography</h2>
        </div>
        <div className="mx-auto w-[calc(100%-16px)] lg:w-[calc(100%-80px)]">
          <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3">
            {photoList.map((photo, i) => (
              <div
                key={i}
                className={cn("relative h-[500px] w-full overflow-hidden")}
              >
                <Image src={photo} alt="photo" className="object-cover" fill />
              </div>
            ))}
          </div>
        </div>
        <XPattern />
      </div>
    </main>
  );
}
