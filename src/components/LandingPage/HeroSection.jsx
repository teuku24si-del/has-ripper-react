// src/components/LandingPage/HeroSection.jsx
import React from 'react';
import { FiMapPin, FiCalendar, FiUsers, FiSearch } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen pt-20 flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073')" }}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md leading-tight">
          Explore the World with Wanderly
        </h1>
        <p className="mt-4 text-sm md:text-base text-white/90 font-medium max-w-xl mx-auto drop-shadow-sm">
          Your gateway to exclusive travel experiences and unforgettable adventures.
        </p>

        {/* Search Bar Panel */}
        <div className="mt-10 bg-white p-3 rounded-2xl md:rounded-full shadow-xl flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto border border-gray-100">
          <div className="flex items-center gap-3 px-4 py-2 w-full border-b md:border-b-0 md:border-r border-gray-100 text-gray-500">
            <FiMapPin className="text-[#7F7CFF] shrink-0" size={18} />
            <input type="text" placeholder="Where to?" className="w-full text-sm bg-transparent outline-none text-gray-700 font-medium" />
          </div>
          <div className="flex items-center gap-3 px-4 py-2 w-full border-b md:border-b-0 md:border-r border-gray-100 text-gray-500">
            <FiCalendar className="text-[#7F7CFF] shrink-0" size={18} />
            <input type="text" placeholder="When?" className="w-full text-sm bg-transparent outline-none text-gray-700 font-medium" />
          </div>
          <div className="flex items-center gap-3 px-4 py-2 w-full text-gray-500">
            <FiUsers className="text-[#7F7CFF] shrink-0" size={18} />
            <input type="text" placeholder="Guests" className="w-full text-sm bg-transparent outline-none text-gray-700 font-medium" />
          </div>
          <button className="bg-[#7F7CFF] text-white p-4 rounded-xl md:rounded-full shadow-md hover:bg-[#6b68e3] transition-all w-full md:w-auto shrink-0 flex justify-center items-center">
            <FiSearch size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;