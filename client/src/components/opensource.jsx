import { useEffect, useRef } from "react";

// TODO: replace with your actual merged PR URLs
const contributions = [
  {
    number: "01",
    repo: "pathfinder-ai",
    title: "Fixed SSE/JSON response mismatch",
    description:
      "Tracked down a critical mismatch between the SSE stream format and the JSON the backend pipeline expected, which was silently breaking streaming responses. Patched the response contract on both sides so streaming no longer drops mid-request.",
    tags: ["SSE", "Streaming", "Backend"],
    prLink: "https://github.com/OpenSaathi/pathfinder-ai/pulls?q=is%3Apr+author%3AArrushiTripathi2429",
    color: {
      bg: "rgba(56,189,248,0.06)",
      border: "rgba(56,189,248,0.16)",
      numColor: "rgba(56,189,248,0.35)",
      chipBg: "rgba(56,189,248,0.08)",
      chipBorder: "rgba(56,189,248,0.18)",
      chipText: "rgba(186,230,253,0.7)",
      dot: "#38bdf8",
    },
  },
  {
    number: "02",
    repo: "InternHack",
    title: "Fixed cross-browser social icon rendering",
    description:
      "Social media icons were failing to render consistently across browsers. Rebuilt them as inline SVGs instead of external image references, resolving the cross-browser display issue for good.",
    tags: ["SVG", "Cross-Browser", "UI Fix"],
    prLink: "https://github.com/InternHack/InternHack/pulls?q=is%3Apr+author%3AArrushiTripathi2429",
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
];

export default function OpenSource() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".os-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Mono:wght@300;400&display=swap');

        .os-reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .os-reveal.visible { opacity: 1; transform: none; }

        .os-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 600;
          line-height: 1.1;
          color: rgba(255,255,255,0.96);
        }
        .os-heading em {
          font-style: italic;
          background: linear-gradient(110deg, #5bd2f0 0%, #9f8cf8 50%, #e2b0ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .os-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(56,189,248,0.5);
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 300;
        }
        .os-eyebrow::before {
          content: '';
          width: 32px; height: 1px;
          background: rgba(56,189,248,0.35);
        }

        /* GSSoC badge */
        .os-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.55);
        }
        .os-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: linear-gradient(135deg, #38bdf8, #fbbf24);
          flex-shrink: 0;
          box-shadow: 0 0 8px rgba(56,189,248,0.6);
        }
        .os-badge b {
          color: rgba(255,255,255,0.85);
          font-weight: 400;
        }

        /* Contribution card */
        .os-card {
          border-radius: 20px;
          padding: 26px 26px 24px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .os-card:hover { 
          transform: translateY(-6px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .os-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
        }

        .os-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          font-style: italic;
          line-height: 1;
          position: absolute;
          top: 14px; right: 20px;
          text-shadow: 0 2px 16px rgba(0,0,0,0.7);
        }

        .os-repo-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }
        .os-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .os-repo {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
        }

        .os-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: rgba(255,255,255,0.88);
          line-height: 1.25;
          margin-bottom: 10px;
          max-width: 90%;
        }
        .os-desc {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(255,255,255,0.32);
          margin-bottom: 16px;
        }
        .os-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 300;
          padding: 4px 11px;
          border-radius: 20px;
          letter-spacing: 0.05em;
        }

        .os-divider {
          height: 1px;
          background: rgba(255,255,255,0.04);
          margin: 16px 0 14px;
        }

        .os-pr-link {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 300;
          color: rgba(255,255,255,0.2);
          display: inline-flex; align-items: center; gap: 6px;
          transition: color 0.2s ease;
        }
        .os-pr-status {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(163,230,53,0.6);
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-left: auto;
        }
        .os-pr-status::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #a3e635;
        }
        .os-pr-row {
          display: flex;
          align-items: center;
        }
      `}</style>

      <section id="open-source" ref={ref} className="relative py-16">

        <div className="absolute pointer-events-none" style={{ top: '12%', right: '8%', width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '6%', left: '6%', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.04) 0%, transparent 70%)' }} />

        <div className="max-w-5xl px-6 mx-auto">

          <div className="mb-10 os-reveal">
            <span className="os-eyebrow">Giving back</span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6 mb-20">
            <h2 className="os-heading os-reveal" style={{ transitionDelay: "0.05s" }}>
              Open source<br />
              <em>contributions.</em>
            </h2>

            <div className="os-badge os-reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="os-badge-dot" />
              <b>GSSoC 2026</b> Contributor
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {contributions.map((c, i) => (
              <div
                key={c.number}
                className="os-card os-reveal"
                style={{
                  background: c.color.bg,
                  border: `1px solid ${c.color.border}`,
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <span className="os-num" style={{ color: c.color.numColor }}>
                  {c.number}
                </span>

                <div className="os-repo-row">
                  <span className="os-dot" style={{ background: c.color.dot }} />
                  <span className="os-repo">{c.repo}</span>
                </div>

                <h3 className="os-title">{c.title}</h3>
                <p className="os-desc">{c.description}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="os-tag"
                      style={{
                        background: c.color.chipBg,
                        border: `1px solid ${c.color.chipBorder}`,
                        color: c.color.chipText,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="os-divider" />

                <div className="os-pr-row">
                  <a
                    href={c.prLink}
                    className="os-pr-link"
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
                  >
                    View PR
                    <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <span className="os-pr-status">Merged</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}