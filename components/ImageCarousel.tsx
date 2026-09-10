"use client";

import { useState } from "react";
import Image from "next/image";

export interface CarouselImage {
  src: string;
  alt: string;
}

export default function ImageCarousel({
  images,
  label,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  images: CarouselImage[];
  label: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-3xl border border-white/15 bg-white/5 text-center text-sm text-mist/50">
        Photos of {label} coming soon
      </div>
    );
  }

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/15">
      <div className="relative aspect-video w-full bg-plum">
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label={`Previous photo of ${label}`}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={`Next photo of ${label}`}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1} of ${label}`}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
