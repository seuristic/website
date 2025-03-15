import Navbar from "@/components/custom/navbar";
import { XPattern } from "@/components/custom/pattern";
import { BookIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Photography"
};

export default function BookshelfPage() {
  const photoList = [
    "https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61mxjI8qcxL.jpg",
    "https://m.media-amazon.com/images/I/71zlhHlWOzL.jpg",
    "https://m.media-amazon.com/images/I/91CqNElQaKL.jpg",
    "https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
    "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    "https://m.media-amazon.com/images/I/81BE7eeKzAL.jpg",
    "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    "https://m.media-amazon.com/images/I/71uUY42uNsL.jpg",
    "https://m.media-amazon.com/images/I/61jCkOVf1oL.jpg",
    "https://m.media-amazon.com/images/I/91868k2+gUL.jpg",
    "https://m.media-amazon.com/images/I/615KGTRs1OL._UF1000,1000_QL80_.jpg"
  ];

  return (
    <main className="relative">
      <Navbar />
      <div className="relative">
        <div className="custom-container space-y-4 py-10">
          <p className="text-muted-foreground inline-flex items-center gap-1">
            reading <BookIcon className="size-4" />
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Bookshelf</h2>
        </div>
        <div className="mx-auto w-[calc(100%-16px)] lg:w-[calc(100%-80px)]">
          <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {photoList.map((photo, i) => (
              <div
                key={i}
                className="flex aspect-3/4 w-full overflow-hidden border p-5 sm:p-10"
              >
                <div className="relative m-auto h-full w-full">
                  <Image
                    src={photo}
                    alt="photo"
                    className="object-contain"
                    fill
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
