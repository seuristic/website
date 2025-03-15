import Navbar from "@/components/custom/navbar";
import { XPattern } from "@/components/custom/pattern";
import { cn } from "@/lib/utils";
import { CameraIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import Photo1 from "@/assets/images/photography/1.jpg";
import Photo2 from "@/assets/images/photography/2.jpg";
import Photo3 from "@/assets/images/photography/3.jpg";
import Photo4 from "@/assets/images/photography/4.jpg";
import Photo5 from "@/assets/images/photography/5.jpg";
import Photo6 from "@/assets/images/photography/6.jpg";
import Photo7 from "@/assets/images/photography/7.jpg";
import Photo8 from "@/assets/images/photography/8.jpg";
import Photo9 from "@/assets/images/photography/9.jpg";
import Photo10 from "@/assets/images/photography/10.jpg";
import Photo11 from "@/assets/images/photography/11.jpg";
import Photo12 from "@/assets/images/photography/12.jpg";
import Photo13 from "@/assets/images/photography/13.jpg";

export const metadata: Metadata = {
  title: "Photography"
};

export default function PhotographyPage() {
  const photoList = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
    Photo10,
    Photo11,
    Photo12,
    Photo13
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
