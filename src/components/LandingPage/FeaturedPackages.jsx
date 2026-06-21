// src/components/LandingPage/FeaturedPackages.jsx
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Tambahkan import icon

const FeaturedPackages = () => {
  // State untuk melacak ID paket mana yang dropdown-nya sedang terbuka
  const [openDropdown, setOpenDropdown] = useState(null);

  // Fungsi untuk toggle dropdown
  const toggleDropdown = (id) => {
    // Jika yang diklik sudah terbuka, maka tutup (set null). Jika beda, buka yang baru.
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Data Array untuk memudahkan mapping dan manajemen state
  const packagesData = [
    {
      id: 'TRP-001',
      price: '$250',
      title: 'Ubud Cultural Escape',
      duration: '3 Days',
      desc: 'Immerse yourself in the spiritual heart of Bali with guided tours of ancient temples and lush rice terraces.',
      isHighlighted: false, // Untuk border atas warna ungu
      delay: 'delay-100',
      itinerary: [
        { day: 1, activity: 'Arrival in Bali, Hotel Check-in & Welcome Dinner.' },
        { day: 2, activity: 'Sacred Monkey Forest, Tirta Empul Temple & Tegalalang Rice Terraces.' },
        { day: 3, activity: 'Morning Yoga, Traditional Art Market Visit & Departure.' }
      ]
    },
    {
      id: 'TRP-002',
      price: '$850',
      title: 'Tokyo Urban Vibe',
      duration: '5 Days',
      desc: 'Navigate the neon-lit streets of Shibuya and Shinjuku, exploring the perfect blend of tradition and futurism.',
      isHighlighted: true,
      delay: 'delay-200',
      itinerary: [
        { day: 1, activity: 'Arrival at Narita/Haneda, Check-in & Shinjuku Night Walk.' },
        { day: 2, activity: 'Shibuya Crossing, Harajuku Street Fashion & Meiji Shrine.' },
        { day: 3, activity: 'Asakusa Senso-ji Temple & Akihabara Electronics Town.' },
        { day: 4, activity: 'Tsukiji Outer Market Food Tour & teamLab Planets Tokyo.' },
        { day: 5, activity: 'Souvenir Shopping at Ginza & Departure.' }
      ]
    },
    {
      id: 'TRP-003',
      price: '$1,050',
      title: 'Parisian Romance',
      duration: '7 Days',
      desc: 'A romantic odyssey along the Seine, featuring private museum tours and candlelit dinners overlooking the Eiffel Tower.',
      isHighlighted: false,
      delay: 'delay-300',
      itinerary: [
        { day: 1, activity: 'Arrival in Paris, Hotel Transfer & Sunset Seine River Cruise.' },
        { day: 2, activity: 'Eiffel Tower Access & Private Louvre Museum Guided Tour.' },
        { day: 3, activity: 'Montmartre Historic Walk & Sacré-Cœur Basilica.' },
        { day: 4, activity: 'Full Day Trip to the Palace of Versailles & Gardens.' },
        { day: 5, activity: 'Champs-Élysées Shopping & Arc de Triomphe.' },
        { day: 6, activity: 'Le Marais Exploration & Exclusive Farewell Dinner.' },
        { day: 7, activity: 'Classic Parisian Café Breakfast & Airport Departure.' }
      ]
    }
  ];

  return (
    <section id="packages" className="w-full bg-[#F8F9FD] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Judul Section */}
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-2xl font-bold text-gray-800">Featured Packages</h2>
          <p className="text-xs text-gray-400 mt-1 max-w-md mx-auto">
            Curated experiences designed for comfort, luxury, and cultural immersion.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between animate-on-scroll opacity-0 scale-95 transition-all duration-700 ${pkg.delay} ${pkg.isHighlighted ? 'border-t-4 border-t-[#7F7CFF]' : ''}`}
            >
              <div>
                {/* Header Card */}
                <div className="flex justify-between items-start">
                  <span className="bg-gray-100 text-[10px] font-bold text-gray-400 px-2.5 py-1 rounded-md uppercase">
                    {pkg.id}
                  </span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-[#7F7CFF]">{pkg.price}</span>
                    <p className="text-[10px] text-gray-400">Per Person</p>
                  </div>
                </div>
                
                {/* Info Utama */}
                <h3 className="font-bold text-gray-800 text-base mt-4">{pkg.title}</h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">⏱ {pkg.duration}</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">{pkg.desc}</p>
                
                {/* Tombol See Details (Dropdown Toggle) */}
                <button 
                  onClick={() => toggleDropdown(pkg.id)}
                  className="mt-4 flex items-center gap-1 text-xs font-bold text-[#7F7CFF] hover:text-[#6b68e3] transition-colors outline-none"
                >
                  {openDropdown === pkg.id ? 'Hide Details' : 'See Details'}
                  {openDropdown === pkg.id ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                </button>

                {/* Konten Dropdown (Itinerary) */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdown === pkg.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-[11px] font-bold text-gray-800 uppercase tracking-wider mb-3">Trip Itinerary</h4>
                    <div className="space-y-3">
                      {pkg.itinerary.map((item) => (
                        <div key={item.day} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-[#7F7CFF] flex items-center justify-center text-[10px] font-bold shrink-0">
                              {item.day}
                            </div>
                            {/* Garis vertikal penghubung (kecuali untuk hari terakhir) */}
                            {item.day !== pkg.itinerary.length && (
                              <div className="w-px h-full bg-blue-50 my-1"></div>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 leading-relaxed pb-2 pt-0.5">
                            <span className="font-bold text-gray-700">Day {item.day}: </span> 
                            {item.activity}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Tombol Book Now */}
              <button className="w-full mt-6 py-3 bg-[#7F7CFF] text-white rounded-xl text-xs font-bold shadow-md hover:bg-[#6b68e3] active:scale-[0.98] transition-all">
                Book Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedPackages;