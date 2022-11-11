import React from 'react';
import Navbar from '../components/home-sections/Navbar';
import FeaturesSection from '../components/home-sections/features/FeaturesSection';
import Footer from '../components/home-sections/footer/Footer';
import HeroSection from '../components/home-sections/hero/HeroSection';
import JoinSection from '../components/home-sections/join/JoinSection';
import SponsorSection from '../components/home-sections/sponsors/SponsorSection';
import TestimonialSection from '../components/home-sections/testimonial/TestimonialSection';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SponsorSection />
        <TestimonialSection />
        <FeaturesSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
