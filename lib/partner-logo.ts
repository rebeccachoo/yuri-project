// Partner logos are served from public/images; remote hosts are not configured.
export function isPartnerLogoPath(value: string): boolean {
  return /^\/images\/(?:[a-z0-9_-]+\/)*[a-z0-9_.-]+\.(?:png|jpe?g|webp|avif|gif|svg)$/i.test(value);
}

export const partnerLogoError =
  "Use a local image path such as /images/partners/bccls.png for the logo. Put website or social profile links in the Website field, or leave the logo blank.";
