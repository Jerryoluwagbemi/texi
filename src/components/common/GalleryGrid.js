import React from "react";

const GalleryGrid = () => (
  <section style={{ background: "#fff", padding: "3rem 0 2rem 0" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24 }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{ background: "#eee", borderRadius: 12, height: 120, overflow: "hidden", position: "relative", cursor: "pointer", transition: "transform 0.2s" }} tabIndex={0} aria-label={`Portfolio item ${i+1}`}>
            <img src={`https://placehold.co/240x120?text=Work+${i+1}`} alt={`Portfolio ${i+1}`} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.2s" }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GalleryGrid;
