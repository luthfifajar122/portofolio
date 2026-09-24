"use client";

import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";

import Container from "@/components/ui/Container";
import InfoCard from "@/components/ui/InfoCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = { name: "", email: "", message: "" };
const INITIAL_ERRORS: FormErrors = {};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);

  const validate = (form: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name (at least 2 characters).";
    }
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    return nextErrors;
  };

  const handleChange = (
    field: keyof FormValues,
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
  };

  const mailtoHref = `mailto:${site.email}?subject=Hello, ${encodeURIComponent(values.name)}&body=${encodeURIComponent(values.message)}`;

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow=""
          title="Get in Touch"
          description="Have a project in mind or want to say hello? My inbox is always open."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="flex flex-col gap-6">
            <InfoCard icon={Mail} title="Email">
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {site.email}
              </a>
            </InfoCard>

            <InfoCard icon={MapPin} title="Location">
              <p className="text-sm text-muted-foreground">{site.location}</p>
            </InfoCard>

            <div className="rounded-2xl border border-border bg-muted/40 p-6">
              <h3 className="font-heading text-lg font-semibold">
                Response time
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I usually reply within 24 hours. For internships or
                junior developer opportunities, mention it in your
                message so I can prioritize it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              {submitted ? (
                <div
                  role="status"
                  className="flex min-h-80 flex-col items-center justify-center gap-4 text-center"
                >
                  <CheckCircle2
                    aria-hidden
                    className="size-12 text-emerald-400"
                  />
                  <h3 className="font-heading text-xl font-semibold">
                    Thanks, {values.name.split(" ")[0]}!
                  </h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Your message is ready. It will be sent once a backend
                    endpoint is connected — meanwhile you can send it
                    directly from your email client.
                  </p>
                  <a
                    href={mailtoHref}
                    className="text-sm font-medium text-brand underline-offset-4 hover:underline"
                  >
                    Open email client
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="contact-name">Name</Label>
                        <Input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="John Doe"
                          value={values.name}
                          onChange={handleChange("name")}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={
                            errors.name ? "contact-name-error" : undefined
                          }
                        />
                        {errors.name ? (
                          <p
                            id="contact-name-error"
                            className="text-sm text-destructive"
                          >
                            {errors.name}
                          </p>
                        ) : null}
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={values.email}
                          onChange={handleChange("email")}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? "contact-email-error" : undefined
                          }
                        />
                        {errors.email ? (
                          <p
                            id="contact-email-error"
                            className="text-sm text-destructive"
                          >
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        placeholder="Tell me about your project..."
                        value={values.message}
                        onChange={handleChange("message")}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? "contact-message-error" : undefined
                        }
                      />
                      {errors.message ? (
                        <p
                          id="contact-message-error"
                          className="text-sm text-destructive"
                        >
                          {errors.message}
                        </p>
                      ) : null}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="mt-2 w-full sm:w-auto"
                    >
                      <Send />
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
