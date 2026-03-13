const projects = [
  {
    title: "AI Chat Application",
    desc: "LLM based chatbot with context memory and streaming responses.",
    tech: ["Next.js", "LangChain", "Python"]
  },
  {
    title: "E-Commerce Platform",
    desc: "Full MERN stack e-commerce platform with payments and admin panel.",
    tech: ["React", "Node", "MongoDB"]
  },
  {
    title: "Analytics Dashboard",
    desc: "Real-time analytics dashboard using React and PostgreSQL.",
    tech: ["React", "Python", "PostgreSQL"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#101014] py-32 px-20">

      <h2 className="text-4xl font-serif mb-16">
        Projects I've <span className="italic text-[#D4A5A5]">Built</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map(p => (
          <div
            key={p.title}
            className="border border-gray-700 bg-[#161619] p-6 hover:border-[#D4A5A5]/40"
          >

            <h3 className="text-xl font-serif mb-2">{p.title}</h3>

            <p className="text-gray-400 text-sm mb-4">{p.desc}</p>

            <div className="flex gap-2 flex-wrap">
              {p.tech.map(t => (
                <span
                  key={t}
                  className="text-xs border border-gray-600 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;