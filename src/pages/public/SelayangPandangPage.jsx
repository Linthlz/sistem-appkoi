import React from 'react';
import Card from '@/components/ui/Card';
import { BookOpen } from 'lucide-react';

const SelayangPandangPage = () => {
  return (
    <div
      className="min-h-screen py-16 flex items-center justify-center"
      style={{
        backgroundImage: "url('/background1.jpg')",
        backgroundSize: "cover",          // gambar memenuhi layar
        backgroundPosition: "center",     // posisi tengah
        backgroundRepeat: "no-repeat",    // tidak diulang
        backgroundAttachment: "fixed",    // efek parallax halus
      }}
    >
      {/* Overlay transparan agar teks tetap jelas */}
      <div className="bg-white/85 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-2xl p-10 w-full max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Selayang Pandang APKOI
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Landasan dan Semangat Baru Organisasi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Kolom Teks */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            <p className="text-lg">
              Asosiasi Pendidikan Kepelatihan Olahraga Indonesia (APKOI) memasuki babak baru dengan semangat dan komitmen untuk memajukan dunia kepelatihan olahraga di Indonesia. Demi memastikan kelancaran dan efektivitas organisasi, telah ditetapkan susunan kepengurusan pusat untuk masa bhakti 2025–2029.
            </p>

            <p>
              Penetapan ini merupakan tindak lanjut dan amanat dari <strong>Musyawarah Nasional (Munas) APKOI</strong> yang telah sukses diselenggarakan di Hotel Lor In Dwangsa, Solo, Jawa Tengah pada tanggal 22–24 Agustus 2025. Munas tersebut menjadi forum strategis untuk mengevaluasi, merumuskan, dan menetapkan arah baru organisasi.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-primary-light/20 dark:bg-gray-700 rounded-md">
              <p className="italic">
                “Kepengurusan ini dibentuk untuk menjalankan tugas pokok dan fungsi organisasi dengan berpedoman pada Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) APKOI serta peraturan perundangan yang berlaku, demi tercapainya visi dan misi bersama.”
              </p>
            </blockquote>

            <p>
              Dengan landasan yang kokoh dan jajaran pengurus yang kompeten, APKOI siap untuk menjalankan program-program unggulan dan berkontribusi secara nyata bagi peningkatan kualitas serta profesionalisme para pendidik dan pelatih olahraga di seluruh tanah air.
            </p>
          </div>

          {/* Kolom Gambar SK */}
          <div className="mt-8 lg:mt-0">
            <Card className="overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b dark:border-gray-600">
                <h3 className="font-bold flex items-center text-gray-800 dark:text-gray-100">
                  <BookOpen size={20} className="mr-2 text-primary" />
                  SK Pengurus Pusat APKOI 2025–2029
                </h3>
              </div>
              <div className="p-4">
                <img
                  src="/SK APPKOI.png"
                  alt="SK Pengurus APPKOI 2025-2029"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="text-center text-xs text-gray-500 mt-2">
                  Dokumen Surat Keputusan No: 01/Kep/APKOI/IV/2025
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelayangPandangPage;
