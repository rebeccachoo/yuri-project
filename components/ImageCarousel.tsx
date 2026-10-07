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
  fit = "cover",
  variant = "default",
}: {
  images: CarouselImage[];
  label: string;
  sizes?: string;
  fit?: "cover" | "contain";
  variant?: "default" | "gallery";
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-3xl border border-ink/10 bg-plum text-center text-sm text-mist/50">
        Photos of {label} coming soon
      </div>
    );
  }

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  if (variant === "gallery") {
    return (
      <div
        role="region"
        aria-label={`${label} photo gallery`}
        className="min-w-0 overflow-hidden rounded-3xl border border-ink/10 bg-white/80 p-2 shadow-xl shadow-ink/5 sm:p-4"
      >
        <div className="relative h-[min(65svh,30rem)] min-h-72 overflow-hidden rounded-2xl bg-ink">
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-contain"
            sizes={sizes}
          />
        </div>
        <div className="flex items-center justify-between gap-4 px-2 py-4 sm:px-1">
          <p aria-live="polite" aria-atomic="true" className="text-sm font-medium text-mist">
            <span className="font-semibold text-ink">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-mist/40">/</span>
            {String(images.length).padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={goPrev} aria-label={`Previous photo of ${label}`} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-xl text-ink transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" onClick={goNext} aria-label={`Next photo of ${label}`} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gold text-xl text-ink transition-colors hover:bg-gold/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto px-1 pt-1 pb-3" aria-label="Choose a photo">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View photo ${i + 1}: ${image.alt}`}
              aria-pressed={i === index}
              className={`relative h-12 w-16 shrink-0 cursor-pointer overflow-hidden rounded-lg transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:h-14 sm:w-20 ${i === index ? "ring-2 ring-gold ring-offset-2" : "opacity-60 hover:opacity-100"}`}
            >
              <Image src={image.src} alt="" fill sizes="(max-width: 639px) 64px, 80px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/15 shadow-md">
      <div className="relative aspect-video w-full bg-plum">
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className={fit === "contain" ? "object-contain" : "object-cover"}
          sizes={sizes}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label={`Previous photo of ${label}`}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow hover:bg-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={`Next photo of ${label}`}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow hover:bg-white"
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
