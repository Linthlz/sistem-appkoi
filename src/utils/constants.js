import { 
  LayoutDashboard, Users, Newspaper, Award, 
  BookOpen, Briefcase, Settings 
} from 'lucide-react';

export const menuItems = [
  { name: 'Dashboard', path: '', icon: LayoutDashboard }, // Index (Halaman Utama)
  { name: 'Manajemen User', path: 'users', icon: Users },
  { name: 'Berita & Acara', path: 'news', icon: Newspaper },
  { name: 'Sertifikat', path: 'certificates', icon: Award },
  { name: 'Kurikulum', path: 'curriculums', icon: BookOpen },
  { name: 'Program', path: 'services', icon: Briefcase },
  { name: 'Pengaturan', path: 'settings', icon: Settings },
];