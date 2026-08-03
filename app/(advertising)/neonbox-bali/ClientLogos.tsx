import React from 'react';
import Image from 'next/image';

interface ClientLogo {
  name: string;
  location: string;
  logoUrl: string;
}

const clients: ClientLogo[] = [
  { name: 'Tropical Temptation Beach Club', location: 'Uluwatu', logoUrl: '/logos/client-1.svg' },
  { name: 'Canggu Nook Cafe', location: 'Canggu', logoUrl: '/logos/client-2.svg' },
  { name: 'Swell & Surf Boutique', location: 'Seminyak', logoUrl: '/logos/client-3.svg' },
  { name: 'Ubud Sanctuary Villa', location: 'Ubud', logoUrl: '/logos/client-4.svg' },
  { name: 'Sunset Bar & Grill', location: 'Kuta', logoUrl: '/logos/client-5.svg' },
  { name: 'Sanur Bakery House', location: 'Sanur', logoUrl: '/logos/client-6.svg' },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-slate-950 border-y border-slate-800/60 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-fuchsia-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Dipercaya oleh <span className="text-cyan-400 font-bold">500+</span> Bisnis, Kafe, Villa & Beach Club di Bali
        </p>

        {/* Ticker Container / Marquee */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex w-max animate-marquee space-x-12 sm:space-x-16 items-center">
            {/* Duplikasi array 2x agar animasi loop terasa tidak terputus (seamless) */}
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex flex-col items-center justify-center group opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="relative w-32 h-12 sm:w-40 sm:h-14 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center">
                  {/* Jika logo dalam format Image/SVG */}
                  <Image
                    src={client.logoUrl}
                    alt={`Neon box untuk ${client.name} ${client.location}`}
                    fill
                    className="object-contain"
                  />
                  
                  {/* Fallback Text jika gambar belum diupload */}
                  {/* 
                  <span className="text-slate-300 font-extrabold text-lg tracking-wider group-hover:text-cyan-300">
                    {client.name.toUpperCase()}
                  </span> 
                  */}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 font-medium group-hover:text-fuchsia-400 transition-colors">
                  📍 {client.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}