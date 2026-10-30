"use client";

import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center border-2 border-foreground bg-primary px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-brutal-sm">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-heading text-3xl uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <span aria-hidden className="h-1.5 w-16 bg-brand" />
      {description ? (
        <p className="max-w-2xl font-medium text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
