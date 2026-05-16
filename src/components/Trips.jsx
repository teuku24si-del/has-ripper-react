// 1. PASTIKAN BARIS IMPORT INI ADA DI BAGIAN ATAS TRIPS.JSX
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- Wajib di-import
import { FiSearch, FiMapPin, FiCalendar, FiDollarSign, FiUsers, FiTag } from "react-icons/fi";
import tripData from '../data/trips.json';

const Trips = () => {
  const navigate = useNavigate(); // 2. INISIALISASI HOOK NAVIGASI DI SINI
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter & Search Logic (tetap seperti kemarin)
  const filteredTrips = tripData.filter(trip => {
    const matchesSearch = trip.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          trip.tripId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || trip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(tripData.map(trip => trip.category))];

  return (
    <div className="space-y-6 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* ... bagian header dan controls tetap sama seperti kemarin ... */}

      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F4F7FE]/50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <th className="px-6 py-5">Trip ID</th>
                <th className="px-6 py-5">Destination</th>
                <th className="px-6 py-5">Category</th>
                <th className="px-6 py-5">Duration</th>
                <th className="px-6 py-5">Price</th>
                <th className="px-6 py-5 text-center">Capacity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {filteredTrips.map((trip) => {
                const isFull = trip.capacity.toLowerCase().includes("full");

                return (
                  /* 3. PERBAIKAN UTAMA: Pasang onClick dan cursor-pointer di tag tr */
                  <tr 
                    key={trip.tripId} 
                    onClick={() => navigate(`/admin/trips/${trip.tripId}`)} 
                    className="hover:bg-gray-50/50 transition-colors cursor-pointer group"
                  >
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md">
                        {trip.tripId}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 font-bold text-gray-800">
                        <FiMapPin className="text-[#108ee9]" />
                        <span>{trip.destination}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full w-fit">
                        <FiTag className="text-purple-500" size={12} />
                        <span>{trip.category}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{trip.duration}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">{trip.price}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full border ${
                        isFull ? 'bg-red-50 text-red-600 border-red-200' : 'bg-blue-50 text-blue-600 border-blue-200'
                      }`}>
                        {isFull ? "Full Booked" : trip.capacity.replace(' Seats', '')}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trips;