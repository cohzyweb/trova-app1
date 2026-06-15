import { useState, useEffect } from "react";

const PROFILES = [
  { name: "Amara, 27", role: "Architect", match: 96, emoji: "👩🏽" },
  { name: "Zara, 25",  role: "Lawyer",    match: 91, emoji: "👩🏾" },
  { name: "Jade, 29",  role: "Designer",  match: 88, emoji: "👩🏻" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % PROFILES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const p = PROFILES[active];

  return (
    <section style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: 60,
      padding: "130px 7% 90px",
      position: "relative",
      overflow: "hidden",
      background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(201,168,76,0.10) 0%, transparent 65%)",
    }}>
      {/* BG rings */}
      {[500, 800, 1100].map((s, i) => (
        <div key={i} style={{
          position: "absolute", top: "50%", left: "25%",
          transform: "translate(-50%,-50%)",
          width: s, height: s, borderRadius: "50%",
          border: `1px solid rgba(201,168,76,${0.08 - i * 0.02})`,
          pointerEvents: "none",
        }} />
      ))}

      {/* Left — copy */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 16px", borderRadius: 100,
          border: "1px solid rgba(201,168,76,0.35)",
          background: "rgba(201,168,76,0.07)",
          fontSize: 11, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--gold)", marginBottom: 32,
        }}>
          <span className="animate-heart" style={{ display: "inline-block" }}>♥</span>
          Built for ambitious people
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(44px, 5.5vw, 82px)",
          lineHeight: 1.05, letterSpacing: "-0.035em", marginBottom: 24,
        }}>
          Find someone<br />who matches your
          <br />
          <span style={{
            background: "linear-gradient(120deg, var(--gold-light), var(--gold), var(--gold-dark), var(--gold))",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            animation: "shimmer 3.5s linear infinite",
          }}>ambition.</span>
        </h1>

        <p style={{ color: "var(--muted)", fontSize: 17, maxWidth: 420, lineHeight: 1.75, marginBottom: 44 }}>
          Trova matches young professionals on what actually matters
          values, goals, and the life you're building. Not just a photo.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 52 }}>
          <button className="animate-pulse" style={{
            background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
            color: "var(--black)", borderRadius: "var(--radius-md)",
            padding: "16px 40px", fontWeight: 700, fontSize: 16,
            boxShadow: "0 10px 36px rgba(201,168,76,0.38)",
            transition: "opacity var(--transition)",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Create your profile</button>
          <button style={{
            background: "transparent", color: "var(--white)",
            border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
            padding: "16px 36px", fontWeight: 500, fontSize: 16,
            transition: "border-color var(--transition)",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
          >See how it works</button>
        </div>

        {/* Social proof */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex" }}>
            {["👩🏽","👨🏻","👩🏾","👨🏿","👩🏼"].map((e, i) => (
              <div key={i} style={{
                width: 34, height: 34, borderRadius: "50%",
                background: `linear-gradient(135deg, rgba(201,168,76,${0.3 - i*0.04}), rgba(201,168,76,0.1))`,
                border: "2px solid var(--black)",
                marginLeft: i > 0 ? -10 : 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16,
              }}>{e}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>50,000+ professionals</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>already found their match</div>
          </div>
        </div>
      </div>

      {/* Right — profile card */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 2 }}>
        {/* Orbit dot */}
        <div style={{
          position: "absolute", width: 12, height: 12, borderRadius: "50%",
          background: "var(--gold)", boxShadow: "0 0 16px rgba(201,168,76,0.8)",
          animation: "orbitDot 6s linear infinite",
          top: "50%", left: "50%", marginTop: -6, marginLeft: -6,
        }} />

        {/* Card */}
        <div style={{
          width: 300, background: "var(--card)",
          border: "1px solid rgba(201,168,76,0.3)",
          borderRadius: 24, overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(201,168,76,0.12)",
          transition: "all 0.5s ease",
        }}>
          {/* Photo area */}
          <div style={{
            height: 320, position: "relative",
            background: `linear-gradient(160deg, rgba(201,168,76,0.18), rgba(201,168,76,0.04))`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ fontSize: 100 }}>{p.emoji}</div>

            {/* Match badge */}
            <div style={{
              position: "absolute", top: 16, right: 16,
              background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
              color: "var(--black)", borderRadius: 100,
              padding: "6px 14px", fontSize: 12, fontWeight: 700,
              boxShadow: "0 4px 16px rgba(201,168,76,0.4)",
            }}>{p.match}% match</div>

            {/* Like / pass */}
            <div style={{
              position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)",
              display: "flex", gap: 14,
            }}>
              {[["✕","rgba(255,80,80,0.2)","rgba(255,80,80,0.5)"],["♥","rgba(201,168,76,0.2)","rgba(201,168,76,0.5)"]].map(([icon, bg, border], j) => (
                <button key={j} style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: bg, border: `1px solid ${border}`,
                  fontSize: 20, color: j === 1 ? "var(--gold)" : "rgba(255,100,100,0.9)",
                  transition: "transform var(--transition), box-shadow var(--transition)",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.boxShadow = `0 0 20px ${border}`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >{icon}</button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div style={{ padding: "18px 20px 22px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, marginBottom: 4 }}>{p.name}</div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 14 }}>{p.role} · Lagos, NG</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Ambitious","Traveller","Coffee addict"].map(t => (
                <span key={t} style={{
                  padding: "4px 12px", borderRadius: 100,
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  fontSize: 11, color: "var(--gold)",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div style={{ position: "absolute", bottom: -30, display: "flex", gap: 8 }}>
          {PROFILES.map((_, i) => (
            <div key={i} onClick={() => setActive(i)} style={{
              width: i === active ? 24 : 8, height: 8, borderRadius: 4,
              background: i === active ? "var(--gold)" : "var(--border)",
              cursor: "pointer", transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
