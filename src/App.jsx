import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts - Menggunakan React.lazy()
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const MainLayout = React.lazy(() => import("./layouts/MainLayouts"));

// Pages - Auth
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));

//  Guest/Booking
const Home = React.lazy(() => import("./components/Home"));
const FlightBooking = React.lazy(() => import("./components/FlightBooking"));;

// Loading Component
const Loading = () => (
  <div className="bg-black text-blue-500 h-screen flex items-center justify-center font-bold">
    LOADING...
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* 1. Rute Awal: Langsung arahkan ke Login */}
          <Route path="/" element={<Navigate replace to="/login" />} />

          {/* 2. Group Rute Auth (Login, Register, Forgot) */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forgot />} />
          </Route>

          {/* 3. Group Rute Guest (Tampilan Utama setelah "Login") */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/booking/plane" element={<FlightBooking />} />
            {/* Tambahkan rute train, bus, car, ship di bawah ini jika filenya sudah ada */}
          </Route>

          {/* Redirect jika mengetik path asal-asalan */}
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;