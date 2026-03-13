const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-10 py-5 bg-[#0C0C10]/80 backdrop-blur border-b border-white/10">
      
      <h1 className="text-xl font-serif">
        Arushi <span className="italic text-[#D4A5A5]">Tripathi</span>
      </h1>

      <ul className="flex gap-10 text-sm uppercase tracking-widest text-gray-400">
        <li><a href="#home" className="hover:text-[#D4A5A5]">Home</a></li>
        <li><a href="#about" className="hover:text-[#D4A5A5]">About</a></li>
        <li><a href="#skills" className="hover:text-[#D4A5A5]">Skills</a></li>
        <li><a href="#projects" className="hover:text-[#D4A5A5]">Projects</a></li>
        <li><a href="#contact" className="hover:text-[#D4A5A5]">Contact</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;