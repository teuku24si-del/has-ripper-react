import React, { useState } from 'react';
import { MdFlightTakeoff, MdFlightLand, MdDateRange, MdPerson, MdOutlineClass } from 'react-icons/md';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

const FlightBooking = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      {/* Container Utama */}
      <div className="bg-gray-900 rounded-3xl p-8 border border-blue-900/50 shadow-2xl backdrop-blur-sm">
        
        {/* Header & Filter Sederhana */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <MdFlightTakeoff className="text-blue-500 text-4xl" />
            Cari Tiket Pesawat
          </h2>
          
          <div className="flex bg-black p-1 rounded-xl border border-gray-800">
            <button 
              onClick={() => setIsRoundTrip(false)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${!isRoundTrip ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Sekali Jalan
            </button>
            <button 
              onClick={() => setIsRoundTrip(true)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${isRoundTrip ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Pulang Pergi
            </button>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative">
          
          {/* Input Asal */}
          <div className="bg-black border border-gray-800 rounded-2xl p-4 focus-within:border-blue-500 transition-all group">
            <label className="text-xs text-blue-500 font-bold uppercase tracking-wider mb-1 block">Dari</label>
            <div className="flex items-center gap-3">
              <MdFlightTakeoff className="text-gray-500 group-focus-within:text-blue-500 text-xl" />
              <input type="text" className="bg-transparent w-full text-white font-semibold outline-none" placeholder="Jakarta (JKTC)" />
            </div>
          </div>

          {/* Tombol Switch - Desktop Only */}
          <button className="hidden lg:flex absolute left-[23.5%] top-[30%] z-10 bg-blue-600 p-2 rounded-full border-4 border-gray-900 text-white hover:scale-110 transition-transform">
            <HiOutlineSwitchHorizontal size={20} />
          </button>

          {/* Input Tujuan */}
          <div className="bg-black border border-gray-800 rounded-2xl p-4 focus-within:border-blue-500 transition-all group">
            <label className="text-xs text-blue-500 font-bold uppercase tracking-wider mb-1 block">Ke</label>
            <div className="flex items-center gap-3">
              <MdFlightLand className="text-gray-500 group-focus-within:text-blue-500 text-xl" />
              <input type="text" className="bg-transparent w-full text-white font-semibold outline-none" placeholder="Bali (DPS)" />
            </div>
          </div>

          {/* Tanggal */}
          <div className="bg-black border border-gray-800 rounded-2xl p-4 focus-within:border-blue-500 transition-all group">
            <label className="text-xs text-blue-500 font-bold uppercase tracking-wider mb-1 block">Pergi</label>
            <div className="flex items-center gap-3">
              <MdDateRange className="text-gray-500 group-focus-within:text-blue-500 text-xl" />
              <input type="date" className="bg-transparent w-full text-white font-semibold outline-none [color-scheme:dark]" />
            </div>
          </div>

          {/* Penumpang & Kelas */}
          <div className="bg-black border border-gray-800 rounded-2xl p-4 focus-within:border-blue-500 transition-all group">
            <label className="text-xs text-blue-500 font-bold uppercase tracking-wider mb-1 block">Penumpang & Kelas</label>
            <div className="flex items-center gap-3">
              <MdPerson className="text-gray-500 group-focus-within:text-blue-500 text-xl" />
              <select className="bg-transparent w-full text-white font-semibold outline-none cursor-pointer">
                <option className="bg-gray-900">1 Dewasa, Ekonomi</option>
                <option className="bg-gray-900">2 Dewasa, Bisnis</option>
                <option className="bg-gray-900">1 Dewasa, First Class</option>
              </select>
            </div>
          </div>

        </div>

        {/* Search Button */}
        <div className="mt-8 flex justify-end">
          <button className="w-full lg:w-auto px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl transition-all shadow-lg shadow-blue-900/40 hover:-translate-y-1 active:scale-95">
            Cari Tiket Sekarang
          </button>
        </div>

      </div>

      {/* Info Promo Sederhana (Ala Traveloka) */}
      <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
         <div className="min-w-[250px] bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl">
            <p className="text-blue-400 text-xs font-bold uppercase">Promo Hemat</p>
            <p className="text-white text-sm">Diskon s.d 20% ke Bali!</p>
         </div>
         <div className="min-w-[250px] bg-green-900/20 border border-green-500/30 p-4 rounded-xl">
            <p className="text-green-400 text-xs font-bold uppercase">Flexible Done</p>
            <p className="text-white text-sm">Gratis Reschedule Tiket</p>
         </div>
      </div>
    </div>
  );
};

export default FlightBooking;