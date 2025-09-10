import React, { useState } from 'react';
import { dummyNews } from '../../data/dummyData';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import Input from '../../components/ui/Input';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const NewsManagement = () => {
  const [news, setNews] = useState(dummyNews);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({ title: '', category: '', excerpt: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const openAddModal = () => {
    setEditingNews(null);
    setFormData({ id: Date.now(), date: new Date().toISOString().split('T')[0], title: '', category: '', excerpt: '' });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingNews(item);
    setFormData(item);
    setModalOpen(true);
  };
  
  const handleSaveNews = (e) => {
      e.preventDefault();
      if (editingNews) {
          setNews(news.map(item => item.id === editingNews.id ? formData : item));
      } else {
          setNews([formData, ...news]);
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
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Kutipan/Isi Singkat</label>
            <textarea id="excerpt" rows="4" value={formData.excerpt} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600" required></textarea>
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
