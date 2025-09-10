import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { dummyNews } from '@/data/dummyData';
import { Network, BadgeCheck, TrendingUp, Newspaper, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  
  const features = [
    {
      icon: Network,
      title: 'Jaringan Profesional Luas',
      description: 'Terhubung dengan ribuan dosen, pakar, dan praktisi kepelatihan dari seluruh Indonesia untuk berkolaborasi dan berbagi pengetahuan.'
    },
    {
      icon: BadgeCheck,
      title: 'Standarisasi Kompetensi',
      description: 'Mengikuti program sertifikasi dan workshop yang diakui secara nasional untuk meningkatkan kualitas dan kredibilitas Anda sebagai pelatih.'
    },
    {
      icon: TrendingUp,
      title: 'Pengembangan Karir',
      description: 'Akses ke publikasi ilmiah, seminar, dan peluang kerjasama untuk terus memajukan karir Anda di bidang olahraga prestasi.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Membentuk Pelatih Profesional, Memajukan Prestasi Olahraga
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              APPKOI adalah wadah bagi para dosen dan pelatih olahraga untuk bertumbuh, berkolaborasi, dan menciptakan standar baru dalam dunia kepelatihan.
            </p>
            <Link to="/services">
              <Button size="lg">
                Jelajahi Program Kami <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://placehold.co/500x500/FEE2E2/B91C1C?text=Prestasi+Olahraga" alt="Ilustrasi Olahraga" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Mengapa Bergabung dengan APPKOI?</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-12">
            Kami berkomitmen untuk mendukung pengembangan profesional Anda melalui tiga pilar utama.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-left transition-transform transform hover:-translate-y-2">
                <div className="inline-block p-4 mb-4 bg-primary-light text-primary rounded-lg">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center dark:text-white">
            <Newspaper className="mr-3 text-primary" /> Berita & Acara Terbaru
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dummyNews.map(item => (
              <Card key={item.id} className="flex flex-col">
                <img src={`https://placehold.co/600x400/E2E8F0/4A5568?text=${item.category}`} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold mb-3 dark:text-white flex-grow">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="font-semibold text-primary hover:underline self-start">
                    Baca Selengkapnya
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
};

export default LandingPage;

