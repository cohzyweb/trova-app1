import { useState } from "react";

const STEPS = [
  { title: "Build your real profile", desc: "Answer questions about your career, values, and what you're actually looking for. No pointless bios just the real you." },
  { title: "Get curated matches daily", desc: "Every morning at 9am, Trova sends you 5 hand-picked matches. Quality over quantity, always." },
  { title: "Connect with confidence", desc: "Both people must express interest before a chat opens. No unsolicited messages, ever." },
];

const SCREENS = [
  {
    label: "YOUR PROFILE",
    title: "The real you",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 10 }}>
        {[["💼","Product Manager"],["🎓","MBA, LSE"],["📍","Lagos, NG"],["❤️","Serious relationship"]].map(([icon, val], i) => (
          <div key={i} style={{
            display: "flex", gap: 8, alignItems: "center",
            padding: "6px 10px", borderRadius: 8,
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
            fontSize: 9, color: "rgba(255,255,255,0.7)",
          }}>
            <span>{icon}</span><span>{val}</span>
          </div>
        ))}
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 4 }}>
          {["Ambitious","Traveller","Foodie"].map(t => (
            <span key={t} style={{ padding: "3px 8px", borderRadius: 100, background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", fontSize: 8, color: "var(--gold)" }}>{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "DAILY MATCHES",
    title: "Today's picks ✨",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
        {[["👩🏽","Amara, 27","Architect","96%"],["👩🏾","Zara, 25","Lawyer","91%"],["👩🏻","Jade, 29","Designer","88%"]].map(([emoji, name, role, match], i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "7px 10px", borderRadius: 10,
            background: i === 0 ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${i === 0 ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.05)"}`,
          }}>
            <span style={{ fontSize: 18 }}>{emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9, fontWeight: 600, color: i === 0 ? "var(--white)" : "rgba(255,255,255,0.5)" }}>{name} · {role}</div>
            </div>
            <span style={{ fontSize: 8, color: "var(--gold)", fontWeight: 700 }}>{match}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "MESSAGES",
    title: "It's a match! 🎉",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
        {[
          { text: "Hey! I saw you love travel too 🌍", mine: false },
          { text: "Yes! Just got back from Lisbon 🇵🇹", mine: true },
          { text: "No way — I went last month!", mine: false },
        ].map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.mine ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "78%", padding: "7px 10px", borderRadius: m.mine ? "12px 12px 3px 12px" : "12px 12px 12px 3px",
              background: m.mine ? "linear-gradient(135deg, rgba(201,168,76,0.35), rgba(201,168,76,0.15))" : "rgba(255,255,255,0.07)",
              border: `1px solid ${m.mine ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.06)"}`,
              fontSize: 9, color: m.mine ? "var(--gold-light)" : "rgba(255,255,255,0.7)",
              lineHeight: 1.5,
            }}>{m.text}</div>
          </div>
        ))}
        <div style={{ height: 24, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", paddingLeft: 8 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.25)" }}>Type a message...</span>
        </div>
      </div>
    ),
  },
];

function Phone({ screen }) {
  return (
    <div style={{
      width: 150, height: 300, borderRadius: 32,
      background: "linear-gradient(160deg, #2e2e2e 0%, #1a1a1a 40%, #0d0d0d 100%)",
      border: "1px solid rgba(255,255,255,0.12)", position: "relative", overflow: "hidden",
      boxShadow: "inset 2px 2px 5px rgba(255,255,255,0.08), 0 0 0 7px #0f0f0f, 0 0 0 8px rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.8)",
    }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 32, background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 45%)", pointerEvents: "none", zIndex: 10 }} />
      <div style={{ position: "absolute", top: 6, left: 6, right: 6, bottom: 6, borderRadius: 27, background: "var(--black)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0 0 8px" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: 27, background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 35%)", pointerEvents: "none", zIndex: 20 }} />
        <div style={{ width: 60, height: 18, background: "#000", borderRadius: 12, margin: "8px auto 0", flexShrink: 0, zIndex: 5, position: "relative" }} />
        <div style={{ padding: "8px 10px 0", position: "relative", zIndex: 5, flex: 1 }}>
          <div style={{ fontSize: 7, color: "var(--gold)", letterSpacing: "0.1em", marginBottom: 3 }}>{screen.label}</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", fontFamily: "var(--font-display)", lineHeight: 1.2 }}>{screen.title}</div>
          {screen.content}
        </div>
        <div style={{ width: 50, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.2)", margin: "0 auto", flexShrink: 0 }} />
      </div>
      <div style={{ position: "absolute", left: -4, top: 55, width: 3, height: 18, borderRadius: "2px 0 0 2px", background: "#333" }} />
      <div style={{ position: "absolute", left: -4, top: 80, width: 3, height: 22, borderRadius: "2px 0 0 2px", background: "#333" }} />
      <div style={{ position: "absolute", right: -4, top: 72, width: 3, height: 38, borderRadius: "0 2px 2px 0", background: "#333" }} />
    </div>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  return (
    <section id="how-it-works" style={{ padding: "108px 5%", background: "var(--black)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>The process</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 46 }}>How Trova works</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {STEPS.map((s, i) => (
              <div key={i} onClick={() => setActive(i)} style={{
                padding: "20px 24px", borderRadius: "var(--radius-md)", cursor: "pointer",
                background: active === i ? "rgba(201,168,76,0.1)" : "transparent",
                border: `1px solid ${active === i ? "rgba(201,168,76,0.45)" : "var(--border)"}`,
                transition: "all var(--transition)",
              }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                    background: active === i ? "linear-gradient(135deg, var(--gold), var(--gold-dark))" : "var(--card)",
                    border: `1px solid ${active === i ? "transparent" : "var(--border)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700,
                    color: active === i ? "var(--black)" : "var(--muted)",
                    transition: "all var(--transition)",
                  }}>{i + 1}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: active === i ? 8 : 0, color: active === i ? "var(--white)" : "var(--muted)", transition: "color var(--transition)" }}>{s.title}</div>
                    {active === i && <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75 }}>{s.desc}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 phones whot fan */}
        <div style={{ position: "relative", height: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", transform: "rotate(-18deg) translateX(-90px) translateY(20px)", transformOrigin: "bottom center", zIndex: 1, filter: "brightness(0.5)", transition: "all 0.4s ease" }}>
            <Phone screen={SCREENS[2]} />
          </div>
          <div style={{ position: "absolute", transform: "rotate(18deg) translateX(90px) translateY(20px)", transformOrigin: "bottom center", zIndex: 1, filter: "brightness(0.5)", transition: "all 0.4s ease" }}>
            <Phone screen={SCREENS[0]} />
          </div>
          <div style={{ position: "absolute", transform: "rotate(0deg) translateY(-10px)", transformOrigin: "bottom center", zIndex: 3, filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(201,168,76,0.25))", transition: "all 0.4s ease" }}>
            <Phone screen={SCREENS[1]} />
          </div>
          <div style={{ position: "absolute", bottom: 20, width: 200, height: 30, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(201,168,76,0.2), transparent 70%)", filter: "blur(10px)", zIndex: 0 }} />
        </div>
      </div>
    </section>
  );
}
