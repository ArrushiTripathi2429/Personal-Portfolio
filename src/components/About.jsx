import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section label */}
       <h2 className="reveal text-center text-5xl md:text-6xl font-display font-bold 
text-white mb-20
bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 
bg-clip-text text-transparent
drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]">
  About
</h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — heading + bio */}
          <div className="space-y-6">
            <h2 className="reveal font-display text-3xl md:text-4xl font-bold text-white/85 leading-snug" style={{ transitionDelay: '0.05s' }}>
              Building with care,<br />
              <span className="gradient-text italic">learning every day</span>
            </h2>

            <p className="reveal text-sm leading-7 text-white/35 font-light" style={{ transitionDelay: '0.1s' }}>
              I'm a second-year Computer Science student who enjoys building things
              end-to-end — from designing databases to writing clean React UIs. I care
              about code that's readable, products that make sense, and designs that
              don't get in the way.
            </p>

            <p className="reveal text-sm leading-7 text-white/35 font-light" style={{ transitionDelay: '0.15s' }}>
              Right now I'm exploring <span className="text-purple-300/60">Generative AI</span> — how LLMs
              can be woven into real apps. I work across Java, Python, and JavaScript
              depending on what the problem needs.
            </p>

            <div className="reveal pt-2" style={{ transitionDelay: '0.2s' }}>
              <a href="#contact"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-purple-300/60 hover:text-purple-300 transition-colors duration-200"
              >
                Let's connect
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — details */}
          <div className="reveal space-y-4" style={{ transitionDelay: '0.1s' }}>
            {[
              { label: 'Degree',    value: 'B.Tech — Computer Science' },
              { label: 'College',   value: 'To be updated' },
              { label: 'Year',      value: '2nd Year' },
              { label: 'Location',  value: 'India' },
              { label: 'Available', value: 'Open to internships' },
            ].map(d => (
              <div key={d.label} className="flex items-start gap-4 py-3.5 border-b border-white/[0.04]">
                <span className="text-[10px] tracking-[0.15em] uppercase text-white/20 w-20 shrink-0 pt-0.5">{d.label}</span>
                <span className="text-sm text-white/55">{d.value}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
