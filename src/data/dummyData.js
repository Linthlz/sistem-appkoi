// src/data/dummyData.js

export const dummyUsers = [
  { id: 1, name: 'Admin Utama', email: 'admin@organisasi.com', password: 'password123', role: 'Admin', status: 'Active', joined: '2023-01-15' },
  { id: 2, name: 'Budi Santoso', email: 'budi.s@example.com', password: 'password123', role: 'Anggota', status: 'Active', joined: '2023-02-20' },
  { id: 3, name: 'Citra Lestari', email: 'citra.l@example.com', password: 'password123', role: 'Anggota', status: 'Inactive', joined: '2023-03-10' },
  { id: 4, name: 'Dewi Anggraini', email: 'dewi.a@example.com', password: 'password123', role: 'Anggota', status: 'Active', joined: '2023-04-05' },
  { id: 5, name: 'Eko Prasetyo', email: 'eko.p@example.com', password: 'password123', role: 'Admin', status: 'Active', joined: '2023-05-12' },
  { id: 6, name: 'Fitriani', email: 'fitri@example.com', password: 'password123', role: 'Anggota', status: 'Pending', joined: '2023-06-18' },
  { id: 7, name: 'Guntur Wibowo', email: 'guntur.w@example.com', password: 'password123', role: 'Anggota', status: 'Active', joined: '2023-07-22' },
  { id: 8, name: 'Wawa', email: 'wawa@gmail.com', password: 'password123', role: 'Anggota', status: 'Active', joined: '2024-01-01' }
];

export const dummyNews = [
  {
    id: 1,
    title: "Musyawarah Nasional (Munas) APKOI 2025 Komitmen Pelatih Olahraga Indonesia",
    date: "22-24 Agustus 2025",
    category: "Seminar",
    image: "/landing.jpg",
    excerpt: "Munas APKOI 2025 di Jakarta menegaskan pentingnya kolaborasi dan profesionalisme dalam dunia kepelatihan olahraga.",
    content: "Asosiasi Pendidikan Kepelatihan Olahraga Indonesia (APKOI) resmi menyelenggarakan Musyawarah Nasional (Munas) 2025...",
  },
  {
    id: 2,
    title: "APKOI Resmi Menjalin Kerjasama dengan Universitas Muhammadiyah Karanganyar",
    date: "20 Februari 2025",
    category: "Kerjasama",
    image: "/landing3.jpeg",
    excerpt: "APKOI dan Universitas Muhammadiyah Karanganyar menandatangani MoU untuk pengembangan akademik dan profesional kepelatihan olahraga.",
    content: "APKOI dan Universitas Muhammadiyah Karanganyar (UMUKA) resmi menandatangani nota kesepahaman...",
  },
  {
    id: 3,
    title: "APKOI Lanjutkan Kolaborasi Strategis dengan Kampus 5 UNESA",
    date: "5 Maret 2025",
    category: "Kerjasama",
    image: "/landing2.jpeg",
    excerpt: "APKOI memperluas kerja sama dengan Kampus 5 UNESA Mojokerto untuk pengembangan kurikulum dan teknologi kepelatihan.",
    content: "APKOI terus memperluas jaringan kerjasama akademik dan profesional di bidang kepelatihan olahraga...",
  }
];

export const overviewStats = {
  totalUsers: 1250,
  activeProjects: 45,
  revenue: 520500000,
  newUserGrowth: 15.8
};

export const chartData = [
  { name: 'Jan', users: 400, projects: 24, revenue: 2400 },
  { name: 'Feb', users: 300, projects: 13, revenue: 2210 },
  { name: 'Mar', users: 200, projects: 98, revenue: 2290 },
  { name: 'Apr', users: 278, projects: 39, revenue: 2000 },
  { name: 'May', users: 189, projects: 48, revenue: 2181 },
  { name: 'Jun', users: 239, projects: 38, revenue: 2500 },
  { name: 'Jul', users: 349, projects: 43, revenue: 2100 },
];

export const pieData = [
  { name: 'Admin', value: 2 },
  { name: 'Member', value: 3 },
  { name: 'User', value: 2 },
];

export const CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28'];