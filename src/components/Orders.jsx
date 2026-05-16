import React, { useState } from 'react';
// Menggunakan icon dari react-icons yang sudah terinstall di project Anda
import { FiSearch, FiEye, FiCheckCircle, FiClock, FiXCircle } from "react-icons/fi";
// Mengimpor 30 data transaksi dari folder data
import orderData from '../data/orders.json';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Fungsi memberikan warna badge berdasarkan status transaksi
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-50 text-green-600 border-green-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'Cancelled':
        return 'bg-red-50 text-red-600 border-red-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  // Fungsi memberikan icon indikator berdasarkan status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <FiCheckCircle className="inline mr-1" />;
      case 'Pending':
        return <FiClock className="inline mr-1" />;
      case 'Cancelled':
        return <FiXCircle className="inline mr-1" />;
      default:
        return null;
    }
  };

  // Filter & Search Logic
  const filteredOrders = orderData.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          order.orderId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 font-['Plus_Jakarta_Sans',sans-serif] animate-in fade-in duration-500">
      
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[#108ee9] tracking-tight">
            Order Management
          </h2>
          <p className="text-sm font-normal text-blue-400 mt-1">
            Manage and track all 30 incoming customer travel bookings.
          </p>
        </div>

        {/* Filter & Search Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {/* Dropdown Filter Status */}
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full sm:w-40 px-4 py-2.5 bg-white border border-gray-200 text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#108ee9]/20 focus:border-[#108ee9] text-gray-600 font-semibold transition-all cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          {/* Input Search */}
          <div className="relative w-full sm:w-72">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FiSearch size={16} />
            </span>
            <input 
              type="text" 
              placeholder="Search by Order ID or Name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-200 text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#108ee9]/20 focus:border-[#108ee9] transition-all font-normal"
            />
          </div>
        </div>
      </div>

      {/* Kontainer Tabel Utama */}
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F4F7FE]/50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <th className="px-6 py-5 font-bold">Order ID</th>
                <th className="px-6 py-5 font-bold">Customer Name</th>
                <th className="px-6 py-5 font-bold">Order Date</th>
                <th className="px-6 py-5 font-bold">Total Price</th>
                <th className="px-6 py-5 font-bold text-center">Status</th>
                <th className="px-6 py-5 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredOrders.map((order) => (
                <tr key={order.orderId} className="hover:bg-gray-50/50 transition-colors group">
                  
                  {/* Order ID */}
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md">
                      {order.orderId}
                    </span>
                  </td>

                  {/* Customer Name */}
                  <td className="px-6 py-4">
                    <h5 className="font-bold text-gray-800 text-sm">
                      {order.customerName}
                    </h5>
                  </td>

                  {/* Order Date */}
                  <td className="px-6 py-4">
                    <span className="text-xs font-normal text-gray-500">
                      {order.orderDate}
                    </span>
                  </td>

                  {/* Total Price */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-900">
                      {order.totalPrice}
                    </span>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center text-[10px] font-bold px-3 py-1.5 rounded-full border shadow-sm tracking-wider uppercase ${getStatusStyle(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </td>

                  {/* Action Button */}
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-[#108ee9] hover:bg-blue-50 rounded-lg transition-all" title="View Details">
                      <FiEye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Tabel info total data */}
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
          <span>Showing {filteredOrders.length} Orders</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-gray-200 rounded-md hover:bg-white/80 transition-all">Prev</button>
            <button className="px-3 py-1 bg-white border border-gray-200 rounded-md hover:bg-white/80 transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;