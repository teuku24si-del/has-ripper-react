import React from 'react';

const InputField = ({ label, type = "text", name, value, onChange, error }) => {
  return (
    <div style={{ marginBottom: '15px', textAlign: 'left' }}>
      {/* Label Input */}
      <label 
        htmlFor={name} 
        style={{ 
          display: 'block', 
          fontWeight: 'bold', 
          marginBottom: '5px',
          fontSize: '14px',
          color: '#333'
        }}
      >
        {label}
      </label>

      {/* Tag Input */}
      <input 
        id={name}
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={`Masukkan ${label.toLowerCase()}...`}
        style={{ 
          width: '100%', 
          padding: '10px', 
          borderRadius: '4px',
          border: error ? '2px solid #dc3545' : '1px solid #ccc',
          boxSizing: 'border-box', // Agar padding tidak merusak lebar input
          outline: 'none'
        }}
      />

      {/* Alert Error - Tampil jika prop error berisi pesan (Conditional Rendering) */}
      {error && (
        <div style={{ 
          color: '#dc3545', 
          fontSize: '12px', 
          marginTop: '5px',
          fontWeight: '500'
        }}>
          ⚠️ {error}
        </div>
      )}
    </div>
  );
};

export default InputField;