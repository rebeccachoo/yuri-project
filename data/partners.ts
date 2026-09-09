export interface Partner {
  slug: string;
  name: string;
  website?: string;
  monogram: string;
  accentColor: string;
}

// TODO(content): only BCCLS has been confirmed so far — add the rest of our
// partner organizations here as they're confirmed.
export const partners: Partner[] = [
  {
    slug: "bccls",
    name: "BCCLS",
    website: "https://www.bccls.org",
    monogram: "BC",
    accentColor: "sky",
  },
];
