// app/tentang-kami/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Clock, 
  Users, 
  ArrowRight, 
  Award, 
  CheckCircle2,
  Building2
} from 'lucide-react';

const stats = [
  { id: 1, name: 'Proyek Selesai', value: '150+' },
  { id: 2, name: 'Klien Puas', value: '98%' },
  { id: 3, name: 'Tim Profesional', value: '25+' },
  { id: 4, name: 'Tahun Pengalaman', value: '8+' },
];

const coreValues = [
  {
    icon: Compass,
    title: 'Desain Berkarakter',
    description: 'Kami tidak sekadar membuat ruangan indah. Setiap konsep dirancang khusus merefleksikan identitas personal klien dengan sentuhan tropis modern Bali yang ikonis.'
  },
  {
    icon: ShieldCheck,
    title: 'Transparansi Penuh',
    description: 'Dari penyusunan Rencana Anggaran Biaya (RAB), pemilihan spesifikasi material, hingga laporan progres lapangan, semua disajikan terbuka tanpa biaya tersembunyi.'
  },
  {
    icon: Award,
    title: 'Kualitas Craftsmanship',
    description: 'Eksekusi detail pertukangan (joinery), presisi struktur, dan kehalusan finishing dikerjakan oleh tukang ahli di bawah supervisi ketat tim arsitek dan kontraktor.'
  },
  {
    icon: Clock,
    title: 'Ketepatan Waktu',
    description: 'Kami menghargai waktu Anda. Manajemen proyek diatur dengan *timeline* yang ketat dan terstruktur untuk memastikan serah terima kunci tepat pada jadwalnya.'
  }
];

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f3] pt-28 pb-16 min-h-screen relative overflow-hidden">
      
      {/* Background Ambient Glow Layer */}
      <div className="absolute top-[10%] left-[-20%] w-[60vw] h-[60vw] bg-radial-gradient from-[#c9a06306] to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-20%] w-[55vw] h-[55vw] bg-radial-gradient from-[#c9a06305] to-transparent blur-[130px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 relative z-10 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#c9a063]/10 border border-[#c9a063]/20 text-[#c9a063] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-[0.3em] mb-6 animate-fade-in">
            <Building2 className="w-3.5 h-3.5" />
            <span>Tentang PrimaSpace</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight leading-tight">
            Mewujudkan Standar Baru <br />
            <span className="font-serif italic text-[#c9a063]">Estetika & Ruang</span> di Bali
          </h1>
          <div className="h-[1px] w-20 bg-[#c9a063]/30 mx-auto mb-6" />
          <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
            PrimaSpace adalah studio integrasi desain interior, fabrikasi custom kitchen set, dan kontraktor pelaksana yang mendedikasikan keahliannya untuk menciptakan properti premium yang fungsional dan bernilai seni tinggi.
          </p>
        </div>
      </section>

      {/* 2. VISION, MISSION & STORY IMAGE SECTION */}
      <section className="max-w-7xl mx-auto px-6 relative z-10 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Images Collage */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <div className="col-span-8 relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800" 
                alt="PrimaSpace Luxury Interior Concept" 
                fill
                className="object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="col-span-4 relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-2xl mt-16">
              <Image 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=400" 
                alt="PrimaSpace Kitchen Set Process" 
                fill
                className="object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.2em] font-bold text-[#c9a063] uppercase block">Kisah & Komitmen Kami</span>
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
              Sinergi Sempurna Antara Keahlian Lokal dan Standardisasi Internasional
            </h2>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              Didirikan di Bali, PrimaSpace lahir dari visi untuk menjembatani kesenjangan antara keindahan rancangan visual arsitektural dan ketahanan riil bangunan di lapangan. Kami menyadari bahwa properti di Bali menuntut perlakuan khusus, mulai dari adaptasi iklim tropis, kelembapan udara, hingga pemilihan material yang selaras dengan alam.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-md bg-[#c9a063]/10 flex items-center justify-center text-[#c9a063] mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Visi Kami</h4>
                  <p className="text-neutral-400 font-light text-xs mt-1 leading-relaxed">Menjadi partner konstruksi dan desain interior premium nomor satu di Bali yang dikenal melalui presisi detail, kualitas material, dan integritas kerja.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-md bg-[#c9a063]/10 flex items-center justify-center text-[#c9a063] mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Misi Kami</h4>
                  <p className="text-neutral-400 font-light text-xs mt-1 leading-relaxed">Menyediakan layanan satu pintu (*end-to-end*) dari rancangan 3D hingga serah terima fisik bangunan dengan kontrol kualitas berstandar tinggi dan transparansi manajemen.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. STATS COUNTER SECTION */}
      <section className="bg-[#121212] border-y border-white/5 py-16 mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="space-y-2">
                <p className="text-3xl md:text-5xl font-sans font-bold text-[#c9a063] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-neutral-400 font-light tracking-wide">
                  {stat.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-6 relative z-10 mb-28">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.2em] font-bold text-[#c9a063] uppercase block mb-3">Mengapa Memilih Kami</span>
          <h2 className="text-3xl font-light text-white tracking-tight">
            Pilar Utama <span className="font-serif italic text-[#c9a063]">Integritas Kerja</span> PrimaSpace
          </h2>
          <div className="h-[1px] w-12 bg-[#c9a063]/30 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#121212] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-[#c9a063]/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c9a063]/10 border border-[#c9a063]/20 flex items-center justify-center text-[#c9a063] mb-6 group-hover:bg-[#c9a063] group-hover:text-[#0a0a0a] transition-all duration-500">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif text-white mb-3 group-hover:text-[#c9a063] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. BRIEF INVITATION / CTA */}
      <section className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="bg-gradient-to-b from-[#121212] to-[#0d0d0d] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle glow inside card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c9a063]/5 blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
              Siap Memulai Proyek Impian Anda Bersama <span className="font-serif italic text-[#c9a063]">PrimaSpace</span>?
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto font-light text-sm leading-relaxed">
              Diskusikan kebutuhan tata ruang, rencana anggaran (RAB), atau jadwalkan survey lokasi bersama tim arsitek & kontraktor kami gratis.
            </p>
            <div className="pt-4">
              <Link
                href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20sudah%20membaca%20tentang%20kami%20dan%20ingin%20berkonsultasi%20proyek"
                target="_blank"
                className="inline-flex items-center gap-3 bg-[#c9a063] hover:bg-[#b08e58] text-[#0a0a0a] font-bold px-8 py-4 rounded-xl text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#c9a063]/5 group"
              >
                <span>Mulai Konsultasi Gratis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}