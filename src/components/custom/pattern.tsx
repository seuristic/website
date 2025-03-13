import { cn } from "@/lib/utils";
import React from "react";

export function XPattern({
  shade = true,
  border = true
}: {
  shade?: boolean;
  border?: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          "absolute inset-y-0 left-0 h-full w-2 lg:w-10",
          shade && "shade-lines border-y-0",
          border && "border-r"
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 h-full w-2 lg:w-10",
          shade && "shade-lines border-y-0",
          border && "border-l"
        )}
      />
    </>
  );
}

export function GradientPattern() {
  return (
    <div
      className="absolute inset-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      aria-hidden="true"
    >
      <div
        className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
      />
    </div>
  );
}
