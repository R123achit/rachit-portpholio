import { SectionHeading } from "@/components/ui/SectionHeading";

const skills = ["TypeScript", "React", "Next.js", "Node.js", "Three.js", "UI design"];

export function Skills() {
  return <section className="px-6 py-32 sm:px-12"><SectionHeading eyebrow="03 — Toolkit" title="The tools I reach for." /><div className="flex flex-wrap gap-3">{skills.map((skill) => <span className="rounded-full border border-white/20 px-5 py-3 text-white/70" key={skill}>{skill}</span>)}</div></section>;
}
