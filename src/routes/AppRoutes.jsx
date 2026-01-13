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
import ServicesPage from "../pages/public/ServicesPage.jsx";
import NewsPage from "../pages/public/NewsPage.jsx";
import NewsDetailPage from "../pages/public/NewsDetailPage.jsx";
import SelayangPandangPage from "../pages/public/SelayangPandangPage.jsx";
import VisiMisiPage from "../pages/public/VisiMisiPage.jsx";
import StrukturOrganisasiPage from "../pages/public/StrukturOrganisasiPage.jsx";
import CertificateGalleryPage from "../pages/public/CertificateGalleryPage.jsx";
import WorkshopPage from "../pages/public/WorkshopPage.jsx";
import KurikulumPage from "../pages/public/KurikulumPage.jsx";

// Auth Pages
import LoginPage from "../pages/auth/LoginPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";

// Dashboard Pages
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import UserManagement from "../pages/dashboard/UserManagement.jsx";
import NewsManagement from "../pages/dashboard/NewsManagement.jsx";
import ServicesManagement from "../pages/dashboard/ServicesManagement.jsx";
import ProfilePage from "../pages/dashboard/ProfilePage.jsx";
import SettingsPage from "../pages/dashboard/SettingsPage.jsx";
import CertificateManagement from '../pages/dashboard/CertificateManagement.jsx';
import CurriculumManagement from "../pages/dashboard/CurriculumManagement.jsx";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* 🌐 PUBLIC PAGES */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<AnimatedPage><LandingPage /></AnimatedPage>} />
            <Route path="profil/selayang-pandang" element={<AnimatedPage><SelayangPandangPage /></AnimatedPage>} />
            <Route path="profil/visi-misi" element={<AnimatedPage><VisiMisiPage /></AnimatedPage>} />
            <Route path="profil/struktur-organisasi" element={<AnimatedPage><StrukturOrganisasiPage /></AnimatedPage>} />
            <Route path="services" element={<AnimatedPage><ServicesPage /></AnimatedPage>} />
            <Route path="news" element={<AnimatedPage><NewsPage /></AnimatedPage>} />
            <Route path="news/:id" element={<AnimatedPage><NewsDetailPage /></AnimatedPage>} />
            <Route path="sertifikat" element={<AnimatedPage><CertificateGalleryPage /></AnimatedPage>} />
            <Route path="program/workshop" element={<AnimatedPage><WorkshopPage /></AnimatedPage>} />
            <Route path="program/kurikulum" element={<AnimatedPage><KurikulumPage /></AnimatedPage>} />
          </Route>

          {/* 🔐 AUTH */}
          <Route path="/login" element={<AnimatedPage><LoginPage /></AnimatedPage>} />
          <Route path="/register" element={<AnimatedPage><RegisterPage /></AnimatedPage>} />

          {/* 🧭 DASHBOARD (DIPERBARUI) */}
            <Route
            path="/dashboard/:userId"
            element={
                <ProtectedRoute>
                <DashboardLayout />
                </ProtectedRoute>
            }
            >
            {/* path index akan merender Dashboard saat URL: /dashboard/ID */}
            <Route index element={<AnimatedPage><Dashboard /></AnimatedPage>} />
            
            {/* Path anak TIDAK boleh diawali dengan '/' agar menjadi /dashboard/ID/users */}
            <Route path="users" element={<AnimatedPage><UserManagement /></AnimatedPage>} />
            <Route path="news" element={<AnimatedPage><NewsManagement /></AnimatedPage>} />
            <Route path="certificates" element={<AnimatedPage><CertificateManagement /></AnimatedPage>} />
            <Route path="curriculums" element={<AnimatedPage><CurriculumManagement /></AnimatedPage>} />
            <Route path="services" element={<AnimatedPage><ServicesManagement /></AnimatedPage>} />
            <Route path="profile" element={<AnimatedPage><ProfilePage /></AnimatedPage>} />
            <Route path="settings" element={<AnimatedPage><SettingsPage /></AnimatedPage>} />
            </Route>

          {/* Redirect jika path /dashboard saja tanpa ID */}
          <Route path="/dashboard" element={<Navigate to="/login" replace />} />

          {/* 🚫 404 */}
          <Route path="*" element={<AnimatedPage><div className="flex h-screen items-center justify-center">404: Halaman Tidak Ditemukan</div></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;