import React from 'react';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import Breadcrumb from './Breadcrumb.jsx';
import { Outlet } from 'react-router-dom'; // <-- 1. Impor Outlet

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Breadcrumb />
          <Outlet /> {/* <-- 2. Ganti {children} dengan Outlet */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
