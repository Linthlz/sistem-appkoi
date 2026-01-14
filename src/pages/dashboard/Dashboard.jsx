import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { 
  Users, BookOpen, Newspaper, Award, FileText, 
  Search, Plus, X, Save, Edit2, Trash2, Calendar, Image as ImageIcon 
} from 'lucide-react'; 
import { useAppContext } from '@/hooks/useAppContext';

const Card = ({ children, className }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const Dashboard = () => {
  const { currentUser } = useAppContext();

  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('berita');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  
  // Dummy Data State
  const [dataBerita, setDataBerita] = useState([{ id: 1, judul: 'Launching Web', penulis: 'Admin', image: null }]);
  const [dataSertifikat, setDataSertifikat] = useState([{ id: 2, nama: 'Sertifikat React', periode: '2023', image: null }]);
  const [dataKurikulum, setDataKurikulum] = useState([]);
  const [dataProgram, setDataProgram] = useState([]);

  // --- HANDLE LOADING STATE ---
  if (!currentUser) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-gray-500 animate-pulse">Memuat data dashboard...</p>
      </div>
    );
  }

  // --- HELPER FUNCTIONS ---
  const getCurrentData = () => {
    let data = [];
    if (activeTab === 'berita') data = dataBerita;
    else if (activeTab === 'sertifikat') data = dataSertifikat;
    else if (activeTab === 'kurikulum') data = dataKurikulum;
    else if (activeTab === 'program') data = dataProgram;

    return data.filter(i => 
      (i.judul || i.nama || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const resetFormExtended = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({});
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Hapus data ini?')) {
      if (activeTab === 'berita') setDataBerita(dataBerita.filter(i => i.id !== id));
      if (activeTab === 'sertifikat') setDataSertifikat(dataSertifikat.filter(i => i.id !== id));
      if (activeTab === 'kurikulum') setDataKurikulum(dataKurikulum.filter(i => i.id !== id));
      if (activeTab === 'program') setDataProgram(dataProgram.filter(i => i.id !== id));
    }
  };

  const handleCreate = () => {
    const newData = { 
      ...formData, 
      id: Date.now(), 
      image: imagePreview // Menggunakan preview sebagai string base64 untuk dummy
    };
    if (activeTab === 'berita') setDataBerita([...dataBerita, newData]);
    if (activeTab === 'sertifikat') setDataSertifikat([...dataSertifikat, newData]);
    if (activeTab === 'kurikulum') setDataKurikulum([...dataKurikulum, newData]);
    if (activeTab === 'program') setDataProgram([...dataProgram, newData]);
    resetFormExtended();
  };

  const handleUpdate = () => {
    const updatedFields = { ...formData, image: imagePreview || formData.image };
    const mapper = (item) => item.id === editingId ? { ...item, ...updatedFields } : item;

    if (activeTab === 'berita') setDataBerita(dataBerita.map(mapper));
    if (activeTab === 'sertifikat') setDataSertifikat(dataSertifikat.map(mapper));
    if (activeTab === 'kurikulum') setDataKurikulum(dataKurikulum.map(mapper));
    if (activeTab === 'program') setDataProgram(dataProgram.map(mapper));
    resetFormExtended();
  };

  // --- DATA DASHBOARD ADMIN ---
  const adminStats = { totalUsers: 1250, publishedNews: 45, certificatesIssued: 520, activeCurriculums: 5 };
  const activityData = [
    { name: 'Jan', users: 400 }, { name: 'Feb', users: 300 },
    { name: 'Mar', users: 200 }, { name: 'Apr', users: 278 },
    { name: 'May', users: 189 }, { name: 'Jun', users: 239 },
  ];
  const roleData = [
    { name: 'Admin', value: 5 }, { name: 'Anggota', value: 85 }, { name: 'Staf', value: 10 },
  ];
  const COLORS = ['#DC2626', '#F97316', '#EC4899'];

  // ==========================================
  // RENDER LOGIC
  // ==========================================
  
  // 1. TAMPILAN UNTUK ANGGOTA (USER)
  if (currentUser?.role === 'Anggota') {
    const currentData = getCurrentData();

    return (
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 dark:text-white flex items-center gap-2">
            <FileText className="text-red-600" /> Management Konten Website
          </h2>
          
          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b dark:border-gray-700 overflow-x-auto">
            {[
              { id: 'berita', label: 'Berita', icon: Newspaper },
              { id: 'sertifikat', label: 'Sertifikat', icon: Award },
              { id: 'kurikulum', label: 'Kurikulum', icon: BookOpen },
              { id: 'program', label: 'Program', icon: Calendar }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setShowForm(false); }}
                className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'
                }`}
              >
                <tab.icon size={18} /> {tab.label}
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari data..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => { setShowForm(true); setEditingId(null); setFormData({}); }}
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Plus size={20} /> Tambah {activeTab}
            </button>
          </div>

          {/* Form Create/Edit */}
          {showForm && (
            <Card className="p-6 mb-6 bg-red-50 dark:bg-gray-700 border-2 border-dashed border-red-200 animate-in fade-in duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-red-800 dark:text-red-400">{editingId ? 'Edit' : 'Tambah'} {activeTab}</h3>
                <button onClick={resetFormExtended}><X size={20}/></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Nama / Judul" 
                    className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
                    value={formData.judul || formData.nama || ''}
                    onChange={(e) => setFormData({...formData, [activeTab === 'berita' ? 'judul' : 'nama']: e.target.value})}
                  />
                  <input 
                    type="text" 
                    placeholder="Info Detail" 
                    className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
                    value={formData.penulis || formData.tingkat || formData.periode || formData.detail || ''}
                    onChange={(e) => setFormData({...formData, detail: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium dark:text-gray-300">Unggah Gambar</label>
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-28 border-2 border-dashed rounded flex items-center justify-center overflow-hidden bg-white">
                      {imagePreview || formData.image ? (
                        <img src={imagePreview || formData.image} alt="Preview" className="h-full w-full object-cover" />
                      ) : <ImageIcon className="text-gray-400" />}
                    </div>
                    <label className="cursor-pointer bg-white px-3 py-1 border rounded text-sm hover:bg-gray-50 dark:text-gray-800">
                      Pilih File
                      <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button onClick={editingId ? handleUpdate : handleCreate} className="bg-red-600 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-red-700">
                  <Save size={18}/> {editingId ? 'Update' : 'Simpan'}
                </button>
                <button onClick={resetFormExtended} className="bg-gray-300 px-6 py-2 rounded">Batal</button>
              </div>
            </Card>
          )}

          {/* Table / Empty State Container */}
          <div className="overflow-x-auto min-h-[300px]">
            {currentData.length > 0 ? (
              <table className="w-full">
                <thead className="bg-red-50 dark:bg-gray-700">
                  <tr>
                    <th className="p-3 text-left w-20">Preview</th>
                    <th className="p-3 text-left">Nama / Judul</th>
                    <th className="p-3 text-left">Detail</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-gray-700">
                  {currentData.map((item) => (
                    <tr key={item.id} className="hover:bg-red-50/50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="p-3">
                        <div className="h-10 w-14 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
                          {item.image ? <img src={item.image} className="h-full w-full object-cover" /> : <ImageIcon size={16} />}
                        </div>
                      </td>
                      <td className="p-3 font-medium dark:text-white">{item.judul || item.nama}</td>
                      <td className="p-3 text-sm text-gray-500">{item.penulis || item.tingkat || item.periode || item.detail}</td>
                      <td className="p-3 text-right">
                        <button onClick={() => { setFormData(item); setEditingId(item.id); setShowForm(true); setImagePreview(item.image); }} className="text-red-500 mr-3"><Edit2 size={18}/></button>
                        <button onClick={() => handleDelete(item.id)} className="text-gray-400 hover:text-red-600"><Trash2 size={18}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-red-50 dark:bg-gray-700 p-6 rounded-full mb-4">
                  <FileText size={48} className="text-red-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Belum ada data {activeTab}
                </h3>
                <p className="text-gray-500 max-w-xs mt-2 dark:text-gray-400">
                  {searchTerm 
                    ? `Tidak ditemukan hasil untuk "${searchTerm}"` 
                    : `Silakan tambahkan data ${activeTab} baru dengan menekan tombol "Tambah" di atas.`}
                </p>
                {!searchTerm && (
                   <button
                    onClick={() => { setShowForm(true); setEditingId(null); setFormData({}); }}
                    className="mt-6 text-red-600 font-medium hover:underline flex items-center gap-1"
                  >
                    <Plus size={16} /> Mulai tambahkan data
                  </button>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>
    );
  }

  // 2. TAMPILAN UNTUK ADMIN (Statistik)
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-5 border-t-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Anggota</p>
              <p className="text-2xl font-bold dark:text-white">{adminStats.totalUsers.toLocaleString()}</p>
            </div>
            <Users className="text-red-500" size={28} />
          </div>
        </Card>
        <Card className="p-5 border-t-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Berita Terbit</p>
              <p className="text-2xl font-bold dark:text-white">{adminStats.publishedNews}</p>
            </div>
            <Newspaper className="text-orange-500" size={28} />
          </div>
        </Card>
        <Card className="p-5 border-t-4 border-pink-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Sertifikat Terbit</p>
              <p className="text-2xl font-bold dark:text-white">{adminStats.certificatesIssued}</p>
            </div>
            <Award className="text-pink-500" size={28} />
          </div>
        </Card>
        <Card className="p-5 border-t-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Program Aktif</p>
              <p className="text-2xl font-bold dark:text-white">{adminStats.activeCurriculums}</p>
            </div>
            <BookOpen className="text-blue-500" size={28} />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Card className="lg:col-span-3 p-5">
          <h3 className="font-semibold mb-4 dark:text-white">Aktivitas Pendaftaran Global</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#EF4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="lg:col-span-2 p-5">
          <h3 className="font-semibold mb-4 dark:text-white">Distribusi Role</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={roleData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {roleData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;