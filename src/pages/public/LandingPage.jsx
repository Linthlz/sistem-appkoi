import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { dummyNews } from '../../data/dummyData';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Network,
  BadgeCheck,
  TrendingUp,
  Newspaper,
} from 'lucide-react';

// Data slides untuk hero section
const slides = [
  {
    image: '/landing.jpg',
    title: 'Membentuk Pelatih Profesional',
    subtitle:
      'Bergabunglah dengan asosiasi untuk meningkatkan standar dan kompetensi kepelatihan olahraga di Indonesia.',
  },
  {
    image: '/landing1.jpeg',
    title: 'Inovasi dalam Sport Science',
    subtitle:
      'Dapatkan akses ke penelitian, workshop, dan seminar terbaru untuk mendukung prestasi atlet Anda.',
  },
  {
    image: '/landing2.jpeg',
    title: 'Sertifikasi Nasional',
    subtitle:
      'Verifikasi keahlian Anda melalui program sertifikasi yang diakui secara nasional oleh APKOI.',
  },
];

// Data fitur
const features = [
  {
    icon: Network,
    title: 'Jaringan Profesional Luas',
    description:
      'Terhubung dengan ribuan dosen, pakar, dan praktisi kepelatihan dari seluruh Indonesia untuk berkolaborasi.',
  },
  {
    icon: BadgeCheck,
    title: 'Standarisasi Kompetensi',
    description:
      'Mengikuti program sertifikasi dan workshop yang diakui secara nasional untuk meningkatkan kredibilitas Anda.',
  },
  {
    icon: TrendingUp,
    title: 'Pengembangan Karir',
    description:
      'Akses ke publikasi ilmiah dan seminar untuk terus memajukan karir Anda di bidang olahraga prestasi.',
  },
];

// Variants untuk animasi masuk bertahap
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="overflow-hidden"
    >
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="h-full w-full bg-black/50 flex items-center justify-center">
                <motion.div
                  variants={sectionVariants}
                  className="text-center text-white px-4 max-w-4xl"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                    className="text-lg md:text-xl text-gray-200"
                  >
                    {slide.subtitle}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Navigasi Slider */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors z-10"
        >
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <motion.section
        variants={sectionVariants}
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="max-w-screen-xl px-4 mx-auto text-center">
          <motion.h2
            variants={sectionVariants}
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Mengapa Bergabung dengan APKOI?
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-12"
          >
            Kami berkomitmen untuk mendukung pengembangan profesional Anda
            melalui tiga pilar utama.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={sectionVariants}>
                <Card className="p-8 text-left transition-transform transform hover:-translate-y-2">
                  <div className="inline-block p-4 mb-4 bg-primary-light text-primary rounded-lg">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ===================== SEMANGAT APKOI ===================== */}
      <motion.section
        variants={sectionVariants}
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/landing3.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
          <motion.div variants={sectionVariants} className="max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold text-red-300 uppercase tracking-wider">
              Semangat APKOI
            </h2>
            <p className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
              Menjadi Pusat Kolaborasi Kepelatihan Olahraga
            </p>
            <p className="mt-4 text-lg text-red-100">
              APKOI berkomitmen untuk menjadi ruang kolaborasi bagi dosen,
              pelatih, mahasiswa, dan praktisi untuk memajukan prestasi olahraga
              Indonesia.
            </p>
            <div className="mt-8">
              <Link to="/profil/selayang-pandang">
                <Button size="lg">Pelajari Selengkapnya</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ===================== NEWS ===================== */}
      <motion.section
        variants={sectionVariants}
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/background1.jpg')" }}
      >
        <div className="max-w-screen-xl px-4 mx-auto">
          <motion.h2
            variants={sectionVariants}
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center dark:text-white"
          >
            <Newspaper className="mr-3 text-primary" /> Berita & Acara Terbaru
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {dummyNews.map((item) => (
              <motion.div key={item.id} variants={sectionVariants}>
                <Card className="flex flex-col">
                  <img
                    src={item.image} // ✅ ambil langsung dari dummyNews.image
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <h3 className="text-xl font-bold mb-3 dark:text-white flex-grow">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.excerpt}
                    </p>
                    <Link
                      to={`/news/${item.id}`}
                      className="font-semibold text-primary hover:underline self-start"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default LandingPage;
