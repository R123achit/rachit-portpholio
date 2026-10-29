import type { Project } from "@/data/projects";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return <article className="mx-auto max-w-4xl px-6 py-40 sm:px-12"><p className="text-sm uppercase tracking-[0.25em] text-lime-300">{project.year}</p><h1 className="mt-6 text-6xl font-semibold">{project.title}</h1><p className="mt-8 max-w-2xl text-2xl text-white/60">{project.details}</p><div className="mt-12 flex gap-3">{project.tags.map((tag) => <span className="rounded-full border border-white/20 px-4 py-2 text-sm" key={tag}>{tag}</span>)}</div></article>;
}
