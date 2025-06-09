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
    <>
      <HeroSearch onSearch={handleHeroSearch} />
      <CategoryCarousel />
      <PromoPanel
        title="Instant Results, Top Talent"
        text="Book trusted home professionals in minutes. Compare ratings, chat, and get the job done."
        button="Get Started"
        image="💬"
      />
      <PromoPanel
        reverse
        dark
        title="Premium Services for Businesses"
        text="Texi for Business offers tailored solutions for offices, landlords, and property managers."
        button="Try Now"
        image="🏢"
      />
      <CaseStudies />
      <GalleryGrid />
      <GuidesCarousel />
      <GuidesCarousel />
      <CTASection />
    </>
  );
};

export default Home;
