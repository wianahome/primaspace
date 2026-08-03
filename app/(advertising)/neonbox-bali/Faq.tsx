'use client';

import React, { useState, useId } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa biaya pembuatan neon box di Bali?',
    answer:
      'Harga neon box bali bervariasi tergantung ukuran, bahan (akrilik, flexy, atau neon flex), dan jumlah sisi. Estimasi biaya mulai dari Rp 1.100.000 / m². Anda bisa menggunakan kalkulator estimasi di website kami atau menghubungi tim kami via WhatsApp untuk mendapatkan harga penawaran khusus.',
  },
  {
    id: 'faq-2',
    question: 'Apakah melayani pembuatan & pemasangan neon box Denpasar dan area luar Badung?',
    answer:
      'Ya! Selain area neon box Denpasar, Canggu, Seminyak, Kuta, Nusa Dua, dan Ubud, layanan pembuatan dan pemasangan neon box kami mencakup seluruh wilayah pulau Bali hingga Tabanan, Gianyar, Sanur, Singaraja, Karangasem, dan Jembrana.',
  },
  {
    id: 'faq-3',
    question: 'Apakah material neonbox tahan terhadap uap air garam & cuaca ekstrem pantai Bali?',
    answer:
      'Sangat tahan. Kami merancang neonbox khusus iklim tropis pesisir Bali dengan bahan rangka aluminium anodized anti-karat, stainless steel 304, serta modul LED Samsung waterproof IP67 yang terlindungi dari panas terik matahari dan uap air garam pantai.',
  },
  {
    id: 'faq-4',
    question: 'Berapa lama proses pengerjaan neon box dari desain hingga terpasang?',
    answer:
      'Proses produksi rata-rata memakan waktu 3–7 hari kerja setelah desain disetujui. Kami juga melayani pengerjaan ekspres untuk kebutuhan pembukaan toko (*grand opening*) kafe, villa, atau resto Anda di Bali.',
  },
  {
    id: 'faq-5',
    question: 'Apakah ada garansi lampu LED dan garansi kebocoran neon box?',
    answer:
      'Seluruh produk neon box bali kami dilengkapi dengan garansi resmi 1 tahun meliputi garansi lampu LED, trafo/adaptor, serta struktur fisik dari kebocoran air hujan. Jika terjadi masalah, teknisi kami di Bali siap melayani *after-sales service*.',
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const componentId = useId();

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-950 text-white relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold text-fuchsia-400 uppercase tracking-widest px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
            Pertanyaan Umum (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Informasi Seputar Layanan <br />
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Neon Box & Signage di Bali
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering diajukan mengenai pengerjaan, material, estimasi biaya, dan garansi layanan neonbox Bali.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openId === faq.id;
            const buttonId = `${componentId}-btn-${index}`;
            const panelId = `${componentId}-panel-${index}`;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                  isOpen
                    ? 'bg-slate-900 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span className={isOpen ? 'text-cyan-300' : 'text-slate-200'}>
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center border text-xs transition-transform duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 rotate-180'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-fade-in"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="text-center pt-4">
          <p className="text-xs sm:text-sm text-slate-400">
            Punya pertanyaan lain mengenai layanan neonbox Denpasar & Bali?{' '}
            <a
              href="https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20mau%20tanya-tanya%20mengenai%20layanan%20neonbox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold underline hover:text-fuchsia-400 transition-colors"
            >
              Tanyakan langsung via WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}