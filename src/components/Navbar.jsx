import React from 'react';
// Memakai icon yang sudah ada di library project Anda
import { FiBell, FiMail } from "react-icons/fi"; 

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Search Bar */}
      <div className="relative w-80">
        {/* Mengubah warna icon search menjadi text-white agar kontras di atas bg biru */}
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        {/* Mengubah bg-[#F4F7FE] menjadi bg-[#3B82F6], serta teks & placeholder menjadi putih murni / transparan */}
        <input 
          type="text" 
          placeholder="Search bookings, trips..."
          className="w-full pl-12 pr-4 py-2.5 bg-[#3B82F6] text-white text-sm rounded-full outline-none placeholder:text-white/80 focus:ring-1 focus:ring-white transition-all font-['Plus_Jakarta_Sans'] font-normal shadow-sm"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Mengubah text-gray-400 menjadi text-[#3B82F6] sesuai figma */}
        <button className="text-[#3B82F6] hover:text-blue-700 relative transition-colors">
          <FiBell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        {/* Mengubah text-gray-400 menjadi text-[#3B82F6] sesuai figma */}
        <button className="text-[#3B82F6] hover:text-blue-700 transition-colors">
          <FiMail size={18} />
        </button>
        
        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-gray-100 pl-6">
          <div className="text-right max-w-[180px]">
            <h4 className="text-sm font-semibold text-gray-800 truncate font-['Plus_Jakarta_Sans']">
              Teuku Muhammad Hasbi Alghifari
            </h4>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-0.5 font-['Plus_Jakarta_Sans']">
              Admin Manager
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#7F7CFF] border border-gray-100 overflow-hidden flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0 font-['Plus_Jakarta_Sans']">
            TM
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;