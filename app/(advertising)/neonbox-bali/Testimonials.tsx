import React from 'react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  businessName: string;
  location: string;
  avatarText: string;
  rating: number;
  content: string;
  productType: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    name: 'Bli Wayan Sudarma',
    role: 'Owner',
    businessName: 'Sanur Coffee Corner',
    location: 'Sanur, Bali',
    avatarText: 'WS',
    rating: 5,
    content:
      'Layanan sangat cepat! Pengerjaan neon box akrilik untuk kedai kopi saya sangat rapi, kabel-kabel tidak kelihatan berantakan. Pas musim hujan dan angin pantai kemarin tetap aman & gak bocor.',
    productType: 'Neon Box Akrilik LED',
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'General Manager',
    businessName: 'Aura Boutique Villa',
    location: 'Canggu, Bali',
    avatarText: 'SJ',
    rating: 5,
    content:
      'We ordered 3D Stainless titanium gold signage for our main entrance in Canggu. The 3D design preview matched the final result 100%. Super professional team and fast installation!',
    productType: 'Letter 3D Stainless Gold',
  },
  {
    id: '3',
    name: 'Gede Agus',
    role: 'Co-Founder',
    businessName: 'Sunset Vibez Beach Bar',
    location: 'Seminyak, Bali',
    avatarText: 'GA',
    rating: 5,
    content:
      'Neon flex estetiknya bikin spot foto di bar makin diminati tamu. Warnanya terang banget pas malam hari. Garansi LED-nya bikin tenang kalau ada trobel. Recommended banget buat usaha di Bali!',
    productType: 'Neon Flex Aesthetic',
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-slate-950 text-white relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Kata Mereka tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Kepercayaan dari Klien di <br />
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Berbagai Sektor Bisnis Bali
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Kepuasan pelanggan adalah prioritas kami. Lihat bagaimana pengalaman pemilik bisnis di Bali menggunakan jasa kami.
          </p>
        </div>

        {/* Overall Rating Summary Card */}
        <div className="max-w-xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-extrabold text-cyan-400">4.9</div>
            <div className="text-left">
              <div className="flex text-amber-400 text-sm">
                ★★★★★
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Berdasarkan 150+ Ulasan Google Maps</p>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block" />
          <div className="text-xs text-slate-300 font-medium bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
            📍 100% Verifikasi Klien Lokal Bali
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between backdrop-blur-md hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 group"
            >
              <div className="space-y-4">
                {/* Rating & Product Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-xs tracking-widest">
                    {'★'.repeat(item.rating)}
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.productType}
                  </span>
                </div>

                {/* Review Content */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Profile */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-500 to-fuchsia-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {item.avatarText}
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {item.role}, <strong className="text-slate-300 font-normal">{item.businessName}</strong>
                  </p>
                  <p className="text-[11px] text-fuchsia-400 mt-0.5">
                    📍 {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="text-center pt-4">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20mau%20minta%20referensi%20portofolio%20lainnya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <span>Ingin lihat ulasan & referensi pekerjaan kami lainnya?</span>
            <span className="text-cyan-400 font-bold">Chat WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
}