export interface Award {
  slug: string;
  title: string;
  year?: string;
  description?: string;
}

// TODO(content): add confirmed awards here as they come in.
export const awards: Award[] = [];
