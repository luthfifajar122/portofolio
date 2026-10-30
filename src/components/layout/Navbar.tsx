"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const prefersReducedMotion = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const panel = document.querySelector<HTMLElement>("#mobile-menu");
    if (!panel) return;

    const links = panel.querySelectorAll<HTMLAnchorElement>("a");
    const firstLink = links[0];
    const lastLink = links[links.length - 1];
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key === "Tab" && links.length > 0) {
        const isFirst = document.activeElement === firstLink;
        const isLast = document.activeElement === lastLink;
        if (event.shiftKey && isFirst) {
          event.preventDefault();
          lastLink.focus();
        } else if (!event.shiftKey && isLast) {
          event.preventDefault();
          firstLink.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const linkClasses = (active: boolean) =>
    cn(
      "inline-flex items-center rounded-none border-2 px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-wide transition-all",
      active
        ? "border-foreground bg-primary text-primary-foreground shadow-brutal-sm"
        : "border-transparent text-muted-foreground hover:border-foreground hover:bg-muted hover:text-foreground",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
        scrolled
          ? "border-b-4 border-foreground bg-background/95 backdrop-blur-md"
          : "border-b-4 border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          aria-label={`${site.name} – home`}
          className="font-heading text-lg font-bold uppercase tracking-tight"
        >
          {site.firstName}
          <span className="text-brand">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={
                    activeSection === link.href ? "true" : undefined
                  }
                  className={linkClasses(activeSection === link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={site.resumeUrl}
            download
            className={buttonVariants({
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            <Download className="size-4" />
            Download CV
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-none border-2 border-foreground bg-card text-foreground shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-b-4 border-foreground bg-background md:hidden"
          >
            <ul className="space-y-2 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setMenuOpen(false);
                      toggleRef.current?.focus();
                    }}
                    className={cn(
                      linkClasses(activeSection === link.href),
                      "flex w-full",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
