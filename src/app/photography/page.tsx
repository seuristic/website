import Navbar from "@/components/custom/navbar";
import { XPattern } from "@/components/custom/pattern";
import { cn } from "@/lib/utils";
import { CameraIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
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
      <Navbar />
      <div className="relative">
        <div className="custom-container space-y-4 py-10">
          <p className="text-muted-foreground inline-flex items-center gap-1">
            clicks <CameraIcon className="size-4" />
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
