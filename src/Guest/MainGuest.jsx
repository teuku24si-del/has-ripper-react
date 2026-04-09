import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FlightSection from './FlightSection';
import HotelSection from './HotelSection';


const MainGuest = () => {
  // State untuk mengontrol tab filter yang dipilih user
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 flex flex-col">
      {/* 1. Navigasi Tetap di Atas */}
      <Navbar />

      {/* 2. Area Hero & Header */}
      <header className="relative">
        <Hero />
        
        {/* Kontrol Tab Filter (Floating di atas Hero) */}
        <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 flex justify-center">
          <div className="bg-white p-1.5 rounded-2xl shadow-xl border border-slate-100 flex gap-1">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'all' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              Semua
            </button>
            <button 
              onClick={() => setActiveTab('pesawat')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'pesawat' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              ✈️ Tiket Pesawat
            </button>
            <button 
              onClick={() => setActiveTab('hotel')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'hotel' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              🏨 Hotel & Resort
            </button>
          </div>
        </div>
      </header>

      {/* 3. Area Konten Utama */}
      <main className="max-w-7xl mx-auto px-6 py-16 w-full flex-grow">
        
        {/* Menampilkan Section Pesawat jika tab 'all' atau 'pesawat' aktif */}
        {(activeTab === 'all' || activeTab === 'pesawat') && (
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <FlightSection />
          </div>
        )}

        {/* Garis Pembatas Halus jika menampilkan semua */}
        {activeTab === 'all' && (
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold text-slate-400 bg-[#f8fafc] px-4">
              Rekomendasi Penginapan
            </div>
          </div>
        )}

        {/* Menampilkan Section Hotel jika tab 'all' atau 'hotel' aktif */}
        {(activeTab === 'all' || activeTab === 'hotel') && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <HotelSection />
          </div>
        )}

        {/* State jika data kosong (opsional) */}
        <div className="mt-20 text-center bg-blue-50 p-12 rounded-[3rem] border-2 border-dashed border-blue-200">
          <h4 className="text-xl font-bold text-blue-800 mb-2">Belum menemukan yang cocok?</h4>
          <p className="text-blue-600/70 mb-6">Gunakan fitur pencarian di atas untuk hasil yang lebih spesifik.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Cari Ulang
          </button>
        </div>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
};

export default MainGuest;