// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0c0c] text-[#f5f5f3] border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      {/* Subtle background luxury glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#c9a063]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand Profile */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="text-2xl font-serif font-light tracking-wide text-white">
              PrimaSpace<span className="text-[#c9a063]">.</span>
            </Link>
            <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed max-w-sm">
              Studio integrasi arsitektur, desain interior premium, dan kontraktor pelaksana di Bali. Kami mendedikasikan keahlian untuk menciptakan ruang estetik yang fungsional, presisi, dan bernilai seni tinggi.
            </p>
            {/* Social Media Links 
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-[#c9a063] hover:border-[#c9a063]/20 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-[#c9a063] hover:border-[#c9a063]/20 transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-[#c9a063] hover:border-[#c9a063]/20 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            */}
          </div>

          {/* Column 2: Core Services */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#c9a063] uppercase">
              Layanan Utama
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Desain Interior', href: '/desain-interior-bali' },
                { name: 'Kontraktor Interior', href: '/kontraktor-interior-bali' },
                { name: 'Custom Kitchen Set', href: '/kitchen-set-bali' },
                { name: 'Booth Pameran', href: '/booth-pameran-bali' },
              ].map((service, idx) => (
                <li key={idx}>
                  <Link 
                    href={service.href} 
                    className="text-neutral-400 hover:text-white text-xs md:text-sm font-light transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Contact & Address */}
          <div className="md:col-span-5 space-y-5">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#c9a063] uppercase">
              Kontak & Studio Bali
            </h4>
            
            <div className="space-y-4">
              {/* Address Item */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#c9a063] flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Alamat Kantor</p>
                  <p className="text-neutral-300 text-xs font-light leading-relaxed">
                    Jl. Pura Tegal Gading 5A, Kuta Selatan, Kabupaten Badung, Bali 80363
                  </p>
                </div>
              </div>

              {/* Communication Item */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#c9a063] flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Hubungi Kami</p>
                  <p className="text-neutral-300 text-xs font-light">WhatsApp: +62 813-5979-589</p>
                  <p className="text-neutral-500 text-xs font-light">Email: hello@primaspace.com</p>
                </div>
              </div>

              {/* Working Hours Item */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#c9a063] flex-shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Jam Operasional</p>
                  <p className="text-neutral-300 text-xs font-light">Senin - Sabtu: 09:00 - 17:00 WITA</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-neutral-500 text-[11px] font-light">
            &copy; {currentYear} PrimaSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-neutral-500 text-[11px] font-light">
            <Link href="/tentang-kami" className="hover:text-white transition-colors">Tentang Kami</Link>
            <Link href="/kontak" className="hover:text-white transition-colors">Kontak</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}