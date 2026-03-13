const Contact = () => {
  return (
    <section id="contact" className="py-32 text-center">

      <h2 className="text-5xl font-serif mb-6">
        Let's build
        <span className="block italic text-[#D4A5A5]">
          something great
        </span>
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto">
        I'm actively seeking internships in full-stack development
        and AI engineering.
      </p>

      <a
        href="mailto:arushi@email.com"
        className="block mt-8 text-xl italic border-b border-[#D4A5A5] inline-block"
      >
        arushi@email.com
      </a>

      <div className="flex justify-center gap-6 mt-10">
        <a href="#" className="border px-6 py-3 border-gray-700 hover:border-[#D4A5A5]">
          LinkedIn
        </a>
        <a href="#" className="border px-6 py-3 border-gray-700 hover:border-[#D4A5A5]">
          GitHub
        </a>
      </div>

    </section>
  );
};

export default Contact;