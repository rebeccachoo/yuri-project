import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-navy-deep">
              E
            </span>
            EVERY KID CAN
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            A New Jersey-based, youth-led 501(c)(3) nonprofit standardizing disability inclusion
            through sensory and social inclusion.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Stay in Touch</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a
                href="https://instagram.com/_everykidcan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Instagram: @_everykidcan
              </a>
            </li>
            <li>
              <a href="mailto:everykidcanplay@gmail.com" className="hover:text-accent">
                everykidcanplay@gmail.com
              </a>
            </li>
            <li>Donate: Zelle</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Explore</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-white/80">
            <Link href="/pillars" className="hover:text-accent">
              Our Pillars
            </Link>
            <Link href="/volunteer" className="hover:text-accent">
              Volunteer
            </Link>
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
            <Link href="/about" className="hover:text-accent">
              About Us
            </Link>
            <Link href="/how-to-help" className="hover:text-accent">
              How to Help
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-xs text-white/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Every Kid Can. All rights reserved.</p>
          <Link href="/admin" className="hover:text-white/70">
            Admin Log In
          </Link>
        </div>
      </div>
    </footer>
  );
}
