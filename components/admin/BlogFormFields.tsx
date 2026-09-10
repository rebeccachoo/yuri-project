import type { BlogPostRow } from "@/lib/supabase/types";
import { blogCategories } from "@/data/blog-categories";
import { accentColorNames } from "@/components/colors";
import { Field, TextArea, Select, SubmitButton } from "@/components/admin/FormFields";

export default function BlogFormFields({ post }: { post?: BlogPostRow }) {
  return (
    <div className="space-y-4">
      <Field label="Title" name="title" defaultValue={post?.title} required />
      <Field
        label="Slug (URL — letters, numbers, hyphens only)"
        name="slug"
        defaultValue={post?.slug}
        required
      />
      <Select
        label="Category"
        name="category"
        defaultValue={post?.category}
        options={blogCategories}
        required
      />
      <TextArea label="Excerpt" name="excerpt" defaultValue={post?.excerpt} rows={2} required />
      <TextArea
        label="Content (one paragraph per line)"
        name="content"
        defaultValue={post?.content.join("\n")}
        rows={10}
        required
      />
      <Field label="Author" name="author" defaultValue={post?.author} required />
      <Field label="Date" name="date" type="date" defaultValue={post?.date} required />
      <Field
        label="Read Time (e.g. 3 min read)"
        name="readTime"
        defaultValue={post?.read_time}
        required
      />
      <Select
        label="Accent Color"
        name="accentColor"
        defaultValue={post?.accent_color ?? "navy"}
        options={accentColorNames}
        required
      />
      <SubmitButton />
    </div>
  );
}
