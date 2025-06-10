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
      <Container maxWidth={1200} style={{ margin: "20px auto 0 auto", paddingLeft: 10, paddingRight: 10 }}>
        <CategoryCarousel autoplay showArrows count={16} />
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
      </div>

      {/* Video Section */}
      <div style={{ width: "100vw", background: "#f7f7f7", padding: "64px 0 0 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ color: "#111", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 24 }}>See Texi in Action</h2>
        <video width="720" height="400" controls style={{ borderRadius: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.08)", maxWidth: "95vw" }} poster="https://placehold.co/720x400?text=Texi+Demo+Video">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Success Stories Section */}
      <div style={{ width: "100vw", margin: "64px 0 0 0", background: "#f7f7f7" }}>
        <Container maxWidth={1200} style={{ padding: 0, paddingLeft: 10, paddingRight: 10 }}>
          <div style={{ padding: "32px 0 16px 0", textAlign: "center" }}>
            <h2 style={{ color: "#111", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 28, margin: 0 }}>Popular Services</h2>
          </div>
          <div className="popular-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 10, justifyContent: "center", margin: "0 auto 24px auto", paddingLeft: 10, paddingRight: 10 }}>
            {["Cleaning", "Cooking", "Tutoring", "Repairs", "Gardening", "Electrical", "Laundry", "Home Tutors"].map((cat, i) => (
              <div key={cat} style={{ background: "#fff", border: "1px solid #000", borderRadius: 12, minWidth: 100, minHeight: 100, maxWidth: 140, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 500, fontSize: 18, cursor: "pointer", transition: "box-shadow 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", width: "100%", margin: 0 }}>
                <span style={{ fontSize: 36, marginBottom: 8 }}>{["🧹","🍳","📚","🔧","🌱","💡","🧺","👩‍🏫"][i]}</span>
                {cat}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginBottom: 48, marginTop: 24 }}>
            <button style={{ background: "#000", color: "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18, border: 0, borderRadius: 6, padding: "12px 32px", cursor: "pointer", marginBottom: 30 }}>Join Now</button>
          </div>
        </Container>
      </div>

      {/* Work Grid */}
      <Container maxWidth={1000} className="work-grid-section" style={{ margin: "64px auto" }}>
        <GalleryGrid />
      </Container>

      {/* Final CTA Banner */}
      <div style={{ width: "100vw", background: "#F7F7F7", color: "#111", textAlign: "center", padding: "64px 0" }}>
        <h2 style={{ fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 18 }}>
          Ready to book your next service?
        </h2>
        <button style={{ background: "#000", color: "#fff", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18, border: 0, borderRadius: 6, padding: "12px 32px", cursor: "pointer" }}>
          Join Texi
        </button>
      </div>

      {/* Download the Texi App Section */}
      <div style={{ width: "100vw", background: "#fff", color: "#111", textAlign: "center", padding: "56px 0 64px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 18 }}>
          Download the Texi App
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", marginTop: 24 }}>
          <a href="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", color: "#111", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Download for Android" style={{ height: 60, width: 60, objectFit: "contain", marginBottom: 8, borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", background: "#fff" }} />
            <span>Download for Android</span>
          </a>
          <a href="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", color: "#111", fontFamily: "'Jost', Arial, sans-serif", fontWeight: 700, fontSize: 18 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Download for iOS" style={{ height: 60, width: 60, objectFit: "contain", marginBottom: 8, borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", background: "#fff" }} />
            <span>Download for iOS</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
