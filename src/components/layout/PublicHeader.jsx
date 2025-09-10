import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import { ChevronDown } from 'lucide-react';

// 1. Impor gambar logo dari folder assets
import appkoiLogo from '/logo.png'; // Pastikan nama file gambarnya sesuai

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
  <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      {/* 2. Gunakan tag <img> untuk menampilkan logo */}
      <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
        <img src={appkoiLogo} alt="APPKOI Logo" className="h-8 w-auto" />
        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white tracking-wider">APKOI</span>
      </Link>
      
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link to="/login">
          <Button>Masuk</Button>
        </Link>
      </div>

      <nav className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-primary' : 'text-gray-900 dark:text-white'}>Beranda</NavLink></li>
          <li className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex items-center text-gray-900 dark:text-white">
              Profil Organisasi <ChevronDown size={16} className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                <Link to="/profil/selayang-pandang" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Selayang Pandang</Link>
                <Link to="/profil/visi-misi" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Visi dan Misi</Link>
                <Link to="/profil/struktur-organisasi" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Struktur Organisasi</Link>
              </div>
            )}
          </li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? 'text-primary' : 'text-gray-900 dark:text-white'}>Program</NavLink></li>
          <li><NavLink to="/news" className={({ isActive }) => isActive ? 'text-primary' : 'text-gray-900 dark:text-white'}>Berita</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-primary' : 'text-gray-900 dark:text-white'}>Kontak</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default PublicHeader;

