import React from "react";
import { createRoot } from "react-dom/client";
// Pastikan path (jalur file) di bawah ini sesuai dengan lokasi file BiodataDiri.jsx kamu
import BiodataDiri from "./biodata/BiodataDiri";

// Mengambil elemen dengan id 'root' dari file HTML
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* Kita hanya perlu memanggil Parent Component di sini */}
    <div style={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: "20px 0" }}>
      <BiodataDiri />
    </div>
  </React.StrictMode>
);