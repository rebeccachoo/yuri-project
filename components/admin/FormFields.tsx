export function Field({
  label,
  name,
  defaultValue,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-navy-deep">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy-deep focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
      />
    </div>
  );
}

export function TextArea({
  label,
  name,
  defaultValue,
  required,
  rows = 5,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-navy-deep">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        required={required}
        className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy-deep focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
      />
    </div>
  );
}

export function Select({
  label,
  name,
  defaultValue,
  options,
  required,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-navy-deep">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy-deep focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function SubmitButton({ label = "Save" }: { label?: string }) {
  return (
    <button
      type="submit"
      className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-navy-deep transition-colors hover:bg-cream"
    >
      {label}
    </button>
  );
}
