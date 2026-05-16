// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Layouts
import AuthLayouts from './layouts/AuthLayout';
import MainLayouts from './layouts/MainLayouts';

// Import Pages dari folder pages/Auth
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Forgot from './pages/Auth/Forgot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* ================= GUEST / AUTHENTICATION ROUTES ================= */}
        {/* Rute di bawah ini akan otomatis dibungkus oleh AuthLayouts (Background Biru) */}
        <Route element={<AuthLayouts />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgot />} />
        </Route>

        {/* ==================== ADMIN / DASHBOARD ROUTES ==================== */}
        {/* Rute di bawah ini akan otomatis dibungkus oleh MainLayouts (Sidebar + Navbar Admin) */}
        {/* Karena MainLayouts Anda saat ini langsung merender isi dashboard secara hardcoded, 
            kita langsung panggil komponen MainLayouts di sini */}
        <Route path="/admin/dashboard" element={<MainLayouts />} />

        {/* ==================== REDIRECTION FALLBACK ==================== */}
        {/* Jika user mengakses URL kosong (/) atau URL yang salah, kita arahkan ke login sebagai default */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;