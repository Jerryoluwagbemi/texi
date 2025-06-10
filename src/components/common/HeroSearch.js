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

  // Responsive: show only 6 category pills on mobile, 2 rows of 3
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  const isTablet = typeof window !== "undefined" && window.innerWidth > 600 && window.innerWidth <= 900;
  const pills = isMobile ? topCategories.slice(0, 6) : topCategories;

  // Responsive field/button width
  const getFormWidth = () => {
    if (isMobile) return "calc(100vw - 20px)";
    if (isTablet) return "calc(100vw - 20px)";
    return 700;
  };
  const getButtonWidth = () => {
    if (isMobile) return "50%";
    if (isTablet) return "60%";
    return undefined;
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
      <h1 style={{ fontFamily: "Macan, 'Helvetica Neue', Helvetica, Arial, sans-serif", fontStyle: "normal", fontWeight: 280, fontSize: isMobile ? 72 : 72, lineHeight: isMobile ? '1.1' : '86px', marginBottom: 24, color: "#fff", textAlign: "center", zIndex: 2, letterSpacing: -2, fontStretch: 'condensed', maxWidth: 700 }}>
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
          maxWidth: 700,
          width: getFormWidth(),
          background: "none",
          boxShadow: "none",
          zIndex: 2,
          flexDirection: isMobile || isTablet ? "column" : "row",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          paddingLeft: isMobile || isTablet ? 0 : undefined,
          paddingRight: isMobile || isTablet ? 0 : undefined,
          boxSizing: "border-box"
        }}
      >
        <input
          type="text"
          placeholder="What service do you need?"
          value={service}
          onChange={e => setService(e.target.value)}
          aria-label="Service"
          style={{
            flex: 2.5,
            fontFamily: "inherit",
            fontWeight: 280,
            fontSize: 18,
            padding: 12,
            border: "2px solid #fff",
            borderRadius: 6,
            background: isMobile || isTablet ? "transparent" : "#fff",
            color: isMobile || isTablet ? "#fff" : "#000",
            outline: "none",
            width: "100%",
            minWidth: 0,
            marginLeft: 0,
            marginRight: 0,
            boxSizing: "border-box",
            height: 48
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
            fontWeight: 280,
            fontSize: 18,
            padding: 12,
            border: "2px solid #fff",
            borderRadius: 6,
            background: isMobile || isTablet ? "transparent" : "#fff",
            color: isMobile || isTablet ? "#fff" : "#000",
            outline: "none",
            width: "100%",
            minWidth: 0,
            marginLeft: 0,
            marginRight: 0,
            boxSizing: "border-box",
            height: 48
          }}
        />
        <button
          type="submit"
          style={{
            background: "#fff",
            color: "#000",
            fontFamily: "Macan, 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: 18,
            border: "2px solid #fff",
            borderRadius: 6,
            padding: "0 28px",
            cursor: "pointer",
            zIndex: 2,
            width: getButtonWidth(),
            margin: "0 auto",
            display: "block",
            height: 48,
            minHeight: 48,
            boxSizing: "border-box"
          }}
        >
          Search
        </button>
        {(isMobile || isTablet) && (
          <style>{`
            .hero-bg input::placeholder {
              color: #fff !important;
              opacity: 1 !important;
              font-weight: 700 !important;
            }
          `}</style>
        )}
      </form>
      <div className="category-pills" style={{ display: isMobile ? 'grid' : 'flex', gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : undefined, gap: 12, flexWrap: isMobile ? undefined : 'wrap', justifyContent: "center", zIndex: 2, maxWidth: 540 }}>
        {pills.map(cat => (
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
              marginBottom: 4,
              width: isMobile ? "100%" : undefined
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
