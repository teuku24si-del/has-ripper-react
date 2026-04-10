import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

// Impor komponen-komponen utama
import App from '../App'; 
import MainGuest from './MainGuest';
import AdminDashboard from './AdminDashboard'; // 1. Impor AdminDashboard

// Logika manual untuk mendeteksi URL di browser
const currentPath = window.location.pathname;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Kondisi 1: Tampilan Guest */}
    {(currentPath === '/Guest' || currentPath === '/Guest/') ? (
      <MainGuest />
    ) : 
    /* Kondisi 2: Tampilan Admin */
    (currentPath === '/Admin' || currentPath === '/Admin/') ? (
      <AdminDashboard />
    ) : (
      /* Kondisi 3: Tampilan Biodata (Default) */
      <App />
    )}
  </React.StrictMode>
);