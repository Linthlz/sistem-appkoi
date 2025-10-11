import React from 'react';
import { Mic } from 'lucide-react';

const WorkshopPage = () => {
  return (
    <div
      className="py-16 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background2.jpg')" }}
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl p-8 shadow-md">
          <Mic className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Workshop & Seminar
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Mengikuti Tren dan Inovasi Terbaru dalam Ilmu Kepelatihan.
          </p>
        </div>

        {/* Deskripsi */}
        <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 space-y-4 text-justify bg-white/70 dark:bg-gray-900/70 p-6 rounded-2xl shadow-md backdrop-blur-md">
          <p>
            APKOI secara rutin menyelenggarakan workshop tematik dan seminar nasional
            yang menghadirkan para pakar dan praktisi terkemuka di bidangnya. Acara ini
            menjadi platform bagi para anggota untuk memperbarui pengetahuan, mempelajari
            teknik-teknik baru, dan berdiskusi mengenai isu-isu terkini dalam dunia olahraga.
          </p>
          <p>
            Topik yang dibahas sangat beragam, mulai dari <em>sport science</em>, gizi atlet,
            manajemen cedera, hingga psikologi olahraga. Kami berkomitmen untuk menyediakan
            konten yang relevan dan aplikatif untuk menunjang kinerja para pelatih.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopPage;
