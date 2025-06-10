import React from "react";

const PromoPanel = ({ reverse, title, text, button, image, style }) => (
  <section className="section-padding" style={{ background: "#f7f7f7", color: "#111", padding: "3rem 0", ...style }}>
    <div className="promo-panel-inner" style={{ display: "flex", flexDirection: reverse ? "row-reverse" : "row", alignItems: "center", justifyContent: "center", maxWidth: 1100, margin: "0 auto", gap: 48, flexWrap: "wrap", boxSizing: "border-box", paddingLeft: 0, paddingRight: 0 }}>
      <div style={{ flex: 1, minWidth: 260, textAlign: reverse ? "right" : "left" }}>
        <h2 style={{ fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 18, color: "#111" }}>{title}</h2>
        <p style={{ fontFamily: "'Jost', Arial, sans-serif", fontSize: 18, marginBottom: 24, color: "#111" }}>{text}</p>
        <button style={{ background: "#000", color: "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18, border: 0, borderRadius: 6, padding: "12px 32px", cursor: "pointer" }}>{button}</button>
      </div>
      <div style={{ flex: 1, minWidth: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 220, height: 180, background: "#eee", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Placeholder for image or chat UI illustration */}
          <span role="img" aria-label="promo" style={{ fontSize: 64 }}>{image}</span>
        </div>
      </div>
    </div>
  </section>
);

export default PromoPanel;
