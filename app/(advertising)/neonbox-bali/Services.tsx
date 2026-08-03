import React from 'react';

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  accentColor: 'cyan' | 'fuchsia' | 'pink';
  features: string[];
  popularFor: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'neon-box-akrilik',
    title: 'Neon Box Akrilik',
    tagline: 'Elegan, Kokoh & Pencahayaan Merata',
    badge: 'Paling Populer',
    accentColor: 'cyan',
    description:
      'Solusi signage paling klasik & tahan lama. Menggunakan visual akrilik berkualitas tinggi yang tahan terhadap cuaca panas dan angin pantai Bali.',
    features: [
      'Bahan Akrilik Premium 3mm - 5mm',
      'Lampu LED Module Samsung (Hemat Listrik)',
      'Frame Aluminium / Stainless Anti Karat',
      'Cetak Stiker Vinyl Ritrama / Laser Cut',
    ],
    popularFor: 'Kafe, Minimarket, Minimarket, Clinic & Spa',
  },
  {
    id: 'neon-flex',
    title: 'Neon Flex Aesthetic',
    tagline: 'Kreatif, Artsy & Instagramable',
    badge: 'Tren Masa Kini',
    accentColor: 'fuchsia',
    description:
      'Lampu neon fleksibel yang mudah dibentuk sesuai logo, quote, atau siluet estetik. Sangat cocok untuk dekorasi spot foto interior usaha Anda.',
    features: [
      'Silicone Neon Flex 12V High Brightness',
      'Base Backing Akrilik Bening Laser Cut',
      'Tersedia 10+ Pilihan Warna Glow Vibrant',
      'Termasuk Adaptor / Power Supply Premium',
    ],
    popularFor: 'Interior Kafe, Bar, Beach Club, Barbershop & Boutique',
  },
  {
    id: 'letter-3d',
    title: 'Letter 3D / Huruf Timbul',
    tagline: 'Mewah, Eksklusif & Berkarakter',
    badge: 'Kesan Premium',
    accentColor: 'pink',
    description:
      'Huruf 3D dengan efek lampu menyala dari depan (*Frontlit*) atau berpijar dari belakang (*Backlit/Halo Effect*) untuk kesan bisnis kelas atas.',
    features: [
      'Material Stainless, Titanium Gold, Galvanis, / Akrilik',
      'Efek Lampu Backlit (Halo) / Frontlit',
      'Finishing Cat Oven Powder Coating Anti Korosi',
      'Tahan Cuaca Extreme Outdoor',
    ],
    popularFor: 'Villa, Hotel, Resort, Restaurant Luxury, & Kantor Headquarter',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-slate-950 text-white relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-fuchsia-400 uppercase tracking-widest px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
            Layanan Utama Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Pilihan Produk Signage <br />
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Berkualitas Tinggi & Bergaransi
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Diolah presisi menggunakan mesin laser modern dan material pilihan yang teruji awet di iklim tropis Bali.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            // Styling dinamis berdasarkan warna aksen
            const isCyan = service.accentColor === 'cyan';
            const isFuchsia = service.accentColor === 'fuchsia';

            const borderHoverClass = isCyan
              ? 'hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]'
              : isFuchsia
              ? 'hover:border-fuchsia-500/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)]'
              : 'hover:border-pink-500/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]';

            const badgeBg = isCyan
              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
              : isFuchsia
              ? 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30'
              : 'bg-pink-500/10 text-pink-300 border-pink-500/30';

            const checkColor = isCyan ? 'text-cyan-400' : isFuchsia ? 'text-fuchsia-400' : 'text-pink-400';

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between transition-all duration-500 group ${borderHoverClass} backdrop-blur-md`}
              >
                <div>
                  {/* Badge & Title Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeBg}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 mb-4">{service.tagline}</p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 border-b border-slate-800 pb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Keunggulan Material:</p>
                    <ul className="space-y-2.5 text-sm text-slate-300">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className={`font-bold ${checkColor}`}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Popular For Section */}
                  <div className="bg-slate-950/60 rounded-xl p-3.5 mb-6 border border-slate-800/80">
                    <p className="text-xs text-slate-400 font-medium">
                      💡 <strong className="text-slate-200">Rekomendasi:</strong> {service.popularFor}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20tertarik%20tanya%20harga%20layanan%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-fuchsia-600 hover:border-transparent text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  >
                    <span>Pesan {service.title}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}