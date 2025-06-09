// Header component for Texi
import React, { useState } from "react";
import "../../index.css";

const navLinks = [
  { label: "How It Works", href: "#how" },
  { label: "Browse Services", href: "#categories" },
  { label: "Become a Seller", href: "#pro" },
  { label: "Why Texi", href: "#why" }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", color: "#111", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 1rem" }}>
        {/* Logo */}
        <a href="/" style={{ fontWeight: 700, fontSize: 28, letterSpacing: 2, fontFamily: "'Jost', Arial, sans-serif", color: "#111", textDecoration: "none" }}>Texi</a>
        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <div style={{ display: "flex", gap: 24 }}>
            {navLinks.map(link => (
              <a key={link.label} href={link.href} style={{ color: "#111", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 16, textDecoration: "none", padding: "4px 0" }}>{link.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href="/login" style={{ color: "#111", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 16, textDecoration: "none" }}>Sign In</a>
            <a href="/register" style={{ background: "#000", color: "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 16, borderRadius: 6, padding: "8px 24px", textDecoration: "none", marginLeft: 4, border: "none" }}>Join</a>
          </div>
        </nav>
        {/* Mobile Hamburger */}
        <button aria-label="Open menu" onClick={() => setMobileOpen(true)} style={{ background: "none", border: 0, color: "#111", fontSize: 28, display: "none", cursor: "pointer" }} className="mobile-menu-btn">
          &#9776;
        </button>
      </div>
      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.7)", zIndex: 200 }} onClick={() => setMobileOpen(false)}>
          <nav style={{ background: "#fff", color: "#000", width: 260, height: "100vh", position: "fixed", left: 0, top: 0, padding: 32, display: "flex", flexDirection: "column", gap: 24 }} onClick={e => e.stopPropagation()}>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)} style={{ background: "none", border: 0, color: "#000", fontSize: 28, alignSelf: "flex-end", cursor: "pointer" }}>&times;</button>
            {navLinks.map(link => (
              <a key={link.label} href={link.href} style={{ color: "#000", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 18, textDecoration: "none", padding: "8px 0" }}>{link.label}</a>
            ))}
            <a href="/login" style={{ color: "#000", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 18, textDecoration: "none" }}>Sign In</a>
            <a href="/register" style={{ background: "#000", color: "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18, borderRadius: 6, padding: "10px 0", textAlign: "center", textDecoration: "none", marginTop: 12, border: "none" }}>Join</a>
          </nav>
        </div>
      )}
      {/* Responsive CSS (inline for demo) */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 901px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
