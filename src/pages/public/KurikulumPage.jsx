import React from 'react';
import { BookOpen, Download } from 'lucide-react';
import Button from '../../components/ui/Button';

const kurikulumList = [
  { title: 'Kurikulum VKO UNESA 2024 (Keprodian)', file: '/pdf/Kurikulum VKO UNESA 2024 (Keprodian).pdf' },
  { title: 'Kurikulum SFD PKO 2021', file: '/pdf/1. Dokumen Kurikulum SFD PKO 2021.pdf' },
  { title: 'Kurikulum Prodi Kepelatihan Olahraga Universitas Jambi', file: '/pdf/Kurikulum Prodi Kepelatihan Olahraga.pdf' },
];

const KurikulumPage = () => {
  return (
    <div
      className="py-16 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background2.jpg')" }}
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl p-8 shadow-md">
          <BookOpen className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Pengembangan Kurikulum
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Menyelaraskan Pendidikan Kepelatihan dengan Kebutuhan Industri.
          </p>
        </div>

        {/* Konten */}
        <div className="max-w-3xl mx-auto space-y-8 bg-white/70 dark:bg-gray-900/70 p-6 rounded-2xl shadow-md backdrop-blur-md">
          <p className="text-gray-700 dark:text-gray-300 text-justify">
            Salah satu fokus utama APKOI adalah bekerja sama dengan berbagai institusi pendidikan tinggi
            dan lembaga terkait untuk mengembangkan kurikulum kepelatihan olahraga yang modern, relevan,
            dan berbasis bukti ilmiah. Di bawah ini adalah beberapa contoh dokumen kurikulum yang dapat
            Anda lihat dan unduh.
          </p>

          <div className="space-y-4">
            {kurikulumList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between p-4 border dark:border-gray-700 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm"
              >
                <p className="font-semibold dark:text-white mb-2 sm:mb-0 text-center sm:text-left">
                  {item.title}
                </p>
                <div className="flex space-x-2">
                  <a href={item.file} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm">Lihat PDF</Button>
                  </a>
                  <a href={item.file} download>
                    <Button size="sm">
                      <Download size={16} className="mr-2" />
                      Unduh
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KurikulumPage;
