import { useState, useEffect } from "react";

const links = ["How it works", "Success stories", "Features", "Pricing"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      height: 68, padding: "0 5%",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(10,10,10,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all var(--transition)",
    }}>
      {/* Logo */}
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--black)",
        }}>T</div>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, letterSpacing: "-0.02em" }}>Trova</span>
      </a>

      {/* Links */}
      <div style={{ display: "flex", gap: 34, alignItems: "center" }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`}
            style={{ fontSize: 14, color: "var(--muted)", fontWeight: 400, transition: "color var(--transition)" }}
            onMouseEnter={e => e.target.style.color = "var(--gold)"}
            onMouseLeave={e => e.target.style.color = "var(--muted)"}
          >{l}</a>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", gap: 12 }}>
        <button style={{
          background: "transparent", color: "var(--white)",
          border: "1px solid var(--border)", borderRadius: "var(--radius-sm)",
          padding: "9px 20px", fontWeight: 500, fontSize: 14,
          transition: "border-color var(--transition)",
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
        >Log in</button>
        <button style={{
          background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
          color: "var(--black)", borderRadius: "var(--radius-sm)",
          padding: "9px 22px", fontWeight: 700, fontSize: 14,
          transition: "opacity var(--transition)",
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >Join free</button>
      </div>
    </nav>
  );
}
