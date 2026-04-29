import React from 'react';
import FlightBooking from './FlightBooking';
import BookingCard from './BookingCard';

const Home = () => {
  const planeTickets = [
    { name: "Garuda GA-402", price: "1.500.000", route: "JKT - BALI", duration: "1j 50m", features: ["Makan", "20kg"] },
    { name: "Citilink QG-810", price: "850.000", route: "SUB - JKT", duration: "1j 30m", features: ["15kg"] }
  ];

  const trainTickets = [
    { name: "Argo Bromo Anggrek", price: "550.000", route: "GMBR - SBS", duration: "8j 10m", features: ["Eksekutif", "AC"] },
    { name: "Taksaka Malam", price: "450.000", route: "GMBR - YK", duration: "6j 0m", features: ["Eksekutif"] }
  ];

  const shipTickets = [
    { name: "KM Kelud", price: "350.000", route: "JKT - BATAM", duration: "24j 0m", features: ["Dek A"] },
    { name: "KM Dobonsolo", price: "400.000", route: "JKT - MKS", duration: "48j 0m", features: ["Dek B"] }
  ];

  return (
    <div className="pb-32 bg-black overflow-hidden">
      {/* --- HERO SECTION WITH GLOW EFFECT --- */}
      <section className="relative pt-20 pb-32 flex flex-col items-center justify-center text-center px-6">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full -z-10" />

        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
          Your Journey Starts Here
        </div>
        
        <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
          Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">World</span> <br /> 
          with Travel-Go
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Temukan pengalaman perjalanan terbaik dengan layanan booking tiket pesawat, kereta, dan kapal dalam satu aplikasi yang cerdas.
        </p>

        {/* --- FORM BOOKING OVERLAP --- */}
        <div className="w-full mt-16 transform transition-all">
          <FlightBooking />
        </div>
      </section>

      {/* --- TRUST BADGES / FEATURES --- */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Mudah & Cepat", desc: "Proses booking hanya dalam hitungan detik.", color: "from-blue-500/20" },
          { title: "Harga Terbaik", desc: "Penawaran kompetitif setiap hari.", color: "from-blue-600/20" },
          { title: "Banyak Pilihan", desc: "Berbagai moda transportasi lengkap.", color: "from-blue-700/20" }
        ].map((item, i) => (
          <div key={i} className={`p-8 rounded-3xl bg-gradient-to-br ${item.color} to-transparent border border-white/5 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 group`}>
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
               <span className="text-white font-black text-xl">{i + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* --- TICKETS SECTION --- */}
      <div className="space-y-32 mt-32 px-6">
        
        {/* Pesawat */}
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Tiket Pesawat</h2>
              <div className="h-1.5 w-20 bg-blue-600 mt-2 rounded-full" />
            </div>
            <button className="text-blue-500 text-sm font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">Lihat Semua</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {planeTickets.map((ticket, index) => (
              <BookingCard key={index} data={ticket} type="plane" />
            ))}
          </div>
        </section>

        {/* Kereta */}
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Jadwal Kereta</h2>
              <div className="h-1.5 w-20 bg-blue-600 mt-2 rounded-full" />
            </div>
            <button className="text-blue-500 text-sm font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">Lihat Semua</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {trainTickets.map((ticket, index) => (
              <BookingCard key={index} data={ticket} type="train" />
            ))}
          </div>
        </section>

        {/* Kapal */}
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Kapal Laut</h2>
              <div className="h-1.5 w-20 bg-blue-600 mt-2 rounded-full" />
            </div>
            <button className="text-blue-500 text-sm font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">Lihat Semua</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {shipTickets.map((ticket, index) => (
              <BookingCard key={index} data={ticket} type="ship" />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;