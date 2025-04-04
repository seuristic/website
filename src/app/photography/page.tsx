import Navbar from "@/components/custom/navbar";
import { XPattern } from "@/components/custom/pattern";
import { Metadata } from "next";
import Image from "next/image";
import * as React from "react";
import JamaMasjid from "@/assets/images/photography/jama-masjid.jpg";
import AlternateDimension from "@/assets/images/photography/alternate-dimension.jpg";
import BrightBranches from "@/assets/images/photography/bright-branches.jpg";
import CalmShore from "@/assets/images/photography/calm-shore.jpg";
import ClearSky from "@/assets/images/photography/clear-sky.jpg";
import Gradiency from "@/assets/images/photography/gradiency.jpg";
import NeverEndingJourney from "@/assets/images/photography/never-ending-journey.jpg";
import SmallCity from "@/assets/images/photography/small-city.jpg";
import SunsetMeetsHorizon from "@/assets/images/photography/sunset-meets-horizon.jpg";

export const metadata: Metadata = {
  title: "Photography"
};

const photos = [
  JamaMasjid,
  AlternateDimension,
  BrightBranches,
  CalmShore,
  ClearSky,
  Gradiency,
  NeverEndingJourney,
  SmallCity,
  SunsetMeetsHorizon
];

export default function PhotographyPage() {
  const shuffledPhotos = React.useMemo(() => {
    return [...photos].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <div className="relative">
        <div className="px-2">
          <div className="mx-auto w-full max-w-3xl px-4 py-10 md:border-x">
            <h2 className="text-3xl font-semibold tracking-tight">
              Photography
            </h2>
          </div>
        </div>
        <div className="mx-auto w-[calc(100%-16px)] lg:w-[calc(100%-80px)]">
          <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 md:border-t lg:grid-cols-3">
            {shuffledPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative h-[500px] w-full overflow-hidden border p-2"
              >
                <Image
                  src={photo}
                  alt="photo"
                  className="object-cover"
                  fill
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
        <XPattern />
      </div>
    </main>
  );
}
