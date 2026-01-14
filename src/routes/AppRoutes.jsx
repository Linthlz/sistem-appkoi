import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AnimatedPage from "../components/layout/AnimatedPage.jsx";
import ScrollToTop from "../components/layout/ScrollToTop.jsx";

// Layouts
import PublicLayout from "../components/layout/PublicLayout.jsx";
import DashboardLayout from "../components/layout/DashboardLayout.jsx";

// Public Pages
import LandingPage from "../pages/public/LandingPage.jsx";
import AboutPage from "../pages/public/AboutPage.jsx";
import NewsPage from "../pages/public/NewsPage.jsx";
import NewsDetailPage from "../pages/public/NewsDetailPage.jsx";
import ServicesPage from "../pages/public/ServicesPage.jsx";
import WorkshopPage from "../pages/public/WorkshopPage.jsx";
import VisiMisiPage from "../pages/public/VisiMisiPage.jsx";
import KurikulumPage from "../pages/public/KurikulumPage.jsx";
import CertificateGalleryPage from "../pages/public/CertificateGalleryPage.jsx";
import SelayangPandangPage from "../pages/public/SelayangPandangPage.jsx";
import StrukturOrganisasiPage from "../pages/public/StrukturOrganisasiPage.jsx";

// Auth Pages
import LoginPage from "../pages/auth/LoginPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";

// Dashboard Pages
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import UserManagement from "../pages/dashboard/UserManagement.jsx";
import NewsManagement from "../pages/dashboard/NewsManagement.jsx";
import ProfilePage from "../pages/dashboard/ProfilePage.jsx";
import SettingsPage from "../pages/dashboard/SettingsPage.jsx";
import CertificateManagement from "../pages/dashboard/CertificateManagement.jsx";
import CurriculumManagement from "../pages/dashboard/CurriculumManagement.jsx";
import ServicesManagement from "../pages/dashboard/ServicesManagement.jsx"; 

const AppRoutes = () => {
  const location = useLocation(); // 🧭 Untuk mendeteksi perubahan path agar AnimatePresence bekerja

  return (
    <>
      {/* ✅ Memastikan posisi scroll balik ke atas setiap pindah halaman */}
      <ScrollToTop />
      
      {/* 🌀 AnimatePresence menjaga transisi animasi keluar-masuk antar halaman */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          {/* 🌐 PUBLIC ROUTES */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<AnimatedPage><LandingPage /></AnimatedPage>} />
            <Route path="about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
            <Route path="news" element={<AnimatedPage><NewsPage /></AnimatedPage>} />
            <Route path="news/:id" element={<AnimatedPage><NewsDetailPage /></AnimatedPage>} />
            <Route path="services" element={<AnimatedPage><ServicesPage /></AnimatedPage>} />
            <Route path="profil/selayang-pandang" element={<AnimatedPage><SelayangPandangPage /></AnimatedPage>} />
            <Route path="profil/visi-misi" element={<AnimatedPage><VisiMisiPage /></AnimatedPage>} />
            <Route path="profil/struktur-organisasi" element={<AnimatedPage><StrukturOrganisasiPage /></AnimatedPage>} />
            <Route path="program/workshop" element={<AnimatedPage><WorkshopPage /></AnimatedPage>} />
            <Route path="program/kurikulum" element={<AnimatedPage><KurikulumPage /></AnimatedPage>} />
            <Route path="sertifikat" element={<AnimatedPage><CertificateGalleryPage /></AnimatedPage>} />
          </Route>

          {/* 🔐 AUTH ROUTES */}
          <Route path="/login" element={<AnimatedPage><LoginPage /></AnimatedPage>} />
          <Route path="/register" element={<AnimatedPage><RegisterPage /></AnimatedPage>} />
          <Route path="/unauthorized" element={<div className="p-20 text-center text-red-500 font-bold">Akses Ditolak!</div>} />

          {/* 🧭 DASHBOARD ROUTES (PROTECTED) */}
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
            <Route path="news/:id" element={<AnimatedPage><NewsDetailPage /></AnimatedPage>} />
            <Route path="certificates" element={<AnimatedPage><CertificateManagement /></AnimatedPage>} />
            <Route path="curriculums" element={<AnimatedPage><CurriculumManagement /></AnimatedPage>} />
            <Route path="services" element={<AnimatedPage><ServicesManagement /></AnimatedPage>} />
            <Route path="profile" element={<AnimatedPage><ProfilePage /></AnimatedPage>} />
            <Route path="settings" element={<AnimatedPage><SettingsPage /></AnimatedPage>} />
          </Route>

          {/* 🔄 REDIRECTS & 404 */}
          <Route path="/dashboard" element={<Navigate to="/login" replace />} />
          
          <Route path="*" element={
            <AnimatedPage>
              <div className="flex h-screen flex-col items-center justify-center bg-gray-50 text-center">
                <h1 className="text-9xl font-extrabold text-red-500 tracking-widest">404</h1>
                <div className="bg-red-500 px-2 text-sm rounded rotate-12 absolute text-white">
                  Halaman Tidak Ditemukan
                </div>
                <button className="mt-5" onClick={() => window.history.back()}>
                  <span className="relative block px-8 py-3 bg-white border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
                    Kembali Ke Sebelumnya
                  </span>
                </button>
              </div>
            </AnimatedPage>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;