// src/pages/MemberDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMap, FiHeart, FiSettings, FiLogOut, FiStar, FiCalendar, FiMapPin } from 'react-icons/fi';
import FooterL from '../components/LandingPage/FooterL';

const MemberDashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login-member');
  };

  return (
    <div className="w-full bg-[#F8F9FD] text-gray-800 font-['Plus_Jakarta_Sans',sans-serif] min-h-screen pt-12">
      
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* ================= SIDEBAR PROFILE ================= */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-28">
            
            {/* User Info */}
            <div className="flex flex-col items-center text-center border-b border-gray-100 pb-6 mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-blue-50">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-extrabold text-xl text-gray-800">Alex Explorer</h2>
              <p className="text-xs font-bold text-[#7F7CFF] bg-blue-50 px-4 py-1.5 rounded-full mt-2 inline-block">
                🌟 Wanderly Gold
              </p>
            </div>

            {/* Navigation Menu */}
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all text-gray-500 hover:bg-gray-50 hover:text-[#7F7CFF] mb-2 border border-gray-100"
              >
                <FiMapPin size={18} /> Back to Landing Page
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'profile' ? 'bg-[#7F7CFF] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50 hover:text-[#7F7CFF]'}`}
              >
                <FiUser size={18} /> My Profile
              </button>
              <button 
                onClick={() => setActiveTab('bookings')}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'bookings' ? 'bg-[#7F7CFF] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50 hover:text-[#7F7CFF]'}`}
              >
                <FiMap size={18} /> My Bookings
              </button>
              <button 
                onClick={() => setActiveTab('wishlist')}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'wishlist' ? 'bg-[#7F7CFF] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50 hover:text-[#7F7CFF]'}`}
              >
                <FiHeart size={18} /> Saved Trips
              </button>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'settings' ? 'bg-[#7F7CFF] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50 hover:text-[#7F7CFF]'}`}
              >
                <FiSettings size={18} /> Settings
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-3 w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl text-sm font-bold transition-all mt-4 border border-transparent hover:border-red-100"
              >
                <FiLogOut size={18} /> Log Out
              </button>
            </nav>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="lg:col-span-3 flex flex-col gap-8">
          
          {/* Welcome Banner & Points */}
          <div className="bg-[#7F7CFF] rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center shadow-md relative overflow-hidden gap-6">
            <div className="z-10 relative">
              <h1 className="text-3xl font-extrabold mb-2">Welcome back, Alex! ✈️</h1>
              <p className="text-sm text-white/90 font-medium">You are 550 points away from Platinum Tier.</p>
            </div>
            
            <div className="z-10 bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl text-center border border-white/30 shrink-0 w-full md:w-auto flex flex-col items-center">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-white/90">Wanderly Points</p>
              <div className="flex items-center justify-center gap-2">
                <FiStar className="text-yellow-300 fill-yellow-300" size={24} />
                <span className="text-3xl font-extrabold">2,450</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute left-10 bottom-0 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          {/* Dynamic Content Area (Based on activeTab) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[400px]">
            
            {activeTab === 'bookings' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-extrabold text-gray-800">Upcoming Trips</h3>
                  <span className="bg-blue-50 text-[#7F7CFF] text-xs font-bold px-3 py-1 rounded-lg">1 Trip</span>
                </div>
                
                {/* Active Booking Card */}
                <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    
                    {/* Trip Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Confirmed</span>
                        <span className="text-xs text-gray-400 font-medium">Booking ID: #WD-88291</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Ubud Cultural Escape</h4>
                      
                      <div className="flex flex-col gap-2 mt-4">
                        <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                          <FiCalendar className="text-[#7F7CFF]" />
                          <span>Oct 15, 2026 - Oct 17, 2026</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                          <FiMapPin className="text-[#7F7CFF]" />
                          <span>Bali, Indonesia</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col justify-between items-start md:items-end border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 shrink-0">
                      <div className="text-left md:text-right mb-4 md:mb-0">
                        <p className="text-xs text-gray-400 font-medium mb-1">Total Paid</p>
                        <p className="text-xl font-bold text-[#7F7CFF]">$250</p>
                      </div>
                      <div className="flex gap-2 w-full">
                        <button className="flex-1 md:flex-none px-4 py-2 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg hover:bg-gray-100 transition-colors">View Itinerary</button>
                        <button className="flex-1 md:flex-none px-4 py-2 bg-[#7F7CFF] text-white text-xs font-bold rounded-lg shadow-sm hover:bg-[#6b68e3] transition-colors">E-Ticket</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* Placeholder for other tabs */}
            {activeTab !== 'bookings' && (
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                <FiSettings size={48} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2 capitalize">{activeTab} Section</h3>
                <p className="text-sm text-gray-500">This section is currently under construction.</p>
              </div>
            )}

          </div>
        </main>
      </div>

      <FooterL />
    </div>
  );
};

export default MemberDashboard;