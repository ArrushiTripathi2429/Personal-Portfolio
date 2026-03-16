import { useEffect, useRef, useState } from "react";
import Saundarya1 from '../assets/Saundarya1.png';
import Saundarya2 from '../assets/Saundarya2.png';
import Saundarya3 from '../assets/Saundarya3.png';
import PitchPerfect1 from '../assets/PitchPerfect1.png';
import PitchPerfect2 from '../assets/PitchPerfect2.png';



const projects = [
  {
    number: "01",
    title: "Saundarya AI",
    category: "GenAI · Full Stack",
    description:
      "Conversational AI app with LLM integration, context memory, and streaming responses built on Next.js.",
    stack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Prisma ORM"],
    images: [
   Saundarya1, Saundarya2, Saundarya3
    ],
    link: "#",
    github: "#",
    color: {
      bg: "rgba(251,146,60,0.06)",
      border: "rgba(251,146,60,0.16)",
      accent: "rgba(253,186,116,0.8)",
      dot: "#fb923c",
      numColor: "rgba(251,146,60,0.35)",
      chipBg: "rgba(251,146,60,0.08)",
      chipBorder: "rgba(251,146,60,0.18)",
      chipText: "rgba(253,186,116,0.7)",
    },
  },
  {
    number: "02",
    title: "Pitch Perfect AI",
    category: "MERN Stack · GenAI",
    description:
      "Full-featured app with JWT auth, cart management, Stripe payments and an admin dashboard.",
    stack: ["React.js", "Node.js", "MongoDB", "Express", "FaceApi, Mediapipe"],
    images: [
     PitchPerfect1, PitchPerfect2
    ],
    link: "#",
    github: "#",
    color: {
      bg: "rgba(192,132,252,0.06)",
      border: "rgba(192,132,252,0.16)",
      accent: "rgba(216,180,254,0.8)",
      dot: "#c084fc",
      numColor: "rgba(192,132,252,0.3)",
      chipBg: "rgba(192,132,252,0.08)",
      chipBorder: "rgba(192,132,252,0.18)",
      chipText: "rgba(216,180,254,0.7)",
    },
  },
];

/* ─────────────────────────────────────────
   Per-card image carousel
───────────────────────────────────────── */
function ProjectCarousel({ images, color, title }) {
  const [idx, setIdx] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState(null); // 'next' | 'prev'
  const [displayIdx, setDisplayIdx] = useState(0);
  const total = images.length;

  const navigate = (direction) => {
    if (sliding) return;
    setSlideDir(direction);
    setSliding(true);
    setTimeout(() => {
      const next =
        direction === "next"
          ? (idx + 1) % total
          : (idx - 1 + total) % total;
      setIdx(next);
      setDisplayIdx(next);
      setSliding(false);
      setSlideDir(null);
    }, 350);
  };

  const jumpTo = (i) => {
    if (sliding || i === idx) return;
    setSlideDir(i > idx ? "next" : "prev");
    setSliding(true);
    setTimeout(() => {
      setIdx(i);
      setDisplayIdx(i);
      setSliding(false);
      setSlideDir(null);
    }, 350);
  };

  // Build CSS class for current slide
  const slideClass = sliding
    ? slideDir === "next"
      ? "slide-exit-left"
      : "slide-exit-right"
    : "slide-idle";

  return (
    <div className="carousel-root" style={{ borderBottom: `1px solid ${color.border}` }}>

      {/* ── Fake browser bar ── */}
      <div className="crs-browser-bar">
        <span className="crs-b-dot" style={{ background: "#ff5f56" }} />
        <span className="crs-b-dot" style={{ background: "#ffbd2e" }} />
        <span className="crs-b-dot" style={{ background: "#27c93f" }} />
        <span className="crs-url-pill">
          {title.toLowerCase().replace(/ /g, "-")}.vercel.app
        </span>
        <span className="crs-counter">{idx + 1}/{total}</span>
      </div>

      {/* ── Slide viewport ── */}
      <div className="crs-viewport">
        {images[displayIdx] ? (
          <img
            key={displayIdx}
            src={images[displayIdx]}
            alt={`${title} screenshot ${displayIdx + 1}`}
            className={`crs-img ${slideClass}`}
          />
        ) : (
          <div className="crs-placeholder">
            <svg width="32" height="32" fill="none" stroke="rgba(255,255,255,0.16)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="crs-ph-text">screenshot {displayIdx + 1}</span>
          </div>
        )}

        {/* Bottom fade into card bg */}
        <div
          className="crs-fade"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, ${color.bg.replace("0.06", "0.92")})`,
          }}
        />

        {/* Left arrow */}
        <button
          className="crs-arrow crs-arrow-left"
          onClick={() => navigate("prev")}
          disabled={sliding}
          aria-label="Previous"
          style={{ "--arrow-accent": color.accent, "--arrow-border": color.border }}
        >
          <svg width="9" height="9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          className="crs-arrow crs-arrow-right"
          onClick={() => navigate("next")}
          disabled={sliding}
          aria-label="Next"
          style={{ "--arrow-accent": color.accent, "--arrow-border": color.border }}
        >
          <svg width="9" height="9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="crs-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className="crs-dot"
              onClick={() => jumpTo(i)}
              aria-label={`Go to image ${i + 1}`}
              style={{
                background: i === idx ? color.accent : "rgba(255,255,255,0.2)",
                width: i === idx ? "18px" : "6px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main section
───────────────────────────────────────── */
export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Mono:wght@300;400&display=swap');

        /* ── Reveal animation ── */
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }

        /* ── Heading ── */
        .projects-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 700;
          line-height: 1.06;
          color: rgba(255,255,255,0.9);
        }
        .projects-heading em {
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
          width: 32px; height: 1px;
          background: rgba(192,132,252,0.35);
        }

        /* ── Card ── */
        .project-card {
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .project-card:hover { transform: translateY(-6px); }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          z-index: 1;
          pointer-events: none;
        }

        .project-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.2rem;
          font-weight: 700;
          font-style: italic;
          line-height: 1;
          position: absolute;
          top: 6px; right: 14px;
          z-index: 20;
          text-shadow: 0 2px 16px rgba(0,0,0,0.7);
          pointer-events: none;
        }

        /* ── Carousel ── */
        .carousel-root {
          position: relative;
          width: 100%;
          flex-shrink: 0;
        }

        .crs-browser-bar {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 0 12px;
          height: 26px;
          background: rgba(8,8,14,0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
          z-index: 5;
        }
        .crs-b-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .crs-url-pill {
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
          border-radius: 20px;
          padding: 2px 10px;
          letter-spacing: 0.04em;
          max-width: 165px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-left: 6px;
          flex: 1;
        }
        .crs-counter {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.08em;
          margin-left: auto;
          flex-shrink: 0;
        }

        /* Slide viewport */
        .crs-viewport {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: rgba(0,0,0,0.4);
        }

        .crs-img {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top;
          will-change: transform, opacity;
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.32s ease;
        }
        .crs-img.slide-idle       { transform: translateX(0);    opacity: 1; }
        .crs-img.slide-exit-left  { transform: translateX(-8%);  opacity: 0; }
        .crs-img.slide-exit-right { transform: translateX(8%);   opacity: 0; }

        .crs-placeholder {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 8px;
        }
        .crs-ph-text {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.14);
        }

        .crs-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 70px;
          pointer-events: none;
          z-index: 3;
        }

        /* Arrows */
        .crs-arrow {
          position: absolute;
          top: 50%; transform: translateY(-50%);
          z-index: 6;
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(6,6,12,0.65);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.4);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s, background 0.2s, color 0.2s, transform 0.2s;
        }
        .carousel-root:hover .crs-arrow {
          opacity: 1;
          pointer-events: auto;
        }
        .crs-arrow:hover {
          background: rgba(15,15,22,0.9);
          color: var(--arrow-accent);
          border-color: var(--arrow-border);
          transform: translateY(-50%) scale(1.12);
        }
        .crs-arrow:disabled { opacity: 0.15 !important; pointer-events: none; }
        .crs-arrow-left  { left: 10px; }
        .crs-arrow-right { right: 10px; }

        /* Dots */
        .crs-dots {
          position: absolute;
          bottom: 10px; left: 50%;
          transform: translateX(-50%);
          display: flex; align-items: center; gap: 5px;
          z-index: 6;
        }
        .crs-dot {
          height: 6px;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          transition: background 0.25s ease, width 0.25s ease;
          padding: 0;
        }

        /* ── Card body ── */
        .card-body {
          padding: 20px 24px 22px;
          display: flex; flex-direction: column; flex: 1;
        }
        .project-category {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 300;
          margin-bottom: 6px;
        }
        .project-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: rgba(255,255,255,0.88);
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .project-desc {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(255,255,255,0.32);
          margin-bottom: 16px;
        }
        .stack-chip {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 300;
          padding: 4px 11px;
          border-radius: 20px;
          letter-spacing: 0.05em;
          transition: transform 0.15s ease;
        }
        .stack-chip:hover { transform: translateY(-2px); }
        .project-link {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 300;
          color: rgba(255,255,255,0.2);
          display: inline-flex; align-items: center; gap: 6px;
          transition: color 0.2s ease;
        }
        .divider-line {
          height: 1px;
          background: rgba(255,255,255,0.04);
          margin: 14px 0;
        }
      `}</style>

      <section id="projects" ref={ref} className="relative py-32">

        {/* Ambient glows */}
        <div className="absolute pointer-events-none" style={{ top: '8%', left: '5%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,146,60,0.04) 0%, transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '10%', right: '5%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)' }} />

        <div className="max-w-5xl px-6 mx-auto">

          <div className="mb-10 reveal">
            <span className="section-eyebrow">Selected work</span>
          </div>

          <h2 className="mb-20 projects-heading reveal" style={{ transitionDelay: "0.05s" }}>
            Things I've<br />
            <em>built.</em>
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <div
                key={p.number}
                className="project-card reveal"
                style={{
                  background: p.color.bg,
                  border: `1px solid ${p.color.border}`,
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                {/* Italic number floats over carousel top-right */}
                <span className="project-num" style={{ color: p.color.numColor }}>
                  {p.number}
                </span>

                {/* ── Carousel ── */}
                <ProjectCarousel images={p.images} color={p.color} title={p.title} />

                {/* ── Text content ── */}
                <div className="card-body">
                  <p className="project-category" style={{ color: p.color.accent }}>
                    {p.category}
                  </p>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="stack-chip"
                        style={{
                          background: p.color.chipBg,
                          border: `1px solid ${p.color.chipBorder}`,
                          color: p.color.chipText,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="divider-line" />

                  <div className="flex gap-6">
                    <a
                      href={p.github}
                      className="project-link"
                      onMouseEnter={(e) => (e.currentTarget.style.color = p.color.accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
                    >
                      GitHub
                      <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={p.link}
                      className="project-link"
                      onMouseEnter={(e) => (e.currentTarget.style.color = p.color.accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
                    >
                      Live Demo
                      <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
