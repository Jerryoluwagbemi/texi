import React, { useState, useRef, useEffect } from "react";

const GalleryGrid = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  const isTablet = typeof window !== "undefined" && window.innerWidth > 600 && window.innerWidth <= 900;
  const cards = Array.from({ length: 8 }, (_, i) => i + 1);
  const totalCards = cards.length;
  const displayCards = [...cards, ...cards]; // duplicate for seamless loop

  // Carousel state and refs
  const [index, setIndex] = useState(0);
  const [noTransition, setNoTransition] = useState(false);
  const intervalRef = useRef();
  const touchStartX = useRef(null);
  const cardGapPx = 5;
  const getContainerWidth = () => {
    if (typeof window === "undefined") return 0;
    if (isMobile || isTablet) return window.innerWidth - 20;
    return window.innerWidth;
  };
  const containerWidth = getContainerWidth();
  const cardWidth = containerWidth * 0.9;

  // Autoplay for mobile and tablet (every 5 seconds)
  useEffect(() => {
    if (!(isMobile || isTablet)) return;
    intervalRef.current = setInterval(() => {
      setIndex(i => i + 1);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isMobile, isTablet]);

  // Infinite seamless loop: when index reaches totalCards, reset to 0 without transition
  useEffect(() => {
    if (!(isMobile || isTablet)) return;
    if (index === totalCards) {
      setTimeout(() => {
        setNoTransition(true);
        setIndex(0);
      }, 400); // match transition duration
    } else {
      setNoTransition(false);
    }
  }, [index, isMobile, isTablet, totalCards]);

  // Swipe handlers
  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = e => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) setIndex(i => (i - 1 + totalCards) % totalCards);
    else if (delta < -40) setIndex(i => i + 1);
    touchStartX.current = null;
  };

  // Mobile/tablet carousel
  if (isMobile || isTablet) {
    return (
      <div
        className="work-carousel"
        style={{
          overflow: "hidden",
          width: containerWidth,
          margin: "0 auto",
          position: "relative",
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        <div
          className="work-carousel-inner"
          style={{
            display: "flex",
            gap: `${cardGapPx}px`,
            transform: `translateX(-${index * (cardWidth + cardGapPx)}px)` ,
            transition: noTransition ? "none" : "transform 0.4s cubic-bezier(0.4,0,0.2,1)"
          }}
          onTransitionEnd={() => { if (noTransition) setNoTransition(false); }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {displayCards.map((i, idx) => (
            <div
              key={idx}
              className="work-carousel-card"
              style={{
                minWidth: cardWidth,
                maxWidth: cardWidth,
                borderRadius: 12,
                boxSizing: "border-box",
                background: "#eee",
                height: 260,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src={`https://placehold.co/200x140?text=Work+${i}`}
                alt={`Work ${i}`}
                style={{ borderRadius: 12, width: 200, height: 180, objectFit: "cover" }}
              />
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
        <div
          key={i}
          style={{
            background: "#eee",
            borderRadius: 12,
            width: 200,
            height: 140,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Jost', Arial, sans-serif",
            fontWeight: 500,
            fontSize: 18,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            transition: "transform 0.2s",
            cursor: "pointer"
          }}
          onMouseOver={e => e.currentTarget.style.transform = "translateY(-8px)"}
          onMouseOut={e => e.currentTarget.style.transform = "none"}
        >
          <img
            src={`https://placehold.co/200x140?text=Work+${i}`}
            alt={`Work ${i}`}
            style={{ borderRadius: 12, width: 200, height: 140, objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
