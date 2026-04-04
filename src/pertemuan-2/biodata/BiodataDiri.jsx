import "./Biodata.css";
import Avatar from "./Avatar";
import InfoDasar from "./InfoDasar";
import Kontak from "./Kontak";
import Keahlian from "./Keahlian";
import Pengalaman from "./Pengalaman";
import RingkasanProfil from "./RingkasanProfil";

export default function BiodataDiri() {
  const cardStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "700px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    color: "#333",
    lineHeight: "1.6"
  };

  const sectionStyle = {
    borderTop: "1px solid #eee",
    marginTop: "20px",
    paddingTop: "10px"
  };

  return (
    <div style={cardStyle}>
      {/* Bagian Header */}
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <Avatar />
        <InfoDasar />
        <Kontak />
      </header>

      {/* Bagian Body */}
      <main>
        <div style={sectionStyle}>
          <RingkasanProfil />
        </div>
        
        <div style={sectionStyle}>
          <Keahlian />
        </div>

        <div style={sectionStyle}>
          <Pengalaman />
        </div>
      </main>

      {/* Bagian Footer */}
      <footer style={{ 
        marginTop: "30px", 
        textAlign: "center", 
        fontSize: "0.8rem", 
        color: "#888" 
      }}>
        <p>© 2026 {new Date().getFullYear() !== 2026 ? "- " + new Date().getFullYear() : ""} Teuku M Hasbi Alghifari</p>
      </footer>
    </div>
  );
}