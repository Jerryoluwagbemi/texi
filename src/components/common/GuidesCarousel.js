import React from "react";

const guides = [
  { title: "How to Book a Pro", img: "https://placehold.co/240x120?text=Guide+1" },
  { title: "Tips for Home Cleaning", img: "https://placehold.co/240x120?text=Guide+2" },
  { title: "Gardening 101", img: "https://placehold.co/240x120?text=Guide+3" }
];

const GuidesCarousel = () => (
  <section style={{ background: "#fff", padding: "2rem 0 1rem 0" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <h3 style={{ fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 18, color: "#111" }}>Guides to Help You Grow</h3>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {guides.map((g, i) => (
          <div key={g.title} style={{ background: "#eee", borderRadius: 12, minWidth: 220, height: 120, overflow: "hidden", position: "relative", cursor: "pointer", transition: "transform 0.2s" }} tabIndex={0} aria-label={g.title}>
            <img src={g.img} alt={g.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.2s" }} />
            <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.6)", color: "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 16, padding: "6px 12px" }}>{g.title}</span>
          </div>
        ))}
        <a href="#" style={{ alignSelf: "center", marginLeft: 12, color: "#000", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 16, textDecoration: "underline" }}>See more</a>
      </div>
    </div>
  </section>
);

export default GuidesCarousel;
