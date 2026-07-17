import { useEffect, useRef } from "react";

// TODO: swap placeholder links for your actual LinkedIn/Medium posts once you have the URLs
const achievements = [
  {
    number: "01",
    org: "Delhi Development Authority (DDA)",
    title: "National Finalist — Harit Manthan Hackathon 2026",
    description:
      "Selected among the top 60 teams nationwide out of a huge applicant pool, earning a slot to pitch directly to government officials on sustainable urban solutions for Delhi.",
    tags: ["Top 60 Nationwide", "Govt. Pitch Round"],
    link: "https://www.linkedin.com/in/arushi-tripathi",
    linkLabel: "View Post",
    color: {
      bg: "rgba(251,191,36,0.06)",
      border: "rgba(251,191,36,0.16)",
      numColor: "rgba(251,191,36,0.35)",
      chipBg: "rgba(251,191,36,0.08)",
      chipBorder: "rgba(251,191,36,0.18)",
      chipText: "rgba(253,230,138,0.7)",
      dot: "#fbbf24",
    },
  },
  {
    number: "02",
    org: "Google Solution Challenge 2026",
    title: "Built & Submitted Sanrakshan",
    description:
      "Designed and shipped Sanrakshan, a full-stack AI disaster relief coordination platform for rural India, representing RGIPT Rae Bareli in Google's global Solution Challenge.",
    tags: ["Representing RGIPT", "Full-Stack AI"],
    link: "https://sanrakshann.netlify.app",
    linkLabel: "View Project",
    color: {
      bg: "rgba(251,146,60,0.06)",
      border: "rgba(251,146,60,0.16)",
      numColor: "rgba(251,146,60,0.35)",
      chipBg: "rgba(251,146,60,0.08)",
      chipBorder: "rgba(251,146,60,0.18)",
      chipText: "rgba(253,186,116,0.7)",
      dot: "#fb923c",
    },
  },
];

export default function Achievements() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".ach-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Mono:wght@300;400&display=swap');

        .ach-reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .ach-reveal.visible { opacity: 1; transform: none; }

        .ach-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 600;
          line-height: 1.1;
          color: rgba(255,255,255,0.96);
        }
        .ach-heading em {
          font-style: italic;
          background: linear-gradient(110deg, #fbbf24 0%, #fb923c 60%, #e2b0ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ach-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(251,191,36,0.5);
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 300;
        }
        .ach-eyebrow::before {
          content: '';
          width: 32px; height: 1px;
          background: rgba(251,191,36,0.35);
        }

        .ach-card {
          border-radius: 20px;
          padding: 26px 26px 24px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .ach-card:hover { 
          transform: translateY(-6px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .ach-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
        }

        .ach-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          font-style: italic;
          line-height: 1;
          position: absolute;
          top: 14px; right: 20px;
          text-shadow: 0 2px 16px rgba(0,0,0,0.7);
        }

        .ach-org-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }
        .ach-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .ach-org {
          font-family: 'DM Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        .ach-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: rgba(255,255,255,0.88);
          line-height: 1.28;
          margin-bottom: 10px;
          max-width: 92%;
        }
        .ach-desc {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(255,255,255,0.32);
          margin-bottom: 16px;
        }
        .ach-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 300;
          padding: 4px 11px;
          border-radius: 20px;
          letter-spacing: 0.05em;
        }

        .ach-divider {
          height: 1px;
          background: rgba(255,255,255,0.04);
          margin: 16px 0 14px;
        }

        .ach-link {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 300;
          color: rgba(255,255,255,0.2);
          display: inline-flex; align-items: center; gap: 6px;
          transition: color 0.2s ease;
        }
      `}</style>

      <section id="achievements" ref={ref} className="relative py-16">

        <div className="absolute pointer-events-none" style={{ top: '10%', left: '8%', width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '8%', right: '6%', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,114,182,0.04) 0%, transparent 70%)' }} />

        <div className="max-w-5xl px-6 mx-auto">

          <div className="mb-10 ach-reveal">
            <span className="ach-eyebrow">Recognition</span>
          </div>

          <h2 className="mb-20 ach-heading ach-reveal" style={{ transitionDelay: "0.05s" }}>
            Things I've<br />
            <em>earned.</em>
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((a, i) => (
              <div
                key={a.number}
                className="ach-card ach-reveal"
                style={{
                  background: a.color.bg,
                  border: `1px solid ${a.color.border}`,
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <span className="ach-num" style={{ color: a.color.numColor }}>
                  {a.number}
                </span>

                <div className="ach-org-row">
                  <span className="ach-dot" style={{ background: a.color.dot }} />
                  <span className="ach-org">{a.org}</span>
                </div>

                <h3 className="ach-title">{a.title}</h3>
                <p className="ach-desc">{a.description}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {a.tags.map((tag) => (
                    <span
                      key={tag}
                      className="ach-tag"
                      style={{
                        background: a.color.chipBg,
                        border: `1px solid ${a.color.chipBorder}`,
                        color: a.color.chipText,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="ach-divider" />

                <a
                  href={a.link}
                  className="ach-link"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
                >
                  {a.linkLabel}
                  <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}