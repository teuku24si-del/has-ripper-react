// src/components/LandingPage/NavbarL.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoWanderly from '../../assets/logo-wanderly.png';
import { FiUser, FiShield } from 'react-icons/fi';
import { Navbar } from '../antigravity/Navbar';
import { Typography } from '../antigravity/Typography';
import { Button } from '../antigravity/Button';

const NavbarL = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar>
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logoWanderly} alt="Wanderly" className="h-50 sm:h-30 w-auto object-contain drop-shadow-sm" />
          </Link>
        </div>
        
        {/* NAV LINK DINAMIS */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#destinations">
            <Typography variant="navLink" className={currentPath === '/' ? 'border-transparent' : 'border-transparent'}>
              Destinations
            </Typography>
          </a>
          
          <a href="/#packages">
            <Typography variant="navLink" className="border-transparent">
              Packages
            </Typography>
          </a>

          <Link to="/about">
            <Typography variant="navLink" className={currentPath === '/about' ? 'text-[#7F7CFF] border-[#7F7CFF]' : 'border-transparent'}>
              About
            </Typography>
          </Link>

          <Link to="/promotion">
            <Typography variant="navLink" className={currentPath === '/promotion' ? 'text-[#7F7CFF] border-[#7F7CFF]' : 'border-transparent'}>
              Promotion
            </Typography>
          </Link>

          <Link to="/contact">
            <Typography variant="navLink" className={currentPath === '/contact' ? 'text-[#7F7CFF] border-[#7F7CFF]' : 'border-transparent'}>
              Contact
            </Typography>
          </Link>
        </nav>
        
        {/* ACTION BUTTONS (MEMBER & ADMIN LOGIN) */}
        <div className="flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm">
          <Button to="/login-member" variant="primary">
            Member <FiUser size={16} />
          </Button>

          <Button to="/login" variant="ghost">
            Admin <FiShield size={16} />
          </Button>
        </div>
    </Navbar>
  );
};

export default NavbarL;