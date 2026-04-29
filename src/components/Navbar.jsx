import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = [
    { name: 'Pesawat', path: '/home' }, // Diarahkan ke home sesuai progres sebelumnya
    { name: 'Kereta', path: '/booking/train' },
    { name: 'Bus', path: '/booking/bus' },
    { name: 'Mobil', path: '/booking/car' },
    { name: 'Kapal', path: '/booking/ship' },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link to="/home" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-black text-xl italic">T</span>
          </div>
          <span className="text-white font-black text-2xl tracking-tighter group-hover:text-blue-500 transition-colors">
            TRAVEL<span className="text-blue-500 group-hover:text-white">-GO</span>
          </span>
        </Link>

        {/* MENU ITEMS */}
        <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-2xl px-2 py-1.5">
          {menuItems.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path} 
              className={({ isActive }) => 
                `px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-xl ${
                  isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* ACTION BUTTON */}
        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-900/40 active:scale-95"
          >
            Sign In
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;