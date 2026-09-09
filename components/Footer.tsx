import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">Every Kid Can</p>
          <p className="mt-1 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
            A New Jersey-based, youth-led 501(c)(3) nonprofit standardizing disability inclusion
            through sensory and social inclusion.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Stay in Touch
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <a
                href="https://instagram.com/_everykidcan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                Instagram: @_everykidcan
              </a>
            </li>
            <li>
              <a
                href="mailto:everykidcanplay@gmail.com"
                className="hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                Email: everykidcanplay@gmail.com
              </a>
            </li>
            <li>Donate: Zelle</li>
          </ul>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/pillars" className="hover:text-zinc-950 dark:hover:text-zinc-50">
            Our Pillars
          </Link>
          <Link href="/volunteer" className="hover:text-zinc-950 dark:hover:text-zinc-50">
            Volunteer
          </Link>
          <Link href="/blog" className="hover:text-zinc-950 dark:hover:text-zinc-50">
            Blog
          </Link>
          <Link href="/about" className="hover:text-zinc-950 dark:hover:text-zinc-50">
            About Us
          </Link>
        </nav>
      </div>
      <div className="border-t border-zinc-200 px-6 py-4 text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
        <p className="mx-auto max-w-6xl">© {new Date().getFullYear()} Every Kid Can. All rights reserved.</p>
      </div>
    </footer>
  );
}
