import type { PartnerRow } from "@/lib/supabase/types";
import { accentColorNames } from "@/components/colors";
import { Field, Select, SubmitButton } from "@/components/admin/FormFields";

export default function PartnerFormFields({ partner }: { partner?: PartnerRow }) {
  return (
    <div className="space-y-4">
      <Field label="Name" name="name" defaultValue={partner?.name} required />
      <Field
        label="Slug (letters, numbers, hyphens only)"
        name="slug"
        defaultValue={partner?.slug}
        required
      />
      <Field label="Website (optional)" name="website" defaultValue={partner?.website ?? ""} />
      <Field
        label="Logo path or URL (optional — e.g. /images/partners/bccls.png)"
        name="logo"
        defaultValue={partner?.logo ?? ""}
      />
      <Field
        label="Monogram (shown when there's no logo, e.g. BC)"
        name="monogram"
        defaultValue={partner?.monogram}
        required
      />
      <Select
        label="Accent Color"
        name="accentColor"
        defaultValue={partner?.accent_color ?? "navy"}
        options={accentColorNames}
        required
      />
      <SubmitButton />
    </div>
  );
}
