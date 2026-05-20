// app/kontak/page.tsx
'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  ChevronDown, 
  HelpCircle,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

const faqItems = [
  {
    question: 'Apakah ada biaya untuk survey lokasi di Bali?',
    answer: 'Untuk area utama di Bali (Denpasar, Badung, Gianyar, Tabanan), kami memberikan layanan survey lokasi dan konsultasi awal secara gratis tanpa biaya tambahan.'
  },
  {
    question: 'Bagaimana sistem pembayaran pengerjaan proyek?',
    answer: 'Sistem pembayaran kami terbagi menjadi beberapa termin (DP awal, progres struktural, hingga pelunasan setelah serah terima kunci) yang diatur secara transparan di dalam kontrak kerja tertulis.'
  },
  {
    question: 'Berapa lama proses pembuatan visual desain 3D?',
    answer: 'Tergantung pada kompleksitas dan luas area ruang, rata-rata pembuatan konsep desain interior dan visual render 3D membutuhkan waktu 7 hingga 14 hari kerja.'
  },
  {
    question: 'Apakah material yang digunakan bisa disesuaikan dengan budget?',
    answer: 'Ya. Tim kami akan menyusun Rencana Anggaran Biaya (RAB) yang fleksibel dengan memberikan beberapa opsi spesifikasi material premium tanpa mengurangi kekuatan struktur utama.'
  }
];

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Interior Villa',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman data formulir
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectType: 'Interior Villa', message: '' });
    }, 4000);
  };

  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f3] pt-28 pb-16 min-h-screen relative overflow-hidden">
      
      {/* Background Glow Ornaments */}
      <div className="absolute top-[5%] right-[-15%] w-[55vw] h-[55vw] bg-radial-gradient from-[#c9a06306] to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[50vw] h-[50vw] bg-radial-gradient from-[#c9a06305] to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-[#c9a063]/10 border border-[#c9a063]/20 text-[#c9a063] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-[0.3em] mb-5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hubungi PrimaSpace</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-white mb-5 tracking-tight">
            Mari Diskusikan <span className="font-serif italic text-[#c9a063]">Proyek Impian</span> Anda
          </h1>
          <div className="h-[1px] w-16 bg-[#c9a063]/30 mx-auto mb-5" />
          <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
            Punya rencana renovasi, bangun baru, atau pembuatan custom kitchen set di Bali? Tim ahli kami siap mendengarkan visi Anda.
          </p>
        </div>

        {/* 2. GRID HUBUNGI KAMI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-28">
          
          {/* LEFT COLUMN: OFFICE INFO & QUICK CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#c9a063] uppercase block">Informasi Kantor</span>
              <h2 className="text-2xl font-serif text-white leading-tight">
                Studio & Workshop Utama Kami di Bali
              </h2>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                Anda dapat mengunjungi studio kami untuk berkonsultasi langsung, melihat sampel material, katalog kain, serta contoh finishing hardware interior.
              </p>
            </div>

            {/* Contact Detail Cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-[#121212] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#c9a063]/10 border border-[#c9a063]/20 flex items-center justify-center text-[#c9a063] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-1">Alamat Studio</h4>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Jl. Pura Tegal Gading 5A, Kuta Selatan, Kabupaten Badung, Bali 80363
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-[#121212] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#c9a063]/10 border border-[#c9a063]/20 flex items-center justify-center text-[#c9a063] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-1">Kontak Resmi</h4>
                  <p className="text-neutral-400 text-xs font-light mb-0.5">WhatsApp: +62 813-5979-589</p>
                  <p className="text-neutral-400 text-xs font-light">Email: hello@primaspace.com</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-[#121212] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#c9a063]/10 border border-[#c9a063]/20 flex items-center justify-center text-[#c9a063] flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-1">Jam Operasional</h4>
                  <p className="text-neutral-400 text-xs font-light mb-0.5">Senin - Sabtu: 09:00 - 17:00 WITA</p>
                  <p className="text-neutral-500 text-xs font-light">Minggu & Hari Libur: Dengan Perjanjian</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Banner Button */}
            <div className="p-6 bg-gradient-to-br from-[#121212] to-[#0f0f0f] border border-[#c9a063]/20 rounded-2xl shadow-xl text-center relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <p className="text-xs text-neutral-400 font-light">Respons Lebih Cepat via Jalur Chat WhatsApp</p>
                <a
                  href="https://wa.me/628135979589?text=Halo%20PrimaSpace,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20interior/kontraktor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#c9a063] hover:bg-[#b08e58] text-[#0a0a0a] font-bold py-3.5 rounded-xl text-xs tracking-widest uppercase transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Hubungi Via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM CONTAINER */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl relative">
            <span className="text-[10px] tracking-[0.2em] font-bold text-[#c9a063] uppercase block mb-2">Formulir Rencana Kerja</span>
            <h3 className="text-xl font-serif text-white mb-6">Kirimkan Detail Kebutuhan Proyek Anda</h3>
            
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-[#c9a063]/10 text-[#c9a063] rounded-full flex items-center justify-center mx-auto border border-[#c9a063]/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-white font-serif text-lg">Pesan Berhasil Terkirim</h4>
                <p className="text-neutral-400 text-xs max-w-sm mx-auto font-light leading-relaxed">
                  Terima kasih sudah menghubungi PrimaSpace. Tim desainer/kontraktor kami akan mempelajari kebutuhan Anda dan menghubungi Anda kembali dalam kurun waktu 1x24 jam.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Nama Lengkap</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Contoh: Boni Setiawan"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a063] transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Nomor WhatsApp/HP</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Contoh: 08123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a063] transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Alamat Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="Contoh: nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a063] transition-colors font-light"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Jenis Layanan / Kebutuhan</label>
                  <div className="relative">
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a063] transition-colors font-light appearance-none cursor-pointer"
                    >
                      <option value="Interior Villa">Desain & Bangun Interior Villa</option>
                      <option value="Custom Kitchen Set">Custom Kitchen Set / Dapur Premium</option>
                      <option value="Kontraktor Renovasi">Kontraktor & Renovasi Total Bangunan</option>
                      <option value="Komersial Retail">Interior Restoran / Cafe / Retail</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Deskripsi Singkat Rencana Proyek</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Ceritakan gambaran lokasi proyek, perkiraan luas m², estimasi budget, atau tenggat waktu yang Anda harapkan..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a063] transition-colors font-light resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#c9a063] hover:bg-b08e58 text-[#0a0a0a] font-bold py-4 rounded-xl text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#c9a063]/5"
                >
                  <span>Kirim Data Rencana Kerja</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 3. MAPS EMBED SECTION 
        <section className="mb-28 rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative aspect-[21/9] min-h-[300px] bg-neutral-900">
          {/* Ganti src dengan link embed Google Maps resmi PrimaSpace 
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126211.08535123518!2d115.1278142!3d-8.7001469!2m3!1f0!2f0!3f0!3m2!1m10!2f0!3f0!3m2!1m1s0x2dd240974e6284cb%3A0x6e2df4da6dfc79e6!2sSeminyak%2C%20Kuta%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sid!2sid!4v1716240000000!5m2!1sid!2sid" 
            className="w-full h-full border-0 absolute inset-0 grayscale opacity-70 contrast-[1.2] invert-[0.9]"
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
        */}

        {/* 4. FAQ MINI ACCORDION SECTION */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#c9a063] text-[10px] font-bold uppercase tracking-widest mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pertanyaan Umum</span>
            </div>
            <h2 className="text-2xl font-serif text-white">Hal yang Sering Ditanyakan (FAQ)</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left text-white hover:text-[#c9a063] transition-colors"
                >
                  <span className="font-serif text-sm md:text-base pr-4">{item.question}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-300 flex-shrink-0 ${activeFaq === idx ? 'rotate-180 text-[#c9a063]' : ''}`} />
                </button>
                
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFaq === idx ? 'max-h-40 border-t border-white/5' : 'max-h-0'
                  }`}
                >
                  <p className="p-5 md:p-6 text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </main>
  );
}