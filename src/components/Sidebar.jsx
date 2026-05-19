// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiLogOut } from 'react-icons/fi'; // Import icon tambahan
import logoSidebar from '../assets/logo-sidebar.png';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // State untuk mengontrol status buka/tutup dropdown Settings
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const menuItems = [
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
        </svg>
      ), 
      label: 'Overview', 
      path: '/admin/dashboard'
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ), 
      label: 'Orders', 
      path: '/admin/orders'
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 4l-6-3" />
        </svg>
      ), 
      label: 'Trips', 
      path: '/admin/trips'
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ), 
      label: 'Customers', 
      path: '/admin/customers'
    },
    
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ), 
      label: 'Promotions', 
      path: '/admin/promotions'
    },
  ];

  // Fungsi untuk menangani proses keluar sistem (Logout)
  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token akses dummyjson dari memori browser
    navigate('/login'); // Lempar balik pengguna ke halaman login
  };

  return (
    <div className="w-64 bg-[#7F7CFF] text-white min-h-screen flex flex-col justify-between p-6 shrink-0 font-['Plus_Jakarta_Sans',sans-serif]">
      <div>
        {/* Logo Area */}
        <div className="mb-10 mt-2 flex justify-start items-center">
          <img 
            src={logoSidebar} 
            alt="Wanderly" 
            className="h-50 w-auto object-contain brightness-0 invert drop-shadow-sm" 
          />
        </div>

        {/* Menu Navigasi menggunakan Link */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive 
                    ? 'bg-white/20 text-white shadow-sm' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <button className="w-full mt-8 bg-white text-[#7F7CFF] hover:bg-blue-50 py-3 rounded-xl font-bold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Create New Trip
        </button>
      </div>

      {/* Bottom Menu */}
      <div className="border-t border-white/20 pt-4 space-y-1">
        
        {/* Tombol Settings yang memicu Dropdown Menu */}
        <button 
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all text-white/80 hover:bg-white/10 hover:text-white ${
            isSettingsOpen ? 'bg-white/10 text-white' : ''
          }`}
        >
          <div className="flex items-center gap-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Settings</span>
          </div>
          {isSettingsOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
        </button>

        {/* AREA MENU DROPDOWN SETTINGS */}
        {isSettingsOpen && (
          <div className="pl-9 pr-2 py-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-bold text-red-200 hover:text-white bg-red-500/10 hover:bg-red-500/30 border border-red-500/20 transition-all shadow-sm"
            >
              <FiLogOut size={14} />
              <span>LOGOUT SYSTEM</span>
            </button>
          </div>
        )}

        {/* Tombol Support Menetap Dibawah */}
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