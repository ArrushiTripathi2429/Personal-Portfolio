import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const copy = () => {
    navigator.clipboard.writeText('arushi@email.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-purple-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">

      <h2 className="reveal text-center text-5xl md:text-6xl font-display font-bold 
text-white mb-20
bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 
bg-clip-text text-transparent
drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]">
   Let's Connect
</h2>
        <div className="max-w-xl">
          <h2 className="reveal font-display text-3xl md:text-4xl font-bold text-white/85 mb-5 leading-snug" style={{ transitionDelay: '0.05s' }}>
            Let's build something great{' '}
            <span className="gradient-text italic">together</span>
          </h2>

          <p className="reveal text-sm leading-7 text-white/30 font-light mb-10" style={{ transitionDelay: '0.1s' }}>
            I'm looking for internship opportunities in full-stack development or AI engineering.
            If you have something in mind, I'd love to hear from you.
          </p>

          {/* Email */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <button
              onClick={copy}
              className="group flex items-center gap-3 mb-8"
            >
              <span className="font-display text-xl md:text-2xl italic text-white/60 group-hover:text-white/80 transition-colors duration-200">
                arrushi111@email.com
              </span>
              <span className={`text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border transition-all duration-200 ${
                copied
                  ? 'border-emerald-400/30 text-emerald-400/70 bg-emerald-400/5'
                  : 'border-white/10 text-white/20 group-hover:border-purple-400/25 group-hover:text-purple-300/50'
              }`}>
                {copied ? 'Copied' : 'Copy'}
              </span>
            </button>
          </div>

          {/* Social links */}
          <div className="reveal flex gap-6" style={{ transitionDelay: '0.2s' }}>
            {[
              { label: 'LinkedIn', href: '#' },
              { label: 'GitHub',   href: '#' },
              { label: 'Resume',   href: '#' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                className="text-[11px] tracking-[0.14em] uppercase text-white/20 hover:text-purple-300/60 transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6 mt-24 pt-8 border-t border-white/[0.04] flex items-center justify-between">
        <p className="text-[10px] tracking-[0.12em] uppercase text-white/15">
          Arushi Tripathi · 2025
        </p>
        <p className="text-[10px] tracking-[0.12em] uppercase text-white/10">
          Built with React & Tailwind
        </p>
      </div>
    </section>
  )
}
