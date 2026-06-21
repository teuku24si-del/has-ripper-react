// src/components/LandingPage/ValueProposition.jsx
import React from 'react';
import { BiSupport, BiPurchaseTagAlt, BiCheckShield } from 'react-icons/bi';

const ValueProposition = () => {
  return (
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
  );
};

export default ValueProposition;