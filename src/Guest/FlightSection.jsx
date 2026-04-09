import React from 'react';
import data from './data/framework.json';

const FlightSection = () => {
  // Filter data khusus pesawat
  const flights = data.filter(item => item.kategori === 'pesawat');

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Tiket Pesawat Terpopuler</h2>
          <p className="text-slate-500 text-sm">Terbang lebih hemat dengan promo maskapai terbaik.</p>
        </div>
        <button className="text-blue-600 font-bold text-sm hover:underline">Lihat Semua Maskapai →</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flights.map((flight) => (
          <div key={flight.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-all shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  {flight.nama_item.substring(0, 1)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{flight.nama_item}</h3>
                  <p className="text-xs text-slate-500">{flight.detail_perjalanan.kelas}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-blue-600 font-black text-lg">Rp {flight.harga.toLocaleString('id-ID')}</p>
                <p className="text-[10px] text-slate-400">per orang</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
              <div className="flex-1 text-center">
                <p className="text-xs font-bold text-slate-400">RUTE</p>
                <p className="text-sm font-semibold text-slate-700">{flight.detail_perjalanan.rute}</p>
              </div>
              <div className="h-8 w-[1px] bg-slate-200"></div>
              <div className="flex-1 text-center">
                <p className="text-xs font-bold text-slate-400">DURASI</p>
                <p className="text-sm font-semibold text-slate-700">{flight.detail_perjalanan.durasi}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2">
                {flight.fasilitas_unggulan.makan_minum && (
                  <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md font-bold">🍱 Makan</span>
                )}
                <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-bold">🧳 {flight.fasilitas_unggulan.bagasi}</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                Pilih
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSection;