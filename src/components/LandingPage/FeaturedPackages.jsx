// src/components/LandingPage/FeaturedPackages.jsx
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import tripsData from '../../data/Trips.json';
import itinerariesData from '../../data/itineraries.json';
import { Card } from '../antigravity/Card';
import { Typography } from '../antigravity/Typography';
import { Badge } from '../antigravity/Badge';
import { Button } from '../antigravity/Button';

const FeaturedPackages = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Ambil 3 paket pertama sebagai featured
  const featured = tripsData.slice(0, 3).map((trip, index) => {
    // Cari itinerary berdasarkan tripId, jika tidak ada gunakan 'default'
    const itinerary = itinerariesData[trip.tripId] || itinerariesData['default'];
    
    // Memberikan highlight untuk item tengah
    const isHighlighted = index === 1;
    
    // Simulasi deskripsi karena JSON tidak punya field desc
    const desc = `Explore the ${trip.category.toLowerCase()} beauty of ${trip.destination}. Curated experiences designed for comfort, luxury, and immersion.`;
    
    return {
      ...trip,
      itinerary,
      isHighlighted,
      desc
    };
  });

  return (
    <section id="packages" className="w-full bg-[#F8F9FD] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Judul Section */}
        <div className="text-center mb-12">
          <Typography variant="h2">Featured Packages</Typography>
          <Typography variant="p" className="text-gray-400 mt-1 max-w-md mx-auto">
            Curated experiences designed for comfort, luxury, and cultural immersion.
          </Typography>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((pkg) => (
            <Card 
              key={pkg.tripId} 
              className={`p-6 transition-all duration-700 hover:shadow-lg ${pkg.isHighlighted ? 'border-t-4 border-t-[#7F7CFF]' : ''}`}
            >
              <div className="flex-1">
                {/* Header Card */}
                <div className="flex justify-between items-start">
                  <Badge variant="gray">{pkg.tripId}</Badge>
                  <div className="text-right">
                    {pkg.isHighlighted ? (
                       <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400 line-through">$1,200</span>
                          <Badge variant="primary" className="text-[9px]">Promo</Badge>
                       </div>
                    ) : null}
                    <span className="text-xl font-bold text-[#7F7CFF]">{pkg.price}</span>
                    <p className="text-[10px] text-gray-400">Per Person</p>
                  </div>
                </div>
                
                {/* Info Utama */}
                <Typography variant="h4" className="mt-4">{pkg.destination} Trip</Typography>
                <Typography variant="p" className="text-xs text-gray-400 mt-1 font-medium">⏱ {pkg.duration} • {pkg.capacity}</Typography>
                <Typography variant="p" className="text-xs text-gray-500 mt-3 leading-relaxed">{pkg.desc}</Typography>
                
                {/* Tombol See Details */}
                <button 
                  onClick={() => toggleDropdown(pkg.tripId)}
                  className="mt-4 flex items-center gap-1 text-xs font-bold text-[#7F7CFF] hover:text-[#6b68e3] transition-colors outline-none"
                >
                  {openDropdown === pkg.tripId ? 'Hide Details' : 'See Details'}
                  {openDropdown === pkg.tripId ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                </button>

                {/* Konten Dropdown (Itinerary) */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdown === pkg.tripId ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-100 overflow-y-auto max-h-80 pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                    <h4 className="text-[11px] font-bold text-gray-800 uppercase tracking-wider mb-3">Trip Itinerary</h4>
                    <div className="space-y-3">
                      {pkg.itinerary.map((item, idx) => (
                        <div key={item.day} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-[#7F7CFF] flex items-center justify-center text-[10px] font-bold shrink-0">
                              {item.day}
                            </div>
                            {idx !== pkg.itinerary.length - 1 && (
                              <div className="w-px h-full bg-blue-50 my-1"></div>
                            )}
                          </div>
                          <div className="pb-2 pt-0.5">
                            <Typography variant="p" className="text-xs text-gray-500 leading-relaxed mt-0">
                              <span className="font-bold text-gray-700">{item.title}</span> <br/>
                              {item.activity}
                            </Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Tombol Book Now */}
              <Button variant="primary" className="w-full mt-6 justify-center">
                Book Now
              </Button>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedPackages;