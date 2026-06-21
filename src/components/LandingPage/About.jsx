// src/components/LandingPage/About.jsx
import React from 'react';
import NavbarL from './NavbarL'; 
import FooterL from './FooterL';
import { FiTarget, FiHeart, FiGlobe } from 'react-icons/fi';

const About = () => {
  return (
    <div className="w-full bg-white text-gray-800 font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden pt-20">
      <NavbarL />

      <section className="w-full py-20 bg-[#F8F9FD]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            About <span className="text-[#7F7CFF]">Wanderly</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-500 font-medium leading-relaxed">
            We are a passionate team of travelers, dreamers, and tech enthusiasts dedicated to making your journey as beautiful as the destination itself.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full h-80 bg-cover bg-center rounded-3xl shadow-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800')" }}></div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            At Wanderly, we believe that travel has the power to transform lives. Our mission is to curate authentic, sustainable, and unforgettable experiences that connect people with diverse cultures and breathtaking landscapes.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 text-[#7F7CFF] rounded-full flex items-center justify-center shrink-0"><FiGlobe size={20} /></div>
              <p className="text-sm font-semibold text-gray-700">Connecting the world</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 text-[#7F7CFF] rounded-full flex items-center justify-center shrink-0"><FiTarget size={20} /></div>
              <p className="text-sm font-semibold text-gray-700">Curated with precision</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 text-[#7F7CFF] rounded-full flex items-center justify-center shrink-0"><FiHeart size={20} /></div>
              <p className="text-sm font-semibold text-gray-700">Driven by passion</p>
            </div>
          </div>
        </div>
      </section>

      <FooterL />
    </div>
  );
};

export default About;