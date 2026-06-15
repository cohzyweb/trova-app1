import { useState } from "react";

const STORIES = [
  { name: "Temi & Kolade", location: "Lagos", initial: "T", quote: "I'd tried every other app. Trova matched us on our third day. We got engaged seven months later. The compatibility score was 94% turns out the algorithm knew before we did.", tag: "Engaged 💍" },
  { name: "Priya & Marcus", location: "London", initial: "P", quote: "As a lawyer I had zero time for endless swiping. Trova gave me five matches every morning. Marcus was in my second batch. We've been together a year now.", tag: "Together 1yr ❤️" },
  { name: "Yemi & Adaeze", location: "Abuja", initial: "Y", quote: "I was sceptical about dating apps but Trova felt different. No games, no ghosting. We matched on values first. The rest just followed naturally.", tag: "Married 🥂" },
];

export default function Testimonials() {
  const [active, setActive] = useState(1);
  return (
    <section id="success-stories" style={{ padding: "108px 5%", background: "var(--dark)" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Real couples</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 700, letterSpacing: "-0.025em" }}>
          They found it here
        </h2>
      </div>
      <div style={{ display: "flex", gap: 18, maxWidth: 980, margin: "0 auto", alignItems: "stretch" }}>
        {STORIES.map((t, i) => (
          <div key={i} onClick={() => setActive(i)} style={{
            flex: i === active ? 1.5 : 1, borderRadius: "var(--radius-lg)", padding: "28px 26px", cursor: "pointer",
            background: i === active ? "linear-gradient(140deg, rgba(201,168,76,0.18), rgba(201,168,76,0.06))" : "var(--card)",
            border: `1px solid ${i === active ? "rgba(201,168,76,0.5)" : "var(--border)"}`,
            transition: "all 0.38s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--black)", fontWeight: 700, fontSize: 14, flexShrink: 0,
              }}>{t.initial}</div>
              {i === active && (
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>{t.location}</div>
                </div>
              )}
            </div>
            <span style={{
              display: "inline-block", padding: "3px 10px", borderRadius: 100,
              background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)",
              fontSize: 10, color: "var(--gold)", marginBottom: 14,
            }}>{t.tag}</span>
            <p style={{
              fontFamily: i === active ? "var(--font-display)" : "var(--font-body)",
              fontStyle: i === active ? "italic" : "normal",
              fontSize: i === active ? 16 : 13,
              color: i === active ? "var(--white)" : "var(--muted)",
              lineHeight: 1.75,
            }}>"{t.quote}"</p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 32 }}>
        {STORIES.map((_, i) => (
          <div key={i} onClick={() => setActive(i)} style={{
            height: 8, width: i === active ? 26 : 8, borderRadius: 4,
            background: i === active ? "var(--gold)" : "var(--border)",
            cursor: "pointer", transition: "all 0.3s",
          }} />
        ))}
      </div>
    </section>
  );
}
