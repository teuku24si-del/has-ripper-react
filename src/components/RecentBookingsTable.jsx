import React from 'react';

const RecentBookingsTable = () => {
  const tableData = [
    { name: 'Emily Spencer', email: 'emily.s@example.com', dest: 'Ubud, Bali', date: 'Oct 12, 2026', status: 'Confirmed', styles: 'bg-green-50 text-green-600 border-green-100' },
    { name: 'James Dalton', email: 'j.dalton@work.com', dest: 'Shibuya, Tokyo', date: 'Oct 11, 2026', status: 'Pending', styles: 'bg-amber-50 text-amber-600 border-amber-100' },
    { name: 'Lena Müller', email: 'lena.m@travel.de', dest: 'Montmartre, Paris', date: 'Oct 10, 2026', status: 'Confirmed', styles: 'bg-green-50 text-green-600 border-green-100' },
    { name: 'Raj Kapoor', email: 'raj@india.net', dest: 'Vikas Puri, Delhi', date: 'Oct 10, 2026', status: 'Cancelled', styles: 'bg-red-50 text-red-600 border-red-100' }
  ];

  return (
    /* Mengubah font dasar komponen menjadi Plus Jakarta Sans */
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="flex justify-between items-center mb-4">
        {/* Ketentuan 1: Recent Bookings = Plus Jakarta Sans Semibold (font-semibold) */}
        <h3 className="text-sm font-semibold text-[#1B2559]">Recent Bookings</h3>
        
        {/* Mengubah tombol aksi ke Plus Jakarta Sans Bold agar serasi dengan komponen lainnya */}
        <button className="text-xs font-bold text-[#7F7CFF] hover:underline">View All Activity</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            {/* Ketentuan 2: Kolom Customer, Destination, Date, Status = Plus Jakarta Sans Bold (font-bold) */}
            <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="pb-3 font-bold">Customer</th>
              <th className="pb-3 font-bold">Destination</th>
              <th className="pb-3 font-bold">Date</th>
              <th className="pb-3 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-xs">
            {tableData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E0E7FF] text-[#4F46E5] font-bold text-xs flex items-center justify-center font-['Plus_Jakarta_Sans']">
                    {row.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    {/* Ketentuan 3: Nama Customer = Plus Jakarta Sans Bold (font-bold) */}
                    <h5 className="font-bold text-gray-800">{row.name}</h5>
                    
                    {/* Ketentuan 4: Email Customer = Plus Jakarta Sans Regular (font-normal) */}
                    <span className="text-[11px] font-normal text-gray-400 block mt-0.5">{row.email}</span>
                  </div>
                </td>
                
                {/* Ketentuan 6: Selain rute spesifik di atas (Destination) = Plus Jakarta Sans Regular (font-normal) */}
                <td className="py-3 font-normal text-gray-600">
                  <span className="text-gray-400 mr-1.5">📍</span>{row.dest}
                </td>
                
                {/* Ketentuan 6: Selain rute spesifik di atas (Date) = Plus Jakarta Sans Regular (font-normal) */}
                <td className="py-3 text-gray-500 font-normal">{row.date}</td>
                
                <td className="py-3">
                  {/* Ketentuan 5: Status Badges (Confirmed, Pending, Cancelled) = Plus Jakarta Sans Bold (font-bold) */}
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${row.styles}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookingsTable;