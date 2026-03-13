import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    title: "AI Chat Application",
    category: "GenAI · Full Stack",
    description:
      "Conversational AI app with LLM integration, context memory, and streaming responses built on Next.js.",
    stack: ["Next.js", "Python", "LangChain", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    category: "MERN Stack",
    description:
      "Full-featured shopping app with JWT auth, cart management, Stripe payments and an admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
    github: "#",
  },
  {
    number: "03",
    title: "Analytics Dashboard",
    category: "Data · Backend",
    description:
      "Real-time dashboard with PostgreSQL data pipelines, Python processing, and interactive React charts.",
    stack: ["React", "Python", "PostgreSQL", "Flask"],
    link: "#",
    github: "#",
  },
  {
    number: "04",
    title: "Auth Microservice",
    category: "Java · Backend",
    description:
      "Secure JWT-based authentication service with Spring Boot, PostgreSQL, and role-based access control.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

       <h2 className="reveal text-center text-5xl md:text-6xl font-display font-bold 
text-white mb-20
bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 
bg-clip-text text-transparent
drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]">
  Projects
</h2>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-white/90 mb-16">
          Things I've built
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((p, i) => (
            <div
              key={p.number}
              className="group relative p-[1px] rounded-xl bg-gradient-to-br from-purple-500/40 to-transparent hover:from-purple-400/70 transition-all duration-300"
            >
              {/* Card */}
              <div className="h-full bg-[#0f0f13] border border-white/[0.05] rounded-xl p-7 flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-2">

                {/* Top */}
                <div>

                  <span className="text-[11px] text-purple-400/40 font-mono">
                    {p.number}
                  </span>

                  <h3 className="font-display text-lg font-semibold text-white mt-2">
                    {p.title}
                  </h3>

                  <span className="text-[10px] tracking-[0.12em] uppercase text-white/30">
                    {p.category}
                  </span>

                  <p className="text-sm text-white/40 mt-3 leading-6">
                    {p.description}
                  </p>

                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] text-white/40 border border-white/[0.06] px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={p.github}
                    className="text-white/20 hover:text-purple-300 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={p.link}
                    className="text-white/20 hover:text-purple-300 transition"
                  >
                    Live
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}