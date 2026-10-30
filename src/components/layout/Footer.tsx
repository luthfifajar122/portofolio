import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-foreground bg-background">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Link
            href="/"
            className="font-heading text-lg font-bold uppercase tracking-tight"
          >
            {site.firstName}
            <span className="text-brand">.</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {site.role} based in {site.location}, building fast and
            accessible web experiences.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-2 sm:max-w-sm"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-none border-2 border-transparent px-2 py-1 font-heading text-xs font-bold uppercase tracking-wide text-muted-foreground transition-all hover:border-foreground hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex w-fit items-center gap-2 rounded-none border-2 border-foreground bg-card px-3 py-2 text-sm font-medium shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-brutal motion-reduce:transform-none motion-reduce:transition-none"
          >
            <Mail className="size-4" />
            {site.email}
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-none border-2 border-foreground bg-card px-3 py-2 text-sm font-medium shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-brutal motion-reduce:transform-none motion-reduce:transition-none"
          >
            <ExternalLink className="size-4" />
            GitHub
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-none border-2 border-foreground bg-card px-3 py-2 text-sm font-medium shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-brutal motion-reduce:transform-none motion-reduce:transition-none"
          >
            <ExternalLink className="size-4" />
            LinkedIn
          </a>
        </div>
      </Container>

      <div className="border-t-4 border-foreground">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Designed & built with Next.js and Tailwind CSS.</p>
        </Container>
      </div>
    </footer>
  );
}
