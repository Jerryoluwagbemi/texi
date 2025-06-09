// Home page for Texi
import React from "react";
import HeroSearch from "../components/common/HeroSearch";
import CategoryCarousel from "../components/common/CategoryCarousel";
import PromoPanel from "../components/common/PromoPanel";
import CaseStudies from "../components/common/CaseStudies";
import GalleryGrid from "../components/common/GalleryGrid";
import GuidesCarousel from "../components/common/GuidesCarousel";
import CTASection from "../components/common/CTASection";

const Home = () => {
  const handleHeroSearch = (service, location) => {
    // TODO: Implement navigation to /search?service=...&location=...
    window.location.href = `/search?service=${encodeURIComponent(service)}&location=${encodeURIComponent(location)}`;
  };

  return (
    <div style={{ width: "100%", background: "#fff" }}>
      <HeroSearch onSearch={handleHeroSearch} />
      <CategoryCarousel />
      <PromoPanel
        title="Instant Results, Top Talent"
        text="Connect with trusted professionals in seconds. Texi brings the best home services to your door."
        button="Get Started"
        image="💬"
      />
      <PromoPanel
        reverse
        dark
        title="Premium Services for Businesses"
        text="Upgrade your business with our vetted pros. Flexible, reliable, and always on time."
        button="Try Now"
        image="🏢"
      />
      <CaseStudies />
      <GalleryGrid />
      <GuidesCarousel />
      <GuidesCarousel />
      <CTASection />
    </div>
  );
};

export default Home;
