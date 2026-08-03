import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  { name: "HTML", level: 90, icon: SiHtml5 },
  { name: "CSS", level: 85, icon: SiCss },
  { name: "JavaScript", level: 80, icon: SiJavascript },
  { name: "TypeScript", level: 70, icon: SiTypescript },
  { name: "PHP", level: 75, icon: SiPhp },
  { name: "Laravel", level: 80, icon: SiLaravel },
  { name: "React", level: 75, icon: SiReact },
  { name: "Next.js", level: 70, icon: SiNextdotjs },
  { name: "MySQL", level: 75, icon: SiMysql },
  { name: "Git", level: 80, icon: SiGit },
] as const;
