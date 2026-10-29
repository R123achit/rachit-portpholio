import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SelectedProjects() {
  return (
    <section id="projects" className="px-6 py-32 sm:px-12">
      <SectionHeading eyebrow="02 — Selected work" title="A few things I've made." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
