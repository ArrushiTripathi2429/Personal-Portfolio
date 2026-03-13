const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between px-20"
    >
      <div>

        <p className="text-green-400 text-sm tracking-widest mb-6">
          Open to internships
        </p>

        <h1 className="font-serif text-7xl leading-none">
          Arushi
          <span className="block italic text-[#D4A5A5]">Tripathi</span>
        </h1>

        <div className="flex gap-3 mt-6 flex-wrap">
          <span className="px-4 py-1 bg-[#1C1C21] border border-[#D4A5A5]/40 rounded-full text-sm">
            Full Stack Developer
          </span>
          <span className="px-4 py-1 bg-[#1C1C21] border border-[#D4A5A5]/40 rounded-full text-sm">
            AI Enthusiast
          </span>
          <span className="px-4 py-1 bg-[#1C1C21] border border-gray-600 rounded-full text-sm">
            MERN Stack
          </span>
        </div>

        <p className="text-gray-400 mt-6 max-w-md leading-relaxed">
          Building thoughtful applications — from robust backends to polished
          frontends with a growing passion for Generative AI.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="bg-[#D4A5A5] text-black px-6 py-3 text-sm uppercase tracking-wider"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-600 px-6 py-3 text-sm uppercase tracking-wider hover:border-[#D4A5A5]"
          >
            Contact
          </a>
        </div>

      </div>

      <div className="hidden md:block">
        <div className="w-[300px] h-[380px] border border-gray-700 bg-[#161619] flex items-center justify-center">
          <p className="text-gray-500 text-sm">Your Photo</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;