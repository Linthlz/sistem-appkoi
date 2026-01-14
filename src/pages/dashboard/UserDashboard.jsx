import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  Award, BookOpen, Clock, User, Newspaper, Layers, Settings, Plus, Edit, Trash2, Search 
} from 'lucide-react';

// Reusable Card Component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

const UserDashboard = () => {
  // Mock State untuk Simulasi CRUD
  const [news, setNews] = useState([
    { id: 1, title: "Lomba Desain Nasional", date: "2024-01-12" },
    { id: 2, title: "Update Kurikulum Baru", date: "2024-01-14" }
  ]);

  const activityData = [
    { day: 'Sen', progress: 20 }, { day: 'Sel', progress: 45 }, { day: 'Rab', progress: 30 },
    { day: 'Kam', progress: 70 }, { day: 'Jum', progress: 85 }, { day: 'Sab', progress: 95 },
  ];

  // Fungsi CRUD Sederhana (Contoh pada fitur Berita/News)
  const handleAdd = (feature) => console.log(`Tambah data baru ke ${feature}`);
  const handleEdit = (id) => console.log(`Edit data ID: ${id}`);
  const handleDelete = (id) => {
    if(window.confirm("Hapus data ini?")) {
      setNews(news.filter(item => item.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          Halo, Wawa! <span className="animate-bounce">👋</span>
        </h1>
        <p className="text-gray-500">Selamat datang kembali di portal pribadi Anda.</p>
      </div>
      
      {/* Stats Grid - Red Palette */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-rose-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Sertifikat Saya</p>
              <p className="text-4xl font-bold mt-1">2</p>
            </div>
            <div className="bg-white/20 p-3 rounded-lg"><Award size={28} /></div>
          </div>
        </Card>

        <Card className="p-6 bg-emerald-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Kursus Selesai</p>
              <p className="text-4xl font-bold mt-1">14</p>
            </div>
            <div className="bg-white/20 p-3 rounded-lg"><BookOpen size={28} /></div>
          </div>
        </Card>

        <Card className="p-6 bg-violet-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Jam Belajar</p>
              <p className="text-4xl font-bold mt-1">24h</p>
            </div>
            <div className="bg-white/20 p-3 rounded-lg"><Clock size={28} /></div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="font-bold text-gray-700 mb-6 flex items-center gap-2">
             Progres Belajar Mingguan
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                <Tooltip 
                   contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="progress" 
                  stroke="#e11d48" // Red accent from sidebar
                  strokeWidth={4} 
                  dot={{ r: 6, fill: '#e11d48', strokeWidth: 2, stroke: '#fff' }} 
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Account Info & Management CRUD Preview */}
        <div className="space-y-6">
          <Card className="p-6 border-t-4 border-rose-600">
            <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
              <User size={18} className="text-rose-600"/> Informasi Akun
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-400 text-sm">Email</span>
                <span className="text-gray-700 font-medium text-sm">wawa@gmail.com</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-400 text-sm">Tipe Keanggotaan</span>
                <span className="text-rose-600 font-bold text-xs bg-rose-50 px-3 py-1 rounded-full">Anggota</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400 text-sm">ID Anggota</span>
                <span className="text-gray-700 font-mono text-sm">8</span>
              </div>
            </div>
          </Card>

          {/* Sidebar Feature CRUD Controller Preview */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-700 flex items-center gap-2">
                <Newspaper size={18} className="text-rose-600"/> Berita Terbaru
              </h3>
              <button 
                onClick={() => handleAdd('Berita')}
                className="p-1.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
            <div className="space-y-3">
              {news.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group">
                  <span className="text-sm text-gray-600 truncate mr-2">{item.title}</span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleEdit(item.id)} className="text-blue-500 hover:text-blue-700"><Edit size={14}/></button>
                    <button onClick={() => handleDelete(item.id)} className="text-rose-500 hover:text-rose-700"><Trash2 size={14}/></button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;