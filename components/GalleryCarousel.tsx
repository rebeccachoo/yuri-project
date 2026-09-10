"use client";

import { useRef } from "react";
import Image from "next/image";
import type { CarouselImage } from "@/components/ImageCarousel";

export default function GalleryCarousel({ images }: { images: CarouselImage[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.8 * direction, behavior: "smooth" });
  }

  if (images.length === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-3xl border border-ink/10 bg-plum text-center text-sm text-mist/50">
        Photos coming soon
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-4/3 w-72 shrink-0 snap-start overflow-hidden rounded-3xl border border-white/15 shadow-md sm:w-96"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, 384px"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll gallery left"
            className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-4 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-slate-800 shadow-lg transition-opacity hover:opacity-90 sm:flex"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll gallery right"
            className="absolute right-0 top-1/2 hidden h-10 w-10 translate-x-4 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-slate-800 shadow-lg transition-opacity hover:opacity-90 sm:flex"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
