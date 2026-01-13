import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import {
  Menu, Bell, Sun, Moon,
  ChevronDown, UserCircle, Settings, LogOut
} from 'lucide-react';

const Header = ({ isSidebarOpen, setSidebarOpen, currentUser, logout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Menggunakan theme dari AppContext agar sinkron dengan sistem global
  const { theme, toggleTheme } = useAppContext(); 
  
  // Mengambil ID user untuk link profil & pengaturan
  const userId = currentUser?.id;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!currentUser) {
    return null;
  }

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          
          {/* Sisi Kiri: Tombol Menu (Mobile) */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Sisi Kanan: Theme, Notifikasi, User Dropdown */}
          <div className="flex items-center space-x-4">
            
            {/* Toggle Dark Mode */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Notifikasi */}
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative text-gray-500">
              <Bell size={20} />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white dark:ring-gray-800"></span>
            </button>

            {/* Dropdown User */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="flex items-center space-x-2 focus:outline-none"
              >
                <img 
                  className="h-8 w-8 rounded-full border border-gray-200 dark:border-gray-600" 
                  src={`https://ui-avatars.com/api/?name=${currentUser.name}&background=random`} 
                  alt="User" 
                />
                <span className="hidden md:inline text-sm font-medium dark:text-gray-200">
                  {currentUser.name}
                </span>
                <ChevronDown size={16} className={`transition-transform text-gray-400 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in duration-100">
                  <div className="px-4 py-2 border-b dark:border-gray-700 lg:hidden">
                    <p className="text-sm font-bold truncate dark:text-white">{currentUser.name}</p>
                    <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                  </div>
                  
                  {/* UPDATE: Mengarahkan rute sesuai ID User */}
                  <Link 
                    to={`/dashboard/${userId}/profile`} 
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <UserCircle size={16} className="mr-2 text-gray-400" /> Profil
                  </Link>
                  
                  <Link 
                    to={`/dashboard/${userId}/settings`} 
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Settings size={16} className="mr-2 text-gray-400" /> Pengaturan
                  </Link>

                  <hr className="my-1 border-gray-100 dark:border-gray-700" />
                  
                  <button 
                    onClick={logout} 
                    className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <LogOut size={16} className="mr-2" /> Keluar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;