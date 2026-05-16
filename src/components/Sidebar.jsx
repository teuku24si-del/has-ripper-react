import React from 'react';
// 1. MENGGANTI IMPORT LOGO LAMA DENGAN LOGO BARU ANDA
import logoSidebar from '../assets/logo-sidebar.png';

const Sidebar = () => {
  const menuItems = [
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
        </svg>
      ), 
      label: 'Overview', 
      active: true 
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ), 
      label: 'Bookings', 
      active: false 
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 4l-6-3" />
        </svg>
      ), 
      label: 'Trips', 
      active: false 
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ), 
      label: 'Customers', 
      active: false 
    },
  ];

  return (
    /* Mengubah font utama sidebar menjadi Plus Jakarta Sans */
    <div className="w-64 bg-[#7F7CFF] text-white min-h-screen flex flex-col justify-between p-6 shrink-0 font-['Plus_Jakarta_Sans',sans-serif]">
      <div>
        {/* Logo Area */}
        <div className="mb-10 mt-2 flex justify-start items-center">
          {/* Memperbaiki tinggi logo dari h-50 (yang terlalu besar) kembali ke h-8 agar proporsional */}
          <img 
            src={logoSidebar} 
            alt="Wanderly" 
            className="h-50 w-auto object-contain brightness-0 invert drop-shadow-sm" 
          />
        </div>

        {/* Menu Navigasi */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              /* Menggunakan font-semibold untuk Plus Jakarta Sans SemiBold */
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                item.active 
                  ? 'bg-white/20 text-white shadow-sm' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Action Button */}
        {/* Mengubah font-semibold menjadi font-bold untuk Plus Jakarta Sans Bold */}
        <button className="w-full mt-8 bg-white text-[#7F7CFF] hover:bg-blue-50 py-3 rounded-xl font-bold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Create New Trip
        </button>
      </div>

      {/* Bottom Menu */}
      <div className="border-t border-white/20 pt-4 space-y-2">
        {/* Mengubah text-sm menjadi text-sm font-semibold untuk Settings */}
        <button className="w-full flex items-center gap-4 px-4 py-2.5 text-white/80 hover:text-white text-sm font-semibold transition-all">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Settings</span>
        </button>
        {/* Mengubah text-sm menjadi text-sm font-semibold untuk Support */}
        <button className="w-full flex items-center gap-4 px-4 py-2.5 text-white/80 hover:text-white text-sm font-semibold transition-all">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span>Support</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;