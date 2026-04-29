import React from 'react';

const BookingCard = ({ data, type }) => {
  // Tentukan Inisial Huruf
  const getInitial = () => {
    if (type === 'plane') return 'P';
    if (type === 'train') return 'K';
    if (type === 'ship')  return 'L';
    return '?';
  };

  // Tentukan Label Teks
  const getTypeLabel = () => {
    if (type === 'plane') return 'Pesawat';
    if (type === 'train') return 'Kereta Api';
    if (type === 'ship')  return 'Kapal Laut';
    return '';
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-7 hover:border-blue-500/50 transition-all duration-300 shadow-xl group">
      
      {/* Bagian Atas: Identitas & Harga */}
      <div className="flex justify-between items-start mb-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-lg shadow-blue-900/30 group-hover:scale-105 transition-transform">
            {getInitial()}
          </div>
          <div>
            <span className="text-xs text-blue-400 font-bold uppercase tracking-widest block mb-1">
              {getTypeLabel()}
            </span>
            <h3 className="text-white font-bold text-xl leading-tight truncate max-w-[180px]">
              {data.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{data.class || 'Ekonomi'}</p>
          </div>
        </div>
        
        <div className="text-right flex-shrink-0">
          <p className="text-blue-500 font-black text-2xl tracking-tight">
            Rp {data.price}
          </p> {/* PERBAIKAN: Sebelumnya di sini ada error penutup tag */}
          <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest mt-1">
            per orang
          </p>
        </div>
      </div>

      {/* Bagian Tengah: Box Rute & Durasi */}
      <div className="bg-black/50 rounded-2xl p-5 flex justify-between items-center mb-6 border border-gray-800">
        <div className="text-center flex-1 border-r border-gray-800 px-2">
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1.5">Rute</p>
          <p className="text-gray-100 text-sm font-semibold truncate">
            {data.route}
          </p>
        </div>
        <div className="text-center flex-1 px-2">
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1.5">Durasi</p>
          <p className="text-gray-100 text-sm font-semibold">
            {data.duration}
          </p>
        </div>
      </div>

      {/* Bagian Bawah: Fitur & Tombol */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {data.features?.map((feature, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-400 rounded-full text-[10px] font-medium uppercase tracking-wider"
            >
              {feature}
            </span>
          ))}
          {(!data.features || data.features.length === 0) && (
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-600 rounded-full text-[10px] font-medium uppercase tracking-wider">
              Reguler
            </span>
          )}
        </div>
        <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-9 py-3 rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-900/20 active:scale-95">
          Pilih Tiket
        </button>
      </div>
    </div>
  );
};

export default BookingCard;