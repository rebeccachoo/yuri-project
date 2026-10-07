export const partnerLogoBucket = "partner-logos";
export const maxPartnerLogoBytes = 2 * 1024 * 1024;

export function isPartnerLogoPath(value: string): boolean {
  if (/^\/images\/(?:[a-z0-9_-]+\/)*[a-z0-9_.-]+\.(?:png|jpe?g|webp|avif|gif|svg)$/i.test(value)) return true;
  try {
    const url = new URL(value);
    const base = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "");
    return url.origin === base.origin && url.protocol === "https:" &&
      !url.username && !url.password && !url.search && !url.hash &&
      /^\/storage\/v1\/object\/public\/partner-logos\/[a-z0-9-]+\.(png|jpg|webp)$/.test(url.pathname);
  } catch {
    return false;
  }
}

export function detectPartnerLogoType(bytes: Uint8Array) {
  if (bytes.length >= 8 && [137,80,78,71,13,10,26,10].every((n, i) => bytes[i] === n))
    return { extension: "png", contentType: "image/png" };
  if (bytes.length >= 3 && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255)
    return { extension: "jpg", contentType: "image/jpeg" };
  if (bytes.length >= 12 && String.fromCharCode(...bytes.slice(0,4)) === "RIFF" &&
      String.fromCharCode(...bytes.slice(8,12)) === "WEBP")
    return { extension: "webp", contentType: "image/webp" };
  return null;
}
