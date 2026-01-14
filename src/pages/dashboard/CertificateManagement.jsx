import React, { useState } from 'react';
import { PlusCircle, Trash2, Download, FileImage, FileText } from 'lucide-react';
import { useAppContext } from '../../hooks/useAppContext'; 

const CertificateManagement = () => {
  const { currentUser } = useAppContext();
  const [certificates, setCertificates] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ recipientName: '', programName: '' });

  const handleSave = (e) => {
    e.preventDefault();
    setCertificates([{ ...formData, id: Date.now() }, ...certificates]);
    setModalOpen(false);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold dark:text-white">Manajemen Sertifikat</h2>
        <button onClick={() => setModalOpen(true)} className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <PlusCircle size={18} /> Tambah Sertifikat
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr className="text-sm">
              <th className="p-3">Nama Penerima</th>
              <th className="p-3">File</th>
              <th className="p-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert) => (
              <tr key={cert.id} className="border-b dark:border-gray-700">
                <td className="p-3 dark:text-gray-200">{cert.recipientName}</td>
                <td className="p-3 flex gap-2">
                  <FileImage className="text-orange-500" size={18} />
                  <FileText className="text-red-500" size={18} />
                </td>
                <td className="p-3 text-right space-x-2">
                  <button className="text-blue-500"><Download size={18}/></button>
                  {currentUser?.role === 'Admin' && (
                    <button className="text-red-500"><Trash2 size={18}/></button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-bold mb-4 dark:text-white">Input Sertifikat Baru</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <input 
                placeholder="Nama Lengkap Penerima" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                required 
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-2 border-2 border-dashed rounded text-center">
                  <p className="text-[10px] font-bold text-orange-600">INPUT GAMBAR</p>
                  <input type="file" accept="image/*" className="w-full text-[10px]" />
                </div>
                <div className="p-2 border-2 border-dashed rounded text-center">
                  <p className="text-[10px] font-bold text-red-600">INPUT PDF</p>
                  <input type="file" accept=".pdf" className="w-full text-[10px]" />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setModalOpen(false)} className="dark:text-gray-400">Batal</button>
                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// WAJIB ADA AGAR TIDAK SYNTAX ERROR
export default CertificateManagement;