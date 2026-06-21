// src/components/FooterL.jsx
import React from 'react';
import { FiSend } from 'react-icons/fi';

const FooterL = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="text-xl font-bold text-[#7F7CFF] mb-4">Wanderly</div>
          <p className="text-xs text-gray-400 leading-relaxed">Curating the world's most breathtaking experiences for the modern explorer.</p>
        </div>
        <div>
          <h5 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">Quick Links</h5>
          <ul className="space-y-2 text-xs text-gray-400 font-medium">
            <li><a href="#destinations" className="hover:text-[#7F7CFF]">Destinations</a></li>
            <li><a href="#packages" className="hover:text-[#7F7CFF]">Packages</a></li>
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
  );
};

export default FooterL;