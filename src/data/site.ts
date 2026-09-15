export const site = {
  name: "Luthfi Fajar Prasetyo",
  firstName: "Luthfi Fajar",
  lastName: "Prasetyo",
  initials: "LF",
  role: "Junior Web Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "luthfifajar12@gmail.com",
  location: "Yogyakarta, Indonesia",
  availability: "Open to internship opportunities",
  resumeUrl: "/CV_1108.pdf",
  socials: {
    github: "https://github.com/luthfifajar122",
    linkedin: "https://linkedin.com/in/us",
    instagram: "https://instagram.com/luthfifajarrrr",
    whatsapp: "https://wa.me/6283116406618",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
