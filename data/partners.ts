export interface Partner {
  slug: string;
  name: string;
  website?: string;
  logo?: string;
  monogram: string;
  accentColor: string;
}

// TODO(content): only BCCLS has been confirmed so far — add the rest of our
// partner organizations here as they're confirmed. `logo` is optional; if a
// partner doesn't have a logo file yet, it falls back to the `monogram` chip.
export const partners: Partner[] = [
  {
    slug: "bccls",
    name: "BCCLS",
    website: "https://www.bccls.org",
    logo: "/images/partners/bccls.png",
    monogram: "BC",
    accentColor: "sky",
  },
];
