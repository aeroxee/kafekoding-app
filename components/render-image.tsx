"use client";

import Image from "next/image";

interface RenderImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onClick?: () => void;
}

export default function RenderImage({
  src,
  alt,
  className,
  width,
  height,
  placeholder,
  blurDataURL,
  onClick,
}: RenderImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onClick={onClick}
    />
  );
}
