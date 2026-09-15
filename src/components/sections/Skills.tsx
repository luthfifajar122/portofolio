export default function Skills() {
    const skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "PHP",
      "Laravel",
      "MySQL",
    ];
  
    return (
      <section id="skills" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">
            Skills
          </h2>
  
          <p className="mt-2 text-muted-foreground">
            Technologies and tools I use to build web applications.
          </p>
  
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-border p-5 text-center font-medium transition hover:-translate-y-1 hover:bg-muted"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }