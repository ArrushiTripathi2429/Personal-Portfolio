import { useEffect, useState } from 'react'
import profilePic from '../assets/PortfolioPicture.jpeg'

const roles = [
  'Full Stack Developer',
  'AI & GenAI Enthusiast',
  'MERN Stack Engineer',
  'Next.js Developer',
]

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
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
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes floatUp {
          0%   { opacity: 0; transform: translateY(22px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderSpin {
          from { --angle: 0deg; }
          to   { --angle: 360deg; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .hero-name-first {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: clamp(3.4rem, 7vw, 6rem);
          color: rgba(255,255,255,0.96);
          line-height: 1.1;
        }
        .hero-name-last {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 600;
          font-size: clamp(3.4rem, 7vw, 6rem);
          background: linear-gradient(110deg,#e2b0ff,#818cf8,#38bdf8,#e2b0ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
          line-height: 1.1;
        }

        .photo-frame-outer {
          background:
            linear-gradient(#070709, #070709) padding-box,
            conic-gradient(from var(--angle), #c084fc33, #818cf866, #38bdf833, #c084fc33) border-box;
          border: 1px solid transparent;
          animation: borderSpin 6s linear infinite;
          box-shadow: 0 0 30px rgba(129, 140, 248, 0.1);
        }
      `}</style>

      <section className="relative flex items-center min-h-[90vh] overflow-hidden pt-24 pb-16">
        {/* Glows behind hero */}
        <div className="absolute pointer-events-none" style={{
          top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 60%)',
        }} />
        <div className="absolute pointer-events-none" style={{
          bottom: '10%', right: '15%', width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,132,252,0.05) 0%, transparent 60%)',
        }} />

        <div className="grid items-center w-full max-w-5xl gap-16 px-6 mx-auto md:grid-cols-2 relative z-10">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] tracking-widest uppercase text-emerald-400/90 font-medium font-mono">
                Open to internships
              </span>
            </div>

            <div className="-space-y-2">
              <div className="hero-name-first">Arushi</div>
              <div className="hero-name-last">Tripathi</div>
            </div>

            <p className="text-gray-400/90 italic font-light min-h-[24px] text-lg">
              {text}
              <span className="animate-pulse">|</span>
            </p>

            <p className="max-w-sm text-[15px] leading-relaxed text-gray-400 font-light">
              Building thoughtful applications from backend to frontend —
              with a growing passion for Generative AI.
            </p>

            <div className="flex gap-4 pt-6">
              <a href="#projects" className="px-7 py-3 text-sm font-semibold transition-all duration-300 rounded-full bg-white text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                View Projects
              </a>
              <a href="#contact" className="px-7 py-3 text-sm font-semibold transition-all duration-300 border rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:scale-105 backdrop-blur-md">
                Contact
              </a>
            </div>
          </div>

    
          <div className="flex justify-center">
            <div className="relative w-56 h-72">

              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl photo-frame-outer">

                <img
                  src={profilePic}
                  alt="Arushi Tripathi"
                  className="w-full h-full rounded-2xl"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 75%', 
                    transform: 'scale(1.9)',      
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  }}
                />

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}