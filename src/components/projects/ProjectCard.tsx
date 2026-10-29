
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/types/project";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="group border-t border-white/15 py-6"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-[#151819]">
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-[#B5FF65]">
              {project.number} / {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-medium">
              {project.name}
            </h3>
            <p className="mt-2 max-w-lg text-sm text-white/60">
              {project.summary}
            </p>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-white/70"
            >
              {technology}
            </li>
          ))}
        </ul>
      </Link>
    </motion.article>
  );
}
