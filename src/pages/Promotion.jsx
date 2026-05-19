// src/pages/Promotion.jsx
import React, { useState } from "react";

// ==========================================
// IMPORT SEMUA 15 KOMPONEN DARI SUB-FOLDER PROMOTION
// ==========================================
import Container from "../components/promotion/Container";
import Table from "../components/promotion/Table";
import Button from "../components/promotion/Button";
import Badge from "../components/promotion/Badge";
import Card from "../components/promotion/Card";
import Avatar from "../components/promotion/Avatar";
import ProductCard from "../components/promotion/ProductCard";
import PromoHeader from "../components/promotion/PromoHeader";
import StatCardPromotion from "../components/promotion/StatCardPromotion";
import CountdownTimer from "../components/promotion/CountdownTimer";
import CouponClipper from "../components/promotion/CouponClipper";
import ProgressBar from "../components/promotion/ProgressBar";
import SearchBar from "../components/promotion/SearchBar";
import FilterTab from "../components/promotion/FilterTab";
import PromoModalForm from "../components/promotion/PromoModalForm";



export default function Promotion() {
  // State untuk kontrol interaksi halaman
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Kepala kolom untuk Tabel
  const headers = ["No", "Promo Details", "Category", "Coupon Code", "Quota Status", "Expiry Date", "Status", "Actions"];
  
  // Data dummy daftar program promosi
  const [promos, setPromos] = useState([
    { id: 1, name: "Ubud Cultural Mega Discount", category: "Trips", code: "WNDRLYUBUD", discount: "30% OFF", claimed: 18, total: 20, expiry: "May 25, 2026", status: "warning", statusText: "Kuota Menipis" },
    { id: 2, name: "Tokyo Urban Spring Flight", category: "Flights", code: "TOKYOBLITZ", discount: "$150 OFF", claimed: 12, total: 15, expiry: "Jun 12, 2026", status: "success", statusText: "Aktif" },
    { id: 3, name: "Paris Romantic Winter Stay", category: "Hotels", code: "PARISSTAY", discount: "20% OFF", claimed: 30, total: 30, expiry: "May 10, 2026", status: "danger", statusText: "Kedaluwarsa" },
    { id: 4, name: "Iceland Golden Circle Expedition", category: "Trips", code: "ICELAND220", discount: "$220 OFF", claimed: 5, total: 15, expiry: "May 30, 2026", status: "success", statusText: "Aktif" },
  ]);

  // Data dummy pelanggan (Top Spenders)
  const topUsers = [
    { id: 1, name: "Ya'qub Qamar Ad-Din Dibiazah", count: "12 Kupon Diklaim" },
    { id: 2, name: "Khalid Kashmiri", count: "9 Kupon Diklaim" },
    { id: 3, name: "Khidir Karawita", count: "7 Kupon Diklaim" },
    { id: 4, name: "Ismail Ahmad Kanabawi", count: "14 Kupon Diklaim" },
    { id: 5, name: "Usman Abdul Jalil Sisha", count: "17 Kupon Diklaim" },
    { id: 6, name: "Muhammad Sumbul", count: "21 Kupon Diklaim" },
  ];

  // Handler Fungsi Hapus Baris Promo
  const handleDeletePromo = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus promo ini?")) {
      setPromos(promos.filter((promo) => promo.id !== id));
    }
  };

  // Logika Filter Tab dan Search Bar
  const filteredPromos = promos.filter((promo) => {
    const matchesSearch = 
      promo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      promo.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "All" || promo.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <Container className="bg-gray-50/50 min-h-screen">
      
      {/* Promo Header */}
      <PromoHeader onCreatePromo={() => setIsModalOpen(true)} />

      {/* Rangkaian Statistik (Card, StatCardPromotion, Avatar) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCardPromotion 
          title="Total Promo Aktif" 
          value="3 Flash Sales" 
          trend="+12%" 
          trendColor="bg-emerald-50 text-emerald-700"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          }
        />
        <StatCardPromotion 
          title="Kupon Diklaim Hari Ini" 
          value="1,240 Kupon" 
          trend="+24%" 
          trendColor="bg-emerald-50 text-emerald-700"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          }
        />
        
        <Card>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Top Spenders (Pengguna Promo)</p>
          <div className="space-y-3">
            {topUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name={user.name} />
                  <span className="text-sm font-bold text-gray-800">{user.name}</span>
                </div>
                <span className="text-xs bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded-lg">
                  {user.count}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* ProductCard Paket Trip Flash Sale */}
      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>🔥</span> Promo Flash Sale Terbatas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="relative">
          <ProductCard 
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop"
            title="Ubud Cultural & Beach Trip"
            category="Beach"
            price="$250 (Diskon 30% Terpasang)"
            description="Nikmati keindahan sawah Ubud dan pantai Kuta yang menawan dengan potongan harga khusus musim panas."
          />
          <div className="absolute top-4 right-4 z-10">
            <CountdownTimer hours="02" minutes="45" />
          </div>
        </div>
        
        <div className="relative">
          <ProductCard 
            image="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop"
            title="Tokyo & Kyoto Shinkansen Experience"
            category="Urban"
            price="$850 (Potongan Voucher $150)"
            description="Perjalanan kereta cepat shinkansen melewati Gunung Fuji di tengah musim bunga sakura bermekaran."
          />
          <div className="absolute top-4 right-4 z-10">
            <CountdownTimer hours="14" minutes="08" />
          </div>
        </div>
      </div>

      {/* Filter & Search Bar Panel */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterTab activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Table Data list Promotions */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden mb-12">
        <Table headers={headers}>
          {filteredPromos.length > 0 ? (
            filteredPromos.map((promo, index) => (
              <tr key={promo.id} className="hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-none">
                <td className="px-6 py-4 text-sm font-semibold text-gray-400">{index + 1}</td>
                <td className="px-6 py-4">
                  <div className="font-bold text-gray-800 text-sm">{promo.name}</div>
                  <div className="text-xs text-indigo-600 font-bold mt-0.5">{promo.discount}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 font-medium">{promo.category}</td>
                <td className="px-6 py-4">
                  <CouponClipper code={promo.code} />
                </td>
                <td className="px-6 py-4 min-w-[180px]">
                  <ProgressBar current={promo.claimed} total={promo.total} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 font-semibold">{promo.expiry}</td>
                <td className="px-6 py-4">
                  <Badge type={promo.status}>{promo.statusText}</Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Button type="secondary" onClick={() => alert(`Mengedit campaign: ${promo.name}`)}>
                      Edit
                    </Button>
                    <Button type="danger" onClick={() => handleDeletePromo(promo.id)}>
                      Hapus
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center py-10 text-sm font-semibold text-gray-400 bg-gray-50/20">
                Tidak ada program promosi aktif yang ditemukan.
              </td>
            </tr>
          )}
        </Table>
      </div>

      {/* Popup Modal Form */}
      <PromoModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      
      
    </Container>
  );
}