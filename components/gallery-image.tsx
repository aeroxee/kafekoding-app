"use client";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import { useState } from "react";
import RenderImage from "./render-image";

interface imageType {
  title: string;
  description: string;
  src: string;
  blurDataURL: string;
}

interface GalleryImageProps {
  images: imageType[];
}

export default function GalleryImage({ images }: GalleryImageProps) {
  const [open, setOpen] = useState(-1);

  return (
    <>
      <div className="columns-3 gap-2">
        {images.map((image, index) => (
          <RenderImage
            key={index}
            src={image.src}
            alt={image.title}
            width={1200}
            height={800}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            className="w-full h-auto mb-2 cursor-pointer rounded-md"
            onClick={() => setOpen(index)}
          />
        ))}
      </div>

      <Lightbox
        slides={images}
        open={open >= 0}
        index={open}
        close={() => setOpen(-1)}
        plugins={[Captions]}
      />
    </>
  );
}
