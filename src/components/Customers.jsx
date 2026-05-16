import React, { useState } from 'react';
// Memakai library icon yang sudah ada di project Anda
import { FiSearch, FiFilter, FiUser, FiPhone, FiMail } from "react-icons/fi";
// Mengambil data 30 customer dari folder data yang sudah dibuat
import customerData from '../data/Customers.json';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Fungsi pencarian sederhana agar tabel lebih interaktif
  const filteredCustomers = customerData.filter(customer =>
    customer.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fungsi untuk memberikan warna badge berdasarkan tingkatan Loyalty
  const getLoyaltyStyle = (level) => {
    switch (level) {
      case 'Gold':
        return 'bg-yellow-50 text-yellow-600 border-yellow-200';
      case 'Silver':
        return 'bg-slate-100 text-slate-600 border-slate-300';
      case 'Bronze':
        return 'bg-orange-50 text-orange-600 border-orange-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="space-y-6 font-['Plus_Jakarta_Sans',sans-serif] animate-in fade-in duration-500">
      
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[#108ee9] tracking-tight">
            Customer Database
          </h2>
          <p className="text-sm font-normal text-blue-400 mt-1">
            Overview of your 30 registered members and their loyalty status.
          </p>
        </div>

        {/* Search Bar Khusus Halaman Customer */}
        <div className="relative w-full sm:w-80">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <FiSearch size={16} />
          </span>
          <input 
            type="text" 
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-200 text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#108ee9]/20 focus:border-[#108ee9] transition-all font-normal"
          />
        </div>
      </div>

      {/* Kontainer Tabel Utama */}
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F4F7FE]/50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <th className="px-6 py-5 font-bold">Customer ID</th>
                <th className="px-6 py-5 font-bold">Customer Name</th>
                <th className="px-6 py-5 font-bold">Contact Info</th>
                <th className="px-6 py-5 font-bold text-center">Loyalty Level</th>
                <th className="px-6 py-5 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredCustomers.map((customer) => (
                <tr key={customer.customerId} className="hover:bg-gray-50/50 transition-colors group">
                  
                  {/* ID Pelanggan (Plus Jakarta Sans Bold) */}
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-[#108ee9] bg-blue-50 px-2 py-1 rounded-md">
                      {customer.customerId}
                    </span>
                  </td>

                  {/* Nama Pelanggan (Plus Jakarta Sans Bold) */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#7F7CFF] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                        {customer.customerName.charAt(0)}
                      </div>
                      <h5 className="font-bold text-gray-800 text-sm">
                        {customer.customerName}
                      </h5>
                    </div>
                  </td>

                  {/* Info Kontak (Email & Phone - Plus Jakarta Sans Regular) */}
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs font-normal text-gray-500">
                        <FiMail className="shrink-0" /> {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-normal text-gray-400">
                        <FiPhone className="shrink-0" /> {customer.phone}
                      </div>
                    </div>
                  </td>

                  {/* Badge Loyalty (Plus Jakarta Sans Bold) */}
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-block text-[10px] font-bold px-4 py-1.5 rounded-full border shadow-sm tracking-wider uppercase ${getLoyaltyStyle(customer.loyalty)}`}>
                      {customer.loyalty}
                    </span>
                  </td>

                  {/* Tombol Aksi */}
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-[#7F7CFF] hover:bg-blue-50 rounded-lg transition-all">
                      <FiFilter size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Tabel - Info Data */}
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
          <span>Showing {filteredCustomers.length} Customers</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-gray-200 rounded-md hover:bg-white/80">Prev</button>
            <button className="px-3 py-1 bg-white border border-gray-200 rounded-md hover:bg-white/80">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;