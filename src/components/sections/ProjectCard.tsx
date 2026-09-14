import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitBranch } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-semibold">
            {project.title}
          </h3>
          <span className="text-xs font-medium text-muted-foreground">
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
              className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
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
