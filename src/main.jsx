import React from 'react'
import ReactDOM from 'react-dom/client'
import MainGuest from './Guest/MainGuest' // Jalur menuju file utama Guest Anda
import './index.css' // Pastikan file CSS Tailwind Anda diimpor di sini

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainGuest />
  </React.StrictMode>,
)