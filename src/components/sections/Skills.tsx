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
      className="scroll-mt-24 border-t-4 border-foreground py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-4 font-heading text-3xl uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
            Skills
          </h2>

          <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
            Technologies and tools I use to build modern,
            responsive, and accessible web applications.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-none border-2 border-foreground bg-card p-5 text-center text-foreground shadow-brutal transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-brutal-lg motion-reduce:transform-none motion-reduce:transition-none"
              >
                <Icon className="size-9 text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-foreground" />

                <span className="font-heading text-xs font-bold uppercase tracking-wide">
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
