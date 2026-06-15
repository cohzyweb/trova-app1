const COLS = [
  { title: "Product", links: ["How it works", "Features", "Pricing", "Success stories"] },
  { title: "Company", links: ["About us", "Careers", "Press", "Blog"] },
  { title: "Support", links: ["Help centre", "Safety tips", "Privacy", "Terms"] },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", borderTop: "1px solid var(--border)", padding: "60px 5% 36px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 44, marginBottom: 52 }}>
          <div style={{ maxWidth: 240 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg, var(--gold), var(--gold-dark))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--black)" }}>T</div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, letterSpacing: "-0.02em" }}>Trova</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.75 }}>Where ambitious people find meaningful connections. Built for young professionals who know what they want.</p>
          </div>
          {COLS.map(col => (
            <div key={col.title}>
              <div style={{ fontWeight: 600, fontSize: 11, color: "var(--gold)", marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map(l => (
                  <a key={l} href="#" style={{ color: "var(--muted)", fontSize: 14, transition: "color var(--transition)" }}
                    onMouseEnter={e => e.target.style.color = "var(--white)"}
                    onMouseLeave={e => e.target.style.color = "var(--muted)"}
                  >{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "var(--muted)", fontSize: 13 }}>© 2026 Trova. All rights reserved.</span>
          <span style={{ color: "var(--muted)", fontSize: 13 }}>Made with ♥ for ambitious people</span>
        </div>
      </div>
    </footer>
  );
}
