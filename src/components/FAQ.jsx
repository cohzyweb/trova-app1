import { useState } from "react";

const FAQS = [
  { q: "Is Trova only for serious relationships?", a: "Trova is built for people who want something real — but 'real' means different things. You set your intention on your profile, and we match you accordingly." },
  { q: "How does the AI compatibility score work?", a: "We analyse 40+ dimensions including values, lifestyle, communication style, and relationship goals. The score updates as we learn more about your preferences." },
  { q: "Is my profile visible to everyone?", a: "No. Your profile is only shown to people our algorithm thinks are genuinely compatible with you. You control your visibility at all times." },
  { q: "What makes Trova different from Tinder or Bumble?", a: "Swipe apps optimise for engagement. Trova optimises for compatibility. We limit your daily matches on purpose — quality always wins." },
  { q: "How is verification done?", a: "We verify identity via LinkedIn and a short video selfie check. This keeps the community trustworthy and ghost-free." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding: "108px 5%", background: "var(--black)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Got questions?</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 10 }}>We've got answers</h2>
          <p style={{ color: "var(--muted)", fontSize: 15 }}>Still unsure? Drop us a message anytime.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((f, i) => (
            <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{
              background: "var(--card)", border: `1px solid ${open === i ? "rgba(201,168,76,0.45)" : "var(--border)"}`,
              borderRadius: "var(--radius-md)", padding: "20px 24px", cursor: "pointer",
              transition: "border-color var(--transition)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <span style={{ fontWeight: 500, fontSize: 15, lineHeight: 1.4 }}>{f.q}</span>
                <span style={{ color: "var(--gold)", fontSize: 22, lineHeight: 1, flexShrink: 0, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.28s ease", display: "inline-block" }}>+</span>
              </div>
              {open === i && <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.75, marginTop: 14 }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
