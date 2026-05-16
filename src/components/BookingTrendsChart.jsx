import React from 'react';

const BookingTrendsChart = () => {
  return (
    /* Mengubah font pembungkus utama menjadi Plus Jakarta Sans */
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex-grow font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="flex justify-between items-center mb-6">
        <div>
          {/* Ketentuan 1: Booking Trends = Plus Jakarta Sans Semibold */}
          <h3 className="text-lg font-semibold text-[#1B2559]">Booking Trends</h3>
          {/* Ketentuan 2: Sub-deskripsi = Plus Jakarta Sans Regular */}
          <span className="text-xs font-normal text-gray-400">Growth visualization over the last 6 months</span>
        </div>
        
        {/* Ketentuan 3 & 4: Angka Tahun (2026 & 2025) = Plus Jakarta Sans Semibold */}
        <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></span>
            <span className="font-semibold">2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            <span className="font-semibold">2025</span>
          </div>
        </div>
      </div>
      
      {/* Area Visualisasi Grafik Kurva Tren */}
      <div className="w-full h-64 relative pt-4 flex flex-col justify-between">
        <svg className="w-full h-4/5 overflow-visible" viewBox="0 0 600 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="50" x2="600" y2="50" stroke="#F4F7FE" strokeWidth="1" />
          <line x1="0" y1="120" x2="600" y2="120" stroke="#F4F7FE" strokeWidth="1" />
          
          <path d="M 0 140 Q 100 110 200 130 T 400 90 T 600 50 L 600 200 L 0 200 Z" fill="url(#chartGrad)" />
          <path d="M 0 140 Q 100 110 200 130 T 400 90 T 600 50" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          
          <circle cx="200" cy="130" r="5" fill="#3B82F6" stroke="white" strokeWidth="2" />
          <circle cx="415" cy="93" r="5" fill="#3B82F6" stroke="white" strokeWidth="2" />
          <circle cx="600" cy="50" r="5" fill="#3B82F6" stroke="white" strokeWidth="2" />
        </svg>

        {/* PENYESUAIAN BARU: Memastikan label teks bulan menyebar merata (justify-between) dari ujung ke ujung */}
        <div className="w-full flex justify-between text-[11px] font-semibold text-gray-400 mt-4 px-1 select-none font-['Plus_Jakarta_Sans']">
          <span className="w-12 text-left">JAN</span>
          <span className="w-12 text-center">FEB</span>
          <span className="w-12 text-center">MAR</span>
          <span className="w-12 text-center">APR</span>
          <span className="w-12 text-center">MAY</span>
          <span className="w-12 text-center">JUN</span>
          <span className="w-12 text-right">JUL</span>
        </div>
      </div>
    </div>
  );
};

export default BookingTrendsChart;