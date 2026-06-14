// src/pages/LandingPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiMapPin, FiCalendar, FiUsers, FiSearch, FiSend } from 'react-icons/fi';
import { BiSupport, BiPurchaseTagAlt, BiCheckShield } from 'react-icons/bi';
import logoWanderly from '../assets/logo-wanderly.png'; 

const LandingPage = () => {
  // Panggil hook animasi bawaan
  useScrollAnimation();

  // State untuk mengontrol menu navbar yang sedang aktif secara dinamis
  const [activeMenu, setActiveMenu] = useState('destinations');

  return (
    <div className="w-full bg-white text-gray-800 font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
      
      {/* 1. NAVBAR SECTION */}
      <header className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo Pembungkus - Menggunakan h-8 sm:h-9 agar sesuai dengan image_2cd9c0.jpg */}
          <div className="flex items-center">
            <img 
              src={logoWanderly} 
              alt="Wanderly" 
              className="h-50 sm:h-30 w-auto object-contain drop-shadow-sm" 
            />
          </div>
          
          {/* NAV LINK DINAMIS - Menu Promotions telah dihapus */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a 
              href="#destinations" 
              onClick={() => setActiveMenu('destinations')}
              className={`pb-1 transition-all duration-300 ${
                activeMenu === 'destinations' 
                  ? 'text-[#7F7CFF] border-b-2 border-[#7F7CFF]' 
                  : 'hover:text-[#7F7CFF] border-b-2 border-transparent'
              }`}
            >
              Destinations
            </a>
            
            <a 
              href="#packages" 
              onClick={() => setActiveMenu('packages')}
              className={`pb-1 transition-all duration-300 ${
                activeMenu === 'packages' 
                  ? 'text-[#7F7CFF] border-b-2 border-[#7F7CFF]' 
                  : 'hover:text-[#7F7CFF] border-b-2 border-transparent'
              }`}
            >
              Packages
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold text-gray-700 hover:text-[#7F7CFF] transition-all">Log In</Link>
            <Link to="/register" className="bg-[#7F7CFF] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-[#6b68e3] transition-all">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
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

      {/* 3. TRENDING DESTINATIONS SECTION */}
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
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600')" }}></div>
            <div className="p-5">
              <h3 className="font-bold text-gray-800 text-lg">Bali, Indonesia</h3>
              <p className="text-xs text-gray-400 mt-1">From $250 • Tropical Island</p>
            </div>
          </div>
          {/* Card Tokyo */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600')" }}></div>
            <div className="p-5">
              <h3 className="font-bold text-gray-800 text-lg">Tokyo, Japan</h3>
              <p className="text-xs text-gray-400 mt-1">From $850 • Urban Metropolis</p>
            </div>
          </div>
          {/* Card Paris */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600')" }}></div>
            <div className="p-5">
              <h3 className="font-bold text-gray-800 text-lg">Paris, France</h3>
              <p className="text-xs text-gray-400 mt-1">From $1,050 • City of Light</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PACKAGES SECTION */}
      <section id="packages" className="w-full bg-[#F8F9FD] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-2xl font-bold text-gray-800">Featured Packages</h2>
            <p className="text-xs text-gray-400 mt-1 max-w-md mx-auto">Curated experiences designed for comfort, luxury, and cultural immersion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between animate-on-scroll opacity-0 scale-95 transition-all duration-700 delay-100" style={{ transitionProperty: 'all' }}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="bg-gray-100 text-[10px] font-bold text-gray-400 px-2.5 py-1 rounded-md uppercase">TRP-001</span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-[#7F7CFF]">$250</span>
                    <p className="text-[10px] text-gray-400">Per Person</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-base mt-4">Ubud Cultural Escape</h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">⏱ 3 Days</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">Immerse yourself in the spiritual heart of Bali with guided tours of ancient temples and lush rice terraces.</p>
              </div>
              <button className="w-full mt-6 py-3 bg-[#7F7CFF] text-white rounded-xl text-xs font-bold shadow-md hover:bg-[#6b68e3] transition-all">Book Now</button>
            </div>
            {/* Package 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between border-t-4 border-t-[#7F7CFF] animate-on-scroll opacity-0 scale-95 transition-all duration-700 delay-200" style={{ transitionProperty: 'all' }}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="bg-gray-100 text-[10px] font-bold text-gray-400 px-2.5 py-1 rounded-md uppercase">TRP-002</span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-[#7F7CFF]">$850</span>
                    <p className="text-[10px] text-gray-400">Per Person</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-base mt-4">Tokyo Urban Vibe</h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">⏱ 5 Days</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">Navigate the neon-lit streets of Shibuya and Shinjuku, exploring the perfect blend of tradition and futurism.</p>
              </div>
              <button className="w-full mt-6 py-3 bg-[#7F7CFF] text-white rounded-xl text-xs font-bold shadow-md hover:bg-[#6b68e3] transition-all">Book Now</button>
            </div>
            {/* Package 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between animate-on-scroll opacity-0 scale-95 transition-all duration-700 delay-300" style={{ transitionProperty: 'all' }}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="bg-gray-100 text-[10px] font-bold text-gray-400 px-2.5 py-1 rounded-md uppercase">TRP-003</span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-[#7F7CFF]">$1,050</span>
                    <p className="text-[10px] text-gray-400">Per Person</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-base mt-4">Parisian Romance</h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">⏱ 7 Days</p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">A romantic odyssey along the Seine, featuring private museum tours and candlelit dinners overlooking the Eiffel Tower.</p>
              </div>
              <button className="w-full mt-6 py-3 bg-[#7F7CFF] text-white rounded-xl text-xs font-bold shadow-md hover:bg-[#6b68e3] transition-all">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VALUE PROPOSITION SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
          <div className="w-14 h-14 bg-blue-50 text-[#7F7CFF] rounded-full flex items-center justify-center mx-auto mb-4">
            <BiSupport size={26} />
          </div>
          <h4 className="font-bold text-gray-800 text-base">Global Support</h4>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed max-w-xs mx-auto">24/7 assistance wherever your travels take you, across all continents.</p>
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
          <div className="w-14 h-14 bg-blue-50 text-[#7F7CFF] rounded-full flex items-center justify-center mx-auto mb-4">
            <BiPurchaseTagAlt size={26} />
          </div>
          <h4 className="font-bold text-gray-800 text-base">Best Prices</h4>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed max-w-xs mx-auto">We negotiate directly with local vendors to ensure you get the most value for your budget.</p>
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          <div className="w-14 h-14 bg-blue-50 text-[#7F7CFF] rounded-full flex items-center justify-center mx-auto mb-4">
            <BiCheckShield size={26} />
          </div>
          <h4 className="font-bold text-gray-800 text-base">Secure Booking</h4>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed max-w-xs mx-auto">Your data and transactions are protected with military-grade encryption and fraud prevention.</p>
        </div>
      </section>

      {/* 6. FOOTER SECTION */}
      <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="text-xl font-bold text-[#7F7CFF] mb-4">Wanderly</div>
            <p className="text-xs text-gray-400 leading-relaxed">Curating the world's most breathtaking experiences for the modern explorer.</p>
          </div>
          <div>
            <h5 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">Quick Links</h5>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-[#7F7CFF]">Destinations</a></li>
              <li><a href="#" className="hover:text-[#7F7CFF]">Packages</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">Support</h5>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-[#7F7CFF]">Support</a></li>
              <li><a href="#" className="hover:text-[#7F7CFF]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#7F7CFF]">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">Newsletter</h5>
            <p className="text-xs text-gray-400 mb-3">Get travel tips and exclusive offers in your inbox.</p>
            <div className="flex bg-gray-50 border border-gray-100 rounded-xl p-1.5 max-w-sm">
              <input type="email" placeholder="Email address" className="w-full pl-3 bg-transparent text-xs outline-none text-gray-700" />
              <button className="p-2.5 bg-[#7F7CFF] text-white rounded-lg hover:bg-[#6b68e3] transition-all shrink-0">
                <FiSend size={12} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-gray-50 pt-6 text-center md:text-left text-[10px] text-gray-400 font-medium">
          &copy; 2024 Wanderly. All rights reserved. Explore with confidence.
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;