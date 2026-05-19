import React from "react";

export default function PromoModalForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
        <div className="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-800 text-lg">Create New Promotion</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 font-bold text-xl">&times;</button>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Promo Name</label>
            <input type="text" placeholder="e.g., Summer Flash Sale" className="w-full border border-gray-200 p-2.5 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Coupon Code</label>
              <input type="text" placeholder="WANDERLYX" className="w-full border border-gray-200 p-2.5 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Discount Amount</label>
              <input type="text" placeholder="30% or $50" className="w-full border border-gray-200 p-2.5 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500" required />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
            <select className="w-full border border-gray-200 p-2.5 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 bg-white">
              <option>Trips</option>
              <option>Flights</option>
              <option>Hotels</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end pt-4 border-t border-gray-100 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold text-gray-500 hover:text-gray-700 bg-gray-50 rounded-xl">Cancel</button>
            <button type="submit" className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md">Save Campaign</button>
          </div>
        </form>
      </div>
    </div>
  );
}