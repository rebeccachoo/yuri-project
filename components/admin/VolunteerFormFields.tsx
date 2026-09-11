import type { VolunteerRow } from "@/lib/supabase/types";
import { Field, TextArea, SubmitButton } from "@/components/admin/FormFields";

export default function VolunteerFormFields({
  volunteer,
}: {
  volunteer?: VolunteerRow;
}) {
  return (
    <div className="space-y-4">
      <Field
        label="Organization Name"
        name="organizationName"
        defaultValue={volunteer?.organization_name}
        required
      />
      <Field
        label="Title"
        name="title"
        defaultValue={volunteer?.title}
        required
      />
      <Field
        label="Slug (URL — letters, numbers, hyphens only)"
        name="slug"
        defaultValue={volunteer?.slug}
        required
      />
      <Field
        label="Location"
        name="location"
        defaultValue={volunteer?.location}
        required
      />
      <Field label="Time" name="date" defaultValue={volunteer?.date} required />
      <Field
        label="Age Requirement"
        name="ageRequirement"
        defaultValue={volunteer?.age_requirement}
        required
      />
      <TextArea
        label="Description"
        name="description"
        defaultValue={volunteer?.description}
        required
      />
      <Field
        label="Apply URL (optional)"
        name="applyUrl"
        defaultValue={volunteer?.apply_url ?? ""}
      />
      <SubmitButton />
    </div>
  );
}
