export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2024 – Present",
    description:
      "Designing and building small-to-medium websites for clients: landing pages, booking systems, and simple e-commerce stores.",
    highlights: [
      "Reduced average page load time by ~40% through image optimization and code splitting",
      "Built reusable component libraries with Tailwind CSS to speed up iteration",
    ],
  },
  {
    role: "Web Development Team Member",
    company: "Campus Organization",
    period: "2023 – 2024",
    description:
      "Developed and maintained web applications for campus events and information systems as part of a student team.",
    highlights: [
      "Collaborated in a 4-person team using Git feature-branch workflow and code review",
      "Implemented authentication and role-based access control with Laravel",
      "Improved accessibility of public pages to meet WCAG AA checkpoints",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "PT SIMS Life Media",
    period: "2026 – Present",
    description:
      "Developing and maintaining web-based applications and features as part of the Web Development team.",
    highlights: [
      "Developed web interfaces and features using Laravel and React",
      "Implemented and improved data management features for company applications",
      "Collaborated with the development team to develop and maintain web applications",
    ],
  },
];
