"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { isPartnerLogoPath, maxPartnerLogoBytes } from "@/lib/partner-logo";

export default function PartnerLogoUpload({ currentLogo }: { currentLogo?: string | null }) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [remove, setRemove] = useState(false);
  const [error, setError] = useState("");
  const { pending } = useFormStatus();
  useEffect(() => {
    return () => { if (preview) URL.revokeObjectURL(preview); };
  }, [preview]);
  const image = file ? preview : !remove && currentLogo && isPartnerLogoPath(currentLogo) ? currentLogo : null;
  return (
    <div className="space-y-3">
      <label htmlFor="logoFile" className="block text-sm font-bold text-navy-deep">Logo image (optional)</label>
      {image && (
        // Blob previews and existing public logos are displayed directly in the editor.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="Partner logo preview" className="h-28 w-48 rounded-lg border border-navy/20 bg-white p-2 object-contain" />
      )}
      <input
        id="logoFile" name="logoFile" type="file" accept="image/png,image/jpeg,image/webp"
        disabled={pending} aria-describedby="logo-help logo-error"
        className="block w-full rounded-lg border border-navy/20 bg-white p-3 text-sm text-navy-deep file:mr-4 file:rounded-full file:border-0 file:bg-navy file:px-4 file:py-2 file:text-white"
        onChange={(event) => {
          const selected = event.target.files?.[0] ?? null;
          if (selected && (selected.size > maxPartnerLogoBytes || !["image/png", "image/jpeg", "image/webp"].includes(selected.type))) {
            setError("Choose a PNG, JPG, or WebP image no larger than 2 MB.");
            event.target.value = ""; setFile(null); setPreview(null); return;
          }
          setError(""); setFile(selected); setPreview(selected ? URL.createObjectURL(selected) : null);
          if (selected) setRemove(false);
        }}
      />
      <p id="logo-help" className="text-sm text-navy-deep/60">PNG, JPG, or WebP, up to 2 MB. The image uploads when you save.</p>
      <p id="logo-error" role="alert" className="text-sm text-rose-600">{error}</p>
      {currentLogo && !file && (
        <label className="flex items-center gap-2 text-sm text-navy-deep">
          <input type="checkbox" name="removeLogo" checked={remove} disabled={pending} onChange={(event) => setRemove(event.target.checked)} />
          Remove current logo
        </label>
      )}
    </div>
  );
}

export function PartnerSubmitButton() {
  const { pending } = useFormStatus();
  return <button type="submit" disabled={pending} className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-navy-deep transition-colors hover:bg-cream disabled:opacity-60">{pending ? "Saving…" : "Save"}</button>;
}
