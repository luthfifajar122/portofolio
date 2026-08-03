import type { IconType } from "react-icons";

import SkillBar from "./SkillBar";

type Skill = {
  name: string;
  level: number;
  icon: IconType;
};

type SkillCardProps = {
  skill: Skill;
  delay?: number;
};

export default function SkillCard({ skill, delay }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex size-11 items-center justify-center rounded-xl bg-muted text-xl text-brand"
          >
            <Icon />
          </span>
          <h3 className="font-heading font-semibold">{skill.name}</h3>
        </div>
        <span className="text-sm font-semibold text-brand">{skill.level}%</span>
      </div>
      <div className="mt-4">
        <SkillBar level={skill.level} delay={delay} label={skill.name} />
      </div>
    </div>
  );
}
