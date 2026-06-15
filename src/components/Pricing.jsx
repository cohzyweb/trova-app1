const PLANS = [
  {
    name: "Free", price: "0", period: "forever",
    features: ["5 matches per week", "Basic profile", "Limited messaging", "Community access"],
    cta: "Get started", highlight: false,
  },
  {
    name: "Premium", price: "14", period: "per month", tag: "POPULAR",
    features: ["Unlimited daily matches", "Full AI compatibility report", "Unlimited messaging", "See who liked you", "Advanced filters", "Read receipts"],
    cta: "Start free trial", highlight: true,
  },
  {
    name: "Elite", price: "39", period: "per month",
    features: ["Everything in Premium", "Concierge match review", "Profile boost weekly", "Priority support", "Exclusive events access"],
    cta: "Apply for Elite", highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "108px 5%", background: "var(--black)" }}>
      <div style={{ textAlign: "center", marginBottom: 68 }}>
        <div style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Simple pricing</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.025em" }}>
          Invest in your love life
        </h2>
      </div>
      <div style={{ display: "flex", gap: 20, maxWidth: 980, margin: "0 auto", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
        {PLANS.map((p, i) => (
          <div key={i} style={{
            flex: "1 1 270px", maxWidth: 310, borderRadius: "var(--radius-lg)", padding: "32px 28px 30px",
            background: p.highlight ? "linear-gradient(160deg, rgba(201,168,76,0.18), rgba(201,168,76,0.04))" : "var(--card)",
            border: `1px solid ${p.highlight ? "rgba(201,168,76,0.55)" : "var(--border)"}`,
            boxShadow: p.highlight ? "0 24px 64px rgba(201,168,76,0.2)" : "none",
            position: "relative", overflow: "hidden",
          }}>
            {p.tag && (
              <div style={{ position: "absolute", top: 16, right: 16, background: "linear-gradient(135deg, var(--gold), var(--gold-dark))", color: "var(--black)", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 100, letterSpacing: "0.06em" }}>{p.tag}</div>
            )}
            <div style={{ color: p.highlight ? "var(--gold)" : "var(--muted)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>{p.name}</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, marginBottom: 4 }}>
              <span style={{ fontSize: 13, color: "var(--muted)", paddingBottom: 8 }}>$</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, lineHeight: 1 }}>{p.price}</span>
            </div>
            <div style={{ color: "var(--muted)", fontSize: 12, marginBottom: 28 }}>{p.period}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {p.features.map((f, j) => (
                <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14 }}>
                  <span style={{ color: "var(--gold)", fontSize: 15, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ color: "#ccc", lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>
            <button style={{
              width: "100%", padding: "14px 0", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: 15,
              background: p.highlight ? "linear-gradient(135deg, var(--gold), var(--gold-dark))" : "transparent",
              color: p.highlight ? "var(--black)" : "var(--gold)",
              border: p.highlight ? "none" : "1px solid rgba(201,168,76,0.45)",
              transition: "opacity var(--transition), transform var(--transition)",
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.82"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
            >{p.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
