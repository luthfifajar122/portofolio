"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, ExternalLink } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

const fadeUp = (delay: number, disabled: boolean | null) => ({
  initial: disabled ? false : { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-28 -right-16 size-40 rotate-12 border-4 border-foreground bg-secondary/60" />
        <div className="absolute bottom-24 -left-20 size-48 rounded-full border-4 border-foreground bg-primary/70" />
      </div>

      <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:min-h-[calc(100svh-4rem)]">
        <motion.div
          {...fadeUp(0.1, prefersReducedMotion)}
          className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-none border-2 border-foreground bg-primary px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-brutal-sm">
            <span
              aria-hidden
              className="size-2 rounded-full border border-foreground bg-emerald-400"
            />
            {site.availability}
          </span>

          <h1 className="font-heading text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="inline-block border-4 border-foreground bg-brand px-2 pb-1 text-brand-foreground shadow-brutal">
              {site.firstName}
            </span>{" "}
            <span className="inline-block">{site.lastName}</span>
          </h1>

          <p className="max-w-md font-medium text-muted-foreground sm:text-lg">
            {site.role} who builds fast, accessible web experiences with
            Next.js, React, TypeScript, and Laravel.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="#projects"
              className={buttonVariants({
                size: "lg",
                className: "h-12 px-6",
              })}
            >
              View Projects
              <ArrowRight data-icon="inline-end" />
            </Link>
            <Link
              href={site.resumeUrl}
              download
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "h-12 px-6",
              })}
            >
              <Download />
              Download CV
            </Link>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Link
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}
            >
              <ExternalLink />
              GitHub
            </Link>
            <Link
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}
            >
              <ExternalLink />
              LinkedIn
            </Link>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.3, prefersReducedMotion)}
          className="relative mx-auto w-60 sm:w-72 md:w-80"
        >
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 border-4 border-foreground bg-primary"
          />
          <div className="relative -rotate-2 border-4 border-foreground bg-card p-2 shadow-brutal-xl">
            <Image
              src="/profile-photo.jpeg"
              alt={`Portrait of ${site.name}`}
              width={480}
              height={560}
              priority
              className="aspect-[4/5] h-auto w-full border-2 border-foreground object-cover"
            />
          </div>

          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-8 bottom-10 flex items-center gap-2 border-2 border-foreground bg-secondary px-3 py-2 font-heading text-xs font-bold uppercase tracking-wide text-secondary-foreground shadow-brutal-sm"
          >
            <span
              aria-hidden
              className="size-2 rounded-full border border-foreground bg-emerald-400"
            />
            Open to internships
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
