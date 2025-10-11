import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import appkoiLogo from '/logo.png'; 

const PublicHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full z-20 start-0 fixed top-0 bg-white shadow-sm">
      {/* Baris Atas: Logo & Tombol Masuk/Registrasi */}
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-3 px-8">
        <Link to="/" className="flex items-center space-x-4">
          <img src={appkoiLogo} alt="APKOI Logo" className="h-12 w-auto" />
          <span className="self-center text-2xl font-bold whitespace-nowrap tracking-wider text-gray-800">APKOI</span>
        </Link>
        
        <div className="flex items-center space-x-6 text-base font-medium text-primary">
          <Link to="/login" className="hover:underline">Masuk</Link>
          <span className="text-gray-300">|</span>
          <Link to="/register" className="hover:underline">Registrasi</Link>
        </div>
      </div>
      
      {/* Baris Bawah: Menu Navigasi */}
      <div className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <nav className="max-w-screen-xl flex items-center justify-between mx-auto px-8 py-4">
          <ul className="flex items-center space-x-10 text-base font-semibold">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'pb-1 border-b-2 border-white' : 'hover:opacity-80'}>BERANDA</NavLink></li>
            <li className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="flex items-center hover:opacity-80">
                PROFIL ORGANISASI <ChevronDown size={18} className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-56 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 text-gray-700">
                  <Link to="/profil/selayang-pandang" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">Selayang Pandang</Link>
                  <Link to="/profil/visi-misi" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">Visi dan Misi</Link>
                  <Link to="/profil/struktur-organisasi" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100">Struktur Organisasi</Link>
                </div>
              )}
            </li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'pb-1 border-b-2 border-white' : 'hover:opacity-80'}>PROGRAM</NavLink></li>
            <li><NavLink to="/news" className={({ isActive }) => isActive ? 'pb-1 border-b-2 border-white' : 'hover:opacity-80'}>BERITA</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PublicHeader;
