import React from 'react';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import Breadcrumb from './Breadcrumb.jsx';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext'; // Pastikan path sesuai

const DashboardLayout = () => {
  const { currentUser, logout } = useAppContext();

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentUser={currentUser} logout={logout} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Breadcrumb />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
