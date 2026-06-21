// src/components/LandingPage/NavbarL.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoWanderly from '../../assets/logo-wanderly.png';

const NavbarL = () => {
  // Gunakan useLocation untuk mendeteksi kita sedang di halaman mana
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logoWanderly} alt="Wanderly" className="h-50 sm:h-30 w-auto object-contain drop-shadow-sm" />
          </Link>
        </div>
        
        {/* NAV LINK DINAMIS */}
        <nav className="hidden md:flex items-center gap-8 text-base font-bold uppercase tracking-wider text-gray-600">
          <a href="/#destinations" className={`pb-1 transition-all duration-300 hover:text-[#7F7CFF] border-b-2 ${currentPath === '/' ? 'border-transparent' : 'border-transparent'}`}>
            Destinations
          </a>
          
          <a href="/#packages" className={`pb-1 transition-all duration-300 hover:text-[#7F7CFF] border-b-2 border-transparent`}>
            Packages
          </a>

          <Link to="/about" className={`pb-1 transition-all duration-300 ${currentPath === '/about' ? 'text-[#7F7CFF] border-b-2 border-[#7F7CFF]' : 'hover:text-[#7F7CFF] border-b-2 border-transparent'}`}>
            About
          </Link>

          <Link to="/promotion" className={`pb-1 transition-all duration-300 ${currentPath === '/promotion' ? 'text-[#7F7CFF] border-b-2 border-[#7F7CFF]' : 'hover:text-[#7F7CFF] border-b-2 border-transparent'}`}>
            Promotion
          </Link>

          <Link to="/contact" className={`pb-1 transition-all duration-300 ${currentPath === '/contact' ? 'text-[#7F7CFF] border-b-2 border-[#7F7CFF]' : 'hover:text-[#7F7CFF] border-b-2 border-transparent'}`}>
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-bold text-gray-700 hover:text-[#7F7CFF] transition-all">Log In</Link>
          <Link to="/register" className="bg-[#7F7CFF] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-[#6b68e3] transition-all">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default NavbarL;