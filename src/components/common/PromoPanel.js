import React from "react";

const PromoPanel = ({ reverse, title, text, button, image, dark }) => (
  <section style={{ background: dark ? "#000" : "#fff", color: dark ? "#fff" : "#111", padding: "3rem 0" }}>
    <div style={{ display: "flex", flexDirection: reverse ? "row-reverse" : "row", alignItems: "center", justifyContent: "center", maxWidth: 1100, margin: "0 auto", gap: 48, flexWrap: "wrap" }}>
      <div style={{ flex: 1, minWidth: 260, textAlign: reverse ? "right" : "left" }}>
        <h2 style={{ fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 18 }}>{title}</h2>
        <p style={{ fontFamily: "'Jost', Arial, sans-serif", fontSize: 18, marginBottom: 24 }}>{text}</p>
        <button style={{ background: dark ? "#fff" : "#000", color: dark ? "#000" : "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18, border: 0, borderRadius: 6, padding: "12px 32px", cursor: "pointer" }}>{button}</button>
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
