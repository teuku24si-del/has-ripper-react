// src/components/LandingPage/TrendingDestinations.jsx
import React from 'react';

const TrendingDestinations = () => {
  return (
    <section id="destinations" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-end mb-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Trending Destinations</h2>
          <p className="text-xs text-gray-400 mt-1">Handpicked locales that are currently captivating travelers.</p>
        </div>
        <a href="#" className="text-xs font-bold text-[#7F7CFF] hover:underline">View All &rarr;</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card Bali */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all animate-on-scroll opacity-0 translate-y-10 duration-1000 delay-100">
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600')" }}></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 text-lg">Bali, Indonesia</h3>
            <p className="text-xs text-gray-400 mt-1">From $250 • Tropical Island</p>
          </div>
        </div>
        {/* Card Tokyo */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all animate-on-scroll opacity-0 translate-y-10 duration-1000 delay-200">
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600')" }}></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 text-lg">Tokyo, Japan</h3>
            <p className="text-xs text-gray-400 mt-1">From $850 • Urban Metropolis</p>
          </div>
        </div>
        {/* Card Paris */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all animate-on-scroll opacity-0 translate-y-10 duration-1000 delay-300">
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600')" }}></div>
          <div className="p-5">
            <h3 className="font-bold text-gray-800 text-lg">Paris, France</h3>
            <p className="text-xs text-gray-400 mt-1">From $1,050 • City of Light</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;