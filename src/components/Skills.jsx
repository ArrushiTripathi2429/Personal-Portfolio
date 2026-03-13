import { useEffect, useRef } from "react";

const groups = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind", "HTML", "Redux"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "Flask", "REST APIs"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    label: "AI / GenAI",
    items: [
      "Generative AI",
      "LLM Integration",
      "LangChain",
      "Prompt Engineering",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Linux", "VS Code"],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );

    ref.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-36 relative">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h2 className="reveal text-center text-6xl font-display font-bold 
        bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 
        bg-clip-text text-transparent 
        drop-shadow-[0_0_20px_rgba(168,85,247,0.45)]
        mb-24">
          Skills
        </h2>

        {/* Skill groups */}
        <div className="space-y-16">

          {groups.map((g, gi) => (
            <div key={g.label} className="reveal text-center">

              {/* Category */}
              <p className="text-xs uppercase tracking-[0.25em] text-purple-400/50 mb-6">
                {g.label}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-3">

                {g.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full 
                    border border-white/10 
                    text-white/70
                    bg-white/[0.03]
                    hover:text-purple-200 
                    hover:border-purple-400/40
                    hover:bg-purple-500/10
                    transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}