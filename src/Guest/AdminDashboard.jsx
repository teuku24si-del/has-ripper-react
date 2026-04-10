import React from 'react';
import data from './data/framework.json';

const AdminDashboard = () => {
  // Hitung Statistik Sederhana
  const totalItem = data.length;
  const totalHotel = data.filter(item => item.kategori === 'hotel').length;
  const totalPesawat = data.filter(item => item.kategori === 'pesawat').length;
  
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin Dashboard</h1>
            <p className="text-slate-500">Manajemen Data Travelkui Framework</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
            + Tambah Data
          </button>
        </div>

        {/* Statistik Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Total Produk</p>
            <h3 className="text-4xl font-black text-blue-600">{totalItem}</h3>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Total Hotel</p>
            <h3 className="text-4xl font-black text-emerald-600">{totalHotel}</h3>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Total Pesawat</p>
            <h3 className="text-4xl font-black text-orange-500">{totalPesawat}</h3>
          </div>
        </div>

        {/* Tabel Data */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-50 bg-slate-50/50">
            <h2 className="font-bold text-slate-800">Daftar Inventaris Proyek</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-400 text-xs uppercase tracking-widest border-b border-slate-100">
                  <th className="px-6 py-4 font-bold">Item</th>
                  <th className="px-6 py-4 font-bold">Kategori</th>
                  <th className="px-6 py-4 font-bold">Harga</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {data.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {item.kategori === 'hotel' ? (
                          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">🏨</div>
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">✈️</div>
                        )}
                        <div>
                          <p className="font-bold text-slate-800 leading-none mb-1">{item.nama_item}</p>
                          <p className="text-xs text-slate-400">ID: #{item.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        item.kategori === 'hotel' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {item.kategori}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-700">
                      Rp {item.harga.toLocaleString('id-ID')}
                    </td>
                    <td className="px-6 py-4">
                      {item.status_ketersediaan ? (
                        <span className="flex items-center gap-1.5 text-emerald-500 text-sm font-bold">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Tersedia
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-red-400 text-sm font-bold">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span> Penuh
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors">✏️</button>
                        <button className="p-2 hover:bg-red-50 text-red-50 rounded-lg transition-colors text-red-500">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;