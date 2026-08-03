import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="02 · Skills"
          title="Skills & Tools"
          description="The technologies I use to design, build, and ship web applications."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={Math.min(index * 0.06, 0.36)}>
              <SkillCard skill={skill} delay={0.15} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
