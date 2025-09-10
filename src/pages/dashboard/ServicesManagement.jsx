import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import Input from '../../components/ui/Input';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

// Data sampel untuk program
const dummyPrograms = [
    { id: 1, name: 'Sertifikasi Pelatih Pratama', level: 'Dasar', duration: '3 Bulan' },
    { id: 2, name: 'Workshop Sport Science', level: 'Menengah', duration: '2 Hari' },
    { id: 3, name: 'Pelatihan Manajemen Klub Profesional', level: 'Lanjutan', duration: '6 Bulan' },
];

const ServicesManagement = () => {
  const [programs, setPrograms] = useState(dummyPrograms);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState(null);
  const [formData, setFormData] = useState({ name: '', level: '', duration: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const openAddModal = () => {
    setEditingProgram(null);
    setFormData({ id: Date.now(), name: '', level: '', duration: '' });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingProgram(item);
    setFormData(item);
    setModalOpen(true);
  };
  
  const handleSaveProgram = (e) => {
      e.preventDefault();
      if (editingProgram) {
          setPrograms(programs.map(item => item.id === editingProgram.id ? formData : item));
      } else {
          setPrograms([formData, ...programs]);
      }
      setModalOpen(false);
  };
  
  const handleDeleteProgram = (id) => {
      if (window.confirm('Apakah Anda yakin ingin menghapus program ini?')) {
        setPrograms(programs.filter(item => item.id !== id));
      }
  };

  return (
    <Card>
      <div className="p-5 border-b dark:border-gray-700 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Manajemen Program</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Kelola semua program pelatihan dan sertifikasi.</p>
        </div>
        <Button onClick={openAddModal}><PlusCircle size={16} className="mr-2" /> Tambah Program</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Nama Program</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Durasi</th>
              <th className="relative px-6 py-3"><span className="sr-only">Aksi</span></th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {programs.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.level}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => openEditModal(item)} className="text-blue-600 hover:text-blue-900 p-2"><Edit size={16}/></button>
                  <button onClick={() => handleDeleteProgram(item.id)} className="text-red-600 hover:text-red-900 p-2"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={editingProgram ? 'Edit Program' : 'Tambah Program Baru'}>
        <form onSubmit={handleSaveProgram} className="space-y-4">
          <Input id="name" label="Nama Program" value={formData.name} onChange={handleInputChange} required />
          <Input id="level" label="Level" value={formData.level} onChange={handleInputChange} required />
          <Input id="duration" label="Durasi" value={formData.duration} onChange={handleInputChange} required />
          <div className="flex justify-end pt-4 space-x-2">
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Batal</Button>
            <Button type="submit">Simpan</Button>
          </div>
        </form>
      </Modal>
    </Card>
  );
};

export default ServicesManagement;
