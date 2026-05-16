import React from 'react';
import StatCard from './StatCard';
import BookingTrendsChart from './BookingTrendsChart';
import PopularDestinations from './PopularDestinations';
import RecentBookingsTable from './RecentBookingsTable';

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Header Dashboard Utama */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 mb-2">
        <div>
          <h2 className="text-3xl font-bold text-[#108ee9] tracking-tight">
            Admin Dashboard
          </h2>
          <p className="text-sm font-normal text-blue-400 mt-1">
            Welcome back, here's what's happening with your travel business today.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold text-gray-500">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200/80 transition-all">
            📅 Last 30 Days
          </button>
          <button className="px-4 py-2 bg-[#108ee9] text-white rounded-xl shadow-sm hover:bg-blue-600 transition-all font-semibold">
            📤 Export Report
          </button>
        </div>
      </div>

      {/* Baris Atas: 4 StatCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Total Bookings" value="2,450" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} percentage="12%" isPositive={true} />
        <StatCard title="Monthly Revenue" value="$124,000" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} percentage="8.4%" isPositive={true} />
        <StatCard title="Active Trips" value="42" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} percentage="-2%" isPositive={false} />
        <StatCard title="New Customers" value="128" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} percentage="24%" isPositive={true} />
      </div>

      {/* Baris Tengah: Grafik & Tren Destinasi */}
      <div className="flex flex-col lg:flex-row gap-6">
        <BookingTrendsChart />
        <PopularDestinations />
      </div>

      {/* Baris Bawah: Tabel Riwayat */}
      <RecentBookingsTable />
    </div>
  );
};

export default Overview;