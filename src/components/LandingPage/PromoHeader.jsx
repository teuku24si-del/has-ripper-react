// src/components/LandingPage/PromoHeader.jsx
import React from 'react';
import { Banner } from '../antigravity/Banner';
import { Link } from 'react-router-dom';

const PromoHeader = () => {
  return (
    <div className="w-full relative z-[60]">
      <Banner className="bg-[#7F7CFF] text-white">
        <span className="text-xs md:text-sm">
          Daftar sekarang untuk diskon 5% Tier Bronze, hingga 20% untuk Platinum!{' '}
          <Link to="/login-member" className="font-bold underline ml-2 hover:text-white/80 transition-colors">
            Gabung Sekarang
          </Link>
        </span>
      </Banner>
    </div>
  );
};

export default PromoHeader;
