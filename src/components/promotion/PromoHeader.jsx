import React from "react";

export default function PromoHeader({ onCreatePromo }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Promotions Management</h1>
        <p className="text-sm text-gray-500 mt-1">
          Welcome back, Hasbi. Here's your active campaign and coupon analytics today.
        </p>
      </div>
      <button 
        onClick={onCreatePromo}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-md transition-colors flex items-center gap-2"
      >
        <span>+</span> Create New Promo
      </button>
    </div>
  );
}