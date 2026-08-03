import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  icon: string;
  highlights: string[];
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Konsultasi & Survei Lokasi',
    tagline: 'Diskusi Kebutuhan & Ukur Area Bali',
    description:
      'Kami mendengarkan konsep Anda dan melakukan survei langsung ke lokasi (Denpasar, Badung, Canggu, Ubud, dll.) untuk mengukur area pemasangan serta cek kondisi kelistrikan.',
    duration: 'Hari ke-1',
    icon: '📐',
    highlights: ['Free Survei Lokasi', 'Konsultasi Budgeting', 'Cek Medan Kelistrikan'],
  },
  {
    number: '02',
    title: 'Desain 3D & Penawaran',
    tagline: 'Visualisasi Sebelum Diproduksi',
    description:
      'Tim desainer kami membuatkan simulasi desain 3D atau *mockup* signage langsung di foto lokasi Anda, lengkap dengan surat penawaran harga (RAB) transparan.',
    duration: 'Hari ke-2',
    icon: '🎨',
    highlights: ['Mockup Realistis 3D', 'Revisi Desain Gratis', 'RAB Transparan'],
  },
  {
    number: '03',
    title: 'Produksi & Finishing',
    tagline: 'Pemotongan Presisi Mesin Laser',
    description:
      'Pengerjaan dilakukan di workshop kami menggunakan mesin Laser CNC, material tahan karat, serta perakitan modul LED Samsung waterproof yang sudah diuji QC ketat.',
    duration: 'Hari 3 - 6',
    icon: '⚡',
    highlights: ['Pemotongan Laser Presisi', 'LED Samsung Waterproof', 'Quality Control 24 Jam'],
  },
  {
    number: '04',
    title: 'Pemasangan & Garansi',
    tagline: 'Instalasi Rapi & Bergaransi',
    description:
      'Tim teknisi berpengalaman melakukan instalasi rapi dengan kabel tersembunyi (*hidden wiring*), pengujian ketahanan angin kencang, serta penyerahan kartu garansi resmi 1 tahun.',
    duration: 'Hari ke-7',
    icon: '🛠️',
    highlights: ['Hidden Wiring System', 'Bracket Anti-Angin', 'Kartu Garansi 1 Tahun'],
  },
];

export default function Process() {
  return (
    <section id="alur-kerja" className="py-24 bg-slate-950 text-white relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-fuchsia-400 uppercase tracking-widest px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
            Proses Kerja Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            4 Langkah Mudah <br />
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Mewujudkan Signage Impian Anda
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tanpa ribet, tepat waktu, dan pengerjaan profesional terstruktur dari awal hingga siap menyala di tempat usaha Anda.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 group"
            >
              <div>
                {/* Step Header: Number & Duration Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-extrabold bg-gradient-to-br from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-950 text-cyan-300 border border-slate-800">
                    ⏱️ {step.duration}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-fuchsia-400 mt-0.5 mb-4">{step.tagline}</p>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Checklist Highlights */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                {step.highlights.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Connecting Line Indicator for Desktop (Except last card) */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-700 text-xl font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center pt-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-transparent border border-cyan-500/20">
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white">Siap Mulai Langkah Pertama?</p>
              <p className="text-xs text-slate-400">Jadwalkan survei lokasi tempat usaha Anda di Bali hari ini secara GRATIS.</p>
            </div>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20mau%20jadwal%20survei%20lokasi%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white text-xs sm:text-sm font-semibold hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all duration-300"
            >
              Jadwalkan Survei Gratis →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}