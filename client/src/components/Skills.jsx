import { useEffect, useRef } from "react";

const groups = [
  {
    label: "Languages",
    icon: "{ }",
    color: { bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.2)", accent: "rgba(165,180,252,0.85)", dot: "#818cf8", chipBg: "rgba(129,140,248,0.1)", chipBorder: "rgba(129,140,248,0.22)", chipText: "rgba(165,180,252,0.8)" },
    items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Frontend",
    icon: "◈",
    color: { bg: "rgba(192,132,252,0.08)", border: "rgba(192,132,252,0.2)", accent: "rgba(216,180,254,0.85)", dot: "#c084fc", chipBg: "rgba(192,132,252,0.1)", chipBorder: "rgba(192,132,252,0.22)", chipText: "rgba(216,180,254,0.8)" },
    items: ["React.js", "Next.js 14", "Tailwind CSS", "ShadcnUI", "HTML", "CSS"],
  },
  {
    label: "Backend",
    icon: "⌥",
    color: { bg: "rgba(34,211,238,0.07)", border: "rgba(34,211,238,0.18)", accent: "rgba(103,232,249,0.85)", dot: "#22d3ee", chipBg: "rgba(34,211,238,0.08)", chipBorder: "rgba(34,211,238,0.2)", chipText: "rgba(103,232,249,0.8)" },
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    label: "Databases",
    icon: "◉",
    color: { bg: "rgba(52,211,153,0.07)", border: "rgba(52,211,153,0.18)", accent: "rgba(110,231,183,0.85)", dot: "#34d399", chipBg: "rgba(52,211,153,0.08)", chipBorder: "rgba(52,211,153,0.2)", chipText: "rgba(110,231,183,0.8)" },
    items: ["MongoDB", "PostgreSQL", "Firebase", "Firestore", "Prisma ORM"],
  },
  {
    label: "AI and Machine Learning",
    icon: "✦",
    color: { bg: "rgba(251,146,60,0.07)", border: "rgba(251,146,60,0.2)", accent: "rgba(253,186,116,0.85)", dot: "#fb923c", chipBg: "rgba(251,146,60,0.09)", chipBorder: "rgba(251,146,60,0.22)", chipText: "rgba(253,186,116,0.85)" },
    items: ["LangChain", "LangGraph", "LangSmith", "Scikit-Learn", "PyTorch", "RAG"],
  }
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Mono:wght@300;400&display=swap');

        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }

        .skills-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 600;
          line-height: 1.1;
          color: rgba(255,255,255,0.96);
        }
        .skills-heading em {
          font-style: italic;
          background: linear-gradient(110deg, #e2b0ff 0%, #9f8cf8 50%, #5bd2f0 100%);
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

        .skill-group-card {
          border-radius: 20px;
          padding: 28px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .skill-group-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          background: rgba(255, 255, 255, 0.04);
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .group-icon {
          font-family: 'DM Mono', monospace;
          font-size: 16px;
          font-weight: 400;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .group-label {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .skill-chip {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .skill-chip:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
          filter: brightness(1.2);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section id="skills" ref={ref} className="relative py-20">

        {/* bg glows */}
        <div className="absolute pointer-events-none" style={{ top: '5%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,132,252,0.05) 0%, transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '10%', left: '5%', width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)' }} />

        <div className="max-w-5xl px-6 mx-auto">

          {/* Eyebrow */}
          <div className="mb-10 reveal">
            <span className="section-eyebrow">What I work with</span>
          </div>

          {/* Heading */}
          <h2 className="mb-20 skills-heading reveal" style={{ transitionDelay: '0.05s' }}>
            Tools of the<br />
            <em>craft.</em>
          </h2>

          {/* Grid of skill groups */}
          <div className="skills-grid">
            {groups.map((g, gi) => (
              <div
                key={g.label}
                className="skill-group-card reveal"
                style={{
                  background: g.color.bg,
                  border: `1px solid ${g.color.border}`,
                  transitionDelay: `${gi * 0.07}s`,
                }}
              >
                {/* Header */}
                <div className="group-header">
                  <div
                    className="group-icon"
                    style={{ background: `${g.color.dot}18`, color: g.color.dot }}
                  >
                    {g.icon}
                  </div>
                  <span className="group-label" style={{ color: g.color.accent }}>
                    {g.label}
                  </span>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {g.items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-chip"
                      style={{
                        background: g.color.chipBg,
                        border: `1px solid ${g.color.chipBorder}`,
                        color: g.color.chipText,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
