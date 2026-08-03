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
    <div className={cn("rounded-2xl border border-border bg-card p-6", className)}>
      <div
        aria-hidden
        className="mb-4 flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand"
      >
        <Icon className="size-5" />
      </div>
      <h3 className="mb-2 font-heading text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
}
