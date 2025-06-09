import React from "react";

const CaseStudies = () => {
  const trusted = [
    { icon: "🧹", label: "Cleaning" },
    { icon: "🍳", label: "Cooking" },
    { icon: "📚", label: "Tutoring" },
    { icon: "🔧", label: "Repairs" },
    { icon: "🌱", label: "Gardening" },
    { icon: "💡", label: "Electrical" },
    { icon: "🧺", label: "Laundry" },
    { icon: "👩‍🏫", label: "Home Tutors" }
  ];
  return (
    <section style={{ background: "#f7f7f7", padding: "3rem 0 2rem 0", textAlign: "center" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ background: "#fff", color: "#111", borderRadius: 16, padding: "2.5rem 0 2rem 0", marginBottom: 32, border: "1px solid #eee" }}>
          <h2 style={{ fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 12, color: "#111" }}>Popular Services</h2>
          <p style={{ fontFamily: "'Jost', Arial, sans-serif", fontSize: 18, marginBottom: 0, color: "#111" }}>Trusted by thousands for home services</p>
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center", marginBottom: 32 }}>
          {trusted.map(t => (
            <div key={t.label} style={{ background: "#fff", border: "1px solid #000", borderRadius: 12, minWidth: 120, minHeight: 100, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 18, cursor: "pointer", transition: "box-shadow 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <span style={{ fontSize: 36, marginBottom: 8 }}>{t.icon}</span>
              {t.label}
            </div>
          ))}
        </div>
        <button style={{ background: "#000", color: "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18, border: 0, borderRadius: 6, padding: "12px 32px", cursor: "pointer", marginBottom: 30 }}>Join Now</button>
      </div>
    </section>
  );
};

export default CaseStudies;
