// src/components/LandingPage/HeroSection.jsx
import React from 'react';
import { Container } from '../antigravity/Container';
import { Typography } from '../antigravity/Typography';
import { Tabs } from '../antigravity/Tabs';
import FlightSection from './FlightSection';
import HotelSection from './HotelSection';
import { FaPlane, FaBed } from 'react-icons/fa';

const HeroSection = () => {
  const searchTabs = [
    { label: 'Flight', icon: FaPlane, content: <FlightSection /> },
    { label: 'Hotel', icon: FaBed, content: <HotelSection /> }
  ];

  return (
    <section className="w-full min-h-screen pt-20 flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073')" }}>
      <div className="absolute inset-0 bg-black/10"></div>
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <Typography variant="h1">
            Explore the World with Wanderly
          </Typography>
          <Typography variant="p" className="text-white/90 drop-shadow-sm max-w-xl mx-auto mt-4">
            Your gateway to exclusive travel experiences and unforgettable adventures.
          </Typography>
        </div>

        {/* Search Bar Panel (Interactive) */}
        <div className="mt-10 bg-white p-4 rounded-2xl md:rounded-3xl shadow-xl max-w-4xl mx-auto border border-gray-100">
          <Tabs tabs={searchTabs} />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;