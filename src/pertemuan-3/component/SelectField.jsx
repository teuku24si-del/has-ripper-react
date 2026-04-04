import React from 'react';

const SelectField = ({ label, name, value, onChange, options, error }) => {
  return (
    <div style={{ marginBottom: '15px', textAlign: 'left' }}>
      {/* Label Dropdown */}
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

      {/* Tag Select */}
      <select 
        id={name}
        name={name} 
        value={value} 
        onChange={onChange} 
        style={{ 
          width: '100%', 
          padding: '10px', 
          borderRadius: '4px',
          border: error ? '2px solid #dc3545' : '1px solid #ccc',
          backgroundColor: 'white',
          cursor: 'pointer',
          boxSizing: 'border-box',
          outline: 'none'
        }}
      >
        {/* Opsi default/placeholder */}
        <option value="" disabled>-- Pilih {label} --</option>
        
        {/* Mapping data array menjadi baris-baris opsi */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Alert Error - Conditional Rendering */}
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

export default SelectField;