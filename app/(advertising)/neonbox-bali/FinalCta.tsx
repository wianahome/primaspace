import React from 'react';

export default function FinalCta() {
  return (
    <section className="py-20 bg-slate-950 text-white relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Neon Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] sm:w-[800px] sm:h-[400px] bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-pink-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950 border border-slate-800/80 shadow-[0_0_50px_rgba(6,182,212,0.15)] text-center space-y-8 backdrop-blur-xl overflow-hidden">
          
          {/* Subtle Accent Glow Inside Card */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Promo / Incentive Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <span className="animate-pulse text-base">🎁</span>
            <span>Promo Bulan Ini: Free Survei Lokasi & Desain 3D di Bali</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Siap Bikin Usahamu <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(217,70,239,0.4)]">
                Makin Nyala & Ramai Pengunjung?
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Konsultasikan konsep neon box, huruf timbul, atau neon flex impian Anda bersama tim spesialis kami. Respons cepat, ramah, & bebas biaya konsultasi.
            </p>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-md mx-auto">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20mau%20konsultasi%20pembuatan%20signage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-bold text-base shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(217,70,239,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Hubungi via WhatsApp</span>
              <span className="text-lg">→</span>
            </a>

            <a
              href="#kalkulator"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-base backdrop-blur-md hover:border-slate-500 transition-all duration-300 text-center"
            >
              Hitung Estimasi Biaya
            </a>
          </div>

          {/* Trust Guarantees Footer */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Layanan Seluruh Bali</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-fuchsia-400 font-bold">✓</span>
              <span>Garansi Resmi 1 Tahun</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-pink-400 font-bold">✓</span>
              <span>Pengerjaan Tepat Waktu</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}