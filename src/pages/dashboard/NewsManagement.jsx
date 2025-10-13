import React, { useState } from 'react';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

// --- Komponen UI tiruan (agar kode bisa berjalan mandiri) ---
const Card = ({ children, className }) => <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}>{children}</div>;
const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
    const styles = variant === 'primary' 
        ? 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500' 
        : 'text-gray-700 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300';
    return <button type={type} onClick={onClick} className={`inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium ${styles}`}>{children}</button>;
};
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <button onClick={onClose}>&times;</button>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
};
const Input = ({ id, label, value, onChange, required }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        <input type="text" id={id} value={value} onChange={onChange} required={required} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600" />
    </div>
);

// --- Data Dummy ---
const dummyNews = [
  { id: 1, date: '2024-07-15', title: 'Workshop Kepelatihan Tingkat Lanjut', category: 'Acara', content: 'Workshop ini bertujuan untuk meningkatkan kompetensi para pelatih dalam menyusun program latihan modern.', photo: 'kegiatan-1.jpg' },
  { id: 2, date: '2024-07-12', title: 'Organisasi Resmikan Kerjasama dengan Universitas Negeri', category: 'Berita', content: 'Kerjasama ini fokus pada pengembangan sport science dan manajemen olahraga.', photo: 'kerjasama-unu.jpg' },
];

const NewsManagement = () => {
  const [news, setNews] = useState(dummyNews);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({ title: '', category: '', content: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleFileChange = (e) => {
      if(e.target.files && e.target.files[0]) {
          setSelectedFile(e.target.files[0]);
      }
  };

  const openAddModal = () => {
    setEditingNews(null);
    setFormData({ title: '', category: '', content: '' });
    setSelectedFile(null);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingNews(item);
    setFormData({ title: item.title, category: item.category, content: item.content });
    setSelectedFile(null);
    setModalOpen(true);
  };
  
  const handleSaveNews = (e) => {
      e.preventDefault();
      const newsData = {
          ...formData,
          photo: selectedFile ? selectedFile.name : (editingNews ? editingNews.photo : null)
      };

      if (editingNews) {
          setNews(news.map(item => item.id === editingNews.id ? { ...item, ...newsData } : item));
      } else {
          const newEntry = {
              id: Date.now(),
              date: new Date().toISOString().split('T')[0],
              ...newsData
          };
          setNews([newEntry, ...news]);
      }
      setModalOpen(false);
  };
  
  const handleDeleteNews = (id) => {
      if (window.confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
        setNews(news.filter(item => item.id !== id));
      }
  };

  return (
    <Card>
      <div className="p-5 border-b dark:border-gray-700 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Manajemen Berita & Acara</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Kelola semua berita dan acara yang ditampilkan di web.</p>
        </div>
        <Button onClick={openAddModal}><PlusCircle size={16} className="mr-2" /> Tambah Berita</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Judul</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Kategori</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Tanggal</th>
              <th className="relative px-6 py-3"><span className="sr-only">Aksi</span></th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {news.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => openEditModal(item)} className="text-blue-600 hover:text-blue-900 p-2"><Edit size={16}/></button>
                  <button onClick={() => handleDeleteNews(item.id)} className="text-red-600 hover:text-red-900 p-2"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={editingNews ? 'Edit Berita' : 'Tambah Berita Baru'}>
        <form onSubmit={handleSaveNews} className="space-y-4">
          <Input id="title" label="Judul Berita" value={formData.title} onChange={handleInputChange} required />
          <Input id="category" label="Kategori" value={formData.category} onChange={handleInputChange} required />
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Isi Berita Lengkap</label>
            <textarea id="content" rows="8" value={formData.content} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600" required></textarea>
          </div>
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upload Foto Kegiatan</label>
            <input 
                type="file" 
                id="photo" 
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
            />
            {selectedFile && <p className="text-xs text-gray-500 mt-2">File baru: {selectedFile.name}</p>}
            {!selectedFile && editingNews && editingNews.photo && <p className="text-xs text-gray-500 mt-2">File saat ini: {editingNews.photo}</p>}
          </div>
          <div className="flex justify-end pt-4 space-x-2">
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Batal</Button>
            <Button type="submit">Simpan</Button>
          </div>
        </form>
      </Modal>
    </Card>
  );
};

export default NewsManagement;

