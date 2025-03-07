import { cn } from "@/lib/utils";
import React from "react";

export default function MarginXPattern({ pattern }: { pattern?: boolean }) {
  return (
    <>
      <div
        className={cn(
          "absolute inset-y-0 left-0 h-full w-2 border-r lg:w-10",
          pattern && "pattern-lines border-y-0"
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 h-full w-2 border-l lg:w-10",
          pattern && "pattern-lines border-y-0"
        )}
      />
    </>
  );
}
