import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 160)
          setActive(s.id.charAt(0).toUpperCase() + s.id.slice(1))
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0C0C0F]/90 backdrop-blur-md border-b border-white/[0.04]' : ''
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display text-lg font-semibold tracking-wide">
          <span className="text-white/80">Arushi</span>
          <span className="text-purple-400 italic"> T.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={`text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                  active === l ? 'text-purple-300' : 'text-white/30 hover:text-white/70'
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/40 hover:text-white/80 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0C0C0F]/95 backdrop-blur-md border-t border-white/[0.04] px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-[0.18em] uppercase text-white/40 hover:text-white/80 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
