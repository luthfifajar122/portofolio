"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, ExternalLink } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const fadeUp = (delay: number, disabled: boolean | null) => ({
  initial: disabled ? false : { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 right-1/4 size-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 size-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:min-h-[calc(100svh-4rem)]">
        <motion.div
          {...fadeUp(0.1, prefersReducedMotion)}
          className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-emerald-400"
            />
            {site.availability}
          </span>

          <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-brand via-sky-500 to-violet-500 bg-clip-text text-transparent">
              {site.firstName}
            </span>{" "}
            {site.lastName}
          </h1>

          <p className="max-w-md text-lg text-muted-foreground sm:text-xl">
            {site.role} who builds fast, accessible web experiences with
            Next.js, React, TypeScript, and Laravel.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="#projects"
              className={cn(
                buttonVariants({
                  size: "lg",
                  className: "h-11 px-6 text-base",
                }),
              )}
            >
              View Projects
              <ArrowRight data-icon="inline-end" />
            </Link>
            <Link
              href={site.resumeUrl}
              download
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "h-11 px-6 text-base",
                }),
              )}
            >
              <Download />
              Download CV
            </Link>
          </div>

          <div className="mt-2 flex items-center gap-1">
            <Link
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "ghost",
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
                variant: "ghost",
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
            className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand/40 via-brand/10 to-transparent blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-muted">
            <Image
              src="/profile-photo.jpeg"
              alt={`Portrait of ${site.name}`}
              width={480}
              height={560}
              priority
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>

          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -8, 0] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-8 bottom-10 flex items-center gap-2 rounded-xl border border-border bg-background/80 px-3 py-2 text-xs font-medium backdrop-blur-md"
          >
            <span
              aria-hidden
              className="size-2 rounded-full bg-emerald-400"
            />
            Open to internships
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
