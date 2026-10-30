import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function InfoCard({
  icon: Icon,
  title,
  children,
  className,
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "rounded-none border-2 border-foreground bg-card p-6 shadow-brutal",
        className,
      )}
    >
      <div
        aria-hidden
        className="mb-4 flex size-10 items-center justify-center rounded-none border-2 border-foreground bg-secondary text-secondary-foreground shadow-brutal-sm"
      >
        <Icon className="size-5" />
      </div>
      <h3 className="mb-2 font-heading text-lg font-bold uppercase tracking-tight">
        {title}
      </h3>
      {children}
    </div>
  );
}
