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

// 2. Guest / Auth Pages (Admin)
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Forgot = lazy(() => import('./pages/Auth/Forgot'));

// --- TAMBAHAN AUTH PAGES UNTUK MEMBER ---
const LoginL = lazy(() => import('./pages/Auth/LoginL'));
const RegisterL = lazy(() => import('./pages/Auth/RegisterL'));

// 3. Admin Components / Pages
const Overview = lazy(() => import('./components/Overview'));
const Customers = lazy(() => import('./components/Customers'));
const Orders = lazy(() => import('./components/Orders'));
const Trips = lazy(() => import('./components/Trips'));
const TripsDetail = lazy(() => import('./components/TripsDetail'));
const Promotion = lazy(() => import('./pages/Promotion'));

// 4. Account Settings & User Management
const AccountSettings = lazy(() => import('./pages/AccountSettings'));
const UserPage = lazy(() => import('./pages/User')); 

// 5. PUBLIC / LANDING PAGES
const LandingPage = lazy(() => import('./pages/LandingPage')); 
const About = lazy(() => import('./components/LandingPage/About'));
const PromotionL = lazy(() => import('./components/LandingPage/PromotionL'));
const Contact = lazy(() => import('./components/LandingPage/Contact'));

// --- TAMBAHAN HALAMAN MEMBER DASHBOARD ---
const MemberDashboard = lazy(() => import('./pages/MemberDashboard'));


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
          
          {/* ================= PUBLIC / LANDING PAGE ROUTES ================= */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/promotion" element={<PromotionL />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ================= MEMBER ROUTES ================= */}
          {/* Rute Autentikasi Member */}
          <Route path="/login-member" element={<LoginL />} />
          <Route path="/register-member" element={<RegisterL />} />
          {/* Rute Dashboard Member */}
          <Route path="/member" element={<MemberDashboard />} />

          {/* ================= GUEST / AUTHENTICATION ROUTES (ADMIN) ================= */}
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

            {/* Rute Konten Baru Promotions (Halaman Admin) */}
            <Route path="promotions" element={<Promotion />} />

            {/* Rute Konten Baru Management User */}
            <Route path="user" element={<UserPage />} />

            {/* Rute Konten Baru Account Settings (Sinkron dengan Sidebar) */}
            <Route path="account-settings" element={<AccountSettings />} />
          </Route>

          {/* ==================== REDIRECTION FALLBACK ==================== */}
          {/* Mengarahkan rute tidak dikenal kembali ke Landing Page utama */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Suspense>

      {/* Komponen Toaster diletakkan di sini agar bisa diakses dari halaman mana saja */}
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}

export default App;