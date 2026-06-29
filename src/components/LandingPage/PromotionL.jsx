// src/components/LandingPage/PromotionL.jsx
import React, { useState } from 'react';
import NavbarL from './NavbarL';
import FooterL from './FooterL';
import { FiTag, FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';

import { Notification } from '../antigravity/Notification';

const PromotionL = () => {
  // State untuk melacak ID promo mana yang dropdown-nya sedang terbuka
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  // Fungsi untuk toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleClaim = () => {
    const token = localStorage.getItem('token');
    if (token && token.startsWith('session_member_')) {
      Notification.success('Promo berhasil diklaim!');
    } else {
      navigate('/login-member');
    }
  };

  // Data Array yang sudah ditambahkan deskripsi dan itinerary
  const promos = [
    { 
      id: 1, 
      title: "Summer Bali Escape", 
      discount: "20% OFF", 
      oldPrice: "$300", 
      newPrice: "$240", 
      duration: "4 Days", 
      code: "SUMMER20",
      desc: "Enjoy a sun-soaked getaway in Bali with exclusive discounts on premium resorts.",
      itinerary: [
        { day: 1, activity: 'Airport Pick-up & Luxury Resort Check-in.' },
        { day: 2, activity: 'Uluwatu Temple Sunset Tour & Kecak Fire Dance.' },
        { day: 3, activity: 'Free Leisure Day or Optional Water Sports.' },
        { day: 4, activity: 'Souvenir Shopping & Airport Transfer.' }
      ]
    },
    { 
      id: 2, 
      title: "Kyoto Cherry Blossom", 
      discount: "15% OFF", 
      oldPrice: "$950", 
      newPrice: "$807", 
      duration: "6 Days", 
      code: "SAKURA15",
      desc: "Experience the magic of spring in Japan with guided tours under the blooming sakura.",
      itinerary: [
        { day: 1, activity: 'Arrival in Kyoto & Traditional Ryokan Check-in.' },
        { day: 2, activity: 'Fushimi Inari Shrine & Kiyomizu-dera Temple.' },
        { day: 3, activity: 'Arashiyama Bamboo Forest & Tenryu-ji Temple.' },
        { day: 4, activity: 'Philosopher’s Path Sakura Walk & Tea Ceremony.' },
        { day: 5, activity: 'Nara Park Day Trip (Meeting the Deer).' },
        { day: 6, activity: 'Morning Market Visit & Departure.' }
      ]
    },
    { 
      id: 3, 
      title: "Swiss Alps Adventure", 
      discount: "EARLY BIRD", 
      oldPrice: "$1,200", 
      newPrice: "$999", 
      duration: "5 Days", 
      code: "ALPS24",
      desc: "An early bird special for winter lovers. Ski, hike, and relax in the beautiful Swiss Alps.",
      itinerary: [
        { day: 1, activity: 'Arrival in Zurich & Scenic Train to Interlaken.' },
        { day: 2, activity: 'Jungfraujoch Excursion (Top of Europe).' },
        { day: 3, activity: 'Skiing or Snowboarding Lessons in Grindelwald.' },
        { day: 4, activity: 'Lake Thun Boat Cruise & Alpine Spa Relaxation.' },
        { day: 5, activity: 'Zurich City Tour & Flight Departure.' }
      ]
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden pt-20">
      {/* Memanggil Navbar Landing Page */}
      <NavbarL />
      
      {/* HEADER PROMOTION SECTION */}
      <section className="w-full py-20 bg-[#7F7CFF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white text-xs font-bold mb-4 backdrop-blur-sm">
            <FiTag size={14} /> Special Offers
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Exclusive Promotions
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/90 font-medium leading-relaxed">
            Grab these limited-time deals and embark on your dream vacation for less.
          </p>
        </div>
      </section>

      {/* PROMO CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promos.map((promo) => (
            <div key={promo.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden">
              
              {/* Badge Diskon */}
              <div className="absolute top-0 right-0 bg-[#FF6B6B] text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl z-10">
                {promo.discount}
              </div>
              
              <div>
                <div className="flex justify-between items-start mt-2">
                  <span className="bg-blue-50 text-[10px] font-bold text-[#7F7CFF] px-2.5 py-1 rounded-md uppercase">PROMO</span>
                  <div className="text-right">
                    <span className="text-sm text-gray-400 line-through mr-2">{promo.oldPrice}</span>
                    <span className="text-xl font-bold text-[#7F7CFF]">{promo.newPrice}</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-base mt-4">{promo.title}</h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">⏱ {promo.duration}</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">{promo.desc}</p>
                
                <div className="mt-4 bg-gray-50 border border-dashed border-gray-300 p-2 text-center rounded-lg">
                  <span className="text-xs text-gray-500">Use Code: </span>
                  <span className="text-xs font-bold text-gray-800 tracking-wider">{promo.code}</span>
                </div>

                {/* Tombol See Details (Dropdown Toggle) */}
                <button 
                  onClick={() => toggleDropdown(promo.id)}
                  className="mt-4 flex items-center gap-1 text-xs font-bold text-[#7F7CFF] hover:text-[#6b68e3] transition-colors outline-none"
                >
                  {openDropdown === promo.id ? 'Hide Details' : 'See Details'}
                  {openDropdown === promo.id ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                </button>

                {/* Konten Dropdown (Itinerary) */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdown === promo.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-[11px] font-bold text-gray-800 uppercase tracking-wider mb-3">Trip Itinerary</h4>
                    <div className="space-y-3">
                      {promo.itinerary.map((item) => (
                        <div key={item.day} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-[#7F7CFF] flex items-center justify-center text-[10px] font-bold shrink-0">
                              {item.day}
                            </div>
                            {/* Garis vertikal penghubung (kecuali untuk hari terakhir) */}
                            {item.day !== promo.itinerary.length && (
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
              
              <button onClick={handleClaim} className="w-full mt-6 py-3 bg-[#7F7CFF] text-white rounded-xl text-xs font-bold shadow-md hover:bg-[#6b68e3] active:scale-[0.98] transition-all">Claim Offer</button>
            </div>
          ))}
        </div>
      </section>

      {/* Memanggil Footer Landing Page */}
      <FooterL />
    </div>
  );
};

export default PromotionL;