import Link from "next/link";
import { GraduationCap, Handshake, Mail, Target } from "lucide-react";

import InfoCard from "@/components/ui/InfoCard";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { about } from "@/data/about";
import { site } from "@/data/site";


export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="01 · About"
          title="About Me"
          description="A quick introduction who I am, what I study, and what I'm looking for."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="flex flex-col gap-4 text-muted-foreground">
                {about.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-border bg-muted/40 p-4"
                  >
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
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
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span
                    aria-hidden
                    className="size-2 rounded-full bg-emerald-400"
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
              <ol className="relative space-y-8 border-l border-border pl-6">
                {about.education.map((item) => (
                  <li key={item.degree} className="relative">
                    <span
                      aria-hidden
                      className="absolute top-1.5 -left-6 size-3 -translate-x-1/2 rounded-full border-2 border-background bg-brand"
                    />
                    <h4 className="font-heading font-semibold">{item.degree}</h4>
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
