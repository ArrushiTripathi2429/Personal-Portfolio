const skills = {
  Languages: ["Python", "Java", "JavaScript", "C++", "TypeScript"],
  Frontend: ["React", "Next.js", "Tailwind", "Redux"],
  Backend: ["Node.js", "Express", "Spring Boot"],
  Database: ["MongoDB", "PostgreSQL", "MySQL"],
  AI: ["LangChain", "Generative AI", "Prompt Engineering"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-20">

      <h2 className="text-4xl font-serif mb-16">
        My <span className="italic text-[#D4A5A5]">Toolkit</span>
      </h2>

      <div className="space-y-10">

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-[#161619] p-6 border border-gray-700">

            <h3 className="text-[#D4A5A5] uppercase tracking-widest text-sm mb-4">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-1 border border-gray-600 rounded-full text-sm text-gray-400"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;