import { useEffect, useRef } from "react";

const FEATURES = [
  { icon: "🎯", title: "Values First Matching", desc: "Our algorithm goes beyond looks. Answer questions about your goals, lifestyle, and deal-breakers we find people who actually fit." },
  { icon: "✅", title: "Verified Professionals", desc: "Every profile is LinkedIn-verified. No catfish, no ghosts just real people with real careers and real intentions." },
  { icon: "🧠", title: "AI Compatibility Score", desc: "Our AI analyses 40+ dimensions of compatibility and gives you a precise match percentage before you even say hello." },
  { icon: "🔒", title: "Private by Default", desc: "Your profile is only visible to people we think you'd actually like. You control who sees you, always." },
  { icon: "📍", title: "Local & Global", desc: "Find matches in your city or across borders. Filter by location, lifestyle, or the kind of relationship you want." },
  { icon: "💬", title: "Icebreaker Prompts", desc: "Never stare at a blank message box again. Trova suggests personalised openers based on what you both care about." },
];

function useSlideIn() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    const cards = ref.current?.querySelectorAll(".feature-card");
    cards?.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Features() {
  const gridRef = useSlideIn();
  return (
    <section id="features" style={{ padding: "108px 5%", background: "var(--dark)" }}>
      <div style={{ textAlign: "center", marginBottom: 68 }}>
        <div style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>
          Why Trova works
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
          Dating built for people<br />
          <span style={{ color: "var(--gold)" }}>who have standards.</span>
        </h2>
      </div>
      <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18, maxWidth: 1100, margin: "0 auto" }}>
        {FEATURES.map((f, i) => (
          <div key={i} className="feature-card" style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "28px 28px 30px",
            cursor: "default", opacity: 0, transform: "translateY(40px)",
            transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color var(--transition), box-shadow var(--transition)`,
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.55)";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 20px 52px rgba(0,0,0,0.55), 0 0 32px rgba(201,168,76,0.12)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: 34, marginBottom: 18 }}>{f.icon}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, marginBottom: 10, letterSpacing: "-0.01em" }}>{f.title}</h3>
            <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.75 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
