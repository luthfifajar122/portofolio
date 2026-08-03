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
      className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted"
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
            {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </motion.span>
        </AnimatePresence>
      ) : (
        <span className="size-5" />
      )}
    </button>
  );
}
