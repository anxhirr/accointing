import React from 'react';
import Navbar from '../components/home-sections/Navbar';
import Features from '../components/home-sections/features/Features';
import Footer from '../components/home-sections/footer/Footer';
import HeroSection from '../components/home-sections/hero/HeroSection';
import Join from '../components/home-sections/join/Join';
import SponsorSection from '../components/home-sections/sponsors/SponsorSection';
import Testimonial from '../components/home-sections/testimonial/Testimonial';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SponsorSection />
      <Testimonial />
      <Features />
      <Join />
      <Footer />
    </>
  );
};

export default HomePage;
