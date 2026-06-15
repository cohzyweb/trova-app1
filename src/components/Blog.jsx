import { useEffect, useRef, useState } from "react";

const POSTS = [
  { tag: "DATING ADVICE", emoji: "💡", title: "Why Shared Ambition Matters More Than Chemistry", desc: "Chemistry fades. Shared drive compounds. Here's the science behind why values-matched couples last longer." },
  { tag: "RELATIONSHIPS", emoji: "🧠", title: "The 3 Questions to Ask on a First Date", desc: "Skip the small talk. These conversation starters reveal compatibility faster than two months of texting." },
  { tag: "CAREER & LOVE", emoji: "⚡", title: "How Busy Professionals Can Actually Date", desc: "Time is your scarcest resource. Here's how to protect it and still build a meaningful connection." },
];

const SPIRAL = [
  { x: -260, y: 60, rotate: -12, delay: 0 },
  { x: 0, y: -30, rotate: 0, delay: 0.15 },
  { x: 260, y: 60, rotate: 12, delay: 0.30 },
];

export default function Blog() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const raw = (windowH - rect.top) / (windowH * 0.8);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="blog" ref={sectionRef} style={{ padding: "108px 5% 140px", background: "var(--dark)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: 80, flexWrap: "wrap", gap: 16,
          opacity: 0.4 + progress * 0.6,
          transform: `translateY(${(1 - progress) * 30}px)`,
          transition: "opacity 0.1s, transform 0.1s",
        }}>
          <div>
            <div style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>The Trova Edit</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.025em" }}>Date smarter.</h2>
          </div>
          <p style={{ color: "var(--muted)", maxWidth: 340, fontSize: 14, lineHeight: 1.75 }}>Advice, research, and real stories — for people who take love as seriously as their career.</p>
        </div>

        <div style={{ position: "relative", height: 420, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 60 }}>
          {POSTS.map((p, i) => {
            const s = SPIRAL[i];
            const cp = Math.min(1, Math.max(0, (progress - s.delay * 0.5) / (1 - s.delay * 0.5)));
            const ease = 1 - Math.pow(1 - cp, 3);
            const startR = s.rotate * 3 + (i - 1) * 180;
            const isCenter = i === 1;
            return (
              <div key={i} style={{
                position: "absolute", width: 290,
                opacity: ease,
                transform: `translate(${0 + (s.x - 0) * ease}px, ${300 + (s.y - 300) * ease}px) rotate(${startR + (s.rotate - startR) * ease}deg) scale(${0.4 + 0.6 * ease})`,
                zIndex: isCenter ? 3 : i === 0 ? 1 : 2,
                filter: isCenter ? "drop-shadow(0 24px 48px rgba(0,0,0,0.7)) drop-shadow(0 0 32px rgba(201,168,76,0.2))" : "brightness(0.7)",
              }}>
                <div style={{
                  background: "var(--card)",
                  border: `1px solid ${isCenter ? "rgba(201,168,76,0.4)" : "var(--border)"}`,
                  borderRadius: "var(--radius-lg)", overflow: "hidden",
                  boxShadow: isCenter ? "0 0 0 1px rgba(201,168,76,0.15)" : "none",
                }}>
                  <div style={{
                    height: 160,
                    background: `linear-gradient(145deg, rgba(201,168,76,${isCenter ? 0.18 : 0.08}), rgba(201,168,76,0.03))`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 44, position: "relative", overflow: "hidden",
                  }}>
                    <div style={{ position: "absolute", width: 120, height: 120, borderRadius: "50%", border: `1px solid rgba(201,168,76,${isCenter ? 0.25 : 0.1})`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                    <div style={{ position: "absolute", width: 80, height: 80, borderRadius: "50%", border: `1px solid rgba(201,168,76,${isCenter ? 0.15 : 0.06})`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                    <span style={{ position: "relative", zIndex: 1 }}>{p.emoji}</span>
                  </div>
                  <div style={{ padding: "20px 20px 24px" }}>
                    <div style={{ color: "var(--gold)", fontSize: 10, letterSpacing: "0.12em", fontWeight: 600, marginBottom: 8 }}>{p.tag}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, lineHeight: 1.3, marginBottom: 8, letterSpacing: "-0.01em" }}>{p.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                    <button style={{ background: "none", border: "none", color: "var(--gold)", fontSize: 13, fontWeight: 600, padding: 0, cursor: "pointer" }}>Read article →</button>
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.08), transparent 70%)", pointerEvents: "none", opacity: progress }} />
        </div>

        <div style={{ textAlign: "center", opacity: progress, transform: `translateY(${(1 - progress) * 20}px)`, transition: "opacity 0.1s, transform 0.1s" }}>
          <button style={{
            background: "transparent", border: "1px solid rgba(201,168,76,0.45)", color: "var(--gold)",
            borderRadius: 100, padding: "12px 36px", fontWeight: 600, fontSize: 14, cursor: "pointer",
            transition: "background var(--transition)",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.1)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >All articles</button>
        </div>
      </div>
    </section>
  );
}
