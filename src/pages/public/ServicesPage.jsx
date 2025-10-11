import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { Calendar, ArrowRight, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

// Data untuk kartu program
const programs = [
  {
    title: "Sertifikasi Asesor",
    image: "/sertifikasi.jpeg",
    link: "/sertifikat"
  },
  {
    title: "Workshop & Seminar",
    image: "/workshop.jpeg",
    link: "/program/workshop"
  },
  {
    title: "Pengembangan Kurikulum",
    image: "/kurikulum.jpeg",
    link: "/program/kurikulum"
  }
];

// Data sampel untuk agenda
const agenda = [
    { date: '2025-11-10', title: 'Webinar Nasional: Sport Science untuk Pelatih Modern' },
    { date: '2025-11-25', title: 'Workshop Penyusunan Program Latihan Periodisasi' },
    { date: '2025-12-05', title: 'Uji Kompetensi dan Sertifikasi Asesor Batch V' },
];

// Data baru untuk slider dokumentasi
const documentationSlides = [
    { image: '/kegiatan1.jpeg', caption: 'Musyawarah Nasional APKOI 2025', category: 'Organisasi' },
    { image: '/kegiatan2.jpeg', caption: 'Workshop Pelatih Atletik Junior', category: 'Workshop' },
    { image: '/kegiatan3.jpeg', caption: 'Penandatanganan Kerjasama dengan Universitas', category: 'Kerjasama' },
    { image: '/kegiatan4.jpeg', caption: 'Seminar Nasional Sport Science', category: 'Seminar' },
    { image: '/kegiatan5.jpeg', caption: 'Uji Kompetensi Pelatih', category: 'Sertifikasi' },
];

const ServicesPage = () => {
  const sliderRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Fungsi untuk menggeser slider secara manual
  const scroll = (direction) => {
    if (sliderRef.current) {
        const scrollAmount = sliderRef.current.offsetWidth / 2.5;
        sliderRef.current.scrollBy({ 
            left: direction === 'left' ? -scrollAmount : scrollAmount, 
            behavior: 'smooth' 
        });
    }
  };

  // useEffect untuk scroll otomatis
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            
            if (scrollLeft + clientWidth >= scrollWidth - 1) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scroll('right');
            }
        }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovering]);


  return (
    <div className="bg-white dark:bg-gray-900">
       {/* CSS untuk menyembunyikan scrollbar */}
       <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- SECTION HEADER YANG DIPERBARUI --- */}
      <section className="py-20 w-full bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="max-w-screen-xl px-4 mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Program & Kegiatan APKOI</h1>
          <p className="mt-4 text-lg text-red-100">
            Komitmen kami untuk meningkatkan kualitas dan profesionalisme pelatih di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Section Program dengan Gambar */}
      <section className="py-20">
          <div className="max-w-screen-xl px-4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {programs.map((program, index) => (
                      <Link to={program.link} key={index} className="block group relative rounded-lg overflow-hidden shadow-lg">
                          <img src={program.image} alt={program.title} className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                              <div className="text-center p-4">
                                  <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <span className="inline-block bg-primary text-white text-sm px-4 py-2 rounded-full">
                                          Selengkapnya
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </section>
      
      {/* Section Dokumentasi Kegiatan */}
      <section 
        className="py-20 bg-gray-50 dark:bg-gray-800"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="max-w-screen-xl mx-auto px-4 relative">
            <div className='text-center mb-12'>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Dokumentasi Kegiatan</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Momen penting dari berbagai acara asosiasi kami.</p>
            </div>

            <div 
                ref={sliderRef}
                className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
            >
                {documentationSlides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 w-80 group">
                    <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
                        <img src={slide.image} alt={slide.caption} className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                            <span className="inline-block bg-primary/80 text-white text-xs font-semibold px-3 py-1 rounded-full">{slide.category}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-lg font-bold text-white">{slide.caption}</h3>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-600 transition-colors z-10 sm:left-4">
                <ChevronLeft className="text-gray-800 dark:text-white"/>
            </button>
            <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-600 transition-colors z-10 sm:right-4">
                <ChevronRight className="text-gray-800 dark:text-white"/>
            </button>
        </div>
      </section>

      {/* Section Agenda Asosiasi */}
      <section 
        className="py-20 bg-cover bg-center relative" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        <div className="max-w-screen-xl px-4 mx-auto text-center relative z-10">
          <Calendar className="mx-auto h-12 w-12 text-white mb-4"/>
          <h2 className="text-3xl font-extrabold text-white">Agenda Asosiasi</h2>
          <p className="mt-4 text-lg text-red-100 max-w-2xl mx-auto">
            Ikuti terus jadwal kegiatan, workshop, dan acara penting lainnya yang diselenggarakan oleh APKOI.
          </p>
          <div className="mt-10 max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
            {agenda.map((item, index) => (
                <div key={index} className="flex items-center text-left">
                    <div className="bg-white text-primary rounded-lg p-3 text-center w-20 h-20 flex flex-col justify-center">
                        <span className="block font-bold text-2xl leading-none">{new Date(item.date).getDate()}</span>
                        <span className="block text-xs uppercase">{new Date(item.date).toLocaleString('id-ID', { month: 'short' })}</span>
                    </div>
                    <p className="ml-4 font-semibold text-white">{item.title}</p>
                </div>
            ))}
          </div>
          <div className="mt-10">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-red-100">
                  Lihat Kalender Lengkap <ArrowRight className="ml-2 h-5 w-5"/>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

