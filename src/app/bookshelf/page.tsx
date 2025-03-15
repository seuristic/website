import Logo from "@/components/custom/logo";
import { XPattern } from "@/components/custom/pattern";
import { BookIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Photography"
};

export default function BookshelfPage() {
  const photoList = [
    "https://www.picmaker.com/assets/images/bookcovermaker/template-1.png",
    "https://blog-cdn.reedsy.com/directories/admin/attachments/large_4c70095371eff60044f41f5a30854561.jpg",
    "https://marketplace.canva.com/EAGEuNwgF3k/1/0/1003w/canva-modern-and-simple-prayer-journal-book-cover-UL8kCB4ONE8.jpg",
    "https://i.pinimg.com/736x/07/d4/8e/07d48e4f76e56efe05377eabc22da671.jpg",
    "https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/616c+ys7RBL._UF1000,1000_QL80_.jpg"
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
            reading <BookIcon className="size-4" />
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Bookshelf</h2>
        </div>
        <div className="mx-auto w-[calc(100%-16px)] lg:w-[calc(100%-80px)]">
          <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {photoList.map((photo, i) => (
              <div
                key={i}
                className="flex aspect-3/4 w-full overflow-hidden border p-10"
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
