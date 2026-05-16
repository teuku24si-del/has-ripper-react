import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiMapPin, FiCalendar, FiDollarSign, FiUsers, FiTag, FiClock } from "react-icons/fi";

// Import data master json yang sudah Anda miliki di folder data
import tripData from '../data/trips.json';
import itineraryData from '../data/itineraries.json';

const TripDetail = () => {
  // Mengambil parameter ID rute secara dinamis dari URL (contoh: /admin/trips/TRP-001)
  const { id } = useParams();

  // Mencari data rute yang cocok berdasarkan ID di URL
  const trip = tripData.find(t => t.tripId === id);

  // Jika data ID rute tidak ditemukan di dalam trips.json
  if (!trip) {
    return (
      <div className="text-center py-12 font-['Plus_Jakarta_Sans']">
        <h3 className="text-xl font-bold text-gray-700">Trip Package Not Found</h3>
        <Link to="/admin/trips" className="text-[#108ee9] hover:underline mt-2 inline-block">Back to Trips List</Link>
      </div>
    );
  }

  // Kalkulasi data manajerial berdasarkan kapasitas di data JSON
  const seatsFilled = parseInt(trip.capacity.split('/')[0]) || 0;
  const maxSeats = parseInt(trip.capacity.split('/')[1]) || 10;
  const rawPrice = parseInt(trip.price.replace('$', ''));
  const totalRevenue = seatsFilled * rawPrice;

  // Mengambil data itinerary spesifik rute ini, atau gunakan rute default jika belum didaftarkan
  const activeItinerary = itineraryData[trip.tripId] || itineraryData["default"];

  return (
    <div className="space-y-6 font-['Plus_Jakarta_Sans',sans-serif] animate-in fade-in duration-500">
      
      {/* Tombol Kembali & Jalur Navigasi */}
      <div className="flex items-center gap-4">
        <Link to="/admin/trips" className="p-2.5 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl text-gray-600 shadow-sm transition-all">
          <FiArrowLeft size={18} />
        </Link>
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <span>Trip Management</span> / <span>{trip.tripId}</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1B2559] mt-0.5">Manage Package Operations</h2>
        </div>
      </div>

      {/* Grid Utama Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sisi Kiri: Detail Utama, Estimasi Finansial, & Itinerary Manager */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Kartu Informasi Utama Paket */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full mb-3">
                  <FiTag size={12} /> {trip.category} Category
                </span>
                <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                  <FiMapPin className="text-[#108ee9]" size={26} /> {trip.destination}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Price per Person</span>
                <span className="text-3xl font-bold text-green-600 flex items-center justify-end mt-1">
                  <FiDollarSign size={24} /> {rawPrice}
                </span>
              </div>
            </div>

            {/* Durasi & Ketersediaan Kursi */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 text-sm font-semibold text-gray-600">
              <div className="flex items-center gap-2 bg-[#F4F7FE] p-3 rounded-xl">
                <FiCalendar className="text-[#108ee9]" size={18} />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block">Duration</span>
                  <span>{trip.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#F4F7FE] p-3 rounded-xl">
                <FiUsers className="text-[#108ee9]" size={18} />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block">Seat Occupancy</span>
                  <span>{trip.capacity}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Kartu Ringkasan Finansial Operasional */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Estimated Revenue</span>
                <h3 className="text-3xl font-semibold text-[#108ee9] mt-1">${totalRevenue.toLocaleString()}</h3>
              </div>
              <span className="text-[11px] text-green-500 font-bold mt-2">Based on current active bookings</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Quota Capacity Status</span>
                <h3 className="text-3xl font-semibold text-gray-800 mt-1">
                  {Math.round((seatsFilled / maxSeats) * 100)}% Filled
                </h3>
              </div>
              {/* Visual Progress Bar Kursi */}
              <div className="w-full bg-gray-100 h-2 rounded-full mt-3 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${seatsFilled === maxSeats ? 'bg-red-500' : 'bg-[#108ee9]'}`}
                  style={{ width: `${(seatsFilled / maxSeats) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* DYNAMIC ITINERARY MANAGER TIMELINE */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-base font-bold text-[#1B2559]">Package Itinerary Timeline</h4>
                <p className="text-xs text-gray-400 font-normal mt-0.5">Operational schedule plan details for this trip route</p>
              </div>
              <span className="text-xs font-bold text-[#108ee9] bg-blue-50 px-3 py-1 rounded-full">
                {activeItinerary.length} Days Plan
              </span>
            </div>
            
            {/* Timeline Vertikal Fleksibel */}
            <div className="relative border-l-2 border-dashed border-blue-100 pl-6 ml-3 space-y-6 text-sm">
              {activeItinerary.map((plan, index) => (
                <div key={index} className="relative group/item animate-in fade-in slide-in-from-left-3 duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                  
                  {/* Indikator Titik Node Timeline */}
                  <span className="absolute -left-[32px] top-0.5 bg-[#108ee9] w-4 h-4 rounded-full border-4 border-white shadow-sm group-hover/item:scale-110 transition-transform"></span>
                  
                  {/* Konten Rencana Aktivitas Harian */}
                  <div className="bg-gray-50/50 group-hover/item:bg-[#F4F7FE]/50 p-3.5 rounded-2xl border border-transparent group-hover/item:border-gray-100 transition-all">
                    <span className="text-[10px] font-bold text-[#108ee9] tracking-wider uppercase block mb-1">
                      Hari {plan.day}
                    </span>
                    <h5 className="font-bold text-gray-800 text-sm">
                      {plan.title}
                    </h5>
                    <p className="text-xs text-gray-500 font-normal mt-1.5 leading-relaxed">
                      {plan.activity}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sisi Kanan: Operational Notes & Action */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
            <h4 className="text-base font-bold text-[#1B2559] flex items-center gap-2">
              <FiClock className="text-amber-500" /> Operational Status
            </h4>
            <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl text-xs text-amber-700 space-y-2 font-medium">
              <p>⚠️ <strong>Admin Notice:</strong></p>
              <p>Perubahan jadwal, penutupan kuota mendadak, atau pembatalan sepihak wajib dikonfirmasikan kepada departemen layanan pelanggan sebelum dokumen manifestasi final diekspor.</p>
            </div>
            <button className="w-full py-3 bg-[#108ee9] hover:bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md">
              Close Registration Quota
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TripDetail;