const About = () => {
  return (
    <section id="about" className="bg-[#101014] py-32 px-20">

      <h2 className="text-4xl font-serif mb-12">
        About <span className="italic text-[#D4A5A5]">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16">

        <div className="text-gray-400 leading-relaxed space-y-4">
          <p>
            I'm Arushi — a Computer Science student who loves building
            end-to-end products.
          </p>

          <p>
            My current focus is <span className="text-white">Generative AI</span>
            , exploring LLMs and real world AI applications.
          </p>

          <p>
            I'm looking for internships where I can grow as a
            full-stack developer and AI engineer.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="p-6 bg-[#161619] border border-gray-700">
            <h3 className="text-[#D4A5A5] text-3xl font-serif">10+</h3>
            <p className="text-sm text-gray-400">Projects</p>
          </div>

          <div className="p-6 bg-[#161619] border border-gray-700">
            <h3 className="text-[#D4A5A5] text-3xl font-serif">8+</h3>
            <p className="text-sm text-gray-400">Technologies</p>
          </div>

          <div className="p-6 bg-[#161619] border border-gray-700">
            <h3 className="text-[#D4A5A5] text-3xl font-serif">3+</h3>
            <p className="text-sm text-gray-400">Hackathons</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;