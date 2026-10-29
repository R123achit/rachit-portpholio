import type { Project } from "@/types/project";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <article className="mx-auto max-w-4xl px-6 py-40 sm:px-12">
      <p className="text-sm uppercase tracking-[0.25em] text-lime-300">
        {project.number} / {project.category}
      </p>
      <h1 className="mt-6 text-6xl font-semibold">{project.name}</h1>
      <p className="mt-8 max-w-2xl text-2xl text-white/60">
        {project.summary}
      </p>
      <div className="mt-12 flex flex-wrap gap-3">
        {project.technologies.map((technology) => (
          <span
            className="rounded-full border border-white/20 px-4 py-2 text-sm"
            key={technology}
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
