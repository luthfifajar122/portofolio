import Link from "next/link";
import { GraduationCap, Handshake, Mail, Target } from "lucide-react";

import InfoCard from "@/components/ui/InfoCard";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { about } from "@/data/about";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const factAccents = ["bg-primary", "bg-secondary"];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Profile"
          title="About Me"
          description="A quick introduction who I am, what I study, and what I'm looking for."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="flex flex-col gap-4 rounded-none border-2 border-foreground bg-card p-6 text-muted-foreground shadow-brutal">
                {about.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {about.facts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className={cn(
                      "rounded-none border-2 border-foreground p-4 text-primary-foreground shadow-brutal-sm",
                      factAccents[index % factAccents.length],
                    )}
                  >
                    <dt className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-primary-foreground/70">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <InfoCard icon={Target} title="Career Objective">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {about.objective}
                </p>
              </InfoCard>
            </Reveal>

            <Reveal delay={0.2}>
              <InfoCard icon={Handshake} title="Internship Availability">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span
                    aria-hidden
                    className="size-2 rounded-full border border-foreground bg-emerald-400"
                  />
                  Available now
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Currently open to internship or junior developer
                  opportunities. I respond quickly to emails.
                </p>
                <Link
                  href={`mailto:${site.email}`}
                  className={buttonVariants({ size: "sm", className: "mt-4" })}
                >
                  <Mail />
                  Contact me
                </Link>
              </InfoCard>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pt-1">
            <InfoCard
              icon={GraduationCap}
              title="Education"
              className="h-full"
            >
              <ol className="relative space-y-8 border-l-4 border-foreground pl-6">
                {about.education.map((item) => (
                  <li key={item.degree} className="relative">
                    <span
                      aria-hidden
                      className="absolute top-1.5 -left-6 size-3 -translate-x-1/2 border-2 border-foreground bg-brand"
                    />
                    <h4 className="font-heading font-bold uppercase tracking-tight">
                      {item.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.school} · {item.period}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground/80">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </InfoCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
