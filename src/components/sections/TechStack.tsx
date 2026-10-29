import { SectionHeading } from "@/components/ui/SectionHeading";

const tools = ["TypeScript", "React", "Next.js", "Node.js", "Three.js", "UI design"];

export function TechStack() {
  return (
    <section className="px-6 py-32 sm:px-12">
      <SectionHeading eyebrow="04 — Toolkit" title="The tools I reach for." />
      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => <span className="rounded-full border border-white/20 px-5 py-3 text-white/70" key={tool}>{tool}</span>)}
      </div>
    </section>
  );
}
