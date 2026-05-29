// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ImSpinner2 } from "react-icons/im"; 
import { Toaster } from "@/components/ui/sonner"; // Import provider Sonner untuk notifikasi global

// ==================== LAZY LOADING IMPORTS ====================
// Komponen dipisahkan menjadi chunk-chunk kecil dan di-load secara dinamis

// 1. Layouts
const AuthLayouts = lazy(() => import('./layouts/AuthLayout'));
const MainLayouts = lazy(() => import('./layouts/MainLayouts'));

// 2. Guest / Auth Pages
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Forgot = lazy(() => import('./pages/Auth/Forgot'));

// 3. Admin Components / Pages
const Overview = lazy(() => import('./components/Overview'));
const Customers = lazy(() => import('./components/Customers'));
const Orders = lazy(() => import('./components/Orders'));
const Trips = lazy(() => import('./components/Trips'));
const TripsDetail = lazy(() => import('./components/TripsDetail'));
const Promotion = lazy(() => import('./pages/Promotion'));

// --- LAZY IMPORT KONTEN BARU ACCOUNT SETTINGS ---
const AccountSettings = lazy(() => import('./pages/AccountSettings'));

// Komponen Loading Sementara (Fallback) saat halaman sedang diunduh browser
const PageLoader = () => (
  <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#F4F7FE] font-['Plus_Jakarta_Sans',sans-serif]">
    <ImSpinner2 className="animate-spin text-4xl text-[#108ee9] shrink-0" />
    <span className="text-sm font-semibold text-gray-500 mt-3 uppercase tracking-widest">
      Loading Component...
    </span>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      {/* Wajib membungkus Routes dengan Suspense dan memberikan properti fallback. */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          
          {/* ================= GUEST / AUTHENTICATION ROUTES ================= */}
          <Route element={<AuthLayouts />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forgot />} />
          </Route>

          {/* ==================== ADMIN / DASHBOARD ROUTES ==================== */}
          <Route path="/admin" element={<MainLayouts />}>
            {/* Mengarahkan halaman default /admin langsung ke dashboard overview */}
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            
            {/* Rute Konten Utama Overview Dashboard */}
            <Route path="dashboard" element={<Overview />} />
            
            {/* Rute Konten Database Orders */}
            <Route path="orders" element={<Orders />} />
            
            {/* Rute Konten Database Customers */}
            <Route path="customers" element={<Customers />} />

            {/* Rute Konten Database Trips */}
            <Route path="trips" element={<Trips />} />

            {/* Rute Detail Dinamis Per Trips Package */}
            <Route path="trips/:id" element={<TripsDetail />} />

            {/* Rute Konten Baru Promotions */}
            <Route path="promotions" element={<Promotion />} />

            {/* --- RUTE KONTEN BARU ACCOUNT SETTINGS (SINKRON DENGAN SIDEBAR) --- */}
            <Route path="account-settings" element={<AccountSettings />} />
          </Route>

          {/* ==================== REDIRECTION FALLBACK ==================== */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />

        </Routes>
      </Suspense>

      {/* Komponen Toaster diletakkan di sini agar bisa diakses dari halaman mana saja */}
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}

export default App;