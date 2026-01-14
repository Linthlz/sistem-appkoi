import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AnimatedPage from "../components/layout/AnimatedPage.jsx";
import ScrollToTop from "../components/layout/ScrollToTop.jsx";

// Layouts
import PublicLayout from "../components/layout/PublicLayout.jsx";
import DashboardLayout from "../components/layout/DashboardLayout.jsx";

// Public & Auth Pages
import LandingPage from "../pages/public/LandingPage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";

// Dashboard Pages
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import UserManagement from "../pages/dashboard/UserManagement.jsx";
import NewsManagement from "../pages/dashboard/NewsManagement.jsx";
import ProfilePage from "../pages/dashboard/ProfilePage.jsx";
import SettingsPage from "../pages/dashboard/SettingsPage.jsx";

// PERBAIKAN IMPORT: Sesuaikan dengan nama file fisik di folder dashboard Anda
import CertificateManagement from "../pages/dashboard/CertificateManagement.jsx";
import CurriculumManagement from "../pages/dashboard/CurriculumManagement.jsx";
// Gunakan ServicesManagement karena file ProgramManagement tidak ada di folder Anda
import ServicesManagement from "../pages/dashboard/ServicesManagement.jsx"; 

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          {/* 🌐 PUBLIC ROUTES */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<AnimatedPage><LandingPage /></AnimatedPage>} />
          </Route>

          {/* 🔐 AUTH ROUTES */}
          <Route path="/login" element={<AnimatedPage><LoginPage /></AnimatedPage>} />
          <Route path="/register" element={<AnimatedPage><RegisterPage /></AnimatedPage>} />
          <Route path="/unauthorized" element={<div className="p-20 text-center text-red-500 font-bold">Akses Ditolak!</div>} />

          {/* 🧭 PROTECTED DASHBOARD ROUTES */}
          <Route
            path="/dashboard/:userId"
            element={
              <ProtectedRoute allowedRoles={['Anggota', 'Admin']}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AnimatedPage><Dashboard /></AnimatedPage>} />
            <Route path="users" element={<AnimatedPage><UserManagement /></AnimatedPage>} />
            <Route path="news" element={<AnimatedPage><NewsManagement /></AnimatedPage>} />
            <Route path="certificates" element={<AnimatedPage><CertificateManagement /></AnimatedPage>} />
            
            {/* Mengarahkan rute curriculums (dengan 's') ke komponen yang sama */}
            <Route path="curriculum" element={<AnimatedPage><CurriculumManagement /></AnimatedPage>} />
            <Route path="curriculums" element={<AnimatedPage><CurriculumManagement /></AnimatedPage>} />
            
            {/* PERBAIKAN: Menggunakan ServicesManagement untuk rute program */}
            <Route path="program" element={<AnimatedPage><ServicesManagement /></AnimatedPage>} />
            <Route path="programs" element={<AnimatedPage><ServicesManagement /></AnimatedPage>} />
            <Route path="services" element={<AnimatedPage><ServicesManagement /></AnimatedPage>} />

            <Route path="profile" element={<AnimatedPage><ProfilePage /></AnimatedPage>} />
            <Route path="settings" element={<AnimatedPage><SettingsPage /></AnimatedPage>} />
          </Route>

          {/* 🔄 REDIRECTS & 404 */}
          <Route path="/dashboard" element={<Navigate to="/login" replace />} />
          
          <Route path="*" element={
            <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
              <h1 className="text-9xl font-extrabold text-red-500 tracking-widest">404</h1>
              <div className="bg-red-500 px-2 text-sm rounded rotate-12 absolute text-white">
                Halaman Tidak Ditemukan
              </div>
              <button className="mt-5" onClick={() => window.history.back()}>
                <div className="relative inline-block text-sm font-medium text-red-500 group active:text-red-500 focus:outline-none focus:ring cursor-pointer">
                  <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-red-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                  <span className="relative block px-8 py-3 bg-white border border-current">
                    Kembali Ke Sebelumnya
                  </span>
                </div>
              </button>
            </div>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;