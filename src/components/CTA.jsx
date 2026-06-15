export default function CTA() {
  return (
    <section style={{ padding: "108px 5%", background: "var(--dark)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.1), transparent 70%)", pointerEvents: "none" }} />

      <div style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Your person is already on Trova</div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16 }}>
        Stop swiping.<br />Start connecting.
      </h2>
      <p style={{ color: "var(--muted)", fontSize: 16, marginBottom: 52, maxWidth: 440, margin: "0 auto 52px" }}>
        Join 50,000+ ambitious people who chose a smarter way to find love.
      </p>

      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 80 }}>
        {[
          { icon: "🍎", pre: "Download on the", label: "App Store", primary: true },
          { icon: "▶", pre: "Get it on", label: "Google Play", primary: false },
        ].map((btn, i) => (
          <button key={i} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "14px 28px",
            borderRadius: "var(--radius-md)",
            background: btn.primary ? "linear-gradient(135deg, var(--gold), var(--gold-dark))" : "var(--card)",
            border: btn.primary ? "none" : "1px solid var(--border)",
            color: btn.primary ? "var(--black)" : "var(--white)",
            boxShadow: btn.primary ? "0 10px 36px rgba(201,168,76,0.38)" : "none",
            fontWeight: 600, fontSize: 14,
            transition: "opacity var(--transition), transform var(--transition)",
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            <span style={{ fontSize: 22 }}>{btn.icon}</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 10, opacity: 0.65, marginBottom: 1 }}>{btn.pre}</div>
              <div>{btn.label}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Floating couple cards */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        {[["👩🏽","Amara","96%"],["👨🏻","Kolade","96%"],["👩🏾","Priya","91%"]].map(([emoji, name, match], i) => (
          <div key={i} style={{
            width: 90, padding: "14px 12px", borderRadius: 16,
            background: "var(--card)", border: "1px solid var(--border)",
            textAlign: "center",
            transform: `rotate(${(i - 1) * 6}deg) translateY(${i === 1 ? -12 : 0}px)`,
            boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
          }}>
            <div style={{ fontSize: 30, marginBottom: 6 }}>{emoji}</div>
            <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 2 }}>{name}</div>
            <div style={{ fontSize: 10, color: "var(--gold)" }}>{match} match</div>
          </div>
        ))}
      </div>
    </section>
  );
}
