"use client";

import Link from "next/link";
import { useState } from "react";
import { pillars } from "@/data/pillars";

export default function Navbar() {
  const [pillarsOpen, setPillarsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-white"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-navy-deep">
            E
          </span>
          <span className="hidden sm:inline">EVERY KID CAN</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold tracking-wide text-white lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setPillarsOpen(true)}
            onMouseLeave={() => setPillarsOpen(false)}
          >
            <Link href="/pillars" className="flex items-center gap-1 transition-colors hover:text-accent">
              OUR PILLARS
              <svg
                aria-hidden="true"
                viewBox="0 0 12 8"
                className={`h-2.5 w-2.5 transition-transform ${pillarsOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </Link>
            {pillarsOpen && (
              <div className="absolute left-0 top-full w-56 rounded-lg border border-white/10 bg-navy py-2 shadow-lg">
                {pillars.map((pillar) => (
                  <Link
                    key={pillar.slug}
                    href={`/pillars?tab=${pillar.slug}`}
                    className="block px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-accent"
                  >
                    {pillar.navLabel}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/volunteer" className="transition-colors hover:text-accent">
            VOLUNTEER
          </Link>
          <Link href="/blog" className="transition-colors hover:text-accent">
            BLOG
          </Link>
          <Link href="/about" className="transition-colors hover:text-accent">
            ABOUT US
          </Link>
          <Link
            href="/#stay-in-touch"
            className="rounded-full bg-accent px-4 py-2 text-navy-deep transition-colors hover:bg-cream"
          >
            DONATE
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 rounded-full bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 text-sm font-semibold tracking-wide text-white lg:hidden">
          <Link href="/pillars" className="py-2 hover:text-accent" onClick={() => setMobileOpen(false)}>
            OUR PILLARS
          </Link>
          <Link href="/volunteer" className="py-2 hover:text-accent" onClick={() => setMobileOpen(false)}>
            VOLUNTEER
          </Link>
          <Link href="/blog" className="py-2 hover:text-accent" onClick={() => setMobileOpen(false)}>
            BLOG
          </Link>
          <Link href="/about" className="py-2 hover:text-accent" onClick={() => setMobileOpen(false)}>
            ABOUT US
          </Link>
          <Link
            href="/#stay-in-touch"
            onClick={() => setMobileOpen(false)}
            className="mt-2 w-fit rounded-full bg-accent px-4 py-2 text-navy-deep"
          >
            DONATE
          </Link>
        </nav>
      )}
    </header>
  );
}
