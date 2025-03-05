import React from "react";

export default function DiamondPattern({
  diamond = true
}: {
  diamond?: boolean;
}) {
  return (
    <>
      <div className="bg-border absolute inset-y-0 left-2 h-full w-px lg:left-10">
        {diamond && (
          <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 rounded border bg-zinc-950" />
        )}
      </div>
      <div className="bg-border absolute inset-y-0 right-2 h-full w-px lg:right-10">
        {diamond && (
          <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 rounded border bg-zinc-950" />
        )}
      </div>
    </>
  );
}
