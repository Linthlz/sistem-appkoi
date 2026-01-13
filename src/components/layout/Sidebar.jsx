import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext.js';
import { menuItems } from '../../utils/constants.js';
import { Briefcase, X } from 'lucide-react';

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const { currentUser } = useAppContext();
  const userId = currentUser?.id;

  return (
    <>
      {/* Overlay Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#1a1c23] text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
          {/* Logo mengarah ke Dashboard utama milik user */}
          <Link to={`/dashboard/${userId}`} className="text-xl font-bold flex items-center gap-2">
            <Briefcase size={24} className="text-red-500" />
            <span>Manajemen</span>
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="py-4 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              // PERBAIKAN LOGIKA PATH: 
              // Jika path kosong (Dashboard), URL = /dashboard/ID
              // Jika ada path (misal 'news'), URL = /dashboard/ID/news
              const targetPath = item.path === '' 
                ? `/dashboard/${userId}` 
                : `/dashboard/${userId}/${item.path}`;

              return (
                <li key={item.name}>
                  <NavLink
                    to={targetPath}
                    // 'end' memastikan highlight merah hanya aktif pada rute yang tepat
                    end={item.path === ''}
                    onClick={() => { if (window.innerWidth < 1024) setSidebarOpen(false) }}
                    className={({ isActive }) => `
                      flex items-center p-3 rounded-lg transition-all duration-200 group
                      ${isActive 
                        ? 'bg-red-600 text-white shadow-md' 
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
                    `}
                  >
                    <item.icon size={20} className="mr-3" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;