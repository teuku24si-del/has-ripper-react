import React from 'react'
import ReactDOM from 'react-dom/client'
import RegistrationForm from './RegistrationForm' // Pastikan nama file sesuai



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ 
      backgroundColor: '#f4f4f9', 
      minHeight: '100vh', 
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <RegistrationForm />
    </div>
  </React.StrictMode>,
)