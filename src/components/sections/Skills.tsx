"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
} from "react-icons/bi";

import {
  SiReact,
  SiPhp,
  SiMysql,
  SiLaravel,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: BiLogoHtml5,
  },
  {
    name: "CSS",
    icon: BiLogoCss3,
  },
  {
    name: "JavaScript",
    icon: BiLogoJavascript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "PHP",
    icon: SiPhp,
  },
  {
    name: "Laravel",
    icon: SiLaravel,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
];

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-brand">
            Technologies
          </p>

          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Skills
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Technologies and tools I use to build modern,
            responsive, and accessible web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-background p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-muted/50 hover:shadow-sm"
              >
                <Icon className="size-9 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-brand" />

                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}