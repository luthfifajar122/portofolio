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
          eyebrow="Journey"
          title="Experience"
          description="Where I've applied my skills so far — freelancing and team projects."
        />

        <ol className="mt-14">
          {experience.map((item, index) => (
            <li
              key={`${item.role}-${item.period}`}
              className="relative border-l-4 border-foreground pb-8 pl-8 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute top-2 -left-2 size-4 border-2 border-foreground bg-primary"
              />

              <Reveal delay={Math.min(index * 0.1, 0.3)}>
                <div className="rounded-none border-2 border-foreground bg-card p-5 shadow-brutal sm:p-6">
                  <p className="inline-flex border-2 border-foreground bg-primary px-2 py-0.5 font-heading text-[0.7rem] font-bold uppercase tracking-widest text-primary-foreground">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight">
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
                        <span
                          aria-hidden
                          className="mt-0.5 flex size-5 shrink-0 items-center justify-center border-2 border-foreground bg-secondary text-secondary-foreground"
                        >
                          <Check className="size-3" />
                        </span>
                        <span className="max-w-2xl">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
