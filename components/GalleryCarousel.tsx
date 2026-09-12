"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { CarouselImage } from "@/components/ImageCarousel";

function subscribeNoop() {
  return () => {};
}

export default function GalleryCarousel({ images }: { images: CarouselImage[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // Portals need a real DOM (document.body) to render into, which doesn't
  // exist during SSR — useSyncExternalStore gives the correct "false on the
  // server, true once hydrated on the client" value without calling
  // setState from an effect.
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );

  function scrollByAmount(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.8 * direction, behavior: "smooth" });
  }

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      } else if (event.key === "ArrowLeft") {
        setSelectedIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      } else if (event.key === "ArrowRight") {
        setSelectedIndex((i) => (i === null ? i : (i + 1) % images.length));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

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
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open photo: ${image.alt}`}
            className="relative aspect-4/3 w-72 shrink-0 cursor-pointer snap-start overflow-hidden rounded-3xl border border-white/15 shadow-md transition-opacity hover:opacity-90 sm:w-96"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, 384px"
            />
          </button>
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

      {mounted && selectedIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close photo"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-xl text-slate-800 shadow-lg hover:bg-white sm:right-8 sm:top-8"
            >
              ×
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                  }}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg hover:bg-white sm:left-6"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedIndex((i) => (i === null ? i : (i + 1) % images.length));
                  }}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg hover:bg-white sm:right-6"
                >
                  ›
                </button>
              </>
            )}

            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              width={1600}
              height={1200}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
              sizes="90vw"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </div>
  );
}
