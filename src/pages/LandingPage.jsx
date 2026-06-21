// src/pages/LandingPage.jsx
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Import komponen dari folder LandingPage yang baru Anda buat
import NavbarL from '../components/LandingPage/NavbarL';
import HeroSection from '../components/LandingPage/HeroSection';
import TrendingDestinations from '../components/LandingPage/TrendingDestinations';
import FeaturedPackages from '../components/LandingPage/FeaturedPackages';
import ValueProposition from '../components/LandingPage/ValueProposition';
import FooterL from '../components/LandingPage/FooterL';

const LandingPage = () => {
  // Memanggil animasi scroll agar efek muncul (fade-up) tetap berfungsi
  useScrollAnimation();

  return (
    <div className="w-full bg-white text-gray-800 font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
      
      <NavbarL />
      <HeroSection />
      <TrendingDestinations />
      <FeaturedPackages />
      <ValueProposition />
      <FooterL />

    </div>
  );
};

export default LandingPage;