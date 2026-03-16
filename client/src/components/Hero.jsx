import { useEffect, useState } from 'react'

const roles = [
  'Full Stack Developer',
  'AI & GenAI Enthusiast',
  'MERN Stack Engineer',
  'Next.js Developer',
]

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
    <>
      {/* ── Keyframes injected once ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes floatUp {
          0%   { opacity: 0; transform: translateY(22px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.4); }
          50%       { box-shadow: 0 0 0 6px rgba(52,211,153,0); }
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
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: clamp(3.4rem, 7vw, 6rem);
          line-height: 1;
          color: rgba(255,255,255,0.92);
          animation: floatUp 0.7s ease both;
          animation-delay: 0.1s;
        }
        .hero-name-last {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-style: italic;
          font-size: clamp(3.4rem, 7vw, 6rem);
          line-height: 1;
          background: linear-gradient(
            110deg,
            #c084fc 0%,
            #818cf8 25%,
            #38bdf8 50%,
            #818cf8 75%,
            #c084fc 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation:
            floatUp  0.7s ease both 0.2s,
            shimmer  4s linear infinite 1s;
        }
        .hero-availability {
          animation: floatUp 0.7s ease both 0s;
        }
        .hero-role {
          animation: floatUp 0.7s ease both 0.3s;
        }
        .hero-bio {
          animation: floatUp 0.7s ease both 0.4s;
        }
        .hero-ctas {
          animation: floatUp 0.7s ease both 0.5s;
        }
        .hero-socials {
          animation: floatUp 0.7s ease both 0.6s;
        }
        .hero-photo {
          animation: floatUp 0.8s ease both 0.35s;
        }

        .pulse-dot {
          animation: pulseRing 2s ease-in-out infinite;
          border-radius: 50%;
        }

        /* CTA primary hover lift */
        .cta-primary {
          transition: all 0.22s ease;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(168,85,247,0.25);
        }
        .cta-secondary {
          transition: all 0.22s ease;
        }
        .cta-secondary:hover {
          transform: translateY(-2px);
        }

        /* Social links */
        .social-link {
          transition: all 0.2s ease;
          position: relative;
        }
        .social-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1px;
          background: rgba(192,132,252,0.5);
          transform: scaleX(0);
          transition: transform 0.2s ease;
        }
        .social-link:hover::after { transform: scaleX(1); }

        /* Photo frame animated border */
        .photo-frame-outer {
          background:
            linear-gradient(#13131A, #13131A) padding-box,
            conic-gradient(from var(--angle), #c084fc22, #818cf844, #38bdf822, #c084fc22) border-box;
          border: 1px solid transparent;
          animation: borderSpin 6s linear infinite;
        }

        /* Stat chips */
        .stat-chip {
          transition: transform 0.2s ease;
        }
        .stat-chip:hover { transform: translateY(-3px); }
      `}</style>

      <section id="home" className="relative flex items-center min-h-screen overflow-hidden">

        {/* ── Background atmosphere ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] right-[20%] w-80 h-80 rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)' }} />
          <div className="absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.06) 0%, transparent 70%)' }} />
          <div className="absolute top-[50%] left-[50%] w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.03) 0%, transparent 70%)' }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.025]"
               style={{
                 backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                 backgroundSize: '64px 64px',
               }} />
        </div>

        <div className="grid items-center w-full max-w-5xl gap-16 px-6 pt-20 mx-auto md:grid-cols-2">

          {/* ══ LEFT — text ══ */}
          <div className="flex flex-col gap-6">

            {/* Availability badge */}
            <div className="hero-availability flex items-center gap-2.5 w-fit">
              <span className="flex-shrink-0 w-2 h-2 pulse-dot bg-emerald-400"
                    style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399' }} />
              <span className="text-[10px] tracking-[0.18em] uppercase font-medium"
                    style={{ color: 'rgba(52,211,153,0.75)' }}>
                Open to internships
              </span>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1">
              <span className="block hero-name-first">Arushi</span>
              <span className="block hero-name-last">Tripathi</span>
            </div>

            {/* Typewriter role */}
            <p className="hero-role text-base font-light tracking-wide min-h-[24px]"
               style={{ color: 'rgba(255,255,255,0.38)', fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}>
              {text}
              <span className="inline-block w-px h-4 ml-0.5 align-middle animate-pulse"
                    style={{ background: 'rgba(192,132,252,0.7)' }} />
            </p>

            {/* Bio */}
            <p className="hero-bio text-[0.875rem] leading-[1.9] max-w-sm font-light"
               style={{ color: 'text-white' }}>
              Building thoughtful applications from backend to frontend —
              with a growing passion for{' '}
              <span style={{ color: 'text-white' }}>Generative AI</span>
              {' '}and clean, purposeful code.
            </p>

            {/* Colourful stat chips */}
            <div className="flex flex-wrap gap-3 hero-bio">
              {[
                { label: '2nd Year', sub: 'IDD Student',     color: 'rgba(129,140,248,0.12)', border: 'rgba(129,140,248,0.25)', text: 'rgba(165,180,252,0.85)' },
                { label: 'MERN',     sub: 'Stack',          color: 'rgba(34,211,238,0.08)',  border: 'rgba(34,211,238,0.2)',   text: 'rgba(103,232,249,0.8)'  },
                { label: 'GenAI',    sub: 'Enthusiast',     color: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.2)',   text: 'rgba(253,186,116,0.8)'  },
              ].map(({ label, sub, color, border, text }) => (
                <div key={label} className="px-4 py-2 text-center stat-chip rounded-xl"
                     style={{ background: color, border: `1px solid ${border}` }}>
                  <div className="text-[12px] font-semibold tracking-wide" style={{ color: text }}>{label}</div>
                  <div className="text-[9px] tracking-[0.12em] uppercase mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>{sub}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1 hero-ctas">
              <a href="#projects"
                 className="cta-primary text-[10px] tracking-[0.16em] uppercase font-semibold px-6 py-3 rounded-full"
                 style={{
                   background: 'linear-gradient(135deg, rgba(168,85,247,0.22), rgba(99,102,241,0.18))',
                   color: 'rgba(216,180,254,0.9)',
                   border: '1px solid rgba(168,85,247,0.3)',
                 }}>
                View Projects
              </a>
              <a href="#contact"
                 className="cta-secondary text-[10px] tracking-[0.16em] uppercase font-medium px-6 py-3 rounded-full"
                 style={{
                   border: '1px solid rgba(255,255,255,0.1)',
                   color: 'rgba(255,255,255,0.35)',
                 }}>
                Get in Touch
              </a>
            </div>

            {/* Socials */}
            
          </div>

          {/* ══ RIGHT — photo frame ══ */}
          <div className="flex items-center justify-center hero-photo">
            <div className="relative w-56 h-72 md:w-64 md:h-80">

              {/* Offset shadow shape */}
              <div className="absolute inset-0 rounded-2xl"
                   style={{
                     transform: 'translate(10px, 10px)',
                     background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(99,102,241,0.06))',
                     border: '1px solid rgba(168,85,247,0.08)',
                   }} />

              {/* Second offset */}
              <div className="absolute inset-0 rounded-2xl"
                   style={{
                     transform: 'translate(5px, 5px)',
                     background: 'transparent',
                     border: '1px solid rgba(129,140,248,0.1)',
                   }} />

              {/* Main card */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden photo-frame-outer rounded-2xl"
                   style={{ background: '#13131A' }}>

                {/* Top colour wash */}
                <div className="absolute top-0 left-0 right-0 pointer-events-none h-28"
                     style={{ background: 'linear-gradient(180deg, rgba(129,140,248,0.07) 0%, transparent 100%)' }} />
                {/* Bottom colour wash */}
                <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                     style={{ background: 'linear-gradient(0deg, rgba(192,132,252,0.05) 0%, transparent 100%)' }} />

                {/* Avatar placeholder */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full"
                     style={{
                       background: 'rgba(255,255,255,0.03)',
                       border: '1px solid rgba(255,255,255,0.07)',
                     }}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       style={{ color: 'rgba(255,255,255,0.13)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-[9px] tracking-[0.22em] uppercase"
                   style={{ color: 'rgba(255,255,255,0.12)' }}>
                  Your Photo
                </p>
              </div>

              {/* Corner accents — colourful */}
              {[
                { cls: 'top-1.5 left-1.5',   border: 'border-t border-l', color: 'rgba(192,132,252,0.45)' },
                { cls: 'top-1.5 right-1.5',  border: 'border-t border-r', color: 'rgba(129,140,248,0.45)' },
                { cls: 'bottom-1.5 left-1.5', border: 'border-b border-l', color: 'rgba(34,211,238,0.35)'  },
                { cls: 'bottom-1.5 right-1.5',border: 'border-b border-r', color: 'rgba(251,146,60,0.35)'  },
              ].map(({ cls, border, color }, i) => (
                <div key={i}
                     className={`absolute ${cls} w-3 h-3 ${border}`}
                     style={{ borderColor: color }} />
              ))}

              {/* Floating colour orbs */}
              <div className="absolute w-5 h-5 rounded-full pointer-events-none -top-3 -right-3"
                   style={{ background: 'rgba(192,132,252,0.35)', filter: 'blur(6px)' }} />
              <div className="absolute w-4 h-4 rounded-full pointer-events-none -bottom-2 -left-2"
                   style={{ background: 'rgba(34,211,238,0.3)', filter: 'blur(5px)' }} />
            </div>
          </div>

        </div>

        {/* Scroll hint */}
        <div className="absolute flex flex-col items-center gap-2 -translate-x-1/2 bottom-10 left-1/2"
             style={{ opacity: 0.18 }}>
          <div className="w-px h-8"
               style={{ background: 'linear-gradient(to bottom, transparent, white)' }} />
        </div>
      </section>
    </>
  )
}
