import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white px-4 sm:px-6 lg:px-8 py-20">
      {/* Background Neon Glow Spheres */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* Badge Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Jasa Pembuatan Neon Box & Signage #1 di Bali
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Bikin Bisnismu <br />
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(217,70,239,0.4)]">
              Nyala & Memikat
            </span>{' '}
            di Bali.
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Tingkatkan *branding* kafe, restoran, villa, atau toko Anda dengan Neon Box custom, Akrilik LED, dan Letter 3D premium. Tahan cuaca tropis & bergaransi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20mau%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-semibold text-base shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] hover:scale-[1.02] transition-all duration-300 text-center"
            >
              Konsultasi WhatsApp Free
            </a>

            <a
              href="#portofolio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-base backdrop-blur-md hover:border-slate-500 transition-all duration-300 text-center"
            >
              Lihat Hasil Karya
            </a>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <div>
              <p className="text-2xl font-bold text-cyan-400">500+</p>
              <p className="text-xs text-slate-400">Project Selesai</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-fuchsia-400">100%</p>
              <p className="text-xs text-slate-400">Custom Design</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-pink-400">Garansi</p>
              <p className="text-xs text-slate-400">Lampu & Material</p>
            </div>
          </div>
        </div>

        {/* Visual / Image Card Area */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Card Wrapper with Glow Edge */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-cyan-500/50 via-fuchsia-500/30 to-slate-900 shadow-[0_0_50px_rgba(192,38,211,0.25)]">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
              <Image
                src="/hero-neon-box.jpg" // Ganti dengan path foto produk Anda
                alt="Neon Box Custom Bali"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay Gradient on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50">
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Layanan Utama</p>
                <p className="text-sm font-medium text-white">Neon Box Akrilik • Flexy Backlit • Letter LED 3D</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}