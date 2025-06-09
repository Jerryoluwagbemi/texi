import React, { useState } from "react";

const topCategories = [
  "Cleaning", "Cooking", "Tutoring", "Repairs", "Gardening", "Electrical", "Laundry", "Home Tutors"
];

const HeroSearch = ({ onSearch }) => {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (service && location) {
      onSearch(service, location);
    }
  };

  return (
    <section className="hero-bg" style={{ minHeight: 420, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(120deg, #fff 60%, #eee 100%)", position: "relative" }}>
      <h1 style={{ fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 36, marginBottom: 24, color: "#111", textAlign: "center" }}>
        Our professionals do the heavy lifting
      </h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: 8, marginBottom: 16, maxWidth: 540, width: "100%" }}>
        <input
          type="text"
          placeholder="What service do you need?"
          value={service}
          onChange={e => setService(e.target.value)}
          aria-label="Service"
          style={{ flex: 2, fontFamily: "inherit", fontSize: 18, padding: 12, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          aria-label="Location"
          style={{ flex: 1.5, fontFamily: "inherit", fontSize: 18, padding: 12, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <button type="submit" style={{ background: "#000", color: "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18, border: 0, borderRadius: 6, padding: "0 28px", cursor: "pointer" }}>
          Search
        </button>
      </form>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        {topCategories.map(cat => (
          <button key={cat} style={{ background: "#fff", color: "#000", border: "1px solid #000", borderRadius: 20, padding: "6px 18px", fontFamily: "inherit", fontWeight: 500, fontSize: 15, cursor: "pointer", marginBottom: 4 }}>
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSearch;
