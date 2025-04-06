"use client";

import * as React from "react";
import NumberFlow from "@number-flow/react";

const loc = 82570;
const bugsFixed = 1695;
const problemsSolved = 780;

export default function HomeMetrics() {
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    setStart(true);
  }, []);

  return (
    <div className="mx-auto mt-20 w-full max-w-3xl sm:mt-0 md:border-x">
      <div className="grid h-96 grid-rows-3 divide-y border border-x-0 border-b-0 sm:h-36 sm:grid-cols-3 sm:grid-rows-1 sm:divide-x sm:divide-y-0 sm:border-x md:border-x-0">
        <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
          <strong className="text-4xl font-bold">
            <NumberFlow
              value={start ? loc : 0}
              transformTiming={{ duration: 2000, easing: "ease-out" }}
              format={{ notation: "compact" }}
            />
          </strong>
          <p className="text-muted-foreground font-mono text-sm">
            lines of code written
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
          <strong className="text-4xl font-bold">
            ~
            <NumberFlow
              value={start ? bugsFixed : 0}
              transformTiming={{ duration: 2000, easing: "ease-out" }}
              format={{ notation: "compact" }}
            />
          </strong>
          <p className="text-muted-foreground font-mono text-sm">
            bugs fixed & reviewed
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
          <strong className="text-4xl font-bold">
            <NumberFlow
              value={start ? problemsSolved : 0}
              transformTiming={{ duration: 2000, easing: "ease-out" }}
              format={{ notation: "compact" }}
            />
            +
          </strong>
          <p className="text-muted-foreground font-mono text-sm">
            DSA problems solved
          </p>
        </div>
      </div>
    </div>
  );
}
