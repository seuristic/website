import { cn } from "@/lib/utils";
import React from "react";

export default function Logo({
  className,
  size,
  animate = true
}: {
  className?: string;
  size: number;
  animate?: boolean;
}) {
  return (
    <span className={cn("logo", animate && "logo-animate")}>
      <svg
        className={cn("text-foreground", className)}
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        viewBox="0 0 136 84"
        fill="none"
      >
        <path
          d="M8.03021 20.4251C8.03021 37.1487 8.03021 53.8723 8.03021 70.5959C8.03021 87.6327 5.4126 36.5893 5.4126 19.5525C5.4126 -8.16707 14.7602 34.6537 24.6084 43.9835C40.2424 58.7947 41.7943 12.2137 52.4811 5.97973C57.3188 3.15773 59.8491 78.885 63 78.885"
          stroke="currentColor"
          strokeWidth={10}
          strokeLinecap="round"
        />
        <path
          d="M116.775 13.813C100.117 13.813 89.9969 12.4608 81.2752 26.997C72.8188 41.0909 108.942 38.1278 115.586 38.1278C149.221 38.1278 121.504 79.753 92.46 67.3056"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
