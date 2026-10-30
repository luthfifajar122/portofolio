import Image from "next/image";
import Link from "next/link";
import { GitBranch } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-none border-2 border-foreground bg-card shadow-brutal transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg motion-reduce:transform-none motion-reduce:transition-none">
      <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-foreground">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-bold uppercase tracking-tight">
            {project.title}
          </h3>
          <span className="inline-flex border-2 border-foreground bg-primary px-2 py-0.5 font-heading text-[0.7rem] font-bold uppercase tracking-wide text-primary-foreground">
            {project.year}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul
          aria-label={`Technologies used in ${project.title}`}
          className="flex flex-wrap gap-2"
        >
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="border-2 border-foreground bg-secondary px-2 py-1 font-heading text-[0.7rem] font-bold uppercase tracking-wide text-secondary-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3 pt-2">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "flex-1",
            })}
          >
            <GitBranch />
            GitHub
          </Link>
        </div>
      </div>
    </article>
  );
}
