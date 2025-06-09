import React, { useState } from "react";

const topCategories = [
  "Cleaning", "Cooking", "Tutoring", "Repairs", "Gardening", "Electrical", "Laundry", "Home Tutors"
];

const heroBgUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"; // Unsplash, home service/cleaning

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
    <section
      className="hero-bg"
      style={{
        minHeight: 420,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `url('${heroBgUrl}') center/cover no-repeat`,
        position: "relative",
        width: "100vw",
        padding: "48px 0 36px 0"
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.32)", zIndex: 1 }} />
      <h1 style={{ fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 36, marginBottom: 24, color: "#fff", textAlign: "center", zIndex: 2 }}>
        Our professionals do the heavy lifting
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: 8,
          borderRadius: 8,
          padding: 8,
          marginBottom: 16,
          maxWidth: 540,
          width: "100%",
          background: "none",
          boxShadow: "none",
          zIndex: 2
        }}
      >
        <input
          type="text"
          placeholder="What service do you need?"
          value={service}
          onChange={e => setService(e.target.value)}
          aria-label="Service"
          style={{
            flex: 2,
            fontFamily: "inherit",
            fontSize: 18,
            padding: 12,
            border: "2px solid #fff",
            borderRadius: 6,
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            outline: "none"
          }}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          aria-label="Location"
          style={{
            flex: 1.5,
            fontFamily: "inherit",
            fontSize: 18,
            padding: 12,
            border: "2px solid #fff",
            borderRadius: 6,
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            outline: "none"
          }}
        />
        <button
          type="submit"
          style={{
            background: "none",
            color: "#fff",
            fontFamily: "'Jost', Arial, sans-serif",
            fontWeight: 700,
            fontSize: 18,
            border: "2px solid #fff",
            borderRadius: 6,
            padding: "0 28px",
            cursor: "pointer",
            zIndex: 2
          }}
        >
          Search
        </button>
      </form>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", zIndex: 2 }}>
        {topCategories.map(cat => (
          <button
            key={cat}
            style={{
              background: "none",
              color: "#fff",
              border: "2px solid #fff",
              borderRadius: 20,
              padding: "6px 18px",
              fontFamily: "inherit",
              fontWeight: 500,
              fontSize: 15,
              cursor: "pointer",
              marginBottom: 4
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSearch;
