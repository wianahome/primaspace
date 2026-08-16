import { Metadata } from 'next';
import Image from 'next/image';
import AlumuniumArticleSEO from './AlumuniumArticleSEO';

// 1. Metadata Config untuk SEO Lokal & Social Sharing
export const metadata: Metadata = {
  title: 'Jasa Alumunium Bali | Kusen, Pintu, Jendela & Partisi Kaca',
  description:
    'Jasa pembuatan & pemasangan kusen alumunium, pintu sliding, jendela casement, partisi kaca villa & rumah di Bali (Denpasar, Badung, Canggu, Ubud). Bergaransi & rapi.',
  keywords: [
    'alumunium bali',
    'kusen alumunium denpasar',
    'pintu alumunium bali',
    'jendela alumunium badung',
    'partisi kaca tempered bali',
    'tukang alumunium canggu',
    'pintu sliding alumunium bali',
  ],
  openGraph: {
    title: 'Jasa Alumunium & Kaca Bali | Pengerjaan Rapi & Bergaransi',
    description:
      'Melayani pembuatan & instalasi kusen, pintu, dan jendela alumunium untuk rumah, villa, cafe, dan kantor di Bali.',
    locale: 'id_ID',
    type: 'website',
  },
};

// Data Produk & Layanan Alumunium
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  badge: string;
}

const alumuniumServices: ServiceItem[] = [
  {
    id: 'kusen-alumunium',
    title: 'Kusen Alumunium',
    description:
      'Kusen anti rayap, tahan kelembapan cuaca tropis Bali, dan anti lapuk. Tersedia merek Alexindo, YKK, Dacon, Forta, dll.',
    imageSrc: '/images/kusen-alumunium.jpg',
    altText: 'Pemasangan Kusen Alumunium Minimalis di Bali',
    badge: 'Paling Dicari',
  },
  {
    id: 'pintu-alumunium',
    title: 'Pintu Alumunium (Sliding & Folding)',
    description:
      'Pintu geser (sliding), pintu lipat (folding), dan pintu swing berbahan alumunium kokoh. Cocok untuk akses taman dan balkon villa.',
    imageSrc: '/images/pintu-alumunium.jpg',
    altText: 'Jasa Pintu Sliding Alumunium Kaca Villa Bali',
    badge: 'Favorit Villa',
  },
  {
    id: 'jendela-alumunium',
    title: 'Jendela Alumunium (Casement & Sliding)',
    description:
      'Jendela sistem jungkit (casement) dan sliding dengan kerapatan maksimal untuk meredam kebisingan luar dan mencegah kebocoran air.',
    imageSrc: '/images/jendela-alumunium.jpg',
    altText: 'Tukang Jendela Alumunium Casement Kedap Suara Bali',
    badge: 'Presisi Tinggi',
  },
  {
    id: 'partisi-kaca-alumunium',
    title: 'Partisi Kaca & Alumunium',
    description:
      'Sekat ruangan berbahan rangka alumunium dan kaca tempered. Ideal untuk interior kantor, toko, ruko, maupun sekat area shower.',
    imageSrc: '/images/partisi-kaca.jpg',
    altText: 'Pemasangan Partisi Kaca Tempered Frame Alumunium Bali',
    badge: 'Modern Office',
  },
  {
    id: 'curtain-wall',
    title: 'Curtain Wall & Facade',
    description:
      'Fasad kaca exterior modern bertingkat untuk gedung, hotel, dan ruko di Bali agar tampak futuristik dan menghemat energi.',
    imageSrc: '/images/curtain-wall.jpg',
    altText: 'Konstruksi Curtain Wall Kaca Gedung Bertingkat Bali',
    badge: 'Komersial',
  },
  {
    id: 'kitchen-set-alumunium',
    title: 'Cabinet & Kitchen Set Alumunium',
    description:
      'Furniture & kitchen set berbahan alumunium komposit (ACP). Tahan terhadap minyak, mudah dibersihkan, dan 100% anti rayap.',
    imageSrc: '/images/kitchen-set-alumunium.jpg',
    altText: 'Kitchen Set Alumunium ACP Anti Rayap Bali',
    badge: 'Anti Rayap',
  },
];

export default function AlumuniumBaliPage() {
  // 2. Schema Markup JSON-LD untuk SEO Lokal
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jasa Alumunium & Kaca Bali',
    image: 'https://primaspace.id/hero-alumunium.jpg',
    telephone: '+628135979589',
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
    areaServed: ['Denpasar', 'Badung', 'Canggu', 'Seminyak', 'Ubud', 'Sanur', 'Jimbaran', 'Tabanan'],
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
        <section className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">
                Spesialis Alumunium & Kaca Bali
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Jasa Fabrication & Pemasangan Alumunium Murah di Bali
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Solusi kusen, pintu sliding, jendela casement, partisi kaca villa & rumah minimalis. Presisi tinggi, pengerjaan cepat, anti rayap, dan bergaransi resmi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20jasa%20alumunium%20di%20Bali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-center px-8 py-4 rounded-xl shadow-lg transition-all"
                >
                  Konsultasi / Survey Gratis via WA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN / TRUST BADGES */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <h4 className="text-2xl font-bold text-slate-900">100% Anti Rayap</h4>
              <p className="text-slate-500 text-xs mt-1">Bahan tahan lama & tak berkarat</p>
            </div>
            <div className="p-4">
              <h4 className="text-2xl font-bold text-slate-900">Presisi & Rapi</h4>
              <p className="text-slate-500 text-xs mt-1">Dikerjakan teknisi berpengalaman</p>
            </div>
            <div className="p-4">
              <h4 className="text-2xl font-bold text-slate-900">Free Survey</h4>
              <p className="text-slate-500 text-xs mt-1">Bebas biaya ukur lokasi di Bali</p>
            </div>
            <div className="p-4">
              <h4 className="text-2xl font-bold text-slate-900">Garansi Pemasangan</h4>
              <p className="text-slate-500 text-xs mt-1">Jaminan kualitas hasil akhir</p>
            </div>
          </div>
        </section>

        {/* SERVICES / PRODUK SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">
              Katalog Layanan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Layanan Pengerjaan Alumunium & Kaca Bali
            </h2>
            <p className="text-slate-600 mt-4 text-base md:text-lg">
              Pilihan lengkap produk alumunium arsitektural untuk kebutuhan rumah tinggal, villa, resort, cafe, maupun kantor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumuniumServices.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={item.imageSrc}
                    alt={item.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      Garansi Kualitas
                    </span>
                    <a
                      href={`https://wa.me/628135979589?text=Halo,%20saya%20tertarik%20pemesanan%20${encodeURIComponent(
                        item.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors inline-flex items-center gap-1"
                    >
                      Minta Penawaran &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AREA COVERAGE SECTION */}
        <section className="bg-slate-100 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Jangkauan Layanan Alumunium di Bali</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Melayani pengukuran, pembuatan, hingga pemasangan langsung ke lokasi di seluruh area Provinsi Bali.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Denpasar',
                'Badung',
                'Canggu',
                'Seminyak',
                'Kuta',
                'Ubud',
                'Sanur',
                'Jimbaran',
                'Nusa Dua',
                'Tabanan',
                'Gianyar',
              ].map((area) => (
                <span
                  key={area}
                  className="bg-white px-5 py-2.5 rounded-full text-slate-700 text-sm font-medium shadow-sm border border-slate-200"
                >
                  Tukang Alumunium {area}
                </span>
              ))}
            </div>
          </div>
        </section>
        <AlumuniumArticleSEO />
      </main>
    </>
  );
}