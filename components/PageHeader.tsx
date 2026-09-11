export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-28">
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          {eyebrow}
        </span>
      )}
      <h1
        className={`font-serif text-4xl font-semibold tracking-tight text-mist sm:text-5xl ${
          eyebrow ? "mt-4" : ""
        }`}
      >
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-mist/70">{description}</p>
      )}
    </div>
  );
}
