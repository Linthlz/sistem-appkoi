import {
  LayoutDashboard,
  Users,
  Settings,
  Newspaper,
  Briefcase,
} from 'lucide-react';

// Path diubah agar sesuai dengan struktur di AppRoutes.jsx
export const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Manajemen User', path: '/dashboard/users', icon: Users },
  { name: 'Berita & Acara', path: '/dashboard/news', icon: Newspaper },
  { name: 'Program', path: '/dashboard/services', icon: Briefcase },
  { name: 'Pengaturan', path: '/dashboard/settings', icon: Settings },
];
