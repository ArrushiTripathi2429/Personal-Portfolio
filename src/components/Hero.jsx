
import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'AI & GenAI Enthusiast', 'MERN Stack Engineer', 'Next.js Developer']

export default function Hero() {
  const [idx, setIdx]           = useState(0)
  const [text, setText]         = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[idx]
    let t
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), 65)
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2400)
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 38)
    } else {
      setDeleting(false)
      setIdx((prev) => (prev + 1) % roles.length)
    }
    return () => clearTimeout(t)
  }, [text, deleting, idx])

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-600/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-20 items-center pt-20">

        {/* LEFT — text */}
        <div className="flex flex-col gap-7">

          {/* Availability */}
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] tracking-[0.15em] uppercase text-emerald-400/70 font-medium">
              Open to internships
            </span>
          </div>

          {/* Name */}
          <div>
            <h1 className="font-display font-bold leading-[1.02]">
              <span className="block text-[clamp(3rem,6vw,5.5rem)] text-white/90">Arushi</span>
              <span className="block text-[clamp(3rem,6vw,5.5rem)] gradient-text italic">Tripathi</span>
            </h1>
          </div>

          {/* Typewriter role */}
          <p className="font-display text-lg text-white/40 font-medium italic tracking-wide min-h-[28px]">
            {text}
            <span className="inline-block w-px h-5 bg-purple-400/60 ml-0.5 animate-pulse align-middle" />
          </p>

          {/* Bio */}
          <p className="text-[0.9rem] leading-7 text-white/35 max-w-md font-light">
            Building thoughtful applications from backend to frontend —
            with a growing passion for{' '}
            <span className="text-purple-300/70">Generative AI</span> and clean,
            purposeful code.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap pt-1">
            <a
              href="#projects"
              className="text-[11px] tracking-[0.15em] uppercase font-semibold px-6 py-3 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/20 hover:bg-purple-500/25 transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="text-[11px] tracking-[0.15em] uppercase font-medium px-6 py-3 rounded-full border border-white/8 text-white/35 hover:border-white/20 hover:text-white/60 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 pt-1">
            {['GitHub', 'LinkedIn', 'Resume'].map(s => (
              <a key={s} href="#"
                className="text-[10px] tracking-[0.14em] uppercase text-white/20 hover:text-purple-300/60 transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — photo frame */}
        <div className="flex justify-center items-center">
          <div className="relative w-56 h-72 md:w-64 md:h-80">
            {/* Offset background shape */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-purple-500/8 border border-purple-500/10" />

            {/* Main card */}
            <div className="absolute inset-0 rounded-2xl bg-[#13131A] border border-white/[0.06] flex flex-col items-center justify-center gap-3 overflow-hidden">
              {/* Subtle top gradient */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-purple-500/6 to-transparent" />

              <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                <svg className="w-8 h-8 text-white/15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/15">Your Photo</p>
            </div>

            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-purple-400/30" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-purple-400/30" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-purple-400/30" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-purple-400/30" />
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  )
}
