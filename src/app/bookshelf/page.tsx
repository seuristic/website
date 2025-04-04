import Navbar from "@/components/custom/navbar";
import { XPattern } from "@/components/custom/pattern";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import AtomicHabits from "@/assets/images/bookshelf/atomic-habits.jpg";
import ShoeDog from "@/assets/images/bookshelf/shoe-dog.jpg";
import AsAManThinketh from "@/assets/images/bookshelf/as-a-man-thinketh.jpg";
import ItEndsWithUs from "@/assets/images/bookshelf/it-ends-with-us.jpg";
import CTCI from "@/assets/images/bookshelf/ctci.jpg";
import Ikigai from "@/assets/images/bookshelf/ikigai.jpg";
import TheSubtleArtOfGivingAFuck from "@/assets/images/bookshelf/the-subtle-art-of-not-giving-a-fuck.jpg";
import RichDadPoorDad from "@/assets/images/bookshelf/rich-dad-poor-dad.jpg";
import DeepWork from "@/assets/images/bookshelf/deep-work.jpg";
import BeforeTheCoffeeGetsCold from "@/assets/images/bookshelf/before-the-coffee-gets-cold.jpg";
import DoItToday from "@/assets/images/bookshelf/do-it-today.jpg";
import Verity from "@/assets/images/bookshelf/verity.jpg";
import SystemDesignInterview from "@/assets/images/bookshelf/system-design-interview.jpg";

export const metadata: Metadata = {
  title: "Photography"
};

export default function BookshelfPage() {
  const photoList = [
    AtomicHabits,
    ShoeDog,
    DeepWork,
    DoItToday,
    SystemDesignInterview,
    CTCI,
    AsAManThinketh,
    TheSubtleArtOfGivingAFuck,
    RichDadPoorDad,
    Ikigai,
    BeforeTheCoffeeGetsCold,
    Verity,
    ItEndsWithUs
  ];

  return (
    <main className="relative">
      <Navbar />
      <div className="relative">
        <div className="px-2">
          <div className="mx-auto w-full max-w-3xl px-4 py-10 md:border-x">
            <h2 className="text-3xl font-semibold tracking-tight">Bookshelf</h2>
          </div>
        </div>
        <div className="mx-auto w-[calc(100%-16px)] lg:w-[calc(100%-80px)]">
          <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 md:border-t lg:grid-cols-4 xl:grid-cols-5">
            {photoList.map((photo, i) => (
              <div
                key={i}
                className="flex aspect-3/4 w-full overflow-hidden border p-5 sm:p-10"
              >
                <div className="relative m-auto h-full w-full">
                  <Image
                    src={photo}
                    alt="photo"
                    className="object-contain drop-shadow-lg"
                    fill
                    placeholder="blur"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <XPattern />
      </div>
    </main>
  );
}
