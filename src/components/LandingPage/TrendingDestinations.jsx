// src/components/LandingPage/TrendingDestinations.jsx
import React from 'react';
import tripsData from '../../data/Trips.json';
import { Card } from '../antigravity/Card';
import { Typography } from '../antigravity/Typography';

const TrendingDestinations = () => {
  // Ambil 3 destinasi pertama sebagai contoh trending
  const trending = tripsData.slice(0, 3);
  
  // Array gambar statis (placeholder) karena JSON tidak memiliki image_url
  const images = [
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600", // Bali
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600", // Tokyo
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600"  // Paris
  ];

  return (
    <section id="destinations" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Trending Destinations</h2>
          <p className="text-xs text-gray-400 mt-1">Handpicked locales that are currently captivating travelers.</p>
        </div>
        <a href="#" className="text-xs font-bold text-[#7F7CFF] hover:underline">View All &rarr;</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trending.map((trip, idx) => (
          <Card key={trip.tripId} className="hover:shadow-md transition-all group cursor-pointer border-none shadow-sm rounded-2xl">
            <div className="h-64 relative overflow-hidden rounded-t-2xl">
              <img 
                src={images[idx]} 
                alt={trip.destination} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-sm bg-[#7F7CFF]/90 backdrop-blur-sm px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Explore {trip.destination.split(',')[0]}
                </span>
              </div>
            </div>
            <div className="p-5 border border-t-0 border-gray-100 rounded-b-2xl">
              <Typography variant="h4" className="text-lg">{trip.destination}</Typography>
              <Typography variant="p" className="text-xs text-gray-400 mt-1">
                From {trip.price} • {trip.category}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TrendingDestinations;