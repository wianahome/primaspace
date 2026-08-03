import React from 'react';

interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  accentColor: 'cyan' | 'fuchsia' | 'pink';
}

const featuresData: FeatureItem[] = [
  {
    id: 'tahan-cuaca',
    icon: '🌊',
    title: 'Tahan Garam & Cuaca Pesisir',
    subtitle: 'Material Kelas Premium Khusus Iklim Bali',
    badge: 'Formula Anti-Korosi',
    accentColor: 'cyan',
    description:
      'Menggunakan rangka aluminium anodized, stainless steel 304, serta acrylic berkualitas tinggi yang teruji tahan karat dari uap air garam pantai dan panas terik matahari Bali.',
  },
  {
    id: 'garansi-led',
    icon: '💡',
    title: 'Garansi LED & Komponen 1 Tahun',
    subtitle: 'Pencahayaan Terang, Stabil & Hemat Daya',
    badge: 'Garansi Resmi',
    accentColor: 'fuchsia',
    description:
      'Dilengkapi dengan modul LED Samsung / Epistar waterproof (IP67) dan power supply terproteksi dari lonjakan arus pendek. Garansi penggantian sparepart langsung jika redup/mati.',
  },
  {
    id: 'pemasangan-rapi',
    icon: '📐',
    title: 'Pemasangan Presisi & Rapi',
    subtitle: 'Tim Teknisi Berpengalaman Lapangan',
    badge: 'Safety First',
    accentColor: 'pink',
    description:
      'Proses instalasi menggunakan bracket kokoh, perapihan jalur kabel tersembunyi (hidden wiring), serta pengujian struktur tahan angin kencang untuk keamanan area tempat usaha.',
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="py-24 bg-slate-950 text-white relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Kualitas Tanpa Kompromi untuk <br />
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Investasi Jangka Panjang Bisnis Anda
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bukan sekadar menyala, produk kami dirancang agar tetap awet, aman, dan estetik meskipun terpapar cuaca ekstrem tropis Bali.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature) => {
            const isCyan = feature.accentColor === 'cyan';
            const isFuchsia = feature.accentColor === 'fuchsia';

            const borderHoverClass = isCyan
              ? 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'
              : isFuchsia
              ? 'hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]'
              : 'hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]';

            const badgeBg = isCyan
              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
              : isFuchsia
              ? 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30'
              : 'bg-pink-500/10 text-pink-300 border-pink-500/30';

            const iconBg = isCyan
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
              : isFuchsia
              ? 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20'
              : 'bg-pink-500/10 text-pink-400 border-pink-500/20';

            return (
              <div
                key={feature.id}
                className={`relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between transition-all duration-500 group backdrop-blur-md ${borderHoverClass}`}
              >
                <div>
                  {/* Top Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border ${iconBg}`}>
                      {feature.icon}
                    </div>
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${badgeBg}`}>
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 mb-4">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium text-slate-300">
                    <span className="text-cyan-400">✓</span> Sertifikat Standar Usaha
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 text-slate-500 group-hover:text-cyan-400">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Info */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Ingin Diskusi Material & Ketahanan Signage?</h4>
            <p className="text-xs sm:text-sm text-slate-400">Tim teknis kami siap melakukan survei lokasi dan memberikan saran spesifikasi terbaik.</p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20mau%20konsultasi%20mengenai%20garansi%20dan%20material%20tahan%20cuaca"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold hover:bg-cyan-500/20 transition-all duration-300"
          >
            Konsultasi Teknis Gratis
          </a>
        </div>
      </div>
    </section>
  );
}