type SectionHeadingProps = { eyebrow: string; title: string };

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-lime-300">{eyebrow}</p>
      <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h2>
    </div>
  );
}
