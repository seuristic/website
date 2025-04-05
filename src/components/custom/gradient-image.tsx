import Image, { StaticImageData } from "next/image";

interface GradientImageProps {
  src: StaticImageData | string;
  alt?: string;
  size?: number;
  padding?: number;
}

export function GradientImage({
  src,
  alt = "",
  size = 192,
  padding = 8
}: GradientImageProps) {
  return (
    <div className="from-background via-border to-border rounded-[50px] bg-gradient-to-br p-[2px]">
      <div className="bg-background shrink-0 rounded-[48px] p-2">
        <div
          className="relative overflow-hidden rounded-[40px] shadow-xl"
          style={{
            width: size,
            height: size,
            padding: padding
          }}
        >
          <Image
            src={src}
            alt={alt}
            className="object-cover"
            placeholder="blur"
            fill
          />
        </div>
      </div>
    </div>
  );
}
