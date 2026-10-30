"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex size-9 items-center justify-center rounded-none border-2 border-foreground bg-card text-foreground shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none motion-reduce:transform-none motion-reduce:transition-none"
    >
      {isMounted ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={
              prefersReducedMotion
                ? false
                : { rotate: -90, opacity: 0, scale: 0.6 }
            }
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={
              prefersReducedMotion
                ? undefined
                : { rotate: 90, opacity: 0, scale: 0.6 }
            }
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </motion.span>
        </AnimatePresence>
      ) : (
        <span className="size-4" />
      )}
    </button>
  );
}
