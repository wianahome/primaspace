import { Metadata } from 'next';
import Image from 'next/image';
import ServicesSection from './Services';
import KanopiArticleSEO from './KanopiArticleSEO';

// 1. Metadata Config untuk SEO & Open Graph
export const metadata: Metadata = {
  title: 'Jasa Kanopi Bali | Pembuatan & Pemasangan Kanopi Minimalis Murah',
  description:
    'Jasa pembuatan dan instalasi kanopi berkualitas di Bali (Denpasar, Badung, Canggu, Ubud). Pilihan bahan Alderon, Kaca Tempered, & Baja Ringan. Garansi rapi dan presisi.',
  keywords: [
    'kanopi bali',
    'jasa kanopi denpasar',
    'kanopi alderon bali',
    'tukang kanopi badung',
    'kanopi baja ringan bali',
  ],
  openGraph: {
    title: 'Jasa Kanopi Bali | Spesialis Kanopi Rumah & Villa',
    description:
      'Solusi kanopi berkualitas di Bali. Pengerjaan cepat, rapi, dan bergaransi.',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function Home() {
  // 2. Schema Markup JSON-LD untuk LocalBusiness
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jasa Kanopi Bali',
    image: 'https://domain-anda.com/hero-kanopi.jpg',
    telephone: '+6281234567890',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Denpasar',
      addressRegion: 'Bali',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.670458,
      longitude: 115.212629,
    },
    areaServed: ['Denpasar', 'Badung', 'Canggu', 'Ubud', 'Sanur', 'Jimbaran'],
    priceRange: '$$',
  };

  return (
    <>
      {/* Schema Markup Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-5">
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
                Spesialis Kanopi Rumah & Villa di Bali
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Jasa Pembuatan & Pemasangan Kanopi Bali Bergaransi
              </h1>
              <p className="text-slate-300 text-lg">
                Melayani pemasangan kanopi Alderon, Kaca Tempered, SolarTuff, dan Baja Ringan di seluruh wilayah Bali dengan material tahan cuaca tropis.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/628135979589?text=Halo%20saya%20ingin%20konsultasi%20kanopi"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
                >
                  Konsultasi Gratis via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <ServicesSection />
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Layanan Kanopi Populer di Bali</h2>
            <p className="text-slate-600 mt-2">
              Pilihan kanopi berkualitas yang cocok untuk iklim pesisir dan tropis Bali.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-2">Kanopi Alderon</h3>
              <p className="text-slate-600 text-sm">
                Redam panas dan suara bising hujan secara optimal. Sangat tahan lama untuk garasi dan carport.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-2">Kanopi Kaca Tempered</h3>
              <p className="text-slate-600 text-sm">
                Memberikan kesan mewah dan modern. Sangat diminati untuk villa, cafe, dan hunian eksklusif di Bali.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-2">Kanopi Solartuff / Spandek</h3>
              <p className="text-slate-600 text-sm">
                Pilihan ekonomis dengan pencahayaan alami yang baik, kokoh, dan tahan karat.
              </p>
            </div>
          </div>
        </section>

        {/* AREA COVERAGE SECTION */}
        <section className="bg-slate-100 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Area Layanan Pemasangan di Bali</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Tim kami siap survey lokasi langsung ke tempat Anda di seluruh area Bali tanpa biaya tambahan.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Denpasar', 'Badung', 'Canggu', 'Seminyak', 'Ubud', 'Sanur', 'Jimbaran', 'Nusa Dua', 'Tabanan'].map((area) => (
                <span key={area} className="bg-white px-5 py-2.5 rounded-full text-slate-700 text-sm font-medium shadow-sm border border-slate-200">
                  Kanopi di {area}
                </span>
              ))}
            </div>
          </div>
        </section>
        <KanopiArticleSEO />
      </main>
    </>
  );
}