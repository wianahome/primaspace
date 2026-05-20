"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Variants } from "framer-motion"; // 1. Pastikan Anda mengimpor Variants

export default function HeroInterior() {
  // Varian animasi untuk transisi yang elegan
  const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Sekarang TypeScript tahu ini adalah cubic-bezier array
    } 
  },
};

const scaleUp: Variants = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#f5f5f3] flex items-center justify-center py-20 px-4 md:px-8">
      {/* Background Ambient Glow Artistik */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#c9a063]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#4a554a]/10 blur-[120px] pointer-events-none" />

      {/* Grid Pattern Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* KIRI: Konten Teks & CTA */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb / Tagline */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a063] font-medium bg-[#c9a063]/10 px-3 py-1.5 rounded-full border border-[#c9a063]/20">
              PrimaSpace Bali
            </span>
            <div className="h-[1px] w-8 bg-[#c9a063]/40" />
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Desain Interior Premium
            </span>
          </motion.div>

          {/* Heading dengan Tipografi Kontras & Elegan */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl sm:text-5xl xl:text-6xl font-light tracking-tight leading-[1.1] text-white font-sans mb-6"
          >
            Solusi Desain Interior <br />
            <span className="font-serif italic text-[#c9a063] font-normal">Premium Bali</span> untuk Villa, Rumah & Retail
          </motion.h1>

          {/* Deskripsi */}
          <motion.p 
            variants={fadeInUp} 
            className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10"
          >
            Mewujudkan atmosfer tropis modern yang elegan, fungsional, dan bernilai seni tinggi. Kami memadukan estetika lokal Bali dengan material ramah lingkungan dan tata letak yang mendukung gaya hidup kontemporer Anda.
          </motion.p>

          {/* Tombol Aksi (CTA) */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link 
              href="https://wa.me/628135979589?text=Halo%20Prima%20Space,%20Saya%20Mau%20Konsultasi%20tentang%20..." 
              target="_blank"
              className="group relative flex items-center justify-center gap-3 bg-[#c9a063] hover:bg-[#b08951] text-neutral-900 font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#c9a063]/10"
            >
              <MessageCircle size={18} className="fill-current" />
              <span>Konsultasi WhatsApp</span>
              <ArrowUpRight size={16} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link 
              href="/" 
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-neutral-800 hover:border-neutral-700 font-medium px-6 py-4 rounded-xl transition-all duration-300"
            >
              <ArrowLeft size={16} className="text-neutral-400" />
              <span>Kembali ke Beranda</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* KANAN: Galeri / Visual Showcase (Artistic Card) */}
        <motion.div 
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
          variants={scaleUp}
          initial="hidden"
          animate="visible"
        >
          {/* Main Card Showcase */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden group shadow-2xl border border-neutral-800 bg-[#121212]">
            {/* Background Image / Placeholder dengan Efek Scale saat Hover */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200')] bg-cover bg-center grayscale-[30%] contrast-[110%] group-hover:scale-105 transition-transform duration-700 ease-out" />
            
            {/* Overlay Gradient Elegan */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

            {/* Konten di dalam Card */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c9a063] font-medium mb-2 block">
                Project Gallery
              </span>
              <h3 className="text-2xl font-serif text-white mb-3 tracking-wide">
                Inspirasi Interior Bali
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                Eksplorasi tiga mahakarya desain kami yang menggabungkan esensi tropis arsitektur Bali, pencahayaan alami yang dramatis, serta layout modern yang efisien.
              </p>
              
              <div className="h-[1px] w-full bg-neutral-800 my-4" />
              
              <div className="flex items-center justify-between text-xs text-neutral-400 tracking-wider uppercase">
                <span>Lihat Portofolio</span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#c9a063] group-hover:text-neutral-900 transition-colors duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Aksentuasi Dekoratif Minimalis di Luar Card */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-[#c9a063]/30 hidden sm:block pointer-events-none" />
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-[#c9a063]/30 hidden sm:block pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}