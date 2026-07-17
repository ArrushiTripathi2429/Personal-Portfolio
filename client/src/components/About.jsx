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

  const details = [
    {
      label: 'Degree',
      value: 'Integrated Dual Degree — CS & AI',
      icon: '⬡',
      color: { bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.18)', accent: 'rgba(165,180,252,0.7)', dot: '#818cf8' },
    },
    {
      label: 'College',
      value: 'Rajiv Gandhi Institute of Petroleum Technology',
      icon: '⬡',
      color: { bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.18)', accent: 'rgba(216,180,254,0.7)', dot: '#c084fc' },
    },
    {
      label: 'Year',
      value: '2nd Year  ·  2024 – 2029',
      icon: '⬡',
      color: { bg: 'rgba(34,211,238,0.07)', border: 'rgba(34,211,238,0.16)', accent: 'rgba(103,232,249,0.7)', dot: '#22d3ee' },
    },
    {
      label: 'Location',
      value: 'Rae Bareilly, India',
      icon: '⬡',
      color: { bg: 'rgba(52,211,153,0.07)', border: 'rgba(52,211,153,0.16)', accent: 'rgba(110,231,183,0.7)', dot: '#34d399' },
    },
    {
      label: 'Status',
      value: 'Open to internships',
      icon: '⬡',
      color: { bg: 'rgba(251,146,60,0.07)', border: 'rgba(251,146,60,0.18)', accent: 'rgba(253,186,116,0.75)', dot: '#fb923c' },
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Mono:wght@300;400&display=swap');

        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal.visible { opacity: 1; transform: none; }

        .about-heading-main {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.6rem, 5.5vw, 4.5rem);
          font-weight: 600;
          line-height: 1.1;
          color: rgba(255,255,255,0.96);
        }
        .about-heading-main em {
          font-style: italic;
          background: linear-gradient(110deg, #e2b0ff 0%, #9f8cf8 45%, #5bd2f0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(192,132,252,0.5);
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 300;
        }
        .section-eyebrow::before {
          content: '';
          width: 32px;
          height: 1px;
          background: rgba(192,132,252,0.35);
          display: block;
        }

        /* Detail cards */
        .detail-card {
          border-radius: 16px;
          padding: 16px 20px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .detail-card:hover {
          transform: translateX(8px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .detail-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 5px;
        }

        .detail-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          font-weight: 300;
          margin-bottom: 4px;
        }

        .detail-value {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.45;
          letter-spacing: 0.01em;
        }

        /* Connect link */
        .connect-link {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(192,132,252,0.55);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          font-weight: 300;
        }
        .connect-link:hover { color: rgba(216,180,254,0.9); gap: 13px; }

        /* Currently strip */
        .currently-strip {
          border-radius: 18px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 24px 28px;
          margin-top: 56px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 30px rgba(0,0,0,0.1);
        }
        @media (max-width: 600px) { .currently-strip { grid-template-columns: 1fr; } }

        .now-item-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          margin-bottom: 5px;
          font-weight: 300;
        }
        .now-item-value {
          font-size: 12.5px;
          color: rgba(255,255,255,0.45);
          font-weight: 300;
          line-height: 1.5;
        }
        .now-divider {
          width: 1px;
          background: rgba(255,255,255,0.05);
          align-self: stretch;
        }
      `}</style>

      <section id="about" ref={ref} className="relative py-20" style={{ background: 'transparent' }}>

        {/* Subtle bg glows */}
        <div className="absolute pointer-events-none" style={{
          top: '10%', right: '5%', width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)',
        }} />
        <div className="absolute pointer-events-none" style={{
          bottom: '15%', left: '0%', width: 260, height: 260, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,132,252,0.04) 0%, transparent 70%)',
        }} />

        <div className="max-w-5xl px-6 mx-auto">

          {/* Eyebrow */}
          <div className="mb-10 reveal">
            <span className="text-4xl section-eyebrow">About me</span>
          </div>

          <div className="grid items-start gap-16 md:grid-cols-2">

            {/* ── LEFT — heading + bio ── */}
            <div className="space-y-7">

              <h2 className="about-heading-main reveal" style={{ transitionDelay: '0.05s' }}>
                A curious builder,<br />
                <em>learning in public.</em>
              </h2>

              <p className="reveal text-[15px] font-light leading-relaxed"
                 style={{ color: 'rgba(255,255,255,0.7)', transitionDelay: '0.1s', maxWidth: 420 }}>
                I'm a second-year CS + AI student who enjoys building things
                end-to-end — from designing APIs to writing clean React UIs.
                I care about code that's readable, products that feel intentional,
                and designs that don't get in the way.
              </p>

              <p className="reveal text-[15px] font-light leading-relaxed"
                 style={{ color: 'rgba(255,255,255,0.7)', transitionDelay: '0.15s', maxWidth: 420 }}>
                Right now I'm diving deep into{' '}
                <span className="text-white font-medium">Generative AI</span>
                {' '}— how LLMs can be woven into real products. I work across
                Java, Python, and JavaScript depending on what the problem needs.
              </p>

              <div className="pt-1 reveal" style={{ transitionDelay: '0.2s' }}>
                <a href="#contact" className="connect-link">
                  Let's connect
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── RIGHT — detail cards ── */}
            <div className="space-y-3 reveal" style={{ transitionDelay: '0.1s' }}>
              {details.map(({ label, value, color }) => (
                <div
                  key={label}
                  className="detail-card"
                  style={{ background: color.bg, border: `1px solid ${color.border}` }}
                >
                  <span className="detail-dot" style={{ background: color.dot, boxShadow: `0 0 6px ${color.dot}55` }} />
                  <div>
                    <div className="detail-label">{label}</div>
                    <div className="detail-value" style={{ color: color.accent }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── Currently strip ── */}
          <div className="reveal currently-strip" style={{ transitionDelay: '0.25s' }}>
            <div className="now-item">
              <div className="now-item-label">Building</div>
              <div className="now-item-value">Project on AI security</div>
            </div>
            <div className="now-divider" />
            <div className="now-item">
              <div className="now-item-label">Learning</div>
              <div className="now-item-value">LangChain & Vector DBs</div>
            </div>
            <div className="now-divider" />
            <div className="now-item">
              <div className="now-item-label">Seeking</div>
              <div className="now-item-value">Summer Internship 2026</div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
