import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext.js';
import { menuItems } from '../../utils/constants.js'; // Menggunakan menu dari constants
import { Briefcase, X } from 'lucide-react';

const Sidebar = () => {
  const { isSidebarOpen, setSidebarOpen } = useAppContext();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-900 text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
          <Link to="/dashboard" className="text-xl font-bold flex items-center gap-2">
            <Briefcase size={24} />
            <span>Manajemen</span>
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}><X size={24} /></button>
        </div>
        <nav className="py-4">
          <ul>
            {menuItems.map(item => (
              <li key={item.name} className="px-4 py-1">
                <NavLink
                  to={item.path}
                  // 'end' property ensures only the exact path is marked as active for dashboard
                  end={item.path === '/dashboard'}
                  onClick={() => { if (window.innerWidth < 1024) setSidebarOpen(false) }}
                  className={({ isActive }) => `flex items-center p-2 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'}`}
                >
                  <item.icon size={20} className="mr-3" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
