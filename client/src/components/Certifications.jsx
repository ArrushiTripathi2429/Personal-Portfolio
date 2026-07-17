import { useEffect, useRef } from "react";
import genAiCert from "../assets/genai_certificate.jpeg";
import gfgCert from "../assets/gfgcertificate.png";

const certificates = [
  {
    title: "Complete Generative AI Course With Langchain and Huggingface",
    issuer: "Udemy (Krish Naik)",
    date: "11 Jun 2026",
    duration: "57.5 hours",
    color: { bg: "rgba(192,132,252,0.08)", border: "rgba(192,132,252,0.2)", accent: "#c084fc", glow: "rgba(192,132,252,0.15)" },
    image: genAiCert,
    link: "https://ude.my/UC-79a019b3-0044-46b5-b22a-b892e99306aa"
  },
  {
    title: "Placement Tayyari: DSA & Soft Skills",
    issuer: "GeeksforGeeks (Sandeep Jain)",
    date: "11th June 2025 to 22nd Feb 2026",
    duration: "Training Program",
    color: { bg: "rgba(52,211,153,0.07)", border: "rgba(52,211,153,0.18)", accent: "#34d399", glow: "rgba(52,211,153,0.15)" },
    image: gfgCert,
    link: "https://media.geeksforgeeks.org/certificates/1776773144/cf4aa53d553b88e8678185b9584cb90f.pdf"
  }
];

export default function Certifications() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .cert-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 600;
          line-height: 1.1;
          color: rgba(255,255,255,0.96);
        }
        .cert-heading em {
          font-style: italic;
          background: linear-gradient(110deg, #5bd2f0 0%, #c084fc 50%, #e2b0ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cert-card {
          border-radius: 20px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .cert-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          background: rgba(255, 255, 255, 0.04);
        }

        .cert-image-wrapper {
          width: 100%;
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 24px;
          position: relative;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .cert-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        
        .cert-card:hover .cert-image {
          transform: scale(1.05);
        }

        .cert-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .cert-issuer {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        
        .cert-details {
          display: flex;
          gap: 16px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 24px;
        }

        .cert-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
        }
        
        .cert-link:hover {
          background: rgba(255,255,255,0.1);
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) { .cert-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section id="certifications" ref={ref} className="relative py-20">

        {/* bg glows */}
        <div className="absolute pointer-events-none" style={{ top: '20%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)' }} />

        <div className="max-w-5xl px-6 mx-auto">
          
          <div className="mb-10 reveal">
            <span className="section-eyebrow">Milestones</span>
          </div>

          <h2 className="mb-16 cert-heading reveal" style={{ transitionDelay: '0.05s' }}>
            Continuous<br />
            <em>learning.</em>
          </h2>

          <div className="cert-grid">
            {certificates.map((cert, i) => (
              <div 
                key={cert.title} 
                className="cert-card reveal"
                style={{ 
                  transitionDelay: `${i * 0.1}s`,
                  borderTop: `1px solid ${cert.color.border}`
                }}
              >
                {/* Glow accent */}
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[40px] pointer-events-none" 
                  style={{ background: cert.color.glow }}
                />

                <div className="cert-image-wrapper">
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer" style={{ color: cert.color.accent }}>{cert.issuer}</div>
                
                <div className="cert-details">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: cert.color.accent }}></span>
                    {cert.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: cert.color.accent }}></span>
                    {cert.duration}
                  </div>
                </div>

                <div className="mt-auto">
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link" style={{ border: `1px solid ${cert.color.border}` }}>
                    View Credential
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
