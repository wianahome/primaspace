import { Metadata } from 'next';
import Image from 'next/image';
import ACPArticleSEO from './ACPArticleSEO';

// 1. Metadata Config untuk SEO Lokal & Social Sharing
export const metadata: Metadata = {
  title: 'Jasa Pasang ACP Bali | Spesialis Facade Aluminium Composite Panel',
  description:
    'Jasa kontraktor & aplikator pasang ACP (Aluminium Composite Panel) di Bali (Denpasar, Badung, Canggu, Kuta, Ubud). Pilihan merek Seven, Goodsense, Maco, Marks. Bergaransi & presisi.',
  keywords: [
    'acp bali',
    'pasang acp denpasar',
    'kontraktor acp bali',
    'aplikator acp badung',
    'harga acp per meter bali',
    'acp seven bali',
    'facade gedung bali',
    'renovasi ruko acp bali',
  ],
  openGraph: {
    title: 'Jasa Pasang ACP & Facade Gedung Bali | Rapi & Bergaransi',
    description:
      'Solusi pemasangan Aluminium Composite Panel (ACP) untuk facade ruko, gedung, SPBU, kantor, dan villa modern di Bali.',
    locale: 'id_ID',
    type: 'website',
  },
};

// Data Produk & Layanan ACP
interface ACPServiceItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  badge: string;
}

const acpServices: ACPServiceItem[] = [
  {
    id: 'acp-facade-ruko',
    title: 'ACP Facade Ruko & Gedung',
    description:
      'Pemasangan ACP untuk penutup luar (extrerior facade) ruko dan gedung komersial agar tampak modern, futuristik, dan tahan terhadap iklim tropis Bali.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786884256/acp_ruko_k9rfue.jpg',
    altText: 'Pemasangan ACP Facade Ruko Modern di Denpasar Bali',
    badge: 'Komersial',
  },
  {
    id: 'acp-interior-partisi',
    title: 'ACP Interior & Plafon',
    description:
      'Penggunaan panel ACP PE untuk dekorasi interior, penutup kolom/tiang, wall cladding ruangan, dan plafon tahan air serta gampang dibersihkan.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786885133/acp-kolom_fiafhn.jpg',
    altText: 'Aplikator ACP Interior dan Wall Cladding Bali',
    badge: 'Interior',
  },
  {
    id: 'acp-spbu-retail',
    title: 'ACP SPBU & Chain Store',
    description:
      'Spesialis pengerjaan ACP standar SPBU Pertamina, minimarket, franchise, dan outlet retail dengan kombinasi warna presisi sesuai brand identity.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786884256/acp_spbu_ork63i.jpg',
    altText: 'Jasa Pasang ACP SPBU dan Retail Store di Bali',
    badge: 'Standar Brand',
  },
  {
    id: 'acp-perforated-cnc',
    title: 'ACP Perforated / CNC Cutting',
    description:
      'Motif ukiran ornamen modern maupun tradisional Bali pada panel ACP menggunakan mesin CNC router untuk fasad eksklusif dan estetik.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786884255/acp_perforated_fnpjuw.jpg',
    altText: 'Jasa ACP Cutting CNC Ornamen Bali',
    badge: 'Custom Ornamen',
  },
  {
    id: 'acp-canopy-fascia',
    title: 'ACP Lisplang & Billboard',
    description:
      'Pekerjaan lisplang kanopi, fascia bangunan, penutup billboard, dan totem signage berbahan ACP tahan korosi paparan angin laut Bali.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786884256/acp-billboard_y7vaja.jpg',
    altText: 'Pemasangan Lisplang ACP dan Signage Bali',
    badge: 'Tahan Weathering',
  },
  {
    id: 'renovasi-bongkar-acp',
    title: 'Renovasi & Re-Cladding ACP',
    description:
      'Jasa pembongkaran ACP lama, perbaikan rangka hollow galvalum/baja, serta penggantian lembaran ACP baru untuk pembaruan tampilan gedung.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786884257/bongkar-acp_u9yols.png',
    altText: 'Jasa Renovasi dan Re-Cladding ACP Gedung Bali',
    badge: 'Renovasi',
  },
];

export default function ACPBaliPage() {
  // 2. Schema Markup JSON-LD untuk SEO Lokal
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jasa Pasang ACP Bali - Spesialis Facade',
    image: 'https://domain-anda.com/hero-acp.jpg',
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
    areaServed: ['Denpasar', 'Badung', 'Canggu', 'Kuta', 'Seminyak', 'Ubud', 'Sanur', 'Jimbaran', 'Tabanan', 'Gianyar'],
    priceRange: '$$$',
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
                Aplikator & Kontraktor ACP Bali
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Jasa Pasang ACP & Facade Gedung Profesional di Bali
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Melayani pemasangan Aluminium Composite Panel (ACP PVDF & PE) untuk ruko, hotel, kantor, SPBU, dan villa. Rangka kokoh, hasil rapi, ikatan sealant presisi, dan garansi kebocoran.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/628135979589?text=Halo%20saya%20ingin%20konsultasi%20pemasangan%20ACP%20di%20Bali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-center px-8 py-4 rounded-xl shadow-lg transition-all"
                >
                  Konsultasi / Free Survey WA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN / TRUST BADGES */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <h4 className="text-2xl font-bold text-slate-900">Garansi Warna & Sealant</h4>
              <p className="text-slate-500 text-xs mt-1">Bahan PVDF Tahan Sinar UV Tropis</p>
            </div>
            <div className="p-4">
              <h4 className="text-2xl font-bold text-slate-900">Aplikator Berpengalaman</h4>
              <p className="text-slate-500 text-xs mt-1">Teknisi Rangka & Grooving Rapi</p>
            </div>
            <div className="p-4">
              <h4 className="text-2xl font-bold text-slate-900">Pilihan Merek Resmi</h4>
              <p className="text-slate-500 text-xs mt-1">Seven, Marks, Goodsense, Maco, Alustar</p>
            </div>
            <div className="p-4">
              <h4 className="text-2xl font-bold text-slate-900">Free Survey & RAB</h4>
              <p className="text-slate-500 text-xs mt-1">Perhitungan Matang Bebas Biaya</p>
            </div>
          </div>
        </section>

        {/* SERVICES / PRODUK SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">
              Katalog Layanan ACP
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Layanan Pemasangan ACP & Facade Bali
            </h2>
            <p className="text-slate-600 mt-4 text-base md:text-lg">
              Penggunaan bahan ACP tipe PVDF (Outdoor Exterior) & PE (Indoor Interior) disesuaikan dengan kebutuhan arsitektur Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acpServices.map((item) => (
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
                      Rangka Galvalum / Hollow
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

        {/* BRANDS SECTION */}
        <section className="bg-white py-16 px-6 border-t border-b border-slate-200">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Merek ACP Yang Kami Gunakan</h2>
            <p className="text-slate-500 text-sm mb-8">
              Jaminan material original kualitas grade A tahan cuaca ekstrem dan sinar UV.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-slate-700 font-extrabold text-xl md:text-2xl">
              <span className="tracking-widest">SEVEN</span>
              <span className="tracking-widest">MARKS</span>
              <span className="tracking-widest">GOODSENSE</span>
              <span className="tracking-widest">MACO</span>
              <span className="tracking-widest">ALUSTAR</span>
              <span className="tracking-widest">ALUMEBOND</span>
            </div>
          </div>
        </section>

        {/* AREA COVERAGE SECTION */}
        <section className="bg-slate-100 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Jangkauan Pemasangan ACP di Bali</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Tim kontraktor & aplikator ACP kami siap datang untuk konsultasi dan ukur lokasi ke seluruh wilayah Provinsi Bali.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Denpasar',
                'Badung',
                'Canggu',
                'Kuta',
                'Seminyak',
                'Sanur',
                'Ubud',
                'Jimbaran',
                'Nusa Dua',
                'Tabanan',
                'Gianyar',
                'Singaraja',
              ].map((area) => (
                <span
                  key={area}
                  className="bg-white px-5 py-2.5 rounded-full text-slate-700 text-sm font-medium shadow-sm border border-slate-200"
                >
                  Pasang ACP {area}
                </span>
              ))}
            </div>
          </div>
        </section>
        <ACPArticleSEO />
      </main>
    </>
  );
}