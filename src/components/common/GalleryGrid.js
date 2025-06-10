import React, { useState, useRef, useEffect } from "react";

const GalleryGrid = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  const cards = Array.from({ length: 8 }, (_, i) => i + 1);

  // Carousel state and refs
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();
  const touchStartX = useRef(null);

  // Carousel logic for mobile
  useEffect(() => {
    if (!isMobile) return;
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % cards.length); // Infinite loop
    }, 5000); // 5 seconds per card
    return () => clearInterval(intervalRef.current);
  }, [isMobile, cards.length]);

  // Infinite seamless loop: jump to start after last card (must be outside conditional)
  useEffect(() => {
    if (!isMobile) return;
    if (index === cards.length) {
      const timeout = setTimeout(() => {
        setIndex(0);
      }, 400); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [index, isMobile, cards.length]);

  // Swipe handlers
  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = e => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) setIndex(i => (i - 1 + cards.length) % cards.length);
    else if (delta < -40) setIndex(i => (i + 1) % cards.length);
    touchStartX.current = null;
  };

  if (isMobile) {
    // Infinite seamless loop: duplicate cards, jump to start when at the end
    const displayCards = [...cards, ...cards];
    const cardGapPx = 5;
    const cardWidthPx = window.innerWidth * 0.9;
    return (
      <div className="work-carousel" style={{ overflow: "hidden", width: "100vw", margin: "0 auto", position: "relative" }}>
        <div
          className="work-carousel-inner"
          style={{ display: "flex", gap: `${cardGapPx}px`, transform: `translateX(-${index * (cardWidthPx + cardGapPx)}px)`, transition: index === cards.length ? "none" : "transform 0.4s cubic-bezier(0.4,0,0.2,1)" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {displayCards.map((i, idx) => (
            <div key={idx} className="work-carousel-card" style={{ minWidth: "90vw", maxWidth: "90vw", borderRadius: 12, boxSizing: "border-box", background: "#eee", height: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={`https://placehold.co/200x140?text=Work+${i}`} alt={`Work ${i}`} style={{ borderRadius: 12, width: 200, height: 180, objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop grid
  return (
    <div className="grid4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, justifyContent: "center" }}>
      {cards.map(i => (
        <div key={i} style={{ background: "#eee", borderRadius: 12, width: 200, height: 140, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "transform 0.2s", cursor: "pointer" }}
          onMouseOver={e => e.currentTarget.style.transform = "translateY(-8px)"}
          onMouseOut={e => e.currentTarget.style.transform = "none"}
        >
          <img src={`https://placehold.co/200x140?text=Work+${i}`} alt={`Work ${i}`} style={{ borderRadius: 12, width: 200, height: 140, objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
