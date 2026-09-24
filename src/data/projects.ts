export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "KickBook",
    description:
      "A sports field booking platform with venue search, schedule management, and secure online booking.",
    image: "/projects/kickbook.png",
    tech: ["Laravel", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    year: "2025",
  },
  {
    title: "Garage64",
    description:
      "An e-commerce store for diecast car collectibles with product catalog, cart, and order management.",
    image: "/projects/garage.png",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com",
    demo: "https://example.com",
    year: "2024",
  },
];
