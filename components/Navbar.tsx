"use client";

import Link from "next/link";
import { useState } from "react";
import { pillars } from "@/data/pillars";

export default function Navbar() {
  const [pillarsOpen, setPillarsOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
            E
          </span>
          Every Kid Can
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <div
            className="relative"
            onMouseEnter={() => setPillarsOpen(true)}
            onMouseLeave={() => setPillarsOpen(false)}
          >
            <Link
              href="/pillars"
              className="flex items-center gap-1 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              Our Pillars
              <svg
                aria-hidden="true"
                viewBox="0 0 12 8"
                className={`h-2.5 w-2.5 transition-transform ${pillarsOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </Link>
            {pillarsOpen && (
              <div className="absolute left-0 top-full w-56 rounded-lg border border-zinc-200 bg-white py-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                {pillars.map((pillar) => (
                  <Link
                    key={pillar.slug}
                    href={`/pillars?tab=${pillar.slug}`}
                    className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                  >
                    {pillar.navLabel}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/volunteer" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
            Volunteer
          </Link>
          <Link href="/blog" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
            Blog
          </Link>
          <Link href="/about" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
