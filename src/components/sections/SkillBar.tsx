"use client";

import { motion, useReducedMotion } from "framer-motion";

type SkillBarProps = {
  level: number;
  delay?: number;
  label: string;
};

export default function SkillBar({ level, delay = 0.15, label }: SkillBarProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      role="progressbar"
      aria-label={`${label} proficiency`}
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-2 overflow-hidden rounded-full bg-muted"
    >
      <motion.div
        initial={
          prefersReducedMotion ? { width: `${level}%` } : { width: 0 }
        }
        whileInView={
          prefersReducedMotion ? undefined : { width: `${level}%` }
        }
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay }}
        className="h-full rounded-full bg-gradient-to-r from-brand via-sky-500 to-violet-500"
      />
    </div>
  );
}
