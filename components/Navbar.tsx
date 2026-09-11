"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { pillars } from "@/data/pillars";
import Image from "next/image";

export default function Navbar({ isAdmin = false }: { isAdmin?: boolean }) {
  const [pillarsOpen, setPillarsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 ${scrolled ? "backdrop-blur-sm" : ""}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex flex-row items-center gap-2 font-serif text-lg font-semibold tracking-tight text-mist"
        >
          <Image
            src="/images/ekc_logo.png"
            alt="Every Kid Can logo"
            width={60}
            height={60}
            loading="eager"
            className="h-15 w-15"
          />

          <span className="hidden sm:inline">Every Kid Can</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium tracking-wide text-mist/80 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setPillarsOpen(true)}
            onMouseLeave={() => setPillarsOpen(false)}
          >
            <Link
              href="/pillars"
              className="flex items-center gap-1 transition-colors hover:text-gold"
            >
              Our Purpose
              <svg
                aria-hidden="true"
                viewBox="0 0 12 8"
                className={`h-2.5 w-2.5 transition-transform ${pillarsOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1.5 6 6.5 11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </Link>
            {pillarsOpen && (
              <div className="absolute left-0 top-full w-56 rounded-xl border border-ink/10 bg-plum py-2 shadow-xl">
                {pillars.map((pillar) => (
                  <Link
                    key={pillar.slug}
                    href={`/pillars?tab=${pillar.slug}`}
                    className="block px-4 py-2 text-sm text-mist/70 hover:bg-ink/5 hover:text-gold"
                  >
                    {pillar.navLabel}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/volunteer" className="transition-colors hover:text-gold">
            Volunteer
          </Link>
          <Link href="/blog" className="transition-colors hover:text-gold">
            Blog
          </Link>
          <Link href="/about" className="transition-colors hover:text-gold">
            About Us
          </Link>
          <Link href="/donate" className="transition-colors hover:text-gold">
            Donations
          </Link>
          <Link href="/contact" className="transition-colors hover:text-gold">
            Contact Us
          </Link>
          {isAdmin && (
            <Link href="/admin" className="transition-colors hover:text-gold">
              Admin Dashboard
            </Link>
          )}
          <Link
            href="/how-to-help"
            className="rounded-full bg-gold px-4 py-2 font-semibold text-ink transition-opacity hover:opacity-90"
          >
            How To Help
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
            className={`h-0.5 w-6 rounded-full bg-mist transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-mist transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-mist transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-base px-6 py-4 text-sm font-medium tracking-wide text-mist/80 lg:hidden">
          <Link
            href="/pillars"
            className="py-2 hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Our Purpose
          </Link>
          <Link
            href="/volunteer"
            className="py-2 hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Volunteer
          </Link>
          <Link
            href="/blog"
            className="py-2 hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="py-2 hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/donate"
            className="py-2 hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Donations
          </Link>
          <Link
            href="/contact"
            className="py-2 hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
          {isAdmin && (
            <Link
              href="/admin"
              className="py-2 hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              Admin Dashboard
            </Link>
          )}
          <Link
            href="/how-to-help"
            onClick={() => setMobileOpen(false)}
            className="mt-2 w-fit rounded-full bg-gold px-4 py-2 font-semibold text-ink"
          >
            How To Help
          </Link>
        </nav>
      )}
    </header>
  );
}
