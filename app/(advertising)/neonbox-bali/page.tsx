import React from 'react';
import Hero from './Hero';
import Portfolio from './Portofolio';
import Services from './Services';
import ClientLogos from './ClientLogos';
import PriceCalculator from './PriceCalculator';
import Features from './Features';
import Process from './Process';
import Testimonials from './Testimonials';
import Faq from './Faq';
import FinalCta from './FinalCta';
import ServiceArea from './ServiceArea';


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. Header / Navbar Sederhana */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              NEONBOX<span className="text-white">BALI</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#layanan" className="hover:text-cyan-400 transition-colors">Layanan</a>
            <a href="#portofolio" className="hover:text-cyan-400 transition-colors">Portofolio</a>
            <a href="#keunggulan" className="hover:text-cyan-400 transition-colors">Keunggulan</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </nav>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Neon%20Box%20Bali,%20saya%20mau%20tanya%20harga"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 transition-all"
          >
            Hubungi Kami
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <div className="pt-16">
        <Hero />
        <Portfolio />
        <Services />
        <ClientLogos />
        <PriceCalculator />
        <Features />
        <Process />
        <ServiceArea />
        <Testimonials />
        <Faq />
        <FinalCta />
      </div>

      {/* 3. Section Fitur / Layanan Singkat */}
      <section id="layanan" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Layanan Unggulan</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Solusi media promosi visual berkualitas tinggi untuk mempercantik tempat usaha Anda di Bali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xl mb-4">
              01
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Neon Box Akrilik</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tampilan sangat rapi, elegan, dan pencahayaan LED merata. Cocok untuk indoor maupun outdoor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-fuchsia-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center font-bold text-xl mb-4">
              02
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Letter Sign 3D / Timbul</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Huruf timbul berbahan stainless, galvanis, atau akrilik menyala untuk kesan profesional dan eksklusif.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold text-xl mb-4">
              03
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Neon Flex Aesthetic</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Desain tulisan atau logo artistik dengan LED Neon Flex. Sangat populer untuk interior kafe & spot foto instagramable.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Neon Box Bali. All rights reserved.</p>
      </footer>
      <Hero />
    </main>
  );
}