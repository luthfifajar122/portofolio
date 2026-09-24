import { Check } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow=""
          title="Experience"
          description="Where I've applied my skills so far — freelancing and team projects."
        />

        <ol className="relative mt-14 border-l border-border">
          {experience.map((item, index) => (
            <li key={`${item.role}-${item.period}`} className="relative pb-10 pl-6 last:pb-0">
              <Reveal delay={Math.min(index * 0.1, 0.3)}>
                <span
                  aria-hidden
                  className="absolute top-1.5 left-0 size-3 -translate-x-1/2 rounded-full border-2 border-background bg-brand"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {item.period}
                </p>
                <h3 className="mt-1.5 font-heading text-xl font-semibold">
                  {item.role}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                  {item.company}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <Check
                        aria-hidden
                        className="mt-0.5 size-4 shrink-0 text-brand"
                      />
                      <span className="max-w-2xl">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
