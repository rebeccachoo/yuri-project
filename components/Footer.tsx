import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-plum text-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-flame-start via-flame-mid to-flame-end text-sm font-bold text-ink">
              E
            </span>
            Every Kid Can
          </p>
          <p className="mt-3 max-w-xs text-sm text-mist/50">
            A New Jersey-based, youth-led 501(c)(3) nonprofit standardizing disability inclusion
            through sensory and social inclusion.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Stay in Touch</p>
          <ul className="mt-3 space-y-2 text-sm text-mist/70">
            <li>
              <a
                href="https://instagram.com/_everykidcan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Instagram: @_everykidcan
              </a>
            </li>
            <li>
              <a href="mailto:everykidcanplay@gmail.com" className="hover:text-gold">
                everykidcanplay@gmail.com
              </a>
            </li>
            <li>Donate: Zelle</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Explore</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-mist/70">
            <Link href="/pillars" className="hover:text-gold">
              Our Pillars
            </Link>
            <Link href="/volunteer" className="hover:text-gold">
              Volunteer
            </Link>
            <Link href="/blog" className="hover:text-gold">
              Blog
            </Link>
            <Link href="/about" className="hover:text-gold">
              About Us
            </Link>
            <Link href="/how-to-help" className="hover:text-gold">
              How to Help
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-ink/10 px-6 py-4 text-xs text-mist/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Every Kid Can. All rights reserved.</p>
          <Link href="/admin" className="hover:text-mist/60">
            Admin Log In
          </Link>
        </div>
      </div>
    </footer>
  );
}
