// src/pages/Auth/LoginL.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsFillExclamationDiamondFill } from "react-icons/bs"; 
import { ImSpinner2 } from "react-icons/im"; 
import { FiMail, FiLock } from "react-icons/fi"; 
import logoWanderly from '../../assets/logo-wanderly.png';

const LoginL = () => {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Kredensial Supabase Anda (Sama dengan Admin)
    const API_URL = "https://mxakqvcstxgyobxzrodw.supabase.co/rest/v1/User";
    const API_KEY = "sb_publishable_T-3OWnAwnCCVK09Sp_5NzQ_zZji8bib";

    try {
      // Menembak data dengan mencocokkan email dan password
      const response = await axios.get(
        `${API_URL}?email=eq.${formData.email}&password=eq.${formData.password}`, 
        {
          headers: { 
            "apikey": API_KEY,
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json" 
          }
        }
      );
      
      if (response.status === 200) {
        if (response.data.length > 0) {
          const loggedInUser = response.data[0];
          
          // Menyimpan token membedakannya dengan admin
          localStorage.setItem('token', `session_member_${loggedInUser.id}`);
          
          // Mengarahkan user ke dashboard member
          navigate('/member'); 
        } else {
          setError("Email atau Password yang Anda masukkan salah.");
        }
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Terjadi kesalahan koneksi database.");
      } else {
        setError(err.message || "Koneksi gagal");
      }
    } finally {
      setLoading(false);
    }
  };

  const errorInfo = error ? (
    <div className="w-full bg-red-50 border border-red-200 mb-6 p-4 text-sm text-red-600 rounded-xl flex items-center">
      <BsFillExclamationDiamondFill className="text-red-500 me-3 text-lg shrink-0" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="w-full bg-blue-50 border border-blue-100 mb-6 p-4 text-sm text-[#7F7CFF] rounded-xl flex items-center">
      <ImSpinner2 className="me-3 animate-spin text-[#7F7CFF] shrink-0" />
      Memverifikasi Akun Member...
    </div>
  ) : null;

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F8F9FD] font-['Plus_Jakarta_Sans',sans-serif] p-6 relative overflow-hidden">
      
      {/* Ornamen Dekorasi Background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-[#7F7CFF] rounded-b-[100px] z-0"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-white/20 rounded-full blur-3xl z-0"></div>

      {/* Card Form Login */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 z-10 relative">
        
        {/* Logo */}
        <div className="mb-8 flex flex-col justify-center items-center">
          <Link to="/">
            <img 
              src={logoWanderly} 
              alt="Wanderly Logo" 
              className="h-10 w-auto object-contain drop-shadow-sm mb-6"
            />
          </Link>
          <h2 className="text-2xl font-extrabold text-gray-800">Welcome Back!</h2>
          <p className="text-sm text-gray-500 mt-1">Log in to manage your next adventure.</p>
        </div>

        {errorInfo}
        {loadingInfo}

        <form onSubmit={handleLogin} className="w-full space-y-5">
          
          {/* Input Email */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Email Address</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 text-lg">
                <FiMail />
              </span>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-gray-50 text-gray-800 outline-none transition-all placeholder:text-gray-400 text-sm font-medium ${
                  error 
                    ? 'border-red-300 focus:border-red-400 focus:bg-white' 
                    : 'border-gray-100 focus:border-[#7F7CFF] focus:bg-white focus:ring-4 focus:ring-blue-50'
                }`}
                placeholder="john@example.com" 
                required
              />
            </div>
          </div>

          {/* Input Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Password</label>
              <Link to="/forgot-password" className="text-xs text-[#7F7CFF] hover:text-[#6b68e3] font-bold transition-colors">
                Forgot?
              </Link>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 text-lg">
                <FiLock />
              </span>
              <input 
                type="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
                className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-gray-50 text-gray-800 outline-none transition-all placeholder:text-gray-400 text-sm font-medium ${
                  error 
                    ? 'border-red-300 focus:border-red-400 focus:bg-white' 
                    : 'border-gray-100 focus:border-[#7F7CFF] focus:bg-white focus:ring-4 focus:ring-blue-50'
                }`} 
                placeholder="••••••••" 
                required
              />
            </div>
          </div>

          {/* Tombol LOGIN */}
          <div className="pt-4">
            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] ${
                loading ? 'bg-[#7F7CFF]/70 cursor-not-allowed' : 'bg-[#7F7CFF] hover:bg-[#6b68e3]'
              }`}
            >
              {loading ? <ImSpinner2 className="animate-spin text-xl mx-auto text-white" /> : "Sign In to My Account"}
            </button>
          </div>
        </form>

        {/* Info Tambahan Registrasi */}
        <div className="mt-8 text-center text-sm text-gray-500 font-medium">
          New to Wanderly?{' '}
          <Link to="/register-member" className="text-[#7F7CFF] font-bold hover:underline">
            Create an account
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default LoginL;