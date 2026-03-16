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
    navigator.clipboard.writeText('arrushi111@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socials = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/arushi-tripathi-80703031a',
      color: 'rgba(103,232,249,0.7)',
      bg: 'rgba(34,211,238,0.07)',
      border: 'rgba(34,211,238,0.18)',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/ArrushiTripathi2429',
      color: 'rgba(165,180,252,0.7)',
      bg: 'rgba(129,140,248,0.07)',
      border: 'rgba(129,140,248,0.18)',
    },
    {
      label: 'Resume',
      href: '/resume.pdf',
      color: 'rgba(253,186,116,0.75)',
      bg: 'rgba(251,146,60,0.07)',
      border: 'rgba(251,146,60,0.18)',
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Mono:wght@300;400&display=swap');

        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }

        .contact-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 700;
          line-height: 1.06;
          color: rgba(255,255,255,0.9);
        }
        .contact-heading em {
          font-style: italic;
          background: linear-gradient(110deg, #c084fc 0%, #818cf8 50%, #38bdf8 100%);
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
        }

        .email-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 24px;
          border-radius: 16px;
          background: rgba(192,132,252,0.06);
          border: 1px solid rgba(192,132,252,0.16);
          cursor: pointer;
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
          width: 100%;
          text-align: left;
        }
        .email-btn:hover {
          transform: translateY(-3px);
          background: rgba(192,132,252,0.1);
          border-color: rgba(192,132,252,0.28);
        }

        .email-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(192,132,252,0.12);
          border: 1px solid rgba(192,132,252,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: rgba(216,180,254,0.8);
        }

        .email-address {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.1rem;
          font-style: italic;
          color: rgba(255,255,255,0.6);
          font-weight: 400;
          transition: color 0.2s ease;
          flex: 1;
        }
        .email-btn:hover .email-address { color: rgba(255,255,255,0.85); }

        .copy-badge {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 300;
          padding: 4px 10px;
          border-radius: 20px;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .social-card {
          padding: 14px 20px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .social-card:hover { transform: translateY(-3px); }

        .social-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 300;
        }

        .social-arrow {
          opacity: 0.5;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .social-card:hover .social-arrow { opacity: 1; transform: translate(2px, -2px); }

        .footer-bar {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 300;
        }

        .avail-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 300;
          padding: 6px 14px;
          border-radius: 20px;
          background: rgba(52,211,153,0.07);
          border: 1px solid rgba(52,211,153,0.18);
          color: rgba(110,231,183,0.75);
        }
        .avail-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #34d399;
          animation: pulseGreen 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulseGreen {
          0%,100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.4); }
          50%      { box-shadow: 0 0 0 5px rgba(52,211,153,0); }
        }
      `}</style>

      <section id="contact" ref={ref} className="relative py-32">

        <div className="absolute pointer-events-none" style={{ bottom: '0%', left: '50%', transform: 'translateX(-50%)', width: 400, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,132,252,0.05) 0%, transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ top: '10%', right: '8%', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)' }} />

        <div className="max-w-5xl px-6 mx-auto">

          <div className="mb-10 reveal">
            <span className="section-eyebrow">Get in touch</span>
          </div>

          <h2 className="mb-4 contact-heading reveal" style={{ transitionDelay: '0.05s' }}>
            Let's build something<br />
            <em>great together.</em>
          </h2>

          <div className="mb-10 reveal" style={{ transitionDelay: '0.08s' }}>
            <span className="avail-pill">
              <span className="avail-dot" />
              Open to internships · Summer 2025
            </span>
          </div>

          <p className="reveal text-sm leading-[1.95] font-light mb-12"
             style={{ color: 'text-white', maxWidth: 460, transitionDelay: '0.1s' }}>
            I'm actively looking for internship opportunities in full-stack development
            or AI engineering. If you have something in mind, I'd genuinely love to hear from you.
          </p>

          <div className="mb-6 reveal" style={{ transitionDelay: '0.14s' }}>
            <button className="email-btn" onClick={copy}>
              <div className="email-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="email-address">arrushi111@gmail.com</span>
              <span
                className="copy-badge"
                style={copied
                  ? { background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', color: 'rgba(110,231,183,0.8)' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.25)' }
                }
              >
                {copied ? '✓ Copied' : 'Copy'}
              </span>
            </button>
          </div>

          {/* Social cards */}
          <div className="grid max-w-md grid-cols-3 gap-3 reveal" style={{ transitionDelay: '0.18s' }}>
           {socials.map(({ label, href, color, bg, border }) => (
  <a
    key={label}
    href={href}
    className="social-card"
    style={{ background: bg, border: `1px solid ${border}` }}
    target="_blank"
    rel="noopener noreferrer"
    
  >
    <span className="social-label" style={{ color }}>{label}</span>
    <svg
      className="social-arrow"
      width="10"
      height="10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      style={{ color }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 17L17 7M17 7H7M17 7v10"
      />
    </svg>
  </a>
))}

        </div>
        </div>

        {/* Footer */}
        <div className="max-w-5xl px-6 mx-auto mt-28 pt-7"
             style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="flex items-center justify-between">
            <p className="footer-bar" style={{ color: 'rgba(255,255,255,0.14)' }}>
              Arushi Tripathi · 2025
            </p>
            <p className="footer-bar" style={{ color: 'rgba(255,255,255,0.08)' }}>
              Built with React & Tailwind
            </p>
          </div>
        </div>

      </section>
    </>
  )
}