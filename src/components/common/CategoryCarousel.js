import React from "react";

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
  { name: "IT Support", icon: "💻" }
];

const CategoryCarousel = ({ autoplay, count = 8 }) => {
  // For demo: just show the first `count` categories
  const visibleCategories = categories.slice(0, count);
  // Autoplay and swipe logic would go here (omitted for brevity)
  return (
    <div style={{ overflowX: "auto", padding: "2rem 0 1rem 0", background: "#fff", maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center" }}>
      <div style={{ display: "flex", gap: 24, minWidth: 700, width: "max-content", margin: "0 auto" }}>
        {visibleCategories.map(cat => (
          <div key={cat.name} tabIndex={0} aria-label={cat.name} style={{ background: "#fff", border: "1px solid #000", borderRadius: 12, minWidth: 140, height: 120, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 18, cursor: "pointer", transition: "box-shadow 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <span style={{ fontSize: 36, marginBottom: 8 }}>{cat.icon}</span>
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
