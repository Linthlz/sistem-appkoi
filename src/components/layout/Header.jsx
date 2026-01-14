import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import {
  Menu, Sun, Moon,
  ChevronDown, UserCircle, Settings, LogOut, LayoutDashboard
} from 'lucide-react';

const Header = ({ isSidebarOpen, setSidebarOpen, currentUser, logout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const { theme, toggleTheme } = useAppContext(); 
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
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-800 shadow-sm border-b-2 border-red-600">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-500 hover:text-red-600 lg:hidden transition-colors"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleTheme} 
              className="p-2 mr-2 rounded-full hover:bg-red-50 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-red-600 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="flex items-center space-x-2 focus:outline-none group p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <img 
                  className="h-8 w-8 rounded-full border-2 border-red-100 group-hover:border-red-500 transition-all shadow-sm" 
                  src={`https://ui-avatars.com/api/?name=${currentUser.name}&background=dc2626&color=fff`} 
                  alt="User Avatar" 
                />
                <span className="hidden md:inline text-sm font-semibold dark:text-gray-200 group-hover:text-red-600 transition-colors">
                  {currentUser.name}
                </span>
                <ChevronDown size={16} className={`transition-transform text-gray-400 group-hover:text-red-600 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl py-2 ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in duration-150">
                  <div className="px-4 py-3 border-b dark:border-gray-700">
                    <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Status: {currentUser.role}</p>
                    <p className="text-sm font-bold truncate dark:text-white">{currentUser.name}</p>
                    <p className="text-xs text-gray-400 truncate">{currentUser.email}</p>
                  </div>
                  
                  <div className="p-1">
                    <Link 
                      to={`/dashboard/${userId}`} 
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-all"
                    >
                      <LayoutDashboard size={16} className="mr-3 text-red-500" /> Dashboard Utama
                    </Link>

                    <Link 
                      to={`/dashboard/${userId}/profile`} 
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-all"
                    >
                      <UserCircle size={16} className="mr-3 text-gray-400" /> Profil Saya
                    </Link>
                    
                    <Link 
                      to={`/dashboard/${userId}/settings`} 
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-all"
                    >
                      <Settings size={16} className="mr-3 text-gray-400" /> Pengaturan Akun
                    </Link>
                  </div>

                  <div className="mx-2 my-1 border-t dark:border-gray-700"></div>
                  
                  <div className="p-1">
                    <button 
                      onClick={logout} 
                      className="w-full text-left flex items-center px-3 py-2 text-sm text-red-600 font-bold rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-all"
                    >
                      <LogOut size={16} className="mr-3" /> Keluar Aplikasi
                    </button>
                  </div>
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