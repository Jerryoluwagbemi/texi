import React, { useRef, useEffect, useState } from "react";

const categories = [
  { name: "Cleaning", icon: "🧹" },
  { name: "Cooking", icon: "🍳" },
  { name: "Tutoring", icon: "📚" },
  { name: "Repairs", icon: "🔧" },
  { name: "Gardening", icon: "🌱" },
  { name: "Electrical", icon: "💡" },
  { name: "Laundry", icon: "🧺" },
  { name: "Home Tutors", icon: "👩‍🏫" },
  { name: "Plumbing", icon: "🚰" },
  { name: "Painting", icon: "🎨" },
  { name: "Moving", icon: "🚚" },
  { name: "Babysitting", icon: "🧒" },
  { name: "Carpentry", icon: "🪚" },
  { name: "Pest Control", icon: "🐜" },
  { name: "IT Support", icon: "💻" },
  { name: "Catering", icon: "🍽️" }
];

const CategoryCarousel = ({ autoplay, showArrows, count = 16 }) => {
  const visibleCategories = categories.slice(0, count);
  const [offset, setOffset] = useState(0);
  const scrollRef = useRef(null);
  const cardWidth = 164; // minWidth + gap
  const visibleCount = Math.min(6, visibleCategories.length);
  const totalWidth = cardWidth * visibleCategories.length;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;

  // Infinite scroll logic (only on mobile)
  useEffect(() => {
    if (!autoplay || !isMobile) return;
    let raf;
    let last = Date.now();
    const step = () => {
      const now = Date.now();
      const delta = now - last;
      last = now;
      setOffset(prev => {
        let next = prev + (delta * 0.08); // speed
        if (next >= totalWidth) next = 0;
        return next;
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [autoplay, totalWidth, isMobile]);

  // Manual arrow controls (only on mobile)
  const handleLeft = () => {
    setOffset(prev => {
      let next = prev - cardWidth * 2;
      if (next < 0) next = totalWidth - cardWidth * 2;
      return next;
    });
  };
  const handleRight = () => {
    setOffset(prev => {
      let next = prev + cardWidth * 2;
      if (next >= totalWidth) next = 0;
      return next;
    });
  };

  // Duplicate categories for seamless infinite effect
  const displayCategories = [...visibleCategories, ...visibleCategories];

  // Desktop: static 2 rows of 8 cards (16 total), no arrows, no carousel
  if (!isMobile) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 24, width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        {visibleCategories.map(cat => (
          <div key={cat.name} tabIndex={0} aria-label={cat.name} style={{ background: "#fff", border: "1px solid #000", borderRadius: 12, minWidth: 100, minHeight: 100, maxWidth: 140, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 18, cursor: "pointer", transition: "box-shadow 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", width: "100%", margin: 0 }}>
            <span style={{ fontSize: 36, marginBottom: 8 }}>{cat.icon}</span>
            {cat.name}
          </div>
        ))}
      </div>
    );
  }

  // Mobile: carousel with arrows
  return (
    <div style={{ position: "relative", width: "100%", background: "#fff", padding: "2rem 0 1rem 0", maxWidth: 1200, margin: "0 auto" }}>
      <div ref={scrollRef} style={{ overflow: "hidden", width: "100%" }}>
        <div style={{ display: "flex", gap: 24, minWidth: 700, width: "max-content", margin: "0 auto", transform: `translateX(-${offset}px)`, transition: "none" }}>
          {displayCategories.map((cat, idx) => (
            <div key={cat.name + idx} tabIndex={0} aria-label={cat.name} style={{ background: "#fff", border: "1px solid #000", borderRadius: 12, minWidth: 140, height: 120, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 18, cursor: "pointer", transition: "box-shadow 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <span style={{ fontSize: 36, marginBottom: 8 }}>{cat.icon}</span>
              {cat.name}
            </div>
          ))}
        </div>
      </div>
      {showArrows && (
        <div style={{ display: isMobile ? "flex" : "none", justifyContent: "center", gap: 32, marginTop: 24, position: "relative" }}>
          <button aria-label="Scroll left" onClick={handleLeft} style={{ background: "#000", border: "none", outline: "none", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", left: 8, top: 8 }}>
              <polyline points="18,6 10,14 18,22" style={{ fill: "none", stroke: "#fff", strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round" }} />
            </svg>
          </button>
          <button aria-label="Scroll right" onClick={handleRight} style={{ background: "#000", border: "none", outline: "none", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", left: 8, top: 8 }}>
              <polyline points="10,6 18,14 10,22" style={{ fill: "none", stroke: "#fff", strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round" }} />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryCarousel;
