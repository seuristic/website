"use client";

import * as React from "react";
import NumberFlow from "@number-flow/react";

const LOC = 82570;
const BUGS_FIXED = 1695;
const PROBLEMS_SOLVED = 780;

export default function HomeMetrics() {
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    setStart(true);
  }, []);

  return (
    <div className="custom-container mt-20 sm:mt-0">
      <div className="grid h-96 grid-rows-3 divide-y border border-b-0 sm:h-36 sm:grid-cols-3 sm:grid-rows-1 sm:divide-x sm:divide-y-0">
        <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
          <strong className="text-4xl font-bold">
            <NumberFlow
              value={start ? LOC : 0}
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
            <NumberFlow
              value={start ? BUGS_FIXED : 0}
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
              value={start ? PROBLEMS_SOLVED : 0}
              transformTiming={{ duration: 2000, easing: "ease-out" }}
              format={{ notation: "compact" }}
            />
          </strong>
          <p className="text-muted-foreground font-mono text-sm">
            dsa + cp problems
          </p>
        </div>
      </div>
    </div>
  );
}
