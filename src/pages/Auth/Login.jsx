import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsFillExclamationDiamondFill } from "react-icons/bs"; 
import { ImSpinner2 } from "react-icons/im"; 

const Login = () => {
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
    
    try {
      const response = await axios.post('https://dummyjson.com/user/login', {
        username: formData.email, 
        password: formData.password
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.status === 200) {
        localStorage.setItem('token', response.data.accessToken);
        navigate('/home'); 
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Terjadi kesalahan pada server");
      } else {
        setError(err.message || "Koneksi gagal");
      }
    } finally {
      setLoading(false);
    }
  };

  const errorInfo = error ? (
    <div className="bg-red-50 border border-red-200 mb-5 p-4 text-sm text-red-600 rounded-lg flex items-center">
      <BsFillExclamationDiamondFill className="text-red-500 me-2 text-lg shrink-0" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-blue-50 border border-blue-200 mb-5 p-4 text-sm text-blue-600 rounded-lg flex items-center">
      <ImSpinner2 className="me-2 animate-spin text-blue-500 shrink-0" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    // Membungkus seluruh div utama dengan Inter sebagai standar
    <div className="font-['Inter',sans-serif]">
      
      {/* 1. Judul Sign in menggunakan font Inter */}
      <h1 className="text-[30px] font-bold text-gray-900 mb-2 font-['Inter',sans-serif]">
        Sign in 
      </h1>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleLogin} className="space-y-4">
        
        {/* Input Username / Email */}
        <div>
          <input 
            type="text" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className={`w-full px-4 py-3.5 rounded-lg border bg-white text-gray-900 outline-none transition-all placeholder:text-gray-500 font-['Inter',sans-serif] ${
              error 
                ? 'border-red-400 focus:ring-1 focus:ring-red-500' 
                : 'border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
            placeholder="get@ziontutorial.com" 
            required
          />
        </div>

        {/* 2. Input Kata Sandi menggunakan font Inter */}
        <div>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
            className={`w-full px-4 py-3.5 rounded-lg border bg-white text-gray-900 outline-none transition-all placeholder:text-gray-500 font-['Inter',sans-serif] ${
              error 
                ? 'border-red-400 focus:ring-1 focus:ring-red-500' 
                : 'border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`} 
            placeholder="Password" 
            required
          />
        </div>

        <div className="text-right">
          <Link to="/forgot-password" virtual="true" className="text-sm text-blue-600 hover:text-blue-500 font-medium font-['Inter',sans-serif]">
            Lupa kata sandi?
          </Link>
        </div>

        {/* 3. Or continue with menggunakan font Inter */}
        <div className="flex items-center pt-2 pb-2">
          <span className="text-sm text-gray-500 mr-4 font-['Inter',sans-serif]">Or continue with</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        <div className="mb-6">
          <button 
            type="button" 
            className="w-full flex justify-center items-center py-3.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.78 15.68 17.54V20.3H19.25C21.34 18.37 22.56 15.57 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C14.97 23 17.46 22.02 19.25 20.3L15.68 17.54C14.7 18.2 13.45 18.59 12 18.59C9.19 18.59 6.81 16.7 5.96 14.16H2.26V17.03C4.05 20.59 7.72 23 12 23Z" fill="#34A853"/>
              <path d="M5.96 14.16C5.74 13.5 5.62 12.77 5.62 12C5.62 11.23 5.74 10.5 5.96 9.84V6.97H2.26C1.52 8.44 1.1 10.15 1.1 12C1.1 13.85 1.52 15.56 2.26 17.03L5.96 14.16Z" fill="#FBBC05"/>
              <path d="M12 5.41C13.62 5.41 15.07 5.97 16.21 7.06L19.34 3.93C17.45 2.17 14.97 1.1 12 1.1C7.72 1.1 4.05 3.41 2.26 6.97L5.96 9.84C6.81 7.3 9.19 5.41 12 5.41Z" fill="#EA4335"/>
            </svg>
          </button>
        </div>

        {/* 4. Tombol Submit Utama menggunakan font IBM Plex Serif */}
        <button 
          type="submit"
          disabled={loading}
          className={`w-full font-medium py-3.5 rounded-lg transition-all flex justify-center items-center text-white font-['IBM_Plex_Serif',serif] ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? <ImSpinner2 className="animate-spin text-xl" /> : "Log in"}
        </button>
      </form>

      <p className="mt-8 text-[11px] text-gray-500 text-center uppercase tracking-widest font-['Inter',sans-serif]">
        Gunakan <span className="text-blue-600 font-bold">emilys</span> & <span className="text-blue-600 font-bold">emilyspass</span>
      </p>
    </div>
  );
};

export default Login;