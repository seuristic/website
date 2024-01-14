import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full items-center justify-center gap-1 border-t border-base-900 p-2">
      <div className="flex items-center gap-2 text-base-700">
        {new Date().getFullYear()}
      </div>
    </div>
  );
}
