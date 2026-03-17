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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

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
          font-weight: 700;
          font-size: clamp(3.4rem, 7vw, 6rem);
          color: rgba(255,255,255,0.92);
        }
        .hero-name-last {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(3.4rem, 7vw, 6rem);
          background: linear-gradient(110deg,#c084fc,#38bdf8,#c084fc);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        .photo-frame-outer {
          background:
            linear-gradient(#13131A, #13131A) padding-box,
            conic-gradient(from var(--angle), #c084fc22, #818cf844, #38bdf822, #c084fc22) border-box;
          border: 1px solid transparent;
          animation: borderSpin 6s linear infinite;
        }
      `}</style>

      <section className="relative flex items-center min-h-screen overflow-hidden">
        <div className="grid items-center w-full max-w-5xl gap-16 px-6 pt-20 mx-auto md:grid-cols-2">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase text-emerald-400">
              Open to internships
            </span>

            <div>
              <div className="hero-name-first">Arushi</div>
              <div className="hero-name-last">Tripathi</div>
            </div>

            <p className="text-gray-400 italic min-h-[24px]">
              {text}
              <span className="animate-pulse">|</span>
            </p>

            <p className="max-w-sm text-sm text-gray-300">
              Building thoughtful applications from backend to frontend —
              with a growing passion for Generative AI.
            </p>

            <div className="flex gap-3">
              <a href="#projects" className="px-5 py-2 border rounded-full">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-2 border rounded-full">
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