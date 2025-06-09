// Home page for Texi
import React from "react";
import HeroSearch from "../components/common/HeroSearch";
import CategoryCarousel from "../components/common/CategoryCarousel";
import PromoPanel from "../components/common/PromoPanel";
import CaseStudies from "../components/common/CaseStudies";
import GalleryGrid from "../components/common/GalleryGrid";
import GuidesCarousel from "../components/common/GuidesCarousel";
import CTASection from "../components/common/CTASection";

const Container = ({ maxWidth = 1200, children, style = {} }) => (
  <div style={{ maxWidth, margin: "0 auto", width: "100%", ...style }}>{children}</div>
);

const Home = () => {
  const handleHeroSearch = (service, location) => {
    window.location.href = `/search?service=${encodeURIComponent(service)}&location=${encodeURIComponent(location)}`;
  };

  return (
    <div style={{ width: "100vw", background: "#fff" }}>
      {/* Hero Section */}
      <HeroSearch onSearch={handleHeroSearch} />

      {/* Category Carousel */}
      <Container maxWidth={1200} style={{ margin: "64px auto 0 auto" }}>
        <CategoryCarousel />
      </Container>

      {/* Promo Panels */}
      <div style={{ width: "100vw", margin: "64px 0 0 0" }}>
        <PromoPanel
          title="Instant Results, Top Talent"
          text="Connect with trusted professionals in seconds. Texi brings the best home services to your door."
          button="Get Started"
          image="💬"
          style={{ padding: "64px 0" }}
        />
        <PromoPanel
          reverse
          dark
          title="Premium Services for Businesses"
          text="Upgrade your business with our vetted pros. Flexible, reliable, and always on time."
          button="Try Now"
          image="🏢"
          style={{ padding: "64px 0" }}
        />
      </div>

      {/* Success Stories Section */}
      <div style={{ width: "100vw", margin: "64px 0 0 0", background: "#000" }}>
        <Container maxWidth={1200} style={{ padding: "0" }}>
          <div style={{ padding: "32px 0 16px 0", textAlign: "center" }}>
            <h2 style={{ color: "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 28, margin: 0 }}>Success Stories</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", margin: "0 auto 24px auto" }}>
            {["Cleaning", "Cooking", "Tutoring", "Repairs", "Gardening", "Electrical", "Laundry", "Home Tutors"].slice(0,7).map((cat, i) => (
              <div key={cat} style={{ background: "#fff", border: "1px solid #000", borderRadius: 12, minWidth: 120, minHeight: 100, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 18, cursor: "pointer", transition: "box-shadow 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <span style={{ fontSize: 36, marginBottom: 8 }}>{["🧹","🍳","📚","🔧","🌱","💡","🧺"][i]}</span>
                {cat}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <button style={{ background: "#fff", color: "#000", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18, border: 0, borderRadius: 6, padding: "12px 32px", cursor: "pointer" }}>Join Now</button>
          </div>
        </Container>
      </div>

      {/* Work Grid */}
      <Container maxWidth={1000} style={{ margin: "64px auto" }}>
        <div className="grid4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, justifyContent: "center" }}>
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} style={{ background: "#eee", borderRadius: 12, width: 200, height: 140, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "transform 0.2s", cursor: "pointer" }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-8px)"}
              onMouseOut={e => e.currentTarget.style.transform = "none"}
            >
              <img src={`https://placehold.co/200x140?text=Work+${i}`} alt={`Work ${i}`} style={{ borderRadius: 12, width: 200, height: 140, objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </Container>

      {/* Guides Section */}
      <Container maxWidth={900} style={{ margin: "64px auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 20, color: "#111", margin: 0 }}>Guides to Help You Grow</h3>
          <a href="#" style={{ color: "#000", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 16, textDecoration: "underline" }}>See more</a>
        </div>
        <div className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, justifyContent: "center" }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ background: "#eee", borderRadius: 12, width: 250, height: 150, overflow: "hidden", position: "relative", cursor: "pointer", transition: "transform 0.2s" }}>
              <img src={`https://placehold.co/250x150?text=Guide+${i}`} alt={`Guide ${i}`} style={{ width: 250, height: 150, objectFit: "cover" }} />
              <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.6)", color: "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 16, padding: "6px 12px" }}>Guide Title {i}</span>
              <div style={{ color: "#111", fontFamily: "'Jost', Arial, sans-serif", fontSize: 15, marginTop: 8, textAlign: "center" }}>Short caption for guide {i}</div>
            </div>
          ))}
        </div>
      </Container>

      {/* Final CTA Banner */}
      <div style={{ width: "100vw", background: "#000", color: "#fff", textAlign: "center", padding: "64px 0" }}>
        <h2 style={{ fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 18 }}>
          Ready to book your next home service?
        </h2>
        <button style={{ background: "#fff", color: "#000", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18, border: 0, borderRadius: 6, padding: "12px 32px", cursor: "pointer" }}>
          Join Texi
        </button>
      </div>
    </div>
  );
};

export default Home;
