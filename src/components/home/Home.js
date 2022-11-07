import React from "react";

import Navbar from "./Navbar";
import Section1 from "./sections/hero/HeroSection";
import SponsorSection from "./sections/sponsors/SponsorSection";
import Features from "./sections/features/Features";
import Join from "./sections/join/Join";
import Footer from "./sections/footer/Footer";
import Testimonial from "./sections/testimonial/Testimonial";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <SponsorSection />
      <Testimonial />
      <Features />
      <Join />
      <Footer />
    </div>
  );
}

export default HomePage;
