import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Nanti kita buat di folder components

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="p-4">
        <Outlet /> {/* Isi halaman (Home/Booking) akan muncul di sini */}
      </main>
    </div>
  );
};

export default MainLayout;